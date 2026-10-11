import { HeaderScroll } from "@/components/client/navigation/HeaderScroll";
import { MobileMenu } from "@/components/client/navigation/MobileMenu";
import { NavLink } from "@/components/client/navigation/NavLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { homeLink, mainNav, navLabels, quoteCta } from "@/config/navigation";
import { whatsappLabels, whatsappMessages } from "@/data/whatsapp-messages";
import { Logo } from "./Logo";

export function Header() {
  return (
    <HeaderScroll>
      {/* El vidrio va en una capa aparte: un backdrop-filter en el <header> rompería el menú fijo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 border-b border-transparent transition duration-300 group-data-[scrolled=true]/header:border-line group-data-[scrolled=true]/header:bg-bg/80 group-data-[scrolled=true]/header:backdrop-blur-xl"
      />
      <Container className="relative flex h-full items-center justify-between gap-6">
        <Logo />
        <nav aria-label={navLabels.main} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.href}>
                <NavLink {...item} variant="desktop" />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button href={quoteCta.href} className="hidden sm:inline-flex">
            {quoteCta.label}
          </Button>
          <MobileMenu
            items={[homeLink, ...mainNav]}
            labels={{
              open: navLabels.openMenu,
              close: navLabels.closeMenu,
              dialog: navLabels.mobileMenu,
            }}
            actions={
              <>
                <Button href={quoteCta.href} size="lg">
                  {quoteCta.label}
                </Button>
                <WhatsAppButton
                  label={whatsappLabels.cta}
                  message={whatsappMessages.general}
                  size="lg"
                />
              </>
            }
          />
        </div>
      </Container>
    </HeaderScroll>
  );
}
