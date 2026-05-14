import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImage from "@/assets/reptec-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "REPTEC — Onboarding do Colaborador" },
      {
        name: "description",
        content:
          "Portal de onboarding da REPTEC. Boas-vindas, Código de Conduta e Manual do Colaborador em um só lugar.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

type TabId = "home" | "conduta" | "manual";

const tabs: { id: TabId; label: string }[] = [
  { id: "home", label: "Boas-vindas" },
  { id: "conduta", label: "Código de Conduta" },
  { id: "manual", label: "Manual do Colaborador" },
];

function Index() {
  const [tab, setTab] = useState<TabId>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button onClick={() => setTab("home")} className="flex items-center gap-2.5 text-left">
            <div className="leading-tight">
              <img src={"./src/assets/rhlogusu.png"} alt="Reptec" className="h-13" />
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  tab === t.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden rounded-md p-2 hover:bg-secondary"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border/60 px-4 py-3 flex flex-col gap-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTab(t.id);
                  setMenuOpen(false);
                }}
                className={`rounded-md px-3 py-2 text-left text-sm font-medium ${
                  tab === t.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 md:py-16">
        {tab === "home" && <HomeSection onNavigate={setTab} />}
        {tab === "conduta" && <CondutaSection />}
        {tab === "manual" && <ManualSection />}
      </main>

      <footer className="border-t border-border/60 mt-16">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            <div className="font-semibold text-foreground">REPTEC</div>
            <div>Equipamentos de Segurança e Uniformes</div>
          </div>
          <div className="space-y-1 md:text-right">
            <div>(34) 3291-4000 · reptec.com.br</div>
            <div>ouvidoria@reptec.com.br</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomeSection({ onNavigate }: { onNavigate: (t: TabId) => void }) {
  return (
    <div className="space-y-20">
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Seja bem-vindo à{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-accent)" }}
            >
              Reptec
            </span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            É um prazer tê-lo como colaborador. Desejamos sucesso nesta nova etapa profissional e
            acreditamos que essa parceria trará resultados positivos para todos.
            <br></br>
            <br></br>Contamos com seu empenho, dedicação e comprometimento no desempenho de suas
            atribuições. Da mesma forma, estaremos à disposição para apoiá-lo no que for necessário.
            <br></br>
            <br></br>Você faz parte desta organização. Valorize o trabalho em equipe, participe
            ativamente e contribua com espírito de colaboração e serviço para alcançarmos melhores
            resultados juntos.
            <br></br>
            <br></br> “Faça o seu melhor, na condição que você tem, enquanto você não tem condições
            melhores, para fazer melhor ainda.”
            <br></br>
            <br></br> — Mario Sergio Cortella
          </p>
        </div>
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-3xl"
          style={{ boxShadow: "var(--shadow-elegant)" }}
        >
          <img
            src={heroImage}
            alt="Colaborador REPTEC com EPI"
            width={1536}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 50%, oklch(0.18 0.03 250 / 0.6) 100%)",
            }}
          />
          <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.2em] opacity-80">Desde 2002</div>
            <div className="text-2xl font-semibold mt-1">Proteger a integridade humana.</div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
          <p
            style={{
              background: "var(--gradient-accent)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Mensagem da Diretoria
          </p>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
          Estiimados colaboradores,
          <br></br>O código de Ética da Reptec tem como objetivo regular as relações dos nossos
          colaboradores com os ambientes interno e externo com base em valores como justiça,
          responsabilidade, fidelidade, confiança e principalmente respeito humano e profissional.
          <br></br>
          <br></br>No ambiente interno regula nossa conduta entre os colaboradores, suas lideranças,
          pares e colegas de áreas, bem como todo e qualquer prestador de serviços com os quais nos
          relacionarmos.
          <br></br>
          <br></br>No ambiente externo regula nossas relações com os clientes, entidades, empresas,
          fornecedores, autoridades, a sociedade geral e todos e quaisquer parceiros com os quais
          tenhamos relacionamento.
          <br></br>
          <br></br>Relações e condutas éticas são imprescindíveis para que tenhamos um ambiente de
          trabalho saudável e admirado.
          <br></br>
          <br></br>Este Código visa também preservar o patrimônio, a imagem e a marca REPTEC. Foi
          aprovado no Conselho de Administração e sua prática passa a ser obrigação de todos os
          colaboradores.
        </p>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
          <p
            style={{
              background: "var(--gradient-accent)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            APRESENTAÇÃO
          </p>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
          Fundada em 2002, a Reptec atua em todo o território nacional na fabricação e distribuição
          de EPI’s, uniformes e soluções voltadas à segurança do trabalho. Com estrutura instalada
          em uma área de 10.000 m², a empresa conta com mais de 270 colaboradores diretos e 450
          indiretos, sustentando uma operação voltada à eficiência produtiva, controle de qualidade
          e atendimento especializado.
          <br></br>
          <br></br> A empresa investe continuamente em tecnologia, pesquisa e desenvolvimento para
          ampliar seu portfólio de soluções e atender às diferentes demandas do mercado com
          qualidade, competitividade e confiabilidade. Seus produtos e serviços atendem segmentos
          como agronegócio, sucroalcooleiro, citricultura, silvicultura, siderurgia, mineração e
          construção civil.
          <br></br>
          <br></br>A atuação da Reptec é baseada em compromisso, segurança e relacionamento de longo
          prazo com clientes e parceiros. Esse crescimento é resultado da integração entre processos
          produtivos estruturados, gestão estratégica e equipes comprometidas com a entrega de
          soluções que contribuam para a proteção e o desempenho das operações de seus clientes.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              k: "Missão",
              v: "Proteger a integridade humana.",
            },
            {
              k: "Visão",
              v: "Ser referência nacional em soluções para o mercado de Segurança no Trabalho.",
            },
            {
              k: "Negócio",
              v: "Fornecemos segurança no trabalho.",
            },
            {
              k: "Nossos Valores",
              v: (
                <>
                  Foco no Cliente.<br></br>
                  Agilidade. <br></br>
                  Qualidade.<br></br>
                  Valorização da Vida.<br></br>
                  Responsabilidade Socioambiental.
                </>
              ),
            },
          ].map((c) => (
            <div
              key={c.k}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {c.k}
              </div>
              <p className="mt-3 text-base leading-relaxed">{c.v}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="rounded-3xl p-8 md:p-12 text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="max-w-2xl space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Sua jornada começa agora.
          </h2>
          <p className="opacity-85 leading-relaxed">
            Explore o Código de Conduta e o Manual do Colaborador. Em caso de dúvidas, fale com seu
            gestor imediato ou com o Departamento Pessoal.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onNavigate("conduta")}
              className="rounded-full bg-white/95 text-primary px-5 py-2.5 text-sm font-semibold hover:bg-white transition"
            >
              Código de Conduta
            </button>
            <button
              onClick={() => onNavigate("manual")}
              className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition"
            >
              Manual do Colaborador
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const condutaPilares = [
  {
    title: "Princípios Éticos",
    body: (
      <>
        O nosso jeito de ser confere a impressão que o nosso público tem a nosso respeito. A
        primeira impressão poderá ser decisiva no primeiro passo para a conquista da confiança.
        <br></br>
        <br></br> Para agirmos de acordo com o que propomos, adotamos os seguintes princípios:
        <br></br>
        <br></br>
        <strong>Respeito</strong> - Temos este princípio como base regente de todo relacionamento,
        seja ele pessoal ou profissional. A prática desse reconhecimento dos seus direitos e
        limites, seja esse outro uma pessoa ou uma entidade.
        <br></br>
        <br></br>
        <strong>Isonomia</strong> - Também conhecido como princípio da igualdade que é um direito
        constitucional, será o nosso lema de justiça. Acreditamos que tratar a todos com igualdade,
        segundo sua natureza, pode nos tornar mais humanos e sensíveis ás necessidades de cada um.
        <br></br>
        <br></br>
        <strong>Honestidade</strong>
        Honestidade - Este princípio conduz a sermos transparentes e leais nas relações, a lidar com
        a realidade como ela realmente é, e assumir a nossa realidade perante as ações. Como
        princípio fundamental para a conquista da confiança nas relações, a honestidade nos convida
        a sermos também referência de conduta, tanto ao assumir os erros quanto reconhecer as
        virtudes.
        <br></br>
        <br></br>
        <strong>Humildade</strong> - Nós estamos sempre em construção. Por este princípio devemos
        reconhecer que somos limitados, que isso nos faz dependentes uns dos outros e que estamos no
        mesmo nível de dignidade. Ser humilde não é ser omisso, submisso, ingênuo, solícito,
        empático, respeitoso e humano. Nós como organização precisamos sempre desse princípio para
        que busquemos a qualidade de nossas ações.
        <br></br>
        <br></br>
        <strong>Integridade</strong> - Princípio que este que nos faz íntegros e inteiros. Nossa
        imagem, nossa reputação, nosso patrimônio e nossa marca deverão ser apresentados de forma
        uníssona, preservando sempre nossos valores perante a sociedade. A integridade humana também
        faz parte de nossos princípios, pois nada é mais importante do que a vida.
        <br></br>
        <br></br>
        <strong>Lealdade</strong> - Princípio que nos leva a sermos corretos e sinceros com quem nos
        relacionamentos e com a nossa empresa como pessoa jurídica. Através dele agimos para que o
        outro possa confiar que nunca o trairemos mesmo que a verdade doa e não queiramos
        acompanhá-lo em eventual desvio de conduta ou mesmo em situações equivocadas. A lealdade
        também nos leva ao dever de tomar providencias para escolher e fazer o que for melhor para a
        organização independentemente de interesses próprios.
      </>
    ),
  },
  {
    title: "Colaboradores",
    body: (
      <>
        Acreditamos que ninguém nasce ético. O convívio respeitoso e responsável em nossos ambientes
        de convivência, incluindo o ambiente de trabalho, deve ser alicerçado na conduta de todos os
        profissionais, independentemente da posição hierárquica, na busca de um objetivo
        organizacional comum.
        <br></br>
        <br></br>
        Para isso, precisamos:
        <br></br>
        <br></br>
        <strong>A.</strong> Optar por praticar com responsabilidade e zelo todas as normas e
        políticas internas da organização, visando sempre o bem comum.
        <br></br>
        <br></br>
        <strong>B.</strong> Opinar e participar da construção e estruturação das políticas e normas
        de procedimentos, buscando continuamente o interesse coletivo.
        <br></br>
        <br></br>
        <strong>C.</strong> Tratar assuntos profissionais com postura profissional, evitando
        conflitos de natureza pessoal.
        <br></br>
        <br></br>
        <strong>D.</strong> Tratar uns aos outros com dignidade, respeito e ética em todas as
        relações.
        <br></br>
        <br></br>
        <strong>E.</strong> Não agir ou reagir de forma preconceituosa em relação às circunstâncias,
        orientação sexual, religião, classe social ou deficiência física.
        <br></br>
        <br></br>
        <strong>F.</strong> Não praticar nem permitir assédio moral, sexual, ameaças ou abuso de
        autoridade em qualquer relação profissional.
        <br></br>
        <br></br>
        <strong>G.</strong> Garantir que as atividades sejam executadas por pessoas capacitadas para
        suas funções e respectivos riscos.
        <br></br>
        <br></br>
        <strong>H.</strong> Ser solícito, cooperativo e respeitar os limites e responsabilidades de
        cada função.
        <br></br>
        <br></br>
        <strong>I.</strong> Respeitar hierarquias e não sobrepor interesses pessoais ao interesse
        coletivo da organização.
        <br></br>
        <br></br>
        <strong>J.</strong> Buscar crescimento profissional com base no mérito, desempenho e
        histórico profissional.
        <br></br>
        <br></br>
        <strong>K.</strong> Proteger a confidencialidade das informações comerciais, intelectuais e
        produtivas da organização.
        <br></br>
        <br></br>
        <strong>L.</strong> Zelar pelo cumprimento das leis, convenções e acordos coletivos
        aplicáveis.
        <br></br>
        <br></br>
        <strong>M.</strong> Não colocar em risco a paz, a segurança, a saúde e o bem-estar dos
        colaboradores no ambiente de trabalho.
        <br></br>
        <br></br>
        <strong>N.</strong> Utilizar corretamente os EPIs fornecidos pela organização e
        conscientizar outros colaboradores sobre sua importância.
        <br></br>
        <br></br>
        <strong>O.</strong> Ter consciência de que o consumo excessivo de álcool, drogas ou jogos de
        azar pode comprometer a saúde, o desempenho profissional e o ambiente de trabalho.
        <br></br>
        <br></br>
        <strong>P.</strong> Não consumir bebida alcoólica ou substâncias tóxicas durante o
        expediente, nem exercer atividades sob efeito dessas substâncias.
        <br></br>
        <br></br>
        <strong>Q.</strong> Reconhecer que o uso ou porte de drogas ilícitas, armas e itens
        proibidos pode configurar infração legal.
        <br></br>
        <br></br>
        <strong>R.</strong> Utilizar e conservar corretamente o patrimônio da organização, evitando
        perdas, danos e desperdícios.
        <br></br>
        <br></br>
        <strong>S.</strong> Não expor a organização ou sua marca a situações vexatórias ou que
        comprometam sua imagem e reputação.
        <br></br>
        <br></br>
        <strong>T.</strong> Não realizar manifestações ou campanhas políticas e sindicais nas
        dependências da organização, nem utilizar seus recursos para esses fins.
        <br></br>
        <br></br>
        <strong>U.</strong> Não comercializar mercadorias no ambiente de trabalho nem exercer
        atividades que comprometam a produtividade e o desempenho das atividades profissionais.
      </>
    ),
  },
  {
    title: "Conflitos de Interesses",
    body: (
      <>
        Os interesses da organização são soberanos e devem prevalecer sobre interesses particulares
        de colaboradores ou terceiros, orientando atitudes, comportamentos e decisões em todas as
        relações profissionais.
        <br></br>
        <br></br>
        Para isso, estabelecemos os seguintes princípios:
        <br></br>
        <br></br>
        <strong>A.</strong> Não é permitida a contratação de familiares de colaboradores em linha
        direta ou colateral, como pais, mães, filhos, irmãos, cônjuges, tios, sobrinhos e primos,
        para atuação na mesma hierarquia ou em departamentos correlatos.
        <br></br>
        <br></br>
        <strong>B.</strong> Não é permitido relacionamento afetivo estável entre colaboradores que
        atuem na mesma hierarquia ou em áreas diretamente correlacionadas.
        <br></br>
        <br></br>
        <strong>C.</strong> Nenhum colaborador poderá utilizar informações privilegiadas da
        organização para obtenção de benefícios próprios ou de terceiros.
        <br></br>
        <br></br>
        <strong>D.</strong> Todo colaborador deve preservar o patrimônio da organização, sendo
        proibida sua utilização para interesses particulares.
        <br></br>
        <br></br>
        <strong>E.</strong> É expressamente proibida a retirada ou utilização de materiais da
        organização para fins pessoais sem autorização prévia.
        <br></br>
        <br></br>
        <strong>F.</strong> A organização não permite o exercício de atividades externas que estejam
        ou aparentem estar em conflito com seus interesses institucionais.
        <br></br>
        <br></br>
        <strong>G.</strong> Não é permitido manter negócios particulares ou atividades paralelas que
        prejudiquem o foco, desempenho ou dedicação às atividades profissionais na organização.
        <br></br>
        <br></br>
        <strong>H.</strong> Somente será permitido o recebimento de brindes promocionais de
        fornecedores contendo identificação da marca, como canetas, agendas, chaveiros ou itens
        similares. Brindes ou bonificações com valor superior a R$100,00 deverão ser avaliados e
        autorizados pela gestão responsável.
        <br></br>
        <br></br>
        <strong>I.</strong> O custeio de passagens, hospedagens ou despesas relacionadas a visitas
        técnicas, workshops, congressos, feiras e eventos por fornecedores deverá possuir validação
        prévia da Gerência.
        <br></br>
        <br></br>
        <strong>J.</strong> Não é permitido aceitar favores, vantagens ou benefícios relacionados ao
        fornecimento de materiais ou serviços por fornecedores da organização.
        <br></br>
        <br></br>
        <strong>K.</strong> Não devem ser aceitas gratificações, presentes, dinheiro, empréstimos ou
        qualquer outro tipo de benefício pessoal oferecido por empresas fornecedoras ou parceiras
        comerciais.
      </>
    ),
  },
  {
    title: "Confidencialidade e LGPD",
    body: (
      <>
        Dentro de nossos valores, o capital intelectual é um dos ativos mais importantes da
        organização. Informações em formato físico, eletrônico ou verbal devem receber tratamento
        adequado, garantindo sua proteção, integridade e confidencialidade.
        <br></br>
        <br></br>
        Todas as informações comerciais, técnicas, estratégicas e profissionais relacionadas às
        atividades da organização devem ser tratadas com confidencialidade por colaboradores,
        parceiros, clientes e fornecedores. O uso indevido, a divulgação não autorizada ou o
        vazamento dessas informações podem causar prejuízos operacionais, financeiros e danos à
        imagem e reputação da organização.
        <br></br>
        <br></br>O tratamento de dados pessoais e corporativos seguirá as diretrizes estabelecidas
        pela
        <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.<br></br>
        <br></br>
        São obrigações dos colaboradores:
        <br></br>
        <br></br>
        <strong>A.</strong> Não compartilhar, repassar ou divulgar informações confidenciais, dados
        de clientes, fornecedores estratégicos ou quaisquer informações restritas a pessoas não
        autorizadas, independentemente do meio utilizado, seja físico, eletrônico ou verbal.
        <br></br>
        <br></br>
        <strong>B.</strong> Utilizar dados e informações de clientes, colaboradores e terceiros
        apenas quando houver autorização e finalidade legítima relacionada às atividades
        profissionais.
        <br></br>
        <br></br>
        <strong>C.</strong> Preservar o sigilo das informações de clientes, sendo proibido o
        compartilhamento com terceiros sem autorização da área responsável.
        <br></br>
        <br></br>
        <strong>D.</strong> Não enviar modelos, documentos, processos ou materiais internos da
        organização para terceiros não vinculados ou não autorizados.
        <br></br>
        <br></br>
        <strong>E.</strong> É expressamente proibido permitir o vazamento de informações
        confidenciais, privilegiadas ou estratégicas para benefício próprio ou de terceiros.
        <br></br>
        <br></br>
        <strong>F.</strong> Empresas parceiras deverão manter compromisso formal de
        confidencialidade e segurança das informações, protegendo os dados contra acessos não
        autorizados, uso indevido ou divulgação inadequada.
        <br></br>
        <br></br>
        <strong>G.</strong> A utilização de ferramentas de inteligência artificial, automação ou
        tecnologias digitais emergentes deverá respeitar rigorosamente as diretrizes de segurança da
        informação, confidencialidade e proteção de dados pessoais.
        <br></br>
        <br></br>
        <strong>H.</strong> É proibido inserir, compartilhar ou processar informações confidenciais
        da organização, dados pessoais ou informações estratégicas em plataformas de inteligência
        artificial sem autorização prévia da área responsável.
        <br></br>
        <br></br>
        <strong>I.</strong> Soluções de inteligência artificial somente poderão ser utilizadas
        quando aprovadas ou disponibilizadas oficialmente pela organização, sendo vedado o uso de
        plataformas externas para tratamento de informações corporativas.
        <br></br>
        <br></br>
        <strong>J.</strong> É proibida a utilização de ferramentas de inteligência artificial para
        treinamento de sistemas externos com dados pertencentes à organização.
        <br></br>
        <br></br>
        <strong>K.</strong> O uso de tecnologias baseadas em inteligência artificial deve ocorrer de
        forma ética, responsável e alinhada às políticas internas da organização, sendo proibida sua
        utilização para gerar, manipular ou divulgar informações falsas, enganosas ou que possam
        prejudicar a reputação da empresa, de seus clientes, parceiros ou colaboradores.
      </>
    ),
  },
  {
    title: "Clientes",
    body: (
      <>
        Para nossa organização, o cliente possui valor essencial em todas as relações comerciais. A
        ética, a transparência e a confiança são fundamentos indispensáveis para a construção de
        relacionamentos duradouros e sustentáveis.
        <br></br>
        <br></br>A partir desse princípio:
        <br></br>
        <br></br>
        <strong>A.</strong> Buscar continuamente atender os clientes com qualidade, eficiência e
        comprometimento em produtos e serviços.
        <br></br>
        <br></br>
        <strong>B.</strong> Implementar novos conceitos, tecnologias e inovações que fortaleçam a
        relação entre organização e cliente, agregando valor por meio de soluções adequadas às suas
        necessidades.
        <br></br>
        <br></br>
        <strong>C.</strong> Preservar a reputação da organização por meio da oferta de produtos de
        qualidade e da melhoria contínua de seus processos, serviços e operações.
        <br></br>
        <br></br>
        <strong>D.</strong> Não criar expectativas ou compromissos que a organização não esteja
        preparada para cumprir, mantendo a honestidade como princípio fundamental das relações
        comerciais.
        <br></br>
        <br></br>
        <strong>E.</strong> Garantir aos clientes tratamento respeitoso, cortês, eficiente, ético e
        imparcial em todas as interações.
        <br></br>
        <br></br>
        <strong>F.</strong> Responder e analisar as solicitações, dúvidas e demandas dos clientes
        dentro de prazos compatíveis com suas necessidades e expectativas.
        <br></br>
        <br></br>
        <strong>G.</strong> Reconhecer a importância de todos os clientes, independentemente de sua
        posição de mercado, porte ou relação comercial com colaboradores da organização.
        <br></br>
        <br></br>
        <strong>H.</strong> Não utilizar o nome, imagem ou relacionamento da organização para
        obtenção de benefícios pessoais junto aos clientes.
        <br></br>
        <br></br>
        <strong>I.</strong> Despesas relacionadas a clientes, como refeições, transporte, hospedagem
        ou entretenimento, somente serão permitidas quando justificadas por reuniões de trabalho ou
        práticas legítimas de relacionamento comercial, respeitando critérios de razoabilidade,
        ética e conformidade.
      </>
    ),
  },
  {
    title: "Parceiros e Fornecedores",
    body: (
      <>
        A organização reconhece que o crescimento sustentável depende de relações éticas,
        transparentes e profissionais com seus parceiros e fornecedores. Essas relações devem ser
        conduzidas com respeito, imparcialidade e responsabilidade em todas as etapas de aquisição
        de materiais e serviços.
        <br></br>
        <br></br>
        Reforçamos os seguintes princípios para formalizar nossos compromissos éticos nas relações
        com parceiros e fornecedores:
        <br></br>
        <br></br>
        <strong>A.</strong> A seleção e contratação de parceiros e fornecedores deverão ocorrer com
        base em critérios técnicos, profissionais, comerciais e éticos, por meio de processos
        previamente definidos.
        <br></br>
        <br></br>
        <strong>B.</strong> As práticas de compras devem ser realizadas de forma ética, considerando
        fatores como preço, qualidade, quantidade, prazo de entrega e suporte oferecido.
        <br></br>
        <br></br>
        <strong>C.</strong> Os processos de orçamento e concorrência deverão ser conduzidos de forma
        clara, transparente e justa para todos os participantes.
        <br></br>
        <br></br>
        <strong>D.</strong> Não será permitida a contratação de empresas ou consultorias
        pertencentes a ex-colaboradores desligados há menos de um ano da organização, salvo
        aprovação expressa do Conselho de Administração.
        <br></br>
        <br></br>
        <strong>E.</strong> A contratação de parceiros ou fornecedores com vínculo familiar ou
        relacionamento direto com colaboradores dependerá de análise ética e aprovação prévia da
        Gerência. Em situações relacionadas diretamente às atividades exercidas pelo colaborador
        envolvido, a contratação será vedada.
        <br></br>
        <br></br>
        <strong>F.</strong> Nenhum colaborador poderá participar ou influenciar decisões
        relacionadas à seleção de parceiros ou fornecedores quando possuir interesses financeiros,
        investimentos ou vínculos que caracterizem conflito de interesses.
        <br></br>
        <br></br>
        <strong>G.</strong> A organização respeita rigorosamente a legislação vigente e somente
        contratará parceiros e fornecedores que estejam em conformidade com as normas legais,
        trabalhistas, ambientais e regulatórias aplicáveis.
        <br></br>
        <br></br>
        <strong>H.</strong> Não serão contratadas empresas que utilizem trabalho infantil, trabalho
        análogo à escravidão ou que violem direitos humanos e garantias legais fundamentais.
        <br></br>
        <br></br>
        <strong>I.</strong> Todos os fornecedores deverão comprometer-se com o cumprimento ético dos
        contratos e com a confidencialidade das informações compartilhadas durante a relação
        comercial.
        <br></br>
        <br></br>
        <strong>J.</strong> Nenhum parceiro ou fornecedor está autorizado a prestar informações à
        imprensa sobre projetos, atividades ou operações relacionadas à organização sem autorização
        formal e contratual.
        <br></br>
        <br></br>
        <strong>K.</strong> Não será permitido fornecer informações ou atuar como fonte de
        conteúdos, declarações ou matérias relacionadas à organização sem autorização da área
        responsável.
        <br></br>
        <br></br>
        <strong>L.</strong> Não é permitido utilizar cláusulas contratuais, termos ambíguos ou
        interpretações inadequadas para obtenção de vantagens indevidas em negociações comerciais.
        <br></br>
        <br></br>
        <strong>M.</strong> Nenhum colaborador poderá solicitar, utilizar ou compartilhar
        informações confidenciais pertencentes a outras empresas ou organizações.
      </>
    ),
  },
  {
    title: "Parceiros de Produção",
    body: (
      <>
        Nossos parceiros de produção fazem parte da cadeia de valor da organização. Suas atitudes,
        responsabilidades e padrões operacionais impactam diretamente a qualidade dos produtos e
        serviços entregues aos nossos clientes.
        <br></br>
        <br></br>
        Para mantermos relações produtivas, éticas e alinhadas aos padrões da organização, esperamos
        que nossos parceiros:
        <br></br>
        <br></br>
        <strong>A.</strong> Estejam cientes de que atuam em parceria com uma organização baseada em
        princípios éticos, profissionais e em conformidade com este documento e com as políticas
        internas da organização.
        <br></br>
        <br></br>
        <strong>B.</strong> Mantenham alinhamento com as estratégias, diretrizes e ritmo de
        crescimento planejado pela organização.
        <br></br>
        <br></br>
        <strong>C.</strong> Atuem com ética, transparência e responsabilidade nos processos de
        conferência de produtos, tanto no recebimento quanto na expedição.
        <br></br>
        <br></br>
        <strong>D.</strong> Cumpram os prazos de entrega previamente negociados, respeitando sua
        capacidade produtiva e os padrões de qualidade acordados.
        <br></br>
        <br></br>
        <strong>E.</strong> Não aceitem contratações, pagamentos, bonificações ou qualquer tipo de
        vantagem não formalizada ou não autorizada pela organização.
        <br></br>
        <br></br>
        <strong>F.</strong> Não utilizem mão de obra infantil, análoga à escravidão ou qualquer
        prática que viole direitos humanos, trabalhistas ou legais.
        <br></br>
        <br></br>
        <strong>G.</strong> Não utilizem ativos, equipamentos, estruturas ou patrimônios da
        organização para benefício próprio, produção para terceiros ou atividades concorrentes.
        <br></br>
        <br></br>
        <strong>H.</strong> Preservem o sigilo das informações, processos, dados estratégicos e
        segredos industriais da organização, adotando medidas adequadas para proteção contra acessos
        ou usos não autorizados.
      </>
    ),
  },
  {
    title: "Comunidade",
    body: (
      <>
        Todas as atividades da organização devem ser conduzidas com responsabilidade, respeito e
        compromisso com as comunidades onde atuamos, fortalecendo as dimensões econômica, social e
        ambiental por meio de práticas éticas e responsáveis no desenvolvimento de produtos e
        serviços voltados à segurança do trabalho.
        <br></br>
        <br></br>
        Para isso, é necessário:
        <br></br>
        <br></br>
        <strong>A.</strong> Considerar, durante os processos de planejamento e tomada de decisão, os
        possíveis impactos ambientais, sociais e urbanos das atividades da organização, bem como a
        preservação do patrimônio histórico e cultural das comunidades.
        <br></br>
        <br></br>
        <strong>B.</strong> Contribuir para o desenvolvimento sustentável das comunidades onde a
        organização atua, incentivando a preservação de valores sociais, culturais e educacionais.
        <br></br>
        <br></br>
        <strong>C.</strong> Incentivar práticas de responsabilidade social junto a clientes,
        colaboradores, parceiros de produção e demais terceiros, promovendo ações voltadas à
        melhoria da qualidade de vida e ao bem-estar coletivo.
        <br></br>
        <br></br>
        <strong>D.</strong> Contribuir para a geração de valor institucional, fortalecimento da
        marca e consolidação da reputação da organização, promovendo impacto positivo e
        desenvolvimento social nas comunidades em que atua.
      </>
    ),
  },
  {
    title: "Meio Ambiente",
    body: (
      <>
        A responsabilidade socioambiental faz parte dos valores da organização. Assumimos o
        compromisso de desenvolver nossas atividades, produtos e serviços de forma responsável,
        respeitando o meio ambiente e adotando práticas que contribuam para a prevenção, redução e
        controle dos impactos ambientais.
        <br></br>
        <br></br>
        Para isso, buscamos continuamente melhorar nosso desempenho socioambiental por meio das
        seguintes diretrizes:
        <br></br>
        <br></br>
        <strong>A.</strong> Atender integralmente à legislação, às normas e aos requisitos
        ambientais aplicáveis às atividades da organização.
        <br></br>
        <br></br>
        <strong>B.</strong> Incentivar a inovação e o desenvolvimento de tecnologias que fortaleçam
        o compromisso com a preservação do meio ambiente e a sustentabilidade.
        <br></br>
        <br></br>
        <strong>C.</strong> Otimizar e racionalizar o uso de matérias-primas, recursos naturais,
        água e energia, contribuindo para a conservação ambiental e redução de desperdícios.
        <br></br>
        <br></br>
        <strong>D.</strong> Reduzir, reutilizar e incentivar a reciclagem dos resíduos gerados pelas
        atividades da organização, promovendo práticas ambientalmente responsáveis e sustentáveis.
        <br></br>
        <br></br>
        <strong>E.</strong> Treinar, conscientizar e estimular colaboradores, parceiros de produção,
        fornecedores e terceiros quanto à importância da preservação ambiental e da adoção de
        práticas sustentáveis.
      </>
    ),
  },
  {
    title: "Entidades Públicas e Órgãos Governamentais",
    body: (
      <>
        A organização reconhece que seus resultados dependem da construção de relacionamentos
        sólidos, éticos e duradouros com clientes, parceiros, fornecedores, instituições e órgãos
        públicos relacionados às suas atividades.
        <br></br>
        <br></br>
        Essas relações incluem interações com autoridades locais, estaduais e nacionais, como
        prefeituras, órgãos ambientais e de licenciamento, agências reguladoras, entidades
        governamentais, órgãos de fiscalização e demais agentes da administração pública.
        <br></br>
        <br></br>
        Como parte integrante da sociedade, é dever da organização e de seus colaboradores
        respeitar, cumprir e atuar em conformidade com as leis, normas, regulamentos e exigências
        aplicáveis, preservando a integridade das relações institucionais e os direitos de todas as
        partes envolvidas.
      </>
    ),
  },
  {
    title: "Sindicatos",
    body: (
      <>
        A nossa organização respeita e preza pelo bom relacionamento com entidades sindicais,
        respeitando a livre associação de seus colaboradores e a negociação coletiva, reconhecendo a
        legitimidade e comprimindo os acordos coletivos e leis trabalhistas.
      </>
    ),
  },
  {
    title: "Concorrentes",
    body: (
      <>
        A organização conduz suas relações comerciais com ética, transparência e respeito às
        práticas de livre concorrência, não compactuando com ações anticompetitivas, monopolistas ou
        contrárias às legislações aplicáveis ao mercado.
        <br></br>
        <br></br>É compromisso da organização:
        <br></br>
        <br></br>
        <strong>A.</strong> Respeitar concorrentes, suas marcas, produtos, serviços e estratégias
        comerciais.
        <br></br>
        <br></br>
        <strong>B.</strong> Não divulgar informações falsas, distorcidas ou ofensivas que possam
        prejudicar a imagem, reputação ou atuação de empresas concorrentes.
        <br></br>
        <br></br>
        <strong>C.</strong> Não obter, utilizar ou compartilhar de forma imprópria segredos
        comerciais, informações confidenciais ou dados estratégicos de concorrentes, limitando-se
        exclusivamente a informações de domínio público e meios legítimos de mercado.
        <br></br>
        <br></br>
        <strong>D.</strong> Manter relacionamento profissional e respeitoso com colaboradores de
        empresas concorrentes, observando as legislações e princípios que regulam a livre
        concorrência e as práticas éticas de mercado.
      </>
    ),
  },
  {
    title: "Imprensa",
    body: (
      <>
        A organização mantém relacionamento transparente e responsável com a imprensa, respeitando
        clientes, sócios, parceiros e a comunidade em geral, disponibilizando informações
        institucionais de forma organizada, ética e alinhada à sua reputação corporativa.
        <br></br>
        <br></br>
        Para isso, estabelecemos os seguintes princípios:
        <br></br>
        <br></br>
        <strong>A.</strong> Todos os colaboradores e prestadores de serviços têm o dever de
        preservar a marca, a imagem, a reputação e a credibilidade da organização em todas as suas
        condutas e comunicações.
        <br></br>
        <br></br>
        <strong>B.</strong> As informações divulgadas pelos meios de comunicação possuem impacto
        direto na percepção pública da organização. Por essa razão, toda comunicação institucional
        deverá ser conduzida de forma centralizada, consistente e alinhada às diretrizes oficiais da
        empresa.
        <br></br>
        <br></br>
        <strong>C.</strong> Todo contato profissional com veículos de imprensa deverá possuir
        autorização prévia da Diretoria ou da Gerência responsável pelo setor de Marketing, sendo
        proibido aos colaboradores conceder entrevistas, declarações ou autorizar registros de
        imagem, vídeos, fotografias ou qualquer outro tipo de material visual relacionado à
        organização sem autorização formal e expressa.
      </>
    ),
  },
  {
    title: "Comitê de Ética",
    body: (
      <>
        Para garantir a adequada gestão e aplicação deste Código de Conduta, a organização manterá
        um Comitê de Ética formado por colaboradores nomeados pelo Conselho de Administração,
        composto obrigatoriamente por número ímpar de integrantes.
        <br></br>
        <br></br>
        São responsabilidades do Comitê de Ética:
        <br></br>
        <br></br>
        <strong>A.</strong> Analisar e deliberar sobre conflitos éticos que contrariem as políticas
        organizacionais, este Código de Conduta, os valores da organização e suas diretrizes
        estratégicas, inclusive em situações não previstas expressamente nas normas internas.
        <br></br>
        <br></br>
        <strong>B.</strong> Revisar periodicamente este Código de Conduta, propondo atualizações,
        adequações e inclusão de novos conceitos conforme as necessidades da organização.
        <br></br>
        <br></br>
        <strong>C.</strong> Receber, analisar e apurar situações que possam caracterizar violações
        ao Código de Conduta Ética.
        <br></br>
        <br></br>
        <strong>D.</strong> Garantir sigilo, imparcialidade e confidencialidade em relação às
        informações recebidas e às partes envolvidas nos processos de apuração.
        <br></br>
        <br></br>
        <strong>E.</strong> Divulgar, quando aplicável e de forma adequada, as medidas e ações
        adotadas em decorrência das violações ao Código de Conduta Ética.
        <br></br>
        <br></br>
        Possíveis situações, denúncias, reclamações ou sugestões deverão ser encaminhadas ao canal
        oficial da organização pelo e-mail:
        <strong>ouvidoria@reptec.com.br</strong>.
      </>
    ),
  },
  {
    title: "Considerações Finais",
    body: (
      <>
        Os gestores, além de ler, compreender, cumprir e garantir o cumprimento deste Código de
        Conduta e Ética, possuem a responsabilidade de atuar como referência de comportamento ético,
        profissional e institucional perante suas equipes.
        <br></br>
        <br></br>É responsabilidade de todos os colaboradores buscar orientação junto ao superior
        imediato diante de situações que exijam apoio, esclarecimento ou tomada de decisão
        adicional.
        <br></br>
        <br></br>
        Quando necessário, o Comitê de Ética poderá ser acionado para assegurar a correta
        interpretação, aplicação e preservação dos princípios, diretrizes e disposições
        estabelecidas neste Código de Conduta e Ética.
        <br></br>
        <br></br>
        Embora este Código tenha como objetivo orientar a maioria das situações relacionadas à ética
        nas atividades da organização, poderão surgir circunstâncias novas ou não previstas. Nesses
        casos, o Comitê de Ética deverá atuar com imparcialidade, responsabilidade e bom senso,
        sempre fundamentado nos princípios deste documento.
        <br></br>
        <br></br>
        Como compromisso com a transparência e a integridade, a organização disponibiliza canais de
        comunicação para denúncias, manifestações, dúvidas ou relatos de condutas inadequadas,
        podendo estas serem identificadas ou anônimas.
        <br></br>
        <br></br>
        Os registros poderão ser realizados pelos seguintes canais:
        <br></br>
        <br></br>
        <strong>Site:</strong> <strong>www.reptec.com.br</strong>
        <br></br>
        <br></br>
        <strong>E-mail:</strong> <strong>ouvidoria@reptec.com.br</strong>
        <br></br>
        <br></br>
        <strong>Outros canais oficiais de comunicação da organização.</strong>
        <br></br>
        <br></br>
        Qualquer atitude, conduta ou situação em desacordo com os princípios estabelecidos neste
        Código deverá ser comunicada imediatamente para análise e tratativa do Comitê de Ética.
      </>
    ),
  },
];

function CondutaSection() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          <p
            style={{
              background: "var(--gradient-accent)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Código de Conduta e Ética
          </p>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Nesse Código de Conduta Ética, serão abordados temas, princípios de comportamentos e
          relacionamentos que conduzem os nossos negócios em relação ao público interno e externo.
          <br></br>O presente Código é parte integrante do contrato de trabalho e a sua aplicação é
          estendida a prestadores de serviços, colaboradores, parceiros comerciais, fornecedores,
          etc.
        </p>
      </header>

      <div className="space-y-3">
        {condutaPilares.map((p, i) => (
          <AccordionItem key={p.title} index={i + 1} title={p.title}>
            {p.body}
          </AccordionItem>
        ))}
      </div>

      <div className="max-w-2xl space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          <p
            style={{
              background: "var(--gradient-accent)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Considerações Finais
          </p>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Os gestores, além de ler, compreender, cumprir e garantir o cumprimento deste Código de
          Conduta e Ética, possuem a responsabilidade de atuar como referência de comportamento
          ético, profissional e institucional perante suas equipes.
          <br></br>
          <br></br>É responsabilidade de todos os colaboradores buscar orientação junto ao superior
          imediato diante de situações que exijam apoio, esclarecimento ou tomada de decisão
          adicional.
          <br></br>
          <br></br>
          Quando necessário, o Comitê de Ética poderá ser acionado para assegurar a correta
          interpretação, aplicação e preservação dos princípios, diretrizes e disposições
          estabelecidas neste Código de Conduta e Ética.
          <br></br>
          <br></br>
          Embora este Código tenha como objetivo orientar a maioria das situações relacionadas à
          ética nas atividades da organização, poderão surgir circunstâncias novas ou não previstas.
          Nesses casos, o Comitê de Ética deverá atuar com imparcialidade, responsabilidade e bom
          senso, sempre fundamentado nos princípios deste documento.
          <br></br>
          <br></br>
          Como compromisso com a transparência e a integridade, a organização disponibiliza canais
          de comunicação para denúncias, manifestações, dúvidas ou relatos de condutas inadequadas,
          podendo estas serem identificadas ou anônimas.
          <br></br>
          <br></br>
          Os registros poderão ser realizados pelos seguintes canais:
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-secondary/40 p-6 text-sm text-muted-foreground">
        <strong>Site:</strong>{" "}
        <a
          href="https://www.reptec.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-foreground underline"
        >
          www.reptec.com.br
        </a>
        <br></br>
        <strong>E-mail:</strong>{" "}
        <a
          href="mailto:ouvidoria@reptec.com.br"
          className="font-semibold text-foreground underline"
        >
          ouvidoria@reptec.com.br
        </a>
        <br></br>
        Qualquer atitude, conduta ou situação em desacordo com os princípios estabelecidos neste
        Código deverá ser comunicada imediatamente para análise e tratativa do Comitê de Ética.
        <br></br>
        <a
          href="mailto:ouvidoria@reptec.com.br"
          className="font-semibold text-foreground underline"
        >
          ouvidoria@reptec.com.br
        </a>
      </div>
    </div>
  );
}

function AccordionItem({
  index,
  title,
  children,
}: {
  index: number;
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border bg-card transition-all ${
        open ? "border-accent/50" : "border-border"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
      >
        <span className="flex-1 font-semibold">{title}</span>
        <span className={`transition-transform text-muted-foreground ${open ? "rotate-45" : ""}`}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pl-[3.25rem] text-muted-foreground leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const manualSecoes = [
  { id: "qualidade", label: "Política De Qualidade" },
  { id: "seguranca", label: "Política De Segurança" },
  { id: "ralacionamentos", label: "Relacionamento Interpessoal" },
  { id: "direitos", label: "Direitos E Deveres Do Colaborador" },
  { id: "beneficios", label: "Benefícios/Convênios" },
  { id: "condutas", label: "Restrições E Condutas Proibidas" },
  { id: "patrimonial", label: "Segurança Patrimonial" },
  { id: "bensParticulares", label: "Acesso À Empresa Com Carro Particular" },
  { id: "direitosAIMagens", label: "Cessão De Direitos Autorais De Imagem" },
  { id: "saudeNoTrabalho", label: "Saúde No Trabalho" },
  { id: "protecaoDeDados", label: "Privacidade E Proteção De Dados Pessoais" },
  { id: "segurancaDoTrabalho", label: "Segurança No Trabalho" },
  { id: "diretrizesGerais", label: "Diretrizes Gerais De Segurança" },
] as const;

type ManualId = (typeof manualSecoes)[number]["id"];

function ManualSection() {
  const [sec, setSec] = useState<ManualId>("qualidade");

  return (
    <div className="space-y-10 px-4 sm:px-6 lg:px-8">
      <header className="space-y-3 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          <span
            style={{
              background: "var(--gradient-accent)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Manual do Colaborador
          </span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Este manual reúne as principais informações sobre benefícios, jornada de trabalho, normas,
          condutas e ferramentas utilizadas no dia a dia da Reptec, garantindo mais clareza,
          orientação e apoio aos colaboradores em sua rotina profissional.
        </p>
      </header>

      <div className="flex flex-col lg:grid lg:grid-cols-[280px_1fr] gap-8">
        <aside className="lg:sticky lg:top-24 lg:self-start -mx-4 sm:mx-0">
          <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible px-4 sm:px-0 pb-2 lg:pb-0">
            {manualSecoes.map((s) => (
              <button
                key={s.id}
                onClick={() => setSec(s.id)}
                className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium text-left transition flex-shrink-0 ${
                  sec === s.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </aside>

        <main className="min-w-0 space-y-6">
          {sec === "qualidade" && <Qualidade />}
          {sec === "seguranca" && <Seguranca />}
          {sec === "ralacionamentos" && <Ralacionamentos />}
          {sec === "direitos" && <Direitos />}
          {sec === "beneficios" && <Beneficios />}
          {sec === "condutas" && <Condutas />}
          {sec === "patrimonial" && <Patrimonial />}
          {sec === "bensParticulares" && <BensParticulares />}
          {sec === "direitosAIMagens" && <DireitosAIMagens />}
          {sec === "saudeNoTrabalho" && <SaudeNoTrabalho />}
          {sec === "protecaoDeDados" && <ProtecaoDeDados />}
          {sec === "segurancaDoTrabalho" && <SegurancaDoTrabalho />}
          {sec === "diretrizesGerais" && <DiretrizesGerais />}
        </main>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl border border-border bg-card p-6"
      style={{ boxShadow: "var(--shadow-soft)" }}
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      <div className="mt-2 text-muted-foreground leading-relaxed text-sm">{children}</div>
    </div>
  );
}

function Qualidade() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card title="Política de Qualidade">
        <ul className="list-disc pl-4 space-y-1">
          <li>Prestar serviços e fornecer produtos com qualidade.</li>
          <li>Capacitar e desenvolver nossos colaboradores.</li>
          <li>Relacionamentos baseados na confiabilidade com parceiros e fornecedores.</li>
        </ul>
      </Card>

      <Card title="Gestão e Melhoria">
        <ul className="list-disc pl-4 space-y-1">
          <li>Compromisso com a melhoria contínua e eficácia do Sistema de Gestão.</li>
          <li>Atendimento aos requisitos dos clientes e requisitos legais aplicáveis.</li>
        </ul>
      </Card>

      <Card title="Importância para o Colaborador">
        <ul className="list-disc pl-4 space-y-1">
          <li>Melhoria de produtividade e clima organizacional.</li>
          <li>Trabalho padronizado seguro e equipe motivada.</li>
          <li>Menores índices de retrabalho no dia a dia.</li>
        </ul>
      </Card>

      <Card title="Responsabilidade Coletiva">
        A qualidade acontece com o trabalho conjunto de TODAS as pessoas envolvidas na fabricação do
        produto e/ou serviço!
      </Card>

      <Card title="Nosso Compromisso">
        A qualidade começa por cada um de nós, em nosso local de trabalho e em nossas atividades, e
        deve ser compartilhada por todos.
      </Card>
    </div>
  );
}

function Seguranca() {
  return (
    <div className="space-y-4">
      <Card title="Política de Segurança Reptec">
        A Reptec, atuante na fabricação de uniformes e EPIs, tem como compromisso proteger a
        integridade humana, promovendo um ambiente seguro e saudável para colaboradores, parceiros e
        clientes. A vida é o nosso bem mais precioso e nada supera seu valor.
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Nossa Missão e Cultura">
          <ul className="space-y-1.5">
            <li>
              <span className="font-medium text-foreground">Prevenção:</span> Acreditamos que todos
              os acidentes, lesões e doenças ocupacionais podem e devem ser evitados.
            </li>
            <li>
              <span className="font-medium text-foreground">Cultura:</span> Segurança e bem-estar
              são plenamente integrados e são uma responsabilidade compartilhada por todos.
            </li>
          </ul>
        </Card>

        <Card title="Gestão de Riscos">
          <ul className="space-y-1.5">
            <li>
              <span className="font-medium text-foreground">Identificação:</span> Avaliação e
              redução de riscos decorrentes de fatores naturais, tecnológicos e humanos.
            </li>
            <li>
              <span className="font-medium text-foreground">Conformidade:</span> Controle de riscos
              assegurando o cumprimento das normas vigentes e diretrizes legais.
            </li>
          </ul>
        </Card>
      </div>

      <Card title="Compromisso com a Proteção">
        Nossa prioridade é garantir a melhor proteção em tudo, promovendo uma cultura de prevenção e
        conscientização que orienta nossas ações diárias, estando presente em nossa Missão, Visão e
        Valores.
      </Card>
    </div>
  );
}

function Ralacionamentos() {
  return (
    <div className="space-y-4">
      <Card title="Harmonia e Respeito">
        Os colaboradores devem cooperar para um ambiente harmonioso, tratando líderes, liderados e
        pares com educação, respeito e gentileza. A empatia é o nosso principal recurso para a
        resolução de conflitos.
      </Card>

      <Card title="Tolerância Zero a Abusos">
        A Reptec repele toda forma de abuso de poder, assédio moral, sexual ou violência (física,
        moral ou psicológica). Vítimas ou testemunhas devem denunciar ao Departamento de Pessoal,
        Gerência ou Direção.
      </Card>

      <Card title="Diversidade e Inclusão">
        É repreensível qualquer atitude discriminatória baseada em raça, religião, idade,
        deficiência, orientação sexual ou qualquer outra condição. Autores podem responder nas
        esferas trabalhista e criminal.
      </Card>

      <Card title="Relações com Terceiros">
        As normas de conduta e respeito estendem-se ao contato com clientes, fornecedores e qualquer
        pessoa com quem o colaborador se relacione em nome da Reptec.
      </Card>
    </div>
  );
}
function Direitos() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Pagamento e Salário">
          <ul className="space-y-1.5 text-sm">
            <li>
              • <span className="font-medium">Mensal:</span> Até o 5º dia útil do mês subsequente
              via depósito bancário.
            </li>
            <li>
              • <span className="font-medium">Adiantamento:</span> Todo dia 20, valor de 40% do
              salário base (proporcional aos dias trabalhados).
            </li>
          </ul>
        </Card>
        <Card title="Disposições Legais">
          Os direitos e deveres decorrem do contrato, legislação vigente e normas coletivas. Itens
          de negociação coletiva são informativos e podem ser alterados pelos respectivos
          instrumentos.
        </Card>
      </div>
      <Card title="Jornada de Trabalho e Intervalos">
        <div className="grid gap-4 sm:grid-cols-2 mt-2">
          <div>
            <p className="font-medium text-foreground underline">Horários Padrão (Seg à Sex):</p>
            <ul className="text-sm mt-1">
              <li>
                • <span className="font-medium">Produção:</span> 07h às 16h48 (1h de intervalo).
              </li>
              <li>
                • <span className="font-medium">Adm/Comercial:</span> 07h45 às 17h45 (1h12 de
                intervalo).
              </li>
              <li>
                • <span className="font-medium">Sábados:</span> Compensados na carga diária.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-foreground underline">Horários de Café:</p>
            <ul className="text-sm mt-1">
              <li>
                • <span className="font-medium">Produção:</span> Manhã (07h-07h10) | Tarde (10 min).
              </li>
              <li>
                • <span className="font-medium">Demais:</span> Manhã (07h45-07h55) | Tarde (10 min).
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Registro de Ponto">
          <p className="text-sm">
            Obrigatório no início, término e intervalos. Saídas antecipadas e atrasos também devem
            ser registrados.
          </p>
          <p className="text-sm font-bold text-destructive mt-2">
            Atenção: É proibido e considerado falta grave registrar o ponto de outro colaborador.
          </p>
        </Card>
        <Card title="Tolerâncias e Atrasos">
          <ul className="text-sm space-y-1">
            <li>
              • <span className="font-medium">Limite diário:</span> 10 minutos (não conta como extra
              ou atraso).
            </li>
            <li>
              • <span className="font-medium">Atraso 15 min:</span> Requer autorização do gestor
              para ingressar na empresa.
            </li>
            <li>
              • <span className="font-medium">Hora Extra:</span> Máximo 1h12 diária, com autorização
              prévia.
            </li>
          </ul>
        </Card>
      </div>

      <Card title="Licenças e Ausências Justificadas">
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <ul className="space-y-1">
            <li>
              • <span className="font-medium">Casamento:</span> 03 dias.
            </li>
            <li>
              • <span className="font-medium">Falecimento (parentes diretos/sogros):</span> 02 dias.
            </li>
            <li>
              • <span className="font-medium">Licença Paternidade:</span> 05 dias corridos.
            </li>
            <li>
              • <span className="font-medium">Doação de Sangue:</span> 01 dia por ano.
            </li>
          </ul>
          <ul className="space-y-1">
            <li>
              • <span className="font-medium">Maternidade:</span> 120 dias.
            </li>
            <li>
              • <span className="font-medium">Acompanhamento Filho (menor de 12 anos):</span> Até 6
              dias/ano (limite 4h por atestado).
            </li>
            <li>
              • <span className="font-medium">Prazo de Entrega:</span> Documentos/atestados devem
              ser entregues ao DP em até 48h.
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}

function Beneficios() {
  return (
    <div className="space-y-4">
      <Card title="Margem Consignável e Regras Gerais">
        <p className="text-sm">
          O total de descontos facultativos (convênios/empréstimos) não pode exceder{" "}
          <strong>20% da remuneração disponível</strong>. A remuneração disponível é o salário base
          (mais comissões) menos os descontos obrigatórios (INSS, IRRF, Pensão e VT).
        </p>
      </Card>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Cartão Alimentação e Premiação">
          <ul className="space-y-1.5 text-sm">
            <li>
              • <span className="font-medium">Assiduidade:</span> Destinado a quem não possui
              ausências (faltas ou atestados) no mês.
            </li>
            <li>
              • <span className="font-medium">Mínimo:</span> Necessário ter trabalhado ao menos 15
              dias no mês de referência.
            </li>
            <li>
              • <span className="font-medium">Premiação:</span> Segue metas específicas por setor ou
              política salarial.
            </li>
          </ul>
        </Card>
        <Card title="Vale Transporte">
          <ul className="space-y-1.5 text-sm">
            <li>
              • <span className="font-medium">Custo:</span> Desconto de 6% do salário base, limitado
              ao valor recebido.
            </li>
            <li>
              • <span className="font-medium">Prazos:</span> Solicitação ou cancelamento até o dia
              20 para o mês seguinte.
            </li>
            <li>
              • <span className="font-medium">Uso:</span> Exclusivo para o trajeto
              residência-trabalho e vice-versa.
            </li>
          </ul>
        </Card>
      </div>
      <Card title="Convênios (Disponíveis após Contrato de Experiência)">
        <div className="grid gap-4 sm:grid-cols-2 mt-2">
          <div className="space-y-2 text-sm">
            <p>
              <strong>🩺 Saúde e Odonto:</strong> Planos com mensalidades atrativas e possibilidade
              de incluir familiares. Coparticipações em exames e consultas são por conta do
              colaborador.
            </p>
            <p>
              <strong>💳 Cartão Consumo:</strong> Limite de 10% da remuneração para uso em rede
              conveniada. Fechamento dia 19 de cada mês.
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <p>
              <strong>🏊 Clube Aquático:</strong> Plano familiar com valores diferenciados. Sem
              carência para uso, mas com carência para cancelamento.
            </p>
            <p>
              <strong>💰 Empréstimo Consignado:</strong> Taxas diferenciadas. Em caso de rescisão, a
              empresa retém até 30% das verbas para amortização.
            </p>
          </div>
        </div>
      </Card>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Seguro de Vida">
          Adesão automática na admissão sem custo para o colaborador. Cobertura para morte,
          invalidez por aposentadoria e despesas fúnebres.
        </Card>
        <Card title="Regras de Férias">
          <ul className="space-y-1 text-sm">
            <li>
              • <span className="font-medium">Aquisição:</span> A cada 12 meses trabalhados.
            </li>
            <li>
              • <span className="font-medium">Fracionamento:</span> Até 2 períodos (um de no mínimo
              14 dias e outro de no mínimo 10 dias).
            </li>
            <li>
              • <span className="font-medium">Faltas:</span> O número de dias de férias pode ser
              reduzido por faltas injustificadas.
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

function Condutas() {
  return (
    <div className="space-y-4">
      <Card title="Proibições Gerais">
        <div className="grid gap-4 sm:grid-cols-2">
          <ul className="space-y-1.5 text-sm">
            <li>
              • <span className="font-medium">Comércio:</span> Proibida a venda de produtos ou
              serviços particulares na empresa.
            </li>
            <li>
              • <span className="font-medium">Substâncias:</span> Proibido consumo de álcool ou
              substâncias psicoativas (ou estar sob efeito delas).
            </li>
            <li>
              • <span className="font-medium">Uniforme:</span> Obrigatório estar devidamente
              uniformizado para ingressar na empresa.
            </li>
            <li>
              • <span className="font-medium">Alimentação:</span> Permitida apenas em espaços
              específicos (refeitório).
            </li>
          </ul>
          <ul className="space-y-1.5 text-sm">
            <li>
              • <span className="font-medium">Comunicação:</span> Proibido dar entrevistas ou
              declarações à imprensa sem autorização.
            </li>
            <li>
              • <span className="font-medium">Sigilo:</span> Proibida a divulgação de informações
              não autorizadas sobre clientes.
            </li>
            <li>
              • <span className="font-medium">Fumo:</span> Permitido apenas em áreas designadas para
              esta finalidade.
            </li>
            <li>
              • <span className="font-medium">Recursos:</span> Proibido o uso de máquinas e
              equipamentos para fins pessoais.
            </li>
          </ul>
        </div>
      </Card>

      <Card title="Regras Específicas: Setor Fabril">
        <p className="text-sm mb-3 font-medium text-destructive">
          O descumprimento destas normas compromete a segurança coletiva e está sujeito a
          penalidades:
        </p>
        <div className="grid gap-4 sm:grid-cols-2 bg-muted/30 p-3 rounded-lg">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="font-bold">1. EPIs:</span> Acesso permitido apenas com o uso
              obrigatório e correto dos equipamentos de proteção.
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">2. Adornos:</span> Proibido o uso de anéis, brincos
              grandes, piercings, bonés e óculos de sol.
            </li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2 text-destructive font-semibold">
              <span>📵 Celular:</span>
              <span>O uso de telefone celular durante o horário de trabalho não é permitido.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-bold">🎰 Jogos:</span> Proibida a prática de jogos de azar nas
              dependências da empresa.
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}

function Patrimonial() {
  return (
    <div className="space-y-4">
      <Card title="Conservação de Recursos e Equipamentos">
        <p className="text-sm">
          É responsabilidade de todos manter a conservação e o uso adequado da estrutura física e
          recursos fornecidos. O desperdício ou má utilização geram prejuízos e comprometem a
          eficiência.
        </p>
        <div className="mt-3 p-3 bg-muted/50 rounded-lg border border-warning/20">
          <p className="text-xs font-medium text-amber-700 dark:text-amber-400">
            ⚠️ ATENÇÃO: Danos causados aos bens da empresa por negligência podem resultar em
            exigência de ressarcimento via desconto em folha de pagamento.
          </p>
        </div>
      </Card>

      <Card title="Utilização da Frota de Veículos">
        <p className="text-sm">
          O uso dos veículos é regulamentado pelo "Procedimento para Utilização e Controle da
          Frota". O colaborador declara ciência deste documento desde a sua admissão.
        </p>
        <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-destructive">
          <span>🚫 Proibição:</span>
          <span>Circular com veículos da empresa entre 19h00 e 06h00 durante viagens.</span>
        </div>
      </Card>
      <Card title="Recursos de Tecnologia da Informação (TI)">
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <div className="space-y-2">
            <p className="font-medium underline">Diretrizes de Uso:</p>
            <ul className="space-y-1">
              <li>
                • <span className="font-medium">Monitoramento:</span> Os recursos tecnológicos podem
                ser monitorados pela empresa.
              </li>
              <li>
                • <span className="font-medium">E-mail/Teams:</span> Uso restrito a comunicações
                profissionais e atividades do cargo.
              </li>
              <li>
                • <span className="font-medium">Uso Pessoal:</span> Deve ser eventual e baseado
                estritamente no bom senso.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-medium underline text-destructive">Proibições Estritas:</p>
            <p className="text-xs leading-relaxed">
              É totalmente proibido transmitir ou receber conteúdos de natureza sexual, insultos
              étnicos, raciais, ou qualquer material de cunho abusivo, ofensivo ou obsceno.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function BensParticulares() {
  return (
    <div className="space-y-4">
      <Card title="Estacionamento Interno">
        <p className="text-sm">
          O uso do estacionamento é permitido aos colaboradores até o limite das vagas disponíveis.
          Para usufruir, é necessário o preenchimento da{" "}
          <strong>"Solicitação do Uso do Estacionamento e Termo de Responsabilidade"</strong>.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          <div className="flex items-start gap-3 p-3 rounded-lg border bg-muted/30">
            <div className="mt-1">🅿️</div>
            <div>
              <p className="text-sm font-bold">Estacionamento de Ré</p>
              <p className="text-xs text-muted-foreground">
                Por medida de segurança, todos os veículos deverão ser estacionados obrigatoriamente
                de ré.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg border bg-muted/30">
            <div className="mt-1">🔍</div>
            <div>
              <p className="text-sm font-bold">Revista de Porta-malas</p>
              <p className="text-xs text-muted-foreground">
                Procedimento padrão: os carros terão os porta-malas revistados tanto na entrada
                quanto na saída.
              </p>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Responsabilidade">
        <p className="text-sm text-muted-foreground italic">
          O termo de responsabilidade pode ser emitido no ato da admissão ou solicitado ao
          Departamento Pessoal a qualquer momento.
        </p>
      </Card>
    </div>
  );
}

function DireitosAIMagens() {
  return (
    <div className="space-y-4">
      <Card title="Monitoramento e Segurança">
        <p className="text-sm">
          A empresa utiliza câmeras de circuito interno (CFTV) para fins de{" "}
          <strong>segurança patrimonial</strong>. O colaborador está ciente de que sua imagem será
          gravada diariamente durante a jornada de trabalho.
        </p>
        <div className="mt-2 p-2 bg-muted/50 rounded border-l-4 border-primary">
          <p className="text-xs italic text-muted-foreground">
            Nota: Todas as imagens captadas pelo sistema de segurança são de uso estritamente
            confidencial.
          </p>
        </div>
      </Card>

      <Card title="Uso de Imagem e Comunicação">
        <p className="text-sm">
          Com o intuito de preservar o bom relacionamento e promover o crescimento da empresa, a
          proximidade entre as pessoas é um pilar fundamental.
        </p>
        <div className="mt-3 flex items-start gap-3">
          <div className="text-xl">📸</div>
          <p className="text-sm">
            A empresa poderá utilizar fotos ou vídeos dos colaboradores em suas ações internas e
            materiais de divulgação, visando fortalecer o engajamento e a cultura organizacional.
          </p>
        </div>
      </Card>
    </div>
  );
}

function SaudeNoTrabalho() {
  return (
    <div className="space-y-4">
      <Card title="Saúde Ocupacional">
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div className="flex-1 space-y-3">
            <p className="text-sm">
              A Reptec preza pelo bem-estar de sua equipe e mantém um serviço de saúde ocupacional
              especializado, prestado por uma empresa terceirizada referência no segmento.
            </p>

            <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm font-medium text-foreground">🩺 Compromisso do Colaborador:</p>
              <p className="text-sm text-muted-foreground mt-1">
                É dever de todos cumprir as normas de saúde e submeter-se aos{" "}
                <strong>exames médicos obrigatórios</strong>
                (admissionais, periódicos, etc.) conforme os programas de saúde da empresa.
              </p>
            </div>
          </div>

          <div className="hidden sm:block p-4 bg-muted rounded-full">
            <span className="text-2xl">🏥</span>
          </div>
        </div>
      </Card>

      <Card title="Prevenção">
        <p className="text-sm italic text-muted-foreground">
          A participação nos programas de saúde é fundamental para garantirmos um ambiente de
          trabalho seguro e monitorarmos a qualidade de vida de cada colaborador.
        </p>
      </Card>
    </div>
  );
}

function ProtecaoDeDados() {
  return (
    <div className="space-y-4">
      <Card title="Segurança Digital e Equipamentos">
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <ul className="space-y-1.5">
            <li>
              • <span className="font-medium">Identificação:</span> Seu acesso é pessoal e
              intransferível. Você é responsável por todos os atos realizados com sua senha.
            </li>
            <li>
              • <span className="font-medium">Softwares:</span> Proibida a instalação de programas
              não homologados. Solicite instalações via e-mail.
            </li>
          </ul>
          <ul className="space-y-1.5">
            <li>
              • <span className="font-medium">Dispositivos Pessoais:</span> Evite o uso de celulares
              ou notebooks próprios. O uso só é permitido com autorização e auditoria.
            </li>
            <li>
              • <span className="font-medium">Mídias Removíveis:</span> O usuário é responsável
              pelos riscos ao conectar dispositivos USB ou HDs externos.
            </li>
          </ul>
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Sigilo de Informações">
          <p className="text-sm">
            É terminantemente proibido compartilhar dados pessoais, documentos confidenciais ou
            informações de clientes com terceiros não autorizados, seja dentro ou fora da Reptec.
          </p>
        </Card>
        <Card title="Incidentes de Segurança">
          <p className="text-sm">
            Qualquer suspeita de vazamento ou incidente deve ser comunicada imediatamente ao{" "}
            <strong>time de Segurança da Informação ou ao DPO</strong>.
          </p>
        </Card>
      </div>

      <Card title="Diretrizes para IA e Novas Tecnologias">
        <div className="p-3 bg-destructive/5 border border-destructive/20 rounded-lg">
          <p className="text-sm font-bold text-destructive mb-2">🚫 PROIBIÇÃO CRÍTICA:</p>
          <p className="text-sm leading-relaxed">
            É expressamente proibido inserir ou processar{" "}
            <strong>dados de clientes, informações estratégicas ou dados pessoais</strong> em
            plataformas de Inteligência Artificial (como ChatGPT) ou sistemas de terceiros sem
            autorização prévia.
          </p>
          <p className="text-xs mt-2 text-muted-foreground italic">
            O uso de IA deve ser responsável, transparente e alinhado às políticas da organização.
          </p>
        </div>
      </Card>

      <Card title="Conformidade">
        <p className="text-sm text-center italic">
          A observância destas políticas é obrigatória. Em caso de dúvida sobre o uso ou descarte de
          informações, consulte a área responsável.
        </p>
      </Card>
    </div>
  );
}

function SegurancaDoTrabalho() {
  return (
    <div className="space-y-4">
      <Card title="Compromisso com a Vida">
        <p className="text-sm">
          A segurança no ambiente de trabalho é um compromisso de todos. Adotamos medidas rigorosas
          para prevenir acidentes e garantir que cada colaborador retorne para casa com sua
          integridade preservada.
        </p>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Prevenção de Acidentes">
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">⚠️</span>
              <span>
                <strong>Atenção Plena:</strong> Observe sempre as normas de segurança, sinalizações
                e procedimentos estabelecidos para sua área.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">🧘</span>
              <span>
                <strong>Ergonomia:</strong> Adote boas práticas de postura para evitar lesões e
                doenças ocupacionais relacionadas ao esforço repetitivo.
              </span>
            </li>
          </ul>
        </Card>

        <Card title="Brigada de Incêndio">
          <p className="text-sm">
            Contamos com uma equipe de colaboradores treinados para atuar em emergências.
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
            <li>• Combate a princípios de incêndio.</li>
            <li>• Orientação em rotas de evacuação.</li>
            <li>• Prestação de primeiros socorros.</li>
          </ul>
          <p className="mt-3 text-xs font-medium border-t pt-2">
            Identifique os brigadistas do seu setor através da sinalização ou uniforme diferenciado.
          </p>
        </Card>
      </div>

      <Card title="Sinalização de Segurança">
        <p className="text-sm italic text-center">
          Nunca ignore uma placa de sinalização ou um aviso de segurança. Eles são a sua primeira
          linha de defesa contra acidentes.
        </p>
      </Card>
    </div>
  );
}
function DiretrizesGerais() {
  return (
    <div className="space-y-4">
      <Card title="Diretrizes de Proteção e Organização">
        <div className="grid gap-4 sm:grid-cols-2 text-sm">
          <ul className="space-y-2">
            <li>
              <span className="font-bold">🛡️ EPIs:</span> Uso obrigatório e correto conforme sua
              função. Solicite a substituição imediata se houver danos.
            </li>
            <li>
              <span className="font-bold">🧹 Organização:</span> Mantenha seu posto limpo. Um
              ambiente organizado evita quedas e acidentes.
            </li>
            <li>
              <span className="font-bold">🎓 Treinamentos:</span> A participação em capacitações de
              segurança é obrigatória para sua atualização.
            </li>
          </ul>
          <div className="bg-muted/50 p-3 rounded-lg border">
            <p className="font-bold text-xs uppercase mb-1">Atenção ao "Quase Acidente":</p>
            <p className="text-xs leading-relaxed">
              É aquela situação onde o acidente não ocorreu por pouco. Relatar esses eventos é
              essencial para corrigirmos o risco antes que alguém se machuque.
            </p>
          </div>
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Contatos Internos">
          <div className="space-y-2">
            <div className="flex justify-between items-center border-b pb-1">
              <span className="text-sm font-medium">RH</span>
              <span className="font-mono text-primary">4051 / 4094 / 4037</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Segurança do Trabalho</span>
              <span className="font-mono text-primary">4056</span>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground mt-4 italic">
            * Informe imediatamente qualquer incidente aos brigadistas ou cipeiros.
          </p>
        </Card>

        <Card title="Telefones de Emergência (Externos)">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold">Bombeiros</span>
              <span className="bg-destructive text-destructive-foreground px-2 py-0.5 rounded font-mono">
                193
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold">Ambulância (SAMU)</span>
              <span className="bg-destructive text-destructive-foreground px-2 py-0.5 rounded font-mono">
                192
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold">Polícia Militar</span>
              <span className="bg-destructive text-destructive-foreground px-2 py-0.5 rounded font-mono">
                190
              </span>
            </div>
          </div>
        </Card>
      </div>

      <Card title="">
        <p className="text-center text-sm font-medium">
          "A segurança no trabalho é um compromisso com a vida, garantindo que cada dia termine tão
          seguro quanto começou."
        </p>
      </Card>
    </div>
  );
}
