import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import ReactStars from "react-rating-stars-component";

const RatingBar = ({
  children,
  className,
  starCount = 5,
  color = "grey",
  activeColor = "red",
  isEditable = false,
  errors = [],
  ...restProps
}) => {
  return (
    <>
      <ReactStars
        edit={isEditable}
        classNames={className}
        count={starCount}
        isHalf={false}
        color={color}
        activeColor={activeColor}
        {...restProps}
        key={restProps.value || 1}
      />
      <ErrorMessage errors={errors} />
      {children}
    </>
  );
};

export { RatingBar };
