import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { router } from "./domain/router";
import SignIn from "./domain/signin/SignIn";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path={router.signin.path} element={<SignIn />}></Route>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
);
