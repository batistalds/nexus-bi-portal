import { Link } from "react-router-dom";
import { ArrowRight, Compass, Handshake, Heart, Lightbulb, Target } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const VALUES = [
  {
    icon: Target,
    title: "Clareza acima de tudo",
    description: "Um painel só é bom se qualquer pessoa da equipe entender o que fazer com ele.",
  },
  {
    icon: Handshake,
    title: "Sob medida, sempre",
    description: "Nada de templates genéricos: cada painel nasce dos processos reais do cliente.",
  },
  {
    icon: Lightbulb,
    title: "Simplicidade que funciona",
    description: "Menos é mais: priorizamos o que muda a decisão do dia, não o que só enche a tela.",
  },
  {
    icon: Heart,
    title: "Parceria de longo prazo",
    description: "Acompanhamos a operação evoluir e evoluímos o painel junto com ela.",
  },
];

export default function Sobre() {
  return (
    <>
      <section className="border-b border-border bg-card py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700">
            <Compass className="h-3.5 w-3.5" /> Sobre a Nexus BI
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Ajudamos operações industriais a decidir com dados, não com achismo
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A Nexus BI nasceu para resolver um problema comum em indústrias e distribuidoras: os dados
            existem, mas estão espalhados em planilhas, sistemas soltos e no conhecimento tácito de quem
            está há mais tempo na operação. Construímos painéis que juntam essas pontas — do chão de
            fábrica ao financeiro — em uma linguagem visual que qualquer pessoa da equipe entende.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Nossa missão</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Traduzir a complexidade da operação industrial em painéis simples, bonitos e confiáveis —
              para que decisões de vendas, produção, estoque e financeiro sejam tomadas com base no que
              está acontecendo agora, não em relatórios de semanas atrás.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Trabalhamos lado a lado com cada cliente para entender o vocabulário, os gargalos e as metas
              do negócio antes de desenhar uma única tela.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="text-sm font-semibold text-primary-600">Como trabalhamos</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Descoberta guiada por processos reais, modelagem visual sob medida e evolução contínua do
                painel junto com o negócio.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 text-center shadow-soft">
              <p className="text-2xl font-extrabold text-primary-600">4</p>
              <p className="mt-1 text-xs text-muted-foreground">áreas cobertas por painel</p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 text-center shadow-soft">
              <p className="text-2xl font-extrabold text-primary-600">1:1</p>
              <p className="mt-1 text-xs text-muted-foreground">desenho sob medida por cliente</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-card py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">O que guia nosso trabalho</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background p-6 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Quer conhecer o nosso trabalho de perto?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Fale com a gente ou entre no portal do cliente para ver um painel real em funcionamento.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button as={Link} to="/contato" size="lg">
              Falar com um especialista <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as={Link} to="/portal" variant="outline" size="lg">
              Portal do cliente
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
