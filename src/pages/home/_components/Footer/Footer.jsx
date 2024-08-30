import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Home", href: "/" },
        { label: "Serviços", href: "/servico" },
        { label: "Empresa", href: "/empresa" },
        { label: "Blog", href: "/blog" },
        { label: "Contato", href: "/contato" },
      ],
    },
    {
      id: 2,
      title: "Serviços",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Grua SL", href: "/detalhes_do_servico/grua-sl" },
        { label: "Elevadores", href: "/detalhes_do_servico/elevadores" },
        { label: "Projetos Especiais", href: "/detalhes_do_servico/projetos-especiais" }
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "https://web.facebook.com/p/Passini-Equipamentos-100069401389022/?locale=pt_BR&_rdc=1&_rdr",
    },
    {
      iconClass: "fab fa-youtube",
      link: "https://www.youtube.com/@CanalPassini",
    },
    {
      iconClass: "fab fa-linkedin-in",
      link: "https://www.linkedin.com/company/passini-equipamentos/?originalSubdomain=br",
    },
    {
      iconClass: "fab fa-google",
      link: "https://www.google.com/search?q=passini+equipamentos&sca_esv=38f61a096ba32030&sca_upv=1&ei=zCR8ZoHSOKDB5OUP6OCGoAc&gs_ssp=eJzj4tVP1zc0TDNPKy7MNio3YLRSNaiwNElONU20TEpNSzQzMTI3tTKoMLE0MTVMS0tKTDRLSko0NvcSKUgsLs7My1RILSzNLEjMTc0ryS8GAGK0GDo&oq=passini+equ&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3Bhc3NpbmkgZXF1KgIIADILEC4YgAQYxwEYrwEyBhAAGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFI_hpQkgdYnw9wA3gBkAEAmAG5AqABtxaqAQYyLTEwLjG4AQHIAQD4AQGYAg6gAvEWwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgILEC4YgAQY0QMYxwHCAggQABiABBixA8ICDhAuGIAEGLEDGIMBGIoFwgIOEAAYgAQYsQMYgwEYigXCAhEQLhiABBixAxjRAxiDARjHAcICBRAAGIAEwgIaEC4YgAQYsQMYgwEYlwUY3AQY3gQY4ATYAQHCAgoQABiABBhDGIoFwgIQEAAYgAQYsQMYQxiDARiKBcICCBAuGIAEGLEDwgIFEC4YgATCAgcQABiABBgKwgIXEC4YgAQYsQMYlwUY3AQY3gQY4ATYAQGYAwCIBgGQBgq6BgYIARABGBSSBwgzLjAuMTAuMaAH218&sclient=gws-wiz-serp",
    }
  ];

  return (
    <>
      {links.map((link) => (
        <div className={link.column} key={link.id}>
          <h5 className="footer-title text-white fw-500">{link.title}</h5>
          <ul className="footer-nav-link style-none">
            {link.items.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
        <h5 className="footer-title text-white fw-500">Endereço</h5>
        <p className="text-white opacity-75 mb-35">
        R. São Marcos, 1725 - Distrito Industrial<br />
        Araçariguama - SP, 18147-000
        </p>
        <ul className="d-flex social-icon style-none">
          {socialIcons.map((icon, index) => (
            <li key={index}>
              <a href={icon.link} target="_blank" rel="noopener noreferrer">
                <i className={icon.iconClass} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Footer;
