"use client";

import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/constants/links";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-primary">Política de Privacidade</h1>
        
        <div className="space-y-8">
          <section>
            <p className="text-quaternary mb-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
            <p className="text-quaternary mb-4">
              O Celus está comprometido em proteger sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais ao usar nossa plataforma de avaliação inteligente de nódulos tireoidianos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Informações que Coletamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2 text-primary">Informações fornecidas por você</h3>
                <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
                  <li>Nome completo e credenciais médicas</li>
                  <li>Endereço de e-mail profissional</li>
                  <li>Número de telefone</li>
                  <li>Registro profissional (CRM, quando aplicável)</li>
                  <li>Instituição médica ou clínica</li>
                  <li>Dados de avaliação clínica inseridos na plataforma</li>
                  <li>Configurações de preferências diagnósticas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2 text-primary">Informações coletadas automaticamente</h3>
                <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
                  <li>Endereço IP</li>
                  <li>Tipo de navegador e dispositivo</li>
                  <li>Dados de uso da plataforma médica</li>
                  <li>Estatísticas de casos avaliados</li>
                  <li>Cookies e tecnologias similares</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Como Usamos Suas Informações</h2>
            <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
              <li>Fornecer e melhorar nossos serviços de avaliação de nódulos tireoidianos</li>
              <li>Processar avaliações TI-RADS e gerar relatórios médicos</li>
              <li>Comunicar-nos com você sobre atualizações clínicas e suporte técnico</li>
              <li>Enviar notificações importantes sobre protocolos médicos</li>
              <li>Personalizar sua experiência diagnóstica na plataforma</li>
              <li>Garantir a segurança e integridade dos dados médicos</li>
              <li>Manter conformidade com regulamentações de saúde</li>
              <li>Cumprir obrigações legais e regulatórias do setor médico</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Compartilhamento de Informações</h2>
            <p className="text-quaternary mb-4">
              Compartilhamos suas informações apenas quando necessário e com as seguintes partes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
              <li>Parceiros tecnológicos que auxiliam na operação da plataforma médica</li>
              <li>Prestadores de serviços de infraestrutura e segurança em saúde</li>
              <li>Autoridades de saúde competentes, quando exigido por lei</li>
              <li>Instituições médicas parceiras, com seu consentimento explícito</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Segurança dos Dados</h2>
            <p className="text-quaternary mb-4">
              Implementamos medidas de segurança técnicas e organizacionais rigorosas para proteger informações médicas sensíveis, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
              <li>Criptografia de dados médicos em trânsito e em repouso</li>
              <li>Controles de acesso baseados em credenciais profissionais</li>
              <li>Monitoramento contínuo de segurança específico para dados de saúde</li>
              <li>Treinamento regular de funcionários em práticas de privacidade médica</li>
              <li>Conformidade com padrões de segurança em saúde digital</li>
              <li>Backup seguro de dados clínicos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Seus Direitos</h2>
            <p className="text-quaternary mb-4">
              Você tem direitos sobre seus dados pessoais e médicos, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
              <li>Acessar seus dados pessoais e histórico de avaliações</li>
              <li>Corrigir dados incorretos em seu perfil médico</li>
              <li>Solicitar a exclusão de seus dados clínicos</li>
              <li>Restringir ou opor-se ao processamento de seus dados</li>
              <li>Receber seus dados médicos em formato portável</li>
              <li>Retirar seu consentimento a qualquer momento</li>
              <li>Solicitar cópia de relatórios TI-RADS gerados</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Retenção de Dados</h2>
            <p className="text-quaternary mb-4">
              Mantemos suas informações pessoais e dados clínicos apenas pelo tempo necessário para cumprir as finalidades médicas descritas nesta política, 
              ou conforme exigido por regulamentações de saúde. Dados de avaliações clínicas podem ser mantidos por períodos mais longos para fins de pesquisa médica, sempre de forma anonimizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Menores de Idade</h2>
            <p className="text-quaternary mb-4">
              Nossos serviços são direcionados exclusivamente a profissionais de saúde maiores de 18 anos. Não coletamos intencionalmente informações pessoais 
              de menores. Se você acredita que coletamos informações de um menor, entre em contato conosco imediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Alterações nesta Política</h2>
            <p className="text-quaternary mb-4">
              Podemos atualizar esta política periodicamente para refletir mudanças nos protocolos médicos ou melhorias na plataforma Celus. Notificaremos você sobre alterações significativas através 
              de um aviso em nossa plataforma ou por e-mail. O uso continuado de nossos serviços após tais alterações constitui 
              sua aceitação da política atualizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Contato</h2>
            <p className="text-quaternary mb-4">
              Se você tiver dúvidas sobre esta política de privacidade ou quiser exercer seus direitos, entre em contato conosco:
            </p>
            <ul className="list-none space-y-2 text-quaternary">
              <li>Email: <a href={SOCIAL_LINKS.MAIL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">contato@celus.com.br</a></li>
              <li>Telefone: <a href={SOCIAL_LINKS.NUMBER} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+55 (11) 9999-9999</a></li>
              <li>Endereço: São Paulo, SP - Brasil</li>
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

export default PrivacyPolicy; 