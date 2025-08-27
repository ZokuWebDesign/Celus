"use client";

import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/constants/links";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-primary">Termos de Uso | Celus</h1>

        <div className="space-y-8">
          <section>
            <p className="mb-4 text-quaternary">
              <strong>Versão:</strong> 1.0<br />
              <strong>Data da última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">TRANSFORMANDO A AVALIAÇÃO DE NÓDULOS TIREOIDIANOS</h2>
            <p className="mb-4 text-quaternary">
              O Celus é uma plataforma clínica inteligente para avaliação estruturada de nódulos tireoidianos usando o protocolo ACR TI-RADS. 
              Ao utilizar nossos serviços médicos, você concorda com os termos descritos neste documento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">1. TERMOS GERAIS DE USO</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1.1. Do Objeto</h3>
                <p className="text-quaternary">
                  O presente termo regula o uso da plataforma Celus, um sistema clínico para avaliação estruturada de nódulos tireoidianos que oferece 
                  classificação TI-RADS automatizada, relatórios médicos precisos e orientações para acompanhamento ou biópsia baseadas em protocolos clínicos estabelecidos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1.2. Da Elegibilidade</h3>
                <p className="text-quaternary">
                  O uso do Celus é destinado exclusivamente a profissionais de saúde qualificados, médicos radiologistas, endocrinologistas e outros especialistas 
                  maiores de 18 anos com registro profissional ativo (CRM) e experiência em interpretação de ultrassom tireoidiano.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1.3. Do Cadastro e Veracidade</h3>
                <p className="text-quaternary">
                  O usuário se compromete a fornecer informações profissionais completas, atualizadas e verídicas, incluindo credenciais médicas válidas. 
                  O fornecimento de dados falsos poderá resultar em suspensão ou cancelamento da conta, sem 
                  prejuízo das medidas legais cabíveis.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1.4. Da Conta e Responsabilidade Médica</h3>
                <p className="text-quaternary">
                  O usuário é responsável pela segurança de sua conta, incluindo dados de acesso, configurações clínicas 
                  e informações de pacientes processadas na plataforma. O profissional mantém total responsabilidade pelas decisões clínicas tomadas.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1.5. Dos Serviços Oferecidos</h3>
                <p className="text-quaternary">
                  O Celus oferece ferramentas de avaliação médica, incluindo mas não limitado a: classificação TI-RADS automatizada, 
                  análise de composição, ecogenicidade, forma, margem e focos ecogênicos, geração de relatórios clínicos e orientações para acompanhamento.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">1.6. Das Obrigações do Usuário</h3>
                <p className="text-quaternary mb-2">O usuário médico compromete-se a:</p>
                <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
                  <li>Usar a plataforma apenas para fins médicos legítimos</li>
                  <li>Manter a confidencialidade dos dados de pacientes</li>
                  <li>Exercer julgamento clínico independente em todas as decisões</li>
                  <li>Seguir protocolos médicos e diretrizes profissionais</li>
                  <li>Não compartilhar credenciais de acesso com terceiros</li>
                  <li>Reportar bugs ou problemas que possam afetar diagnósticos</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">2. POLÍTICA DE ACESSO E USO CLÍNICO</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">2.1. Modalidades de Acesso</h3>
                <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
                  <li><strong>Acesso Básico:</strong> Avaliações TI-RADS essenciais para consultas</li>
                  <li><strong>Acesso Profissional:</strong> Recursos avançados e relatórios detalhados</li>
                  <li><strong>Acesso Institucional:</strong> Solução completa para hospitais e clínicas</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">2.2. Cancelamento de Acesso</h3>
                <p className="text-quaternary mb-2">O cancelamento pode ser solicitado a qualquer momento:</p>
                <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
                  <li>Acesso mantido até o final do período clínico pago</li>
                  <li>Relatórios médicos exportáveis por até 90 dias após cancelamento</li>
                  <li>Política de reembolso conforme termos médicos específicos</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">2.3. Política de Reembolso Médico</h3>
                <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
                  <li>Primeiros 30 dias: reembolso integral para novos usuários médicos</li>
                  <li>Falhas técnicas que comprometam diagnósticos: reembolso proporcional</li>
                  <li>Cancelamento por violação de ética médica: sem reembolso</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">3. PROTEÇÃO DE DADOS MÉDICOS E PRIVACIDADE</h2>
            <p className="text-quaternary mb-4">Em conformidade com a LGPD (Lei nº 13.709/2018) e regulamentações específicas de dados de saúde.</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">3.1. Dados Médicos Coletados</h3>
                <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
                  <li><strong>Dados profissionais:</strong> CRM, especialidade, instituição médica</li>
                  <li><strong>Dados dos usuários:</strong> nome, e-mail profissional, credenciais</li>
                  <li><strong>Dados clínicos:</strong> avaliações TI-RADS, configurações diagnósticas, logs de uso</li>
                  <li><strong>Dados de pacientes:</strong> informações anonimizadas para análise clínica</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">3.2. Segurança de Dados Médicos</h3>
                <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
                  <li>Criptografia de nível hospitalar end-to-end</li>
                  <li>Backups automáticos em servidores médicos seguros</li>
                  <li>Acesso controlado por credenciais médicas</li>
                  <li>Monitoramento 24/7 específico para dados de saúde</li>
                  <li>Conformidade com padrões internacionais de segurança médica</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">3.3. Direitos do Profissional de Saúde</h3>
                <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
                  <li>Acesso aos dados clínicos armazenados</li>
                  <li>Correção de informações diagnósticas incorretas</li>
                  <li>Exportação de relatórios médicos</li>
                  <li>Exclusão de conta e dados clínicos</li>
                  <li>Controle total sobre dados de pacientes processados</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">4. LIMITAÇÕES E RESPONSABILIDADES MÉDICAS</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">4.1. Disponibilidade da Plataforma Médica</h3>
                <p className="text-quaternary">
                  Garantimos 99.9% de uptime para funcionalidades clínicas críticas, exceto em casos de manutenção programada ou força maior.
                  Interrupções são comunicadas com antecedência mínima de 24h para não comprometer atendimentos médicos.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">4.2. Limitação de Responsabilidade Clínica</h3>
                <p className="text-quaternary">
                  O Celus é uma ferramenta de apoio diagnóstico. O profissional médico mantém total responsabilidade pelas decisões clínicas.
                  A plataforma não substitui o julgamento médico profissional e deve ser usada como suporte complementar na avaliação de nódulos tireoidianos.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">5. ACEITE E VIGÊNCIA</h2>
            <p className="text-quaternary">
              Ao utilizar o Celus, o profissional de saúde declara ter lido, compreendido e aceito integralmente estes 
              termos de uso médico. Este documento permanece em vigor enquanto o usuário mantiver conta ativa 
              na plataforma clínica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">6. CONTATO E SUPORTE MÉDICO</h2>
            <ul className="list-disc list-inside space-y-2 text-quaternary ml-4">
              <li>E-mail: <a href={SOCIAL_LINKS.MAIL} className="font-semibold hover:underline text-primary">contato@celus.com.br</a></li>
              <li>Suporte técnico médico disponível 24/7 na plataforma</li>
              <li>Central de ajuda com documentação clínica completa</li>
              <li>Suporte especializado para protocolos TI-RADS</li>
            </ul>
          </section>

          <section className="border-t pt-8">
            <div className="text-quaternary">
              <p className="font-bold mb-2">Celus Medical Solutions Ltda</p>
              <p>CNPJ: XX.XXX.XXX/0001-XX</p>
              <p>Sede: São Paulo, SP - Brasil</p>
              <p>Versão: 1.0 – Documento vigente a partir de {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </section>
        </div>

        <div className="mt-8">
          <Button
            onClick={() => window.history.back()}
            variant="primary"
            className="w-full sm:w-[224px]"
          >
            Voltar
          </Button>
        </div>
      </main>
    </div>
  );
};

export default TermsOfUse;