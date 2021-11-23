import { Button, Center, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
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
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormState>();

  useEffect(() => {
    console.log("Effect");
  }, []);

  const onSubmit = (values: FormState) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

  return (
    <Center position="relative" height="100vh" p="6" overflow="hidden">
      <Card p="8" mx="auto" width={["full", "md"]}>
        <Heading textAlign="center">Welcome back</Heading>

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

            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Card>
    </Center>
  );
}

export default SignIn;
