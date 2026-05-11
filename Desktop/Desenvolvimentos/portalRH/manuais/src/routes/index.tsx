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
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              R
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-tight">REPTEC</div>
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
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => onNavigate("conduta")}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              Ler Código de Conduta
            </button>
            <button
              onClick={() => onNavigate("manual")}
              className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:bg-secondary"
            >
              Manual do Colaborador →
            </button>
          </div>
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
    body: "Respeito, Isonomia e Honestidade são as bases de todo relacionamento na REPTEC — interno ou externo, pessoal ou profissional.",
  },
  {
    title: "Colaboradores",
    body: "Mantemos um ambiente de trabalho saudável, com responsabilidade, comprometimento e uso consciente dos EPIs fornecidos pela organização.",
  },
  {
    title: "Conflitos de Interesses",
    body: "Não é permitido contratar familiares de 1º grau dentro das mesmas hierarquias ou departamentos correlatos. Não devem ser aceitas gratificações, presentes, dinheiro ou empréstimos de empresas de vendas.",
  },
  {
    title: "Confidencialidade e LGPD",
    body: "Não compartilhar padrões de documentações da organização para uso próprio, terceiros ou parceiros não vinculados. Proteja dados pessoais e informações estratégicas.",
  },
  {
    title: "Clientes",
    body: "Despesas com clientes (refeição, transporte, estadia ou entretenimento) são aceitáveis apenas quando justificadas por reunião de trabalho ou cortesia normal de negócios, dentro de limites razoáveis.",
  },
  {
    title: "Parceiros e Fornecedores",
    body: "Nenhum colaborador poderá solicitar ou fornecer informações confidenciais que pertençam a outras empresas. Relações pautadas por confiabilidade e credibilidade.",
  },
  {
    title: "Parceiros de Produção",
    body: "Guardar sigilo das informações e do segredo industrial, protegendo a organização contra possíveis espionagens industriais.",
  },
  {
    title: "Meio Ambiente",
    body: "Atender integralmente à legislação e às normas ambientais aplicáveis, com responsabilidade socioambiental em todas as operações.",
  },
  {
    title: "Imprensa e Comunicação",
    body: "Informações divulgadas em veículos de comunicação são centralizadas para garantir a adequada percepção e proteger a imagem da organização.",
  },
  {
    title: "Comitê de Ética",
    body: "Reclamações, sugestões e violações devem ser encaminhadas para ouvidoria@reptec.com.br para análise pelo Comitê de Ética.",
  },
];

function CondutaSection() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Código de Conduta e Ética</h1>
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

      <div className="rounded-2xl border border-border bg-secondary/40 p-6 text-sm text-muted-foreground">
        Em caso de dúvidas ou denúncias, contate:{" "}
        <span className="font-semibold text-foreground">ouvidoria@reptec.com.br</span>
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
        <span className="font-mono text-xs text-muted-foreground w-6">
          {String(index).padStart(2, "0")}
        </span>
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
  { id: "beneficios", label: "Benefícios" },
  { id: "horarios", label: "Horários" },
  { id: "ferramentas", label: "Ferramentas" },
] as const;

type ManualId = (typeof manualSecoes)[number]["id"];

function ManualSection() {
  const [sec, setSec] = useState<ManualId>("beneficios");

  return (
    <div className="space-y-10">
      <header className="space-y-3 max-w-3xl">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Versão 1.5 · 01/04/2026
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Manual do Colaborador</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Tudo que você precisa saber sobre benefícios, jornada de trabalho e ferramentas no dia a
          dia da REPTEC.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-[220px_1fr]">
        <aside className="md:sticky md:top-24 md:self-start">
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
            {manualSecoes.map((s) => (
              <button
                key={s.id}
                onClick={() => setSec(s.id)}
                className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-medium text-left transition ${
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

        <div className="space-y-6">
          {sec === "beneficios" && <Beneficios />}
          {sec === "horarios" && <Horarios />}
          {sec === "ferramentas" && <Ferramentas />}
        </div>
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

function Beneficios() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card title="Vale-Transporte">
        Cálculo baseado nos dias úteis do mês. Participação do colaborador com desconto de 6% do
        salário base, até o limite do valor disponibilizado.
      </Card>
      <Card title="Café da Manhã e Tarde">
        Concedidos dentro da jornada de trabalho — disponibilizado para todos os setores nos
        horários definidos por área.
      </Card>
      <Card title="Convênio Médico">
        Possibilidade de incluir familiares previstos em lei. Disponível após o término do contrato
        de experiência. Cancelamento segue carências contratuais.
      </Card>
      <Card title="Clube Aquático">
        Espaço de lazer e bem-estar disponibilizado aos colaboradores como benefício adicional.
      </Card>
      <Card title="Férias">
        Possibilidade de fracionamento em até 3 períodos: um deles com no mínimo 14 dias e os demais
        com no mínimo 10 dias.
      </Card>
      <Card title="Capacitação">
        Investimento contínuo em desenvolvimento e capacitação dos colaboradores como pilar da
        Política de Qualidade.
      </Card>
    </div>
  );
}

function Horarios() {
  return (
    <div className="space-y-4">
      <Card title="Jornada de Trabalho">
        Controle por Ponto Eletrônico. Saídas antecipadas, atrasos ou ausências intrajornada devem
        ser registradas, salvo as exceções previstas no manual.
      </Card>
      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Setor de Produção">
          <ul className="space-y-1.5">
            <li>
              <span className="font-medium text-foreground">Café da manhã:</span> 07h00 às 07h10
            </li>
            <li>
              <span className="font-medium text-foreground">Café da tarde:</span> 15h00 às 16h00
            </li>
          </ul>
        </Card>
        <Card title="Demais Setores">
          Horários definidos conforme escala de cada área. Consulte o gestor imediato para detalhes
          específicos.
        </Card>
      </div>
      <Card title="Viagens com Veículos da Empresa">
        É proibido circular com veículos da empresa entre 19h00 e 06h00 durante viagens.
      </Card>
    </div>
  );
}

function Ferramentas() {
  return (
    <div className="space-y-4">
      <Card title="Tecnologia da Informação">
        Os recursos de TI são ferramentas de trabalho. O uso deve ser responsável, dentro das normas
        da organização e com proteção de dados confidenciais.
      </Card>
      <Card title="Equipamentos de Proteção Individual (EPI)">
        Uso obrigatório dos EPIs fornecidos pela empresa. Conscientize colegas quando estiverem
        inadequados — segurança é um compromisso coletivo.
      </Card>
      <Card title="Saúde Ocupacional">
        Cumprimento das normas de saúde ocupacional, incluindo exames médicos obrigatórios conforme
        programas de saúde da empresa.
      </Card>
      <div className="rounded-2xl border border-border bg-secondary/40 p-6">
        <h3 className="font-semibold">Contatos Internos</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
          <li>
            <span className="font-medium text-foreground">RH:</span> 4051 / 4094 / 4037
          </li>
          <li>
            <span className="font-medium text-foreground">Ambulância:</span> 192
          </li>
          <li>
            <span className="font-medium text-foreground">Polícia Militar:</span> 190
          </li>
          <li>
            <span className="font-medium text-foreground">Ouvidoria:</span> ouvidoria@reptec.com.br
          </li>
        </ul>
      </div>
    </div>
  );
}
