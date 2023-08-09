import PropTypes from "prop-types";

const Badge = ({ children }) => {
  return (
    <div className="bg-blue-50 text-blue w-fit rounded-md px-2 py-1 font-semibold uppercase text-[12px] tracking-[1px]">
      {children}
    </div>
  );
};

Badge.propTypes = {
  children: PropTypes.node,
};

export default Badge;
