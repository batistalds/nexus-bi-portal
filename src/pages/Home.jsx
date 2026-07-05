import { Link } from "react-router-dom";
import {
  ArrowRight, BarChart3, Boxes, Factory, Gauge, ShieldCheck, Sparkles, Wallet,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PORTAL_CLIENTS } from "@/data/clients";

const MODULES = [
  {
    icon: BarChart3,
    title: "Vendas",
    description: "Faturamento, ticket médio, ranking de produtos e funil comercial em tempo real.",
  },
  {
    icon: Factory,
    title: "Processos",
    description: "Funil de produção, kanban por etapa, ocupação de máquinas e alertas de gargalo.",
  },
  {
    icon: Boxes,
    title: "Estoque",
    description: "Níveis por SKU, alertas de reposição e giro de estoque por categoria.",
  },
  {
    icon: Wallet,
    title: "Financeiro",
    description: "Fluxo de caixa, composição de custos, contas a receber e metas x realizado.",
  },
];

const STATS = [
  { value: "4", label: "módulos integrados em um só painel" },
  { value: "100%", label: "adaptado ao segmento do cliente" },
  { value: "1", label: "login para todas as áreas do negócio" },
];

export default function Home() {
  const featuredClient = PORTAL_CLIENTS[0];

  return (
    <>
      <section className="bg-grid relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary-200/50 blur-3xl" />
        <div className="pointer-events-none absolute left-[-8%] top-40 h-64 w-64 rounded-full bg-mint/20 blur-3xl" />
        <Container className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700">
              <Sparkles className="h-3.5 w-3.5" /> Inteligência de negócios sob medida
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Painéis claros para operações industriais que não podem parar
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              A Nexus BI transforma dados de vendas, produção, estoque e financeiro em um painel único,
              intuitivo e sob medida para o seu segmento — do chão de fábrica à diretoria.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button as={Link} to="/contato" size="lg">
                Falar com um especialista <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as={Link} to="/portal" variant="outline" size="lg">
                Acessar portal do cliente
              </Button>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-4xl animate-fade-in">
            <div className="rounded-2xl border border-border bg-card p-3 shadow-glow">
              <div className="flex items-center gap-1.5 border-b border-border px-3 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-peach" />
                <span className="h-2.5 w-2.5 rounded-full bg-mint" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary-300" />
                <span className="ml-3 text-xs font-medium text-muted-foreground">painel · {featuredClient.name}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4">
                {MODULES.map((m) => (
                  <div key={m.title} className="rounded-xl bg-muted p-4">
                    <m.icon className="h-5 w-5 text-primary-600" />
                    <p className="mt-3 text-sm font-semibold text-foreground">{m.title}</p>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-border">
                      <div className="h-full w-2/3 rounded-full bg-primary-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Um módulo para cada decisão do seu negócio
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cada painel é desenhado junto com o cliente, refletindo os processos reais da operação — não um
              template genérico.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MODULES.map((m) => (
              <div
                key={m.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                  <m.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-card py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/20 px-3 py-1 text-xs font-semibold text-mint-foreground">
                <ShieldCheck className="h-3.5 w-3.5" /> Cliente em destaque
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                {featuredClient.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-primary-600">{featuredClient.segment}</p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                A Nexus BI estruturou o painel de gestão da {featuredClient.name}, unificando vendas,
                fabricação de insumos, estoque e financeiro em uma única plataforma — com a linguagem visual
                e os indicadores certos para o dia a dia da operação.
              </p>
              <Button as={Link} to="/portal" variant="soft" className="mt-6">
                Ver portal do cliente <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-background p-5 text-center shadow-soft">
                  <p className="text-3xl font-extrabold tracking-tight text-primary-600">{s.value}</p>
                  <p className="mt-2 text-xs leading-snug text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="text-center">
          <Gauge className="mx-auto h-10 w-10 text-primary-400" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Pronto para ver seus dados de outra forma?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Conte um pouco sobre a sua operação e mostramos como um painel Nexus BI ficaria para o seu
            segmento.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button as={Link} to="/contato" size="lg">
              Solicitar demonstração <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/solucoes" variant="outline" size="lg">
              Conhecer as soluções
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
