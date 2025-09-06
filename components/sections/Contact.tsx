"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAgreed) {
      toast.error('Você deve concordar com os termos de uso e política de privacidade.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Mensagem enviada com sucesso!');
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setIsAgreed(false);
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="bg-[#fbfcfd] px-4 lg:px-16 py-12 lg:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Form Section */}
          <div className="max-w-[532px]">
            {/* Header */}
            <div className="mb-12">
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

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="h-12 border-[#d0d5dd] rounded-lg bg-white"
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
                  className="h-12 border-[#d0d5dd] rounded-lg bg-white"
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
                  className="min-h-[128px] resize-none border-[#d0d5dd] rounded-lg bg-white"
                  required
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 text-primary border-[#d0d5dd] rounded focus:ring-primary focus:ring-2"
                  required
                />
                <label htmlFor="terms" className="text-[#344054] text-sm leading-relaxed">
                  Li e estou de acordo com Termo de Uso e Política de Privacidade.
                </label>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </Button>
            </form>
          </div>

          {/* Image Section */}
          <div className="max-w-[532px] h-[745px] lg:h-full">
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
  );
};

export default Contact;
