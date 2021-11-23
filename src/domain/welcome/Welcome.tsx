import { Center, Heading } from "@chakra-ui/layout";
import React from "react";

export default function Welcome() {
  return (
    <Center
      position="relative"
      height="100vh"
      p="6"
      overflow="hidden"
      bg="gray.50"
    >
      <Heading variant="h1" as="h1" textAlign="center">
        Welcome Back!
      </Heading>
    </Center>
  );
}
