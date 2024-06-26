const Social = () => {
  const socialLinks = [
    { icon: "fab fa-facebook-f", link: "https://web.facebook.com/p/Passini-Equipamentos-100069401389022/?locale=pt_BR&_rdc=1&_rdr" },
    { icon: "fab fa-youtube", link: "https://www.youtube.com/@CanalPassini" },
    { icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/company/passini-equipamentos/?originalSubdomain=br" },
    { icon: "fab fa-google", link: "https://www.google.com/search?q=passini+equipamentos&sca_esv=38f61a096ba32030&sca_upv=1&ei=zCR8ZoHSOKDB5OUP6OCGoAc&gs_ssp=eJzj4tVP1zc0TDNPKy7MNio3YLRSNaiwNElONU20TEpNSzQzMTI3tTKoMLE0MTVMS0tKTDRLSko0NvcSKUgsLs7My1RILSzNLEjMTc0ryS8GAGK0GDo&oq=passini+equ&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3Bhc3NpbmkgZXF1KgIIADILEC4YgAQYxwEYrwEyBhAAGBYYHjIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBDIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFI_hpQkgdYnw9wA3gBkAEAmAG5AqABtxaqAQYyLTEwLjG4AQHIAQD4AQGYAg6gAvEWwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgILEC4YgAQY0QMYxwHCAggQABiABBixA8ICDhAuGIAEGLEDGIMBGIoFwgIOEAAYgAQYsQMYgwEYigXCAhEQLhiABBixAxjRAxiDARjHAcICBRAAGIAEwgIaEC4YgAQYsQMYgwEYlwUY3AQY3gQY4ATYAQHCAgoQABiABBhDGIoFwgIQEAAYgAQYsQMYQxiDARiKBcICCBAuGIAEGLEDwgIFEC4YgATCAgcQABiABBgKwgIXEC4YgAQYsQMYlwUY3AQY3gQY4ATYAQGYAwCIBgGQBgq6BgYIARABGBSSBwgzLjAuMTAuMaAH218&sclient=gws-wiz-serp" },
    { icon: "fab fa-whatsapp", link: "https://api.whatsapp.com/send?phone=5511947910983&text=Vim%20pelo%20site" },

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
    <ul className="d-flex justify-content-between social-icon style-none pe-4">
      {socialLinks.map((link, i) => (
        <li key={i}>
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            <i className={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
