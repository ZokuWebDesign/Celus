import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { LEGAL_LINKS } from "@/constants/links";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'https://api.sydapp.com.br';
      const res = await fetch(`${API_URL}/api/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Falha no envio');
      
      toast.success('Mensagem enviada com sucesso!');
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Erro ao enviar mensagem. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="w-full">
      <div className="w-full max-w-7xl mx-auto py-16 lg:py-28 px-4 lg:px-14">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src="https://i.imgur.com/mXBdYI8.jpeg"
              alt="Escritório"
              className="rounded-2xl shadow-2xl w-full h-[343px] lg:h-[600px] object-cover"
            />
          </div>

          {/* Form Section */}
          <div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2>
                  Fale conosco
                </h2>
                <p>
                  Estamos aqui para te ajudar com o que for preciso.<br/>Se você tem dúvidas, quer entender melhor como funciona ou deseja levar o SYD para sua empresa, é só chamar. Nosso time está pronto para te atender com atenção e cuidado.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nome
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Digite o seu nome"
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Digite o seu e-mail"
                      className="h-12"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Digite sua mensagem"
                      className="min-h-[120px] resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                  </Button>

                  <p className="text-sm text-gray-500">
                  Ao enviar este formulário, você concorda com nossos <a href={LEGAL_LINKS.TERMS_OF_USE} target="_blank" rel="noopener noreferrer" className="hover:text-secondary hover:underline">Termos de Uso</a> e <a href={LEGAL_LINKS.PRIVACY_POLICY} target="_blank" rel="noopener noreferrer" className="hover:text-secondary hover:underline">Política de Privacidade</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Forms;
