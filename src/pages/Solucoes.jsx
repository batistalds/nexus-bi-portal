import { Link } from "react-router-dom";
import {
  ArrowRight, BarChart3, Boxes, Factory, LayoutDashboard, Palette, PlugZap, Wallet,
} from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const MODULES = [
  {
    icon: BarChart3,
    title: "Vendas",
    description: "Faturamento, ticket médio, taxa de conversão, ranking de produtos e desempenho por vendedor e região.",
    points: ["Evolução de vendas período a período", "Funil de pedidos por status", "Distribuição por categoria e canal"],
  },
  {
    icon: Factory,
    title: "Processos",
    description: "Visão de funil e kanban por etapa produtiva, com alertas de gargalo e ocupação de máquinas.",
    points: ["Tempo médio de produção", "Taxa de retrabalho e perdas", "Produtividade por equipe/turno"],
  },
  {
    icon: Boxes,
    title: "Estoque",
    description: "Posição de estoque por SKU, alertas de reposição e giro por categoria de produto.",
    points: ["Itens abaixo do mínimo", "Entradas x saídas no período", "Valor total imobilizado em estoque"],
  },
  {
    icon: Wallet,
    title: "Financeiro",
    description: "Receita, despesas, fluxo de caixa e contas a receber com metas x realizado.",
    points: ["Fluxo de caixa mês a mês", "Composição de custos", "Inadimplência e vencimentos"],
  },
];

const PROCESS = [
  { title: "Descoberta", description: "Mapeamos os processos e indicadores que realmente importam para a sua operação." },
  { title: "Modelagem", description: "Desenhamos os painéis com a linguagem visual e as métricas do seu segmento." },
  { title: "Implantação", description: "Conectamos suas fontes de dados e liberamos o acesso pelo portal do cliente." },
  { title: "Evolução contínua", description: "Ajustamos e ampliamos os painéis conforme o negócio muda." },
];

export default function Solucoes() {
  return (
    <>
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <Container className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700">
            <LayoutDashboard className="h-3.5 w-3.5" /> Soluções
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Um painel por área, uma única fonte da verdade
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Cada módulo Nexus BI é construído sobre os dados e processos reais da sua operação — sem
            relatórios genéricos que ninguém abre.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="space-y-6">
          {MODULES.map((m, i) => (
            <div
              key={m.title}
              className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-border bg-card p-8 shadow-soft lg:grid-cols-5"
            >
              <div className={`lg:col-span-2 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <m.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-foreground">{m.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{m.description}</p>
              </div>
              <div className={`lg:col-span-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {m.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 rounded-xl bg-muted px-4 py-3 text-sm text-foreground/85"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <section className="border-y border-border bg-card py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Como implantamos</h2>
            <p className="mt-3 text-muted-foreground">Um processo enxuto, do primeiro diagnóstico ao painel no ar.</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-border bg-background p-6 shadow-soft">
                <span className="text-sm font-bold text-primary-300">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-10 text-center shadow-soft sm:p-14">
          <PlugZap className="h-10 w-10 text-primary-400" />
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Sua operação tem processos únicos — seu painel também deveria ter
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              <Palette className="mr-1 inline h-4 w-4 text-primary-400" />
              Cores, indicadores e fluxos desenhados para o seu segmento, não um template pronto.
            </p>
          </div>
          <Button as={Link} to="/contato" size="lg">
            Falar com um especialista <ArrowRight className="h-4 w-4" />
          </Button>
        </Container>
      </section>
    </>
  );
}
