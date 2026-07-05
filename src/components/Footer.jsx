import { Link } from "react-router-dom";
import { BarChart3, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white shadow-soft">
              <BarChart3 className="h-[18px] w-[18px]" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              Nexus <span className="text-primary-600">BI</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Painéis de inteligência de negócios sob medida para operações industriais — vendas, produção,
            estoque e financeiro em um só lugar.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Navegação</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="text-foreground/80 hover:text-primary-700">Home</Link></li>
            <li><Link to="/solucoes" className="text-foreground/80 hover:text-primary-700">Soluções</Link></li>
            <li><Link to="/sobre" className="text-foreground/80 hover:text-primary-700">Sobre</Link></li>
            <li><Link to="/contato" className="text-foreground/80 hover:text-primary-700">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Portal</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/portal" className="text-foreground/80 hover:text-primary-700">Portal do cliente</Link></li>
            <li><Link to="/contato" className="text-foreground/80 hover:text-primary-700">Solicitar demonstração</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Contato</p>
          <ul className="mt-4 space-y-2.5 text-sm text-foreground/80">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary-500" /> contato@nexusbi.com.br</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary-500" /> (28) 3524-1073</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-500" /> Cachoeiro de Itapemirim, ES</li>
            <li className="flex items-center gap-2"><Linkedin className="h-4 w-4 text-primary-500" /> /company/nexusbi</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Nexus BI. Todos os direitos reservados.</p>
          <p>Feito para operações industriais que decidem com dados.</p>
        </Container>
      </div>
    </footer>
  );
}
