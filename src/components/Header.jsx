import logo from "../../public/img/logo.svg";
import Container from "./Container";

const Header = () => {
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
      <Container className="flex items-center justify-between py-4">
        <div className="site-header__logo">
          <img
            src={logo}
            alt=":Logo"
            className="site-header__logo__image h-[30px]"
          />
        </div>

        <ul className="site-header__items flex items-center gap-x-8">
          {menuItems.map((item) => (
            <li key={item.href} className="site-header__menu-item">
              <a href={item.href} className="site-header__menu-item__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
