import { ErrorMessage } from "../ErrorMessage/index.js";
import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const selectOptions = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
];

const sizes = {
  sm: "xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] pb-[16px] lg:pb-[9px]",
};

const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder = "Select",
      className,
      options = selectOptions,
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange,
      value,
      errors = [],
      indicator,
      size,
      ...restProps
    },
    ref
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);

    const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(data?.value);
      }
    };
    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className}   ${sizes[size] || ""} common-select`}
          placeholder={
            <div className={placeholderClassName}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              "&:hover": {
                border: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected && "#fafafa",
              backgroundColor: state.isSelected && "#19262627",
              "&:hover": { backgroundColor: "#19262627", color: "#262627" },
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
              margin: "0",
              padding: "0",
              // height: "0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              paddingTop: "0px",
              paddingBottom: "0px",
            }),
            clearIndicator: (provided) => ({
              ...provided,
              padding: "0",
            }),
            multiValue: (provided) => ({
              ...provided,
              margin: "0",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              padding: "0",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  placeholderClassName: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  size: PropTypes.oneOf(["sm"]),
};
SelectBox.defaultProps = {
  placeholder: "Select",
  className: "",
  isSearchable: false,
  placeholderClassName: "",
  isMulti: false,
  value: "",
  size: "",
  options: selectOptions,
  onChange: () => {},
};
export { SelectBox };
