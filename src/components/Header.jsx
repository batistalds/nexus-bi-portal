import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BarChart3, Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/config";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
  { to: "/solucoes", label: "Soluções" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <Container className="flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white shadow-soft">
            <BarChart3 className="h-[18px] w-[18px]" />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            Nexus <span className="text-primary-600">BI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                  isActive ? "text-primary-700" : "text-foreground/70 hover:text-foreground"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button as={Link} to="/portal" variant="soft" size="sm">
            Portal do cliente
          </Button>
          <Button as="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" size="sm">
            Falar com um especialista
          </Button>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground/70 hover:bg-muted md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-background md:hidden animate-fade-in">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium",
                    isActive ? "bg-primary-50 text-primary-700" : "text-foreground/80 hover:bg-muted"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
              <Button as={Link} to="/portal" variant="soft">
                Portal do cliente
              </Button>
              <Button as="a" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Falar com um especialista
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
