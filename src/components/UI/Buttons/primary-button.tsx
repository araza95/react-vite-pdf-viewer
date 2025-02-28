import React, { Fragment } from "react";

interface IPrimaryButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  type: "button" | "submit" | "reset";
}

/**
 * @description Primary Button Component- This component is responsible for the primary button.
 * This component is used to render the primary button.
 *
 * @returns PrimaryButton
 *
 * @example
 * <PrimaryButton text="Primary Button" onClick={() => console.log("Primary Button Clicked")} />
 */
const PrimaryButton: React.FunctionComponent<IPrimaryButtonProps> = ({
  onClick,
  text,
  className,
  disabled,
  type,
}) => {
  return (
    <Fragment>
      <button
        onClick={onClick}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
        disabled={disabled}
        type={type}
      >
        {text}
      </button>
    </Fragment>
  );
};

export default PrimaryButton;
