import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/constants/links";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="space-y-8">
          <section>
            <p className="text-secondary mb-4">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
            <p className="text-secondary mb-4">
              A SYD está comprometida em proteger sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Informações que Coletamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Informações fornecidas por você</h3>
                <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
                  <li>Nome completo</li>
                  <li>Endereço de e-mail</li>
                  <li>Número de telefone</li>
                  <li>Data de nascimento</li>
                  <li>Informações de pagamento</li>
                  <li>Histórico médico e informações de saúde</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Informações coletadas automaticamente</h3>
                <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
                  <li>Endereço IP</li>
                  <li>Tipo de navegador e dispositivo</li>
                  <li>Dados de uso do aplicativo</li>
                  <li>Cookies e tecnologias similares</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Como Usamos Suas Informações</h2>
            <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Processar suas consultas e agendamentos</li>
              <li>Comunicar-nos com você sobre seu atendimento</li>
              <li>Enviar atualizações e informações importantes</li>
              <li>Personalizar sua experiência</li>
              <li>Garantir a segurança de nossa plataforma</li>
              <li>Cumprir obrigações legais e regulatórias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Compartilhamento de Informações</h2>
            <p className="text-secondary mb-4">
              Compartilhamos suas informações apenas quando necessário e com as seguintes partes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
              <li>Profissionais de saúde envolvidos em seu atendimento</li>
              <li>Prestadores de serviços que nos auxiliam na operação da plataforma</li>
              <li>Autoridades competentes, quando exigido por lei</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Segurança dos Dados</h2>
            <p className="text-secondary mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Controles de acesso rigorosos</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Treinamento regular de funcionários em práticas de privacidade</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Seus Direitos</h2>
            <p className="text-secondary mb-4">
              Você tem direitos sobre seus dados pessoais, incluindo:
            </p>
            <ul className="list-disc list-inside space-y-2 text-secondary ml-4">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incorretos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Restringir ou opor-se ao processamento de seus dados</li>
              <li>Receber seus dados em formato portável</li>
              <li>Retirar seu consentimento a qualquer momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Retenção de Dados</h2>
            <p className="text-secondary mb-4">
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, 
              ou conforme exigido por lei. Quando os dados não forem mais necessários, eles serão excluídos de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Menores de Idade</h2>
            <p className="text-secondary mb-4">
              Nossos serviços não são direcionados a menores de 18 anos. Não coletamos intencionalmente informações pessoais 
              de menores. Se você acredita que coletamos informações de um menor, entre em contato conosco imediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Alterações nesta Política</h2>
            <p className="text-secondary mb-4">
              Podemos atualizar esta política periodicamente. Notificaremos você sobre alterações significativas através 
              de um aviso em nosso site ou por e-mail. O uso continuado de nossos serviços após tais alterações constitui 
              sua aceitação da política atualizada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contato</h2>
            <p className="text-secondary mb-4">
              Se você tiver dúvidas sobre esta política de privacidade ou quiser exercer seus direitos, entre em contato conosco:
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

export default PrivacyPolicy; 