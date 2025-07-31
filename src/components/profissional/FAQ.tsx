import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { WHATSAPP_LINKS } from "@/constants/links";

const formatAnswer = (text: string) => {
  return text.split('\n').map((line, i) => (
    <span key={i}>
      {line}
      {i < text.split('\n').length - 1 && <br />}
    </span>
  ));
};

const faqs = [
  {
    question: "Preciso ter CRP ativo para me cadastrar?",
    answer: "Sim. Todos os psicólogos da plataforma precisam ter registro profissional ativo e regular no Conselho Regional de Psicologia. É parte do nosso compromisso com a ética e a qualidade dos atendimentos."
  },
  {
    question: "Como funcionam os repasses financeiros?",
    answer: "Os valores acumulados por atendimentos são repassados diretamente para sua conta bancária vinculada, conforme a frequência informada no contrato. Você pode acompanhar tudo pelo painel de controle."
  },
  {
    question: "Como funciona a remuneração pelos atendimentos?",
    answer: "Nossa plataforma foi pensada para que o psicólogo tenha uma remuneração justa e possibilidade de crescimento financeiro real. O valor do atendimento é definido com base em fatores como horário, tempo de atendimento, pontuação acumulada e especializações. Quanto mais você se dedica, maior pode ser o seu ganho por minuto, de forma transparente e meritocrática."
  },
  {
    question: "Sou obrigado a manter uma carga mínima de atendimentos?",
    answer: "Não. Você decide quando quer atender, por quanto tempo e com que frequência. Não existe exigência de carga mínima ou compromisso com horários fixos."
  },
  {
    question: "A plataforma oferece suporte técnico e clínico?",
    answer: "Sim. Nossa equipe está disponível para tirar dúvidas, ajudar com o uso da plataforma e oferecer acolhimento e orientação sempre que necessário. Você também pode contar com a comunidade de psicólogos para trocas profissionais."
  },
  {
    question: "Qual o percentual de repasse e em quanto tempo recebo pelos atendimentos?",
    answer: "O repasse é justo, transparente e feito diretamente para sua conta cadastrada. O percentual varia conforme o plano ativo (mensal ou anual) e os critérios da plataforma, mas sempre visando valorizar o trabalho do psicólogo. Os pagamentos são processados em até 7 dias úteis após a finalização de cada atendimento."
  },
  {
    question: "Como funcionam os planos da plataforma para profissionais?",
    answer: "Após o período promocional sem custo até janeiro de 2026, o profissional poderá escolher entre dois modelos:\nPlano mensal: R$39,90/mês\nPlano anual: R$399,00/ano (economia de 2 meses)\nAmbos os planos garantem acesso completo à plataforma, participação na comunidade, uso do prontuário com tags inteligentes, relatórios, suporte e muito mais."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-white">
      <div className="max-w-7xl mx-auto py-16 lg:py-28 px-4 sm:px-6 lg:px-14">
        <div className="max-w-3xl text-center pb-12">
          <h2 className="pb-2 text-left">
            Perguntas Frequentes
          </h2>
          <p className="text-left">
            Separamos as perguntas mais comuns de profissionais interessados na nossa plataforma. Transparência, autonomia e suporte são pilares da nossa relação com você.
          </p>
        </div>

        <Accordion type="single" collapsible className="flex flex-col items-start self-stretch border-b border-[hsl(var(--primary))]">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="flex flex-col w-full"
            >
              <AccordionTrigger className="flex items-center gap-6 py-5 w-full border-t border-[hsl(var(--primary))] hover:no-underline font-[var(--body)]">
                <h4 className="font-semibold text-[hsl(var(--black))] text-left">{faq.question}</h4>
              </AccordionTrigger>
              <AccordionContent className="flex items-start gap-4 pb-6 w-full">
                <p className="">
                  {formatAnswer(faq.answer)}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="max-w-xl text-center pt-12">
          <h3 className="text-[hsl(var(--black))] pb-2 text-left">
            Ainda tem dúvidas?
          </h3>
          <p className="pb-6 text-left">
            Entre contato conosco! Estamos aqui para te ajudar com o que for preciso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="flex w-full lg:w-[14rem] p-0 justify-center items-center rounded-2xl border border-white bg-secondary hover:bg-secondary/90 text-white text-xl font-[var(--body)] h-auto">
              <a
                href={WHATSAPP_LINKS.PROFESSIONAL.FAQ}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-3.5 text-white text-xl font-semibold"
              >
                Entrar em contato
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
