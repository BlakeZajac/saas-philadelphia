import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, href }) => {
  return (
    <a href={href} className="rounded-full block">
      <button
        type="button"
        className={twMerge(
          "text-white bg-[#5b6cff] rounded-full px-4 py-2 font-medium text-[15px] lg:text-[16px] transition hover:bg-[#4340ca] focus:outline-black",
          className
        )}
      >
        {children}
      </button>
    </a>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
