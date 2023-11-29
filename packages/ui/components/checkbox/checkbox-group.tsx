import { forwardRef } from "@nextui-org/system";
import { CheckboxGroupProvider } from "./checkbox-group-context";
import { UseCheckboxGroupProps, useCheckboxGroup } from "./use-checkbox-group";

export interface CheckboxGroupProps extends UseCheckboxGroupProps {}

const CheckboxGroup = forwardRef<"div", CheckboxGroupProps>((props, ref) => {
  const {
    children,
    context,
    label,
    description,
    errorMessage,
    getGroupProps,
    getLabelProps,
    getWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
  } = useCheckboxGroup({ ...props, ref });

  // Updated dummy ValidationResult with a mock ValidityState
  const dummyValidationResult = {
    isInvalid: false, // or true, depending on your scenario
    validationErrors: [], // or an array of error messages
    validationDetails: {
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valid: true,
      valueMissing: false,
      // ... add other properties of ValidityState as needed
    }
  };

  return (
    <div {...getGroupProps()}>
      {label && <span {...getLabelProps()}>{label}</span>}
      <div {...getWrapperProps()}>
        <CheckboxGroupProvider value={context}>
          {children}
        </CheckboxGroupProvider>
      </div>
      {errorMessage ? (
        <div {...getErrorMessageProps()}>
          {typeof errorMessage === 'function' ? errorMessage(dummyValidationResult) : errorMessage}
        </div>
      ) : description ? (
        <div {...getDescriptionProps()}>{description}</div>
      ) : null}
    </div>
  );
});

CheckboxGroup.displayName = "NextUI.CheckboxGroup";

export default CheckboxGroup;
