import { ThemeComponentProps } from "@chakra-ui/theme";

const parts = ["container", "body", "labels"];

const baseStyle = (props: ThemeComponentProps) => {
  return {
    container: {
      backgroundColor: "gray.700",
      position: "relative",
      flexDirection: "column",
      borderRadius: "lg",
    },
    labels: {
      display: "flex",
      position: "absolute",
      flexDirection: "column",
      paddingStart: "2",
      borderRadius: "xl",
      overflow: "hidden",
      height: "full",
      width: "full",
    },
    body: {
      transitionDelay: "1s",
      transition: "0.1s ease-in-out",
      borderRadius: "lg",
      display: "flex",
      flexDirection: "column",
      bg: "white",
      h: "full",
      py: 10,
      px: 5,
    },
  };
};

const plainVariant = {
  container: {
    bg: "white",
    boxShadow: "sm",
  },
};

const variants = {
  plain: plainVariant,
};

const defaultProps = {
  variant: "plain",
};

const Card = {
  baseStyle,
  parts,
  variants,
  defaultProps,
};

export default Card;
