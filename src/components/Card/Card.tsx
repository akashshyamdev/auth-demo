import {
  Box,
  HTMLChakraProps,
  StylesProvider,
  ThemingProps,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import React, { FC } from "react";

export type CardProps = HTMLChakraProps<"div"> & ThemingProps<"Card">;

const Card: FC<CardProps> = ({ children, variant, ...props }) => {
  const styles = useMultiStyleConfig("Card", { variant });

  return (
    <StylesProvider value={styles}>
      <Box role="card" sx={styles.container} {...props}>
        {children}
      </Box>
    </StylesProvider>
  );
};

export default Card;
