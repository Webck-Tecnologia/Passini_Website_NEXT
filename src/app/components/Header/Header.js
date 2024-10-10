"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/app/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/app/components/ui/sheet";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/index.scss"

export default function Header() {
  const pathname = usePathname();
  const isServicosPage = pathname.startsWith('/servicos');

  const homeSections = [
    { id: "home", name: "Home" },
    { id: "about", name: "Sobre" },
    { id: "services", name: "Serviços" },
    { id: "faq", name: "FAQ" },
    { id: "portfolio", name: "Portfólio" },
    { id: "contact", name: "Contato" },
  ];

  const servicosSections = [
    { id: "detalhes", name: "Detalhes" },
    { id: "vantagens", name: "Vantagens" },
    { id: "especificacoes", name: "Especificações" },
    { id: "contato", name: "Contato" },
  ];

  const sections = isServicosPage ? servicosSections : homeSections;

  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      if (currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const containers = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentContainer = containers.find(container => 
        container.element && 
        scrollPosition >= container.element.offsetTop && 
        scrollPosition < (container.element.offsetTop + container.element.offsetHeight)
      );

      if (currentContainer) {
        setActiveSection(currentContainer.id);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <header className={`${styles.header} fixed top-0 left-0 w-full px-8 md:px-10 py-3 bg-white shadow-md transition-all duration-300 z-50 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <Image src="/images/logo/passini-logo.png" alt="Passini Equipamentos" width={80} height={80} />
        </Link>

        <nav className="hidden md:flex gap-6 mt-20">
          <NavigationMenu>
            <NavigationMenuList>
              {isServicosPage && (
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="text-md font-medium transition-colors px-3 py-2 text-gray-800 hover:text-red-600"
                      prefetch={false}
                    >
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )}
              {sections.map(section => (
                <NavigationMenuItem key={section.id}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={`#${section.id}`}
                      className={`text-md font-medium transition-colors px-3 py-2 ${
                        activeSection === section.id
                          ? "text-red-600"
                          : "text-gray-800"
                      } hover:text-red-600`}
                      onClick={() => setActiveSection(section.id)}
                      prefetch={false}
                    >
                      {section.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/blog"
                    className="text-md font-medium transition-colors px-3 py-2 text-gray-800 hover:text-red-600"
                    prefetch={false}
                  >
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px]">
            <nav className="grid gap-4 text-sm font-medium">
              {isServicosPage && (
                <Link
                  href="/"
                  className="flex items-center gap-3 px-3 py-2 text-gray-800 hover:text-red-600"
                  prefetch={false}
                >
                  Home
                </Link>
              )}
              {sections.map(section => (
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className={`flex items-center gap-3 px-3 py-2 ${
                    activeSection === section.id
                      ? "text-red-600"
                      : "text-gray-800"
                  } hover:text-red-600`}
                  onClick={() => setActiveSection(section.id)}
                  prefetch={false}
                >
                  {section.name}
                </Link>
              ))}
              <Link
                href="/blog"
                className="flex items-center gap-3 px-3 py-2 text-gray-800 hover:text-red-600"
                prefetch={false}
              >
                Blog
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}