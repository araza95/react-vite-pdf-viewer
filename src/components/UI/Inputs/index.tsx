// React Imports
import { Fragment, FunctionComponent } from "react";

interface ICustomInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * @description Custom Input Component - This component is responsible for the layout of the custom input.
 *
 * @param label - The label for the input
 * @param type - The type of the input
 * @param placeholder - The placeholder for the input
 * @param value - The value of the input
 * @param onChange - The onChange function for the input
 *
 * @returns CustomInput - The custom input component
 *
 * @example
 * <CustomInput
 *  label="Email"
 *  type="email"
 *  placeholder="Enter your email"
 *  value={email}
 *  onChange={handleEmailChange}
 * />
 */
const CustomInput: FunctionComponent<ICustomInputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Fragment>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default CustomInput;
