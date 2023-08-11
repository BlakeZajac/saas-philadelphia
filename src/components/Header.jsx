import { useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

import logo from "../img/brand/logo.svg";
import { Button, Container } from "./index";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

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

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const menuItem = menuItems.find(
          (item) => item.href === `#${section.id}`
        );

        if (rect.top <= 100 && rect.bottom >= 100) {
          if (menuItem) {
            setActiveMenuItem(menuItem.href);
          }
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    {
      label: "Features",
      href: "#features",
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

  const toggleMobileMenu = () => {
    setMobileMenuVisible((prevState) => !prevState);
  };

  const HamburgerIcon = mobileMenuVisible ? GrClose : RxHamburgerMenu;

  return (
    <header className="site-header border-b sticky top-0 z-10 bg-white">
      <Container className="flex items-center justify-between py-4 md:py-0">
        <div className="site-header__logo">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="site-header__logo__image h-[28px]"
            />
          </a>
        </div>

        {!isMobile ? (
          // Desktop Menu - Display when !isMobile is true
          <>
            <ul className="site-header__items flex items-center gap-x-4">
              {menuItems.map((item) => (
                <li key={item.href} className="site-header__item">
                  <a
                    href={item.href}
                    className={`${
                      activeMenuItem === item.href ? "border-blue" : ""
                    } site-header__item__link font-medium text-[15px] lg:text-[16px] border-b border-[#fff] hover:border-blue px-2 py-6 block transition`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="#">Get Started</Button>
          </>
        ) : (
          // Mobile Menu - Display when !isMobile is true
          <>
            <div
              className={`${
                mobileMenuVisible ? "block" : "hidden"
              } fixed inset-0 bg-black opacity-50 top-[73px]`}
              onClick={toggleMobileMenu}
            ></div>

            <div
              onClick={toggleMobileMenu}
              className="site-header__hamburger-menu bg-[#5b6cff] rounded-md p-2 cursor-pointer"
            >
              <HamburgerIcon size={24} />
            </div>

            {mobileMenuVisible && ( // Only show the mobile menu when mobileMenuVisible is true
              <div className="site-header__mobile-menu absolute w-full left-0 top-[73px] bg-white">
                <ul className="site-header__mobile-menu__items flex flex-col gap-y-2">
                  {menuItems.map((item) => (
                    <li
                      key={item.href}
                      className="site-header__mobile-menu__item"
                    >
                      <a
                        href={item.href}
                        className="site-header__mobile-menu__item__link flex items-center justify-between px-[5%] py-4 border-b"
                      >
                        {item.label}
                        <GoChevronRight
                          size={18}
                          className="text-neutral-800"
                        />
                      </a>
                    </li>
                  ))}
                </ul>

                <Button className="my-4 ml-[5%] w-[90%]">Get Started</Button>
              </div>
            )}
          </>
        )}
      </Container>
    </header>
  );
};

export default Header;
