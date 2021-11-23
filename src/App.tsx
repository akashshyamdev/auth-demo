import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { router } from "./domain/router";
import SignIn from "./domain/signin/SignIn";
import theme from "./theme/theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path={router.signin.path} element={<SignIn />}></Route>
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  </ChakraProvider>
);
