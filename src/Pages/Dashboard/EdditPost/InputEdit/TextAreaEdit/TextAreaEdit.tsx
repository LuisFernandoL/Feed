import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { StyleTextareaEdit } from "./StyleTextAreaEdit";

interface IInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | undefined;
}

export const TextAreaEdit = forwardRef(
  (
    { label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <StyleTextareaEdit>
        <textarea ref={ref} {...rest} />
        {error ? <p>{error}</p> : null}
      </StyleTextareaEdit>
    );
  }
);
