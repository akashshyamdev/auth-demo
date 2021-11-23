import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  ValidationValueMessage,
} from "react-hook-form";
import { FieldError, Message } from "react-hook-form/dist/types/errors";

export type RegisterOptionsWithOnlyMessages = {
  [Property in keyof RegisterOptions]: Property extends keyof Pick<
    RegisterOptions,
    "required"
  >
    ? Message
    : Extract<RegisterOptions[Property], ValidationValueMessage> extends never
    ? RegisterOptions[Property]
    : Extract<RegisterOptions[Property], ValidationValueMessage>;
};

export interface FieldProps<T extends FieldValues> {
  name: FieldPath<T>;
  register: UseFormRegister<T>;
  options?: RegisterOptionsWithOnlyMessages;
  error?: FieldError;
}
