import { Button } from "@/components/ui/button";
import { LEGAL_LINKS, SOCIAL_LINKS } from "@/constants/links";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>
        
        <div className="space-y-8">
          <section>
            <p className="text-secondary mb-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
            <p className="text-secondary mb-4">
              Bem-vindo à SYD. Ao acessar e usar nossa plataforma, você concorda com estes termos de uso. 
              Por favor, leia-os atentamente antes de utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="text-secondary mb-4">
              Ao acessar ou usar a plataforma SYD, você concorda em ficar vinculado a estes Termos de Uso, 
              nossa Política de Privacidade e todas as leis e regulamentos aplicáveis. Se você não concordar 
              com algum destes termos, está proibido de usar o serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Descrição do Serviço</h2>
            <p className="text-secondary mb-4">
              A SYD é uma plataforma que conecta pacientes a profissionais de saúde mental, facilitando:
            </p>
            <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
              <li>Agendamento de consultas online e presenciais</li>
              <li>Comunicação segura entre pacientes e profissionais</li>
              <li>Gerenciamento de prontuários e documentos médicos</li>
              <li>Pagamentos e faturamento de consultas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Elegibilidade</h2>
            <p className="text-secondary mb-4">
              Para usar nossos serviços, você deve:
            </p>
            <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
              <li>Ter pelo menos 18 anos de idade</li>
              <li>Fornecer informações precisas e completas durante o registro</li>
              <li>Manter suas informações de conta atualizadas</li>
              <li>Ser legalmente capaz de celebrar contratos vinculantes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Contas de Usuário</h2>
            <div className="space-y-4">
              <p className="text-secondary">
                Você é responsável por:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
                <li>Manter a confidencialidade de sua senha</li>
                <li>Todas as atividades que ocorrem em sua conta</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Uso Aceitável</h2>
            <p className="text-secondary mb-4">
              Ao usar nossos serviços, você concorda em não:
            </p>
            <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
              <li>Violar leis ou regulamentos aplicáveis</li>
              <li>Fornecer informações falsas ou enganosas</li>
              <li>Interferir com a segurança ou funcionamento da plataforma</li>
              <li>Assediar, ameaçar ou prejudicar outros usuários</li>
              <li>Usar a plataforma para fins ilegais ou não autorizados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Pagamentos e Reembolsos</h2>
            <div className="space-y-4">
              <p className="text-secondary mb-4">
                Ao agendar consultas através de nossa plataforma:
              </p>
              <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
                <li>Você concorda em pagar pelos serviços conforme as tarifas estabelecidas</li>
                <li>Os pagamentos são processados de forma segura por nossos parceiros de pagamento</li>
                <li>Reembolsos seguem nossa política específica e dependem das circunstâncias</li>
                <li>Cancelamentos devem ser feitos com antecedência mínima conforme política vigente</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Propriedade Intelectual</h2>
            <p className="text-secondary mb-4">
              Todo o conteúdo presente na plataforma SYD, incluindo mas não limitado a textos, gráficos, 
              logos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade 
              da SYD ou de seus licenciadores e está protegido por leis de propriedade intelectual.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Limitação de Responsabilidade</h2>
            <p className="text-secondary mb-4">
              A SYD não se responsabiliza por:
            </p>
            <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
              <li>Danos indiretos, incidentais ou consequenciais</li>
              <li>Interrupções ou erros no serviço</li>
              <li>Condutas de terceiros na plataforma</li>
              <li>Resultados específicos do uso da plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Confidencialidade e Privacidade Médica</h2>
            <p className="text-secondary mb-4">
              Respeitamos rigorosamente a confidencialidade das informações médicas e seguimos todas as 
              regulamentações aplicáveis à privacidade na área da saúde. Para mais detalhes, consulte 
              nossa <a href={LEGAL_LINKS.PRIVACY_POLICY} className="text-primary hover:underline">Política de Privacidade</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Modificações dos Termos</h2>
            <p className="text-secondary mb-4">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas 
              serão notificadas através da plataforma ou por e-mail. O uso continuado do serviço após as 
              alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Rescisão</h2>
            <p className="text-secondary mb-4">
              Podemos encerrar ou suspender seu acesso ao serviço imediatamente, sem aviso prévio ou 
              responsabilidade, por qualquer motivo, incluindo, sem limitação, violação dos Termos de Uso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Lei Aplicável</h2>
            <p className="text-secondary mb-4">
              Estes termos são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa 
              relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais de São Paulo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Contato</h2>
            <p className="text-secondary mb-4">
              Para questões relacionadas a estes termos, entre em contato conosco:
            </p>
            <ul className="list-none space-y-2 text-secondary">
              <li>Email: <a href={SOCIAL_LINKS.MAIL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">suporte@sydapp.com.br</a></li>
              <li>Telefone: <a href={SOCIAL_LINKS.NUMBER} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+55 15 99694-5695</a></li>
              <li>Endereço: Rua Antônio Pérez Hernandez, 500. Parque Campolim - Sorocaba SP.</li>
            </ul>
          </section>
        </div>

        <div className="mt-8">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="w-full sm:w-auto"
          >
            Voltar
          </Button>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse; 