import { useState } from "react";

import logo from "../../public/img/logo.svg";
import Button from "./Button";
import Container from "./Container";
import { useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 767);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    {
      label: "Team Power",
      href: "#team-power",
    },

    {
      label: "Pricing",
      href: "#pricing",
    },

    {
      label: "Blog",
      href: "#blog",
    },

    {
      label: "Subscribe",
      href: "#subscribe",
    },
  ];

  return (
    <header className="site-header border-b">
      <Container className="flex items-center justify-between py-4 md:py-0">
        <div className="site-header__logo">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="site-header__logo__image h-[30px]"
            />
          </a>
        </div>

        {!isMobile ? (
          // Mobile Menu - Display when !isMobile is true
          <>
            <ul className="site-header__items flex items-center gap-x-4">
              {menuItems.map((item) => (
                <li key={item.href} className="site-header__item">
                  <a
                    href={item.href}
                    className="site-header__item__link font-medium border-b border-[#fff] hover:border-[#5b6cff] px-2 py-6 block transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="#">Get Started</Button>
          </>
        ) : (
          // Desktop Menu - Display when isMobile is true
          <></>
        )}
      </Container>
    </header>
  );
};

export default Header;
