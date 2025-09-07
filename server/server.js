const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 8787;

function isEmail(email) {
  return typeof email === "string" && /\S+@\S+\.\S+/.test(email);
}

// ActiveCampaign configuration via env vars
const AC_BASE = process.env.ACTIVECAMPAIGN_BASE_URL; // e.g. https://youraccount.api-us1.com
const AC_KEY = process.env.ACTIVECAMPAIGN_API_KEY;
const AC_LIST_ID = process.env.ACTIVECAMPAIGN_LIST_ID; // optional

if (!AC_BASE || !AC_KEY) {
  console.warn("Warning: ActiveCampaign credentials not set. /newsletter will return 500 until configured.");
}

app.post("/newsletter", async (req, res) => {
  try {
    const { email, hp } = req.body || {};

    // Honeypot: if filled, treat as bot
    if (hp) return res.status(400).json({ error: "Bad request" });

    if (!isEmail(email)) return res.status(400).json({ error: "Invalid email" });

    if (!AC_BASE || !AC_KEY) {
      return res.status(500).json({ error: "ActiveCampaign not configured" });
    }

    const apiUrl = `${AC_BASE.replace(/\/$/, "")}/api/3`;

    // 1) Search for existing contact by email
    const searchRes = await axios.get(`${apiUrl}/contacts`, {
      headers: { "Api-Token": AC_KEY },
      params: { email },
    });

    const existing = searchRes.data?.contacts?.[0];

    let contactId;
    if (existing) {
      contactId = existing.id;
    } else {
      // 2) Create contact
      const createRes = await axios.post(
        `${apiUrl}/contacts`,
        { contact: { email } },
        { headers: { "Api-Token": AC_KEY } }
      );
      contactId = createRes.data?.contact?.id;
    }

    if (!contactId) return res.status(502).json({ error: "Failed to create/contact contact" });

    // 3) Add to list if list id provided
    if (AC_LIST_ID) {
      try {
        await axios.post(
          `${apiUrl}/contactLists`,
          { contactList: { list: AC_LIST_ID, contact: contactId, status: 1 } },
          { headers: { "Api-Token": AC_KEY } }
        );
      } catch (err) {
        // non-fatal: continue but log
        console.error("Failed to add to list:", err?.response?.data || err.message || err);
      }
    }

    return res.json({ ok: true });
  } catch (err) {
    console.error(err?.response?.data || err.message || err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/health", (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
