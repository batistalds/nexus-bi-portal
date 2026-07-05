import { useState } from "react";
import { ArrowRight, Building2, Check, Lock, Mail, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PORTAL_CLIENTS, DEFAULT_CLIENT_ID } from "@/data/clients";

export default function Portal() {
  const [clientId, setClientId] = useState(DEFAULT_CLIENT_ID);
  const [email, setEmail] = useState("contato@stonesolucoes.com.br");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const client = PORTAL_CLIENTS.find((c) => c.id === clientId) ?? PORTAL_CLIENTS[0];

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      window.location.href = client.dashboardUrl;
    }, 500);
  }

  return (
    <section className="bg-grid flex min-h-[calc(100vh-72px)] items-center py-16">
      <Container className="flex justify-center">
        <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card shadow-glow lg:grid-cols-5">
          <div className="hidden flex-col justify-between bg-primary-600 p-8 text-white lg:col-span-2 lg:flex">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                <ShieldCheck className="h-3.5 w-3.5" /> Portal do cliente
              </span>
              <h1 className="mt-6 text-2xl font-extrabold leading-tight">
                Um único acesso para todos os painéis da sua operação.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-primary-100">
                Vendas, Processos, Estoque e Financeiro — tudo no mesmo lugar, com os dados atualizados do
                seu negócio.
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-100">Ambiente de demonstração</p>
              <p className="mt-1 text-sm text-white/90">
                Este login é ilustrativo. Selecione a empresa de exemplo e entre para ver um painel real.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 lg:col-span-3">
            <h2 className="text-xl font-bold text-foreground">Acesse o seu painel</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Escolha sua empresa e entre com as credenciais do portal.
            </p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Empresa</p>
              <div className="mt-2 space-y-2">
                {PORTAL_CLIENTS.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setClientId(c.id)}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                      clientId === c.id
                        ? "border-primary-300 bg-primary-50"
                        : "border-border bg-background hover:border-primary-200"
                    }`}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-xs font-bold text-white">
                      {c.initials}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-foreground">{c.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{c.segment}</p>
                    </div>
                    {clientId === c.id && (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                        <Check className="h-3 w-3" />
                      </span>
                    )}
                  </button>
                ))}
                <button
                  type="button"
                  disabled
                  className="flex w-full cursor-not-allowed items-center gap-3 rounded-xl border border-dashed border-border px-4 py-3 text-left opacity-60"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-muted-foreground">Sua empresa aqui</p>
                    <p className="text-xs text-muted-foreground">Fale com a gente para ativar o seu painel</p>
                  </div>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4 border-t border-border pt-6">
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-mail
                </label>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="text-sm font-medium text-foreground">
                  Senha
                </label>
                <div className="relative mt-1.5">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3.5 text-sm text-foreground outline-none transition-colors focus:border-primary-300 focus:ring-2 focus:ring-primary-100"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? "Entrando..." : `Entrar como ${client.name}`}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
