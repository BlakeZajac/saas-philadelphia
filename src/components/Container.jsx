import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <div className={twMerge("w-[90%] max-w-[1920px] mx-auto", className)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
};

export default Container;
