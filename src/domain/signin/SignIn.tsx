import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import Card from "../../components/Card/Card";
import Input from "../../components/Inputs/TextFieldInput";

const dummyUser = {
  email: "john@gmail.com",
  password: "test1234",
};

interface FormState extends FieldValues {
  email: string;
  password: string;
}

function SignIn() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormState>();

  const onSubmit = (values: FormState) => {
    // the delay is to fake an API call
    if (
      values.email === dummyUser.email &&
      values.password === dummyUser.password
    ) {
      toast.success("Logged in successfully", {
        autoClose: 3000,
        position: "bottom-right",
      });

      return setTimeout(() => navigate("/welcome"), 3000);
    }

    // don't tell the user which one is wrong, as it makes it easier for hackers
    return toast.error("Email or password is incorrect", {
      autoClose: 3000,
      position: "bottom-right",
    });
  };

  return (
    <Center
      position="relative"
      height="100vh"
      p="6"
      overflow="hidden"
      bg="gray.50"
    >
      <Card p="8" mx="auto" width={["full", "md"]}>
        <Heading mb="5" textAlign="center">
          Welcome back
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing="4">
            <Input<FormState>
              name="email"
              label="Email"
              type="email"
              required
              register={register}
              error={errors.email}
            />

            <Input<FormState>
              name="password"
              label="Password"
              type="password"
              required
              register={register}
              error={errors.password}
            />

            <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Card>
      <ToastContainer />
    </Center>
  );
}

export default SignIn;
