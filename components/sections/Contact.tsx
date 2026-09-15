"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  Info,
  Send,
  RotateCcw,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SubmissionStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const isSubmitting = status === "loading";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAgreed) {
      toast.error("Você deve concordar com os termos de uso e política de privacidade.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const webhookUrl =
        process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL ||
        "https://n8n.psiativa.com.br/webhook/celus-contato";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Falha na resposta do servidor (${response.status})`);
      }

      setStatus("success");
      toast.success("Mensagem enviada com sucesso!");
    } catch (error: any) {
      console.error("Error sending message:", error);
      const msg = error?.message || "Erro ao enviar mensagem. Por favor, tente novamente.";
      setErrorMessage(msg);
      setStatus("error");
      toast.error("Erro ao enviar mensagem. Por favor, tente novamente.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsAgreed(false);
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <TooltipProvider delayDuration={200}>
      <section id="contato" className="bg-[#fbfcfd] px-4 lg:px-16 py-12 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 justify-center items-start">
            {/* Form Section */}
            <div className="max-w-[532px]">
              {/* Header */}
              <div className="mb-12 text-center lg:text-start">
                <p className="text-primary font-semibold text-base mb-4">
                  Contato
                </p>
                <h2 className="text-primary font-bold text-3xl lg:text-5xl leading-tight mb-6">
                  Entre em contato
                </h2>
                <p className="text-tertiary font-medium text-lg leading-relaxed">
                  Tem dúvidas sobre os planos? Quer saber mais sobre como o Celus pode ajudar no seu dia a dia clínico? Preencha o formulário abaixo e fale com a nossa equipe.
                </p>
              </div>

              {/* Form or Success State */}
              {status === "success" ? (
                <div className="bg-[#edfcf6] border border-[#a3e9cc] rounded-3xl p-8 sm:p-10 text-center space-y-6 animate-in fade-in-50 zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-[#35b78b]/20 text-primary rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-primary">
                      Mensagem enviada com sucesso!
                    </h3>
                    <p className="text-tertiary text-base leading-relaxed max-w-md mx-auto">
                      Obrigado pelo contato. Recebemos sua mensagem e nossa equipe retornará em breve no e-mail informado.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-8"
                    >
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Enviar outra mensagem
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error Alert */}
                  {status === "error" && (
                    <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 flex items-start gap-3 text-rose-800 animate-in fade-in duration-200">
                      <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm space-y-1">
                        <p className="font-semibold">Erro ao enviar mensagem</p>
                        <p className="text-rose-700">
                          {errorMessage || "Não foi possível conectar ao servidor. Por favor, tente novamente em instantes."}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#344054] font-medium text-sm">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Digite seu nome"
                      className="h-12"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#344054] font-medium text-sm">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Digite seu e-mail"
                      className="h-12"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#344054] font-medium text-sm">
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Digite sua mensagem..."
                      className="min-h-[128px] resize-none"
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  {/* Checkbox with Privacy Tooltip */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      type="checkbox"
                      id="terms"
                      checked={isAgreed}
                      onChange={(e) => setIsAgreed(e.target.checked)}
                      disabled={isSubmitting}
                      required
                    />
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <label htmlFor="terms" className="text-[#344054] text-sm leading-relaxed cursor-pointer">
                        Li e estou de acordo com <a href="/termos" className="underline hover:text-primary">Termo de Uso</a> e <a href="/politica" className="underline hover:text-primary">Política de Privacidade</a>.
                      </label>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            type="button"
                            className="inline-flex items-center text-gray-400 hover:text-primary transition-colors focus:outline-none"
                            aria-label="Informações de privacidade"
                          >
                            <Info className="w-4 h-4" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs text-center">
                          Seus dados estão protegidos pela LGPD e serão utilizados exclusivamente para responder seu contato.
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>

                  {/* Submit Button with Contextual Feedback Tooltip */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="w-full inline-block">
                        <Button 
                          type="submit" 
                          size="lg"
                          className="w-full transition-all duration-200"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin mr-2" />
                              Enviando mensagem...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Enviar mensagem
                            </>
                          )}
                        </Button>
                      </span>
                    </TooltipTrigger>
                    {!isAgreed && !isSubmitting && (
                      <TooltipContent side="top">
                        Concorde com os termos para habilitar o envio
                      </TooltipContent>
                    )}
                  </Tooltip>
                </form>
              )}
            </div>

            {/* Image Section */}
            <div className="max-w-[532px] h-[343px] lg:h-full">
              <div className="relative h-full rounded-[56px] border-2 border-gradient-to-b from-primary to-[#35b78b] shadow-lg overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Celus Contact"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default Contact;
