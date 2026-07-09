import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, MapPin, MessageSquareText, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const CONTACT_INFO = [
  { icon: Phone, label: "Telefone", value: "(28) 99946-9435" },
  { icon: MapPin, label: "Localização", value: "Cachoeiro de Itapemirim, ES" },
];

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", empresa: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const subject = `CLIENTE - NEXUSBI - ${form.nome}`;
    const body = [
      `Nome: ${form.nome}`,
      `Empresa: ${form.empresa || "não informada"}`,
      `E-mail para retorno: ${form.email}`,
      "",
      "Mensagem:",
      form.mensagem || "(sem mensagem)",
    ].join("\n");

    const mailtoUrl = `mailto:batistalds@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setSent(true);
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700">
            <MessageSquareText className="h-3.5 w-3.5" /> Fale com a gente
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Vamos entender a sua operação
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Conte um pouco sobre a sua empresa e retornamos com os próximos passos para desenhar o seu
            painel.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-center animate-fade-in">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-mint/20 text-mint-foreground">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Quase lá!</h2>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Obrigado, {form.nome.split(" ")[0] || "tudo certo"}. Abrimos seu aplicativo de e-mail com a
                  mensagem pronta — é só confirmar o envio por lá.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nome" className="text-sm font-medium text-foreground">
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="text-sm font-medium text-foreground">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nome da sua empresa"
                      className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="voce@empresa.com.br"
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="text-sm font-medium text-foreground">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Conte um pouco sobre a sua operação e o que gostaria de acompanhar em um painel"
                    className="mt-1.5 w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Enviar mensagem
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                  <info.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{info.label}</p>
                  <p className="mt-0.5 text-sm font-medium text-foreground">{info.value}</p>
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-5">
              <p className="text-sm font-semibold text-primary-800">Já é cliente Nexus BI?</p>
              <p className="mt-1 text-sm text-primary-700/80">
                Acesse diretamente o seu painel pelo portal do cliente.
              </p>
              <Button as={Link} to="/portal" variant="soft" size="sm" className="mt-3">
                Ir para o portal do cliente
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
