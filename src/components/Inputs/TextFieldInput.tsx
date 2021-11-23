import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraUIInput,
} from "@chakra-ui/react";
import React from "react";
import { FieldProps } from "../../types/fields";

export interface InputProps<T> extends FieldProps<T> {
  label: string;
  required: boolean;
  placeholder?: string;
  type?: HTMLInputElement["type"];
}

function Input<T>({
  name,
  type,
  error,
  label,
  options,
  register,
  required,
  placeholder,
}: InputProps<T>) {
  return (
    <FormControl required={required} isInvalid={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ChakraUIInput
        id={name}
        {...{ name, placeholder, type }}
        {...register(name, options)}
      />

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}

export default Input;
