import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, href }) => {
  return (
    <a href={href} className="rounded-full">
      <button
        type="button"
        className={twMerge(
          "text-white bg-[#5b6cff] rounded-full px-5 py-2.5 font-medium text-[15px] transition hover:bg-[#4340ca] focus:outline-black",
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
