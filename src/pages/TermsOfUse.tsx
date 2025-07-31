import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/constants/links";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">TERMO DE ADESÃO | SYD</h1>
        
        <div className="space-y-8">
          <section>
            <p className="mb-4">
              <strong>Versão:</strong> 1.0<br />
              <strong>Data da última atualização:</strong> 10 de junho de 2025
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">PORQUE O CUIDADO COMEÇA COM O COMPROMISSO</h2>
            <p className="mb-4">
              Sabemos que imprevistos acontecem. No Syd, cuidar também é respeitar o tempo; o seu e o do profissional 
              que estará disponível para você. Ao agendar um atendimento, você concorda com os termos abaixo:
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. TERMO DE ADESÃO DO USUÁRIO</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">1.1. Do Objeto</h3>
                <p className="">
                  O presente termo regula o uso do aplicativo Syd, uma plataforma digital de serviços de apoio 
                  psicológico e atendimento terapêutico, com caráter emergencial e/ou programado, respeitando as 
                  normas do Conselho Federal de Psicologia (CFP) e a legislação brasileira vigente.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">1.2. Da Idade Mínima</h3>
                <p className="">
                  O uso do Syd é permitido a maiores de 18 anos ou menores mediante autorização expressa e 
                  supervisionada por seus responsáveis legais.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">1.3. Do Cadastro e Veracidade</h3>
                <p className="">
                  O usuário se compromete a fornecer informações completas, atualizadas e verídicas no momento do cadastro. 
                  O fornecimento de dados falsos poderá resultar em suspensão ou exclusão da conta, sem prejuízo das 
                  medidas legais cabíveis.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">1.4. Da Conta e Responsabilidade</h3>
                <p className="">
                  O usuário é o único responsável pelo uso de sua conta e senha de acesso ao Syd. Recomenda-se a não 
                  divulgação de seus dados de acesso a terceiros.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">1.5. Do Atendimento Psicológico</h3>
                <p className="">
                  O Syd conecta usuários a psicólogos devidamente registrados no CRP, respeitando sigilo profissional, 
                  limites éticos e técnicas psicológicas aprovadas. O Syd não realiza diagnósticos médicos nem 
                  prescrição de medicamentos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">1.6. Das Obrigações do Usuário</h3>
                <p className=" mb-2">O usuário compromete-se a:</p>
                <ul className="list-disc list-inside space-y-2  ml-4">
                  <li>Utilizar o Syd com respeito, ética e boa-fé</li>
                  <li>Não gravar ou divulgar sessões sem consentimento</li>
                  <li>Não utilizar o serviço em situação de risco iminente de vida (caso em que deve procurar 
                      imediatamente serviços de emergência – SAMU 192 ou CVV 188)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. POLÍTICA DE CANCELAMENTO E REEMBOLSO</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">2.1. Cancelamento de Sessões Agendadas</h3>
                <ul className="list-disc list-inside space-y-2  ml-4">
                  <li><strong>Até 12h de antecedência:</strong> reembolso de 100% ou crédito</li>
                  <li><strong>Entre 12h e 4h de antecedência:</strong> 50% de reembolso ou crédito</li>
                  <li><strong>Menos de 4h ou no-show:</strong> sem reembolso ou crédito</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2.2. Situações de Emergência</h3>
                <p className="">
                  Casos como emergências médicas, acidentes ou problemas técnicos serão analisados individualmente 
                  com empatia e atenção.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2.3. Cancelamento por parte do profissional ou do sistema</h3>
                <p className=" mb-2">Reembolso total ou reagendamento sem custos.</p>
                <p className=" mb-2">Reembolsos válidos para:</p>
                <ul className="list-disc list-inside space-y-2  ml-4">
                  <li>Falha técnica comprovada</li>
                  <li>Ausência do profissional</li>
                  <li>Duplicidade de cobrança</li>
                  <li>Atestado médico enviado em até 7 dias corridos</li>
                  <li>Pedido feito no prazo legal conforme art. 49 do CDC</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2.4. Remarcações</h3>
                <p className="">
                  Cada atendimento pode ser remarcado <strong>1 vez</strong>. Após isso, nova remarcação ou ausência 
                  será considerada cancelamento sem direito a reembolso. Reincidência pode gerar bloqueio temporário da conta.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. POLÍTICA DE PRIVACIDADE E PROTEÇÃO DE DADOS</h2>
            <p className=" mb-4">Em conformidade com a LGPD (Lei nº 13.709/2018) e o CFP.</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">3.1. Coleta de Dados</h3>
                <ul className="list-disc list-inside space-y-2  ml-4">
                  <li><strong>Dados cadastrais:</strong> nome, e-mail, data de nascimento, CPF, telefone</li>
                  <li><strong>Dados sensíveis:</strong> informações de saúde mental compartilhadas nas sessões</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3.2. Finalidade da Coleta</h3>
                <ul className="list-disc list-inside space-y-2  ml-4">
                  <li>Agendamento e execução de atendimentos</li>
                  <li>Conexão com psicólogos</li>
                  <li>Cobranças e pagamentos</li>
                  <li>Melhorias na experiência</li>
                  <li>Cumprimento de obrigações legais</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3.3. Compartilhamento de Dados</h3>
                <ul className="list-disc list-inside space-y-2  ml-4">
                  <li>Com psicólogos da plataforma</li>
                  <li>Mediante ordem judicial</li>
                  <li>Com empresas terceirizadas essenciais, sob contrato de confidencialidade</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3.4. Armazenamento e Segurança</h3>
                <ul className="list-disc list-inside space-y-2  ml-4">
                  <li>Dados armazenados com segurança e criptografia</li>
                  <li>Histórico compõe o prontuário psicológico (Resolução CFP nº 011/2018)</li>
                  <li>Dados mantidos pelo prazo legal ou enquanto a conta estiver ativa</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3.5. Direitos do Usuário</h3>
                <p className=" mb-2">O usuário pode:</p>
                <ul className="list-disc list-inside space-y-2  ml-4">
                  <li>Acessar seus dados</li>
                  <li>Corrigir informações</li>
                  <li>Solicitar exclusão (exceto dados exigidos por lei)</li>
                  <li>Revogar consentimentos</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">3.6. Exclusão de Conta e Dados</h3>
                <ul className="list-disc list-inside space-y-2  ml-4">
                  <li>Dados de sessões são arquivados conforme exigência legal</li>
                  <li>Após prazo legal, serão descartados de forma segura</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. ACEITE DO USUÁRIO</h2>
            <p className="">
              Ao clicar em "Li e concordo com os termos acima", o usuário declara estar ciente e de acordo com este 
              documento, autorizando o uso e tratamento de seus dados conforme a LGPD e a ética profissional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. CONTATO E DÚVIDAS</h2>
            <ul className="list-disc list-inside space-y-2  ml-4">
              <li>E-mail: <a href={SOCIAL_LINKS.MAIL} className="font-semibold">suporte@sydapp.com.br</a></li>
              <li>Canal de atendimento disponível no aplicativo</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <div className="">
              <p className="font-bold mb-2">Syd Saúde Mental e Tecnologia Ltda</p>
              <p>CNPJ: 30.984.250/0001-74</p>
              <p>Sede: Sorocaba, SP</p>
              <p>Versão: 1.0 – Documento vigente a partir de 10 de junho de 2025</p>
            </div>
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