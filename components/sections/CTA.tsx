"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const apiBase = process.env.NEXT_PUBLIC_API_URL || ""; // e.g. https://your-render-service.com
  const endpoint = apiBase ? `${apiBase.replace(/\/$/, "")}/newsletter` : `/api/newsletter`;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    const trimmed = email.trim();
    if (!/\S+@\S+\.\S+/.test(trimmed)) {
      setMessage({ type: "error", text: "Informe um e-mail válido." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Erro ao enviar");
      setMessage({ type: "success", text: "Confira seu e-mail para confirmar a assinatura." });
      setEmail("");
    } catch (err: any) {
      setMessage({ type: "error", text: err?.message || "Erro desconhecido ao assinar." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="relative bg-black/80 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1559000357-f6b52ddfbe37?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="max-w-[1136px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="flex-1 max-w-[543px] text-center lg:text-start">
            <h2 className="text-white text-[28px] font-bold mb-4 leading-tight">Tenha acesso a conteúdos exclusivos</h2>
            <p className="text-white text-lg leading-relaxed">
              Assine nossa newsletter semanal com protocolos práticos, dicas de laudos e novidades do app.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="flex-1 max-w-[513px] w-full">
            <form onSubmit={onSubmit} className="space-y-4 flex flex-col justify-center relative" noValidate>
              {/* Email Input and Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <div className="relative">
                    <label htmlFor="newsletter-email" className="sr-only">
                      E-mail
                    </label>
                    <Input
                      id="newsletter-email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Coloque seu melhor e-mail"
                      className="w-full h-11 pl-4 pr-4 text-center lg:text-start"
                      required
                      aria-required
                    />
                    {/* Honeypot for bots */}
                    <input type="text" name="hp" value={""} readOnly style={{ display: "none" }} />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="h-11 px-6 bg-primary text-white font-semibold text-sm rounded-[8px] hover:bg-[#0d7456] transition-colors duration-200 whitespace-nowrap disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Aguarde..." : "Assinar agora"}
                </Button>
              </div>

              {/* Terms Text */}
              <p className="text-[#fbfcfd] text-xs leading-relaxed text-center lg:text-start">
                Ao clicar em "Assinar agora", você concorda com nossos{" "}
                <a href="/termos" className="underline hover:text-white transition-colors">
                  Termos e Condições
                </a>
                .
              </p>

              {/* status message */}
              <div aria-live="polite" className="absolute left-0 right-0 min-h-[20px] bottom-[-20%] md:bottom-[-30%] text-center lg:text-start">
                {message ? (
                  <p className={message.type === "success" ? "text-green-400 text-sm" : "text-red-400 text-sm"}>{message.text}</p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
