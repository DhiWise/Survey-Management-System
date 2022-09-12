import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[21px] xl:text-[24px] 2xl:text-[27px] 3xl:text-[32px] text-[36px]",
  h2: "lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-[32px]",
  h3: "font-normal lg:text-[15px] xl:text-[17px] 2xl:text-[19px] 3xl:text-[23px] text-[26px]",
  h4: "font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-[24px]",
  h5: "xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
