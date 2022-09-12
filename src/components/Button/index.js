import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder6: "rounded-radius6" };
const variants = {
  FillGray90019: "bg-gray_900_19 text-gray_900",
  FillGray900: "bg-gray_900 text-white_A700",
};
const sizes = {
  sm: "xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] p-[17px] lg:p-[9px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder6"]),
  variant: PropTypes.oneOf(["FillGray90019", "FillGray900"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder6",
  variant: "FillGray90019",
  size: "sm",
};

export { Button };
