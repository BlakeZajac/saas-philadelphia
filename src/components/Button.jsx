import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Button = ({ children, className, href }) => {
  return (
    <a href={href} className="rounded-full block w-full md:w-fit">
      <button
        type="button"
        className={twMerge(
          "text-white w-full md:w-fit bg-blue rounded-full px-4 py-3 font-medium text-[15px] lg:text-[16px] transition hover:bg-blue-800 focus:outline-black",
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
