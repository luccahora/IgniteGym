import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";
import React from "react";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

const Button = ({ title, variant, ...rest }: Props) => {
  return (
    <ButtonNativeBase
      w={"full"}
      h={14}
      bg={variant === "outline" ? "transparent" : "green.700"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="green.500"
      _pressed={{ bg: variant === "outline" ? "gray.500" : "green.500" }}
      {...rest}
    >
      <Text
        color={variant === "outline" ? "green.500" : "white"}
        fontFamily={"heading"}
        fontSize={"sm"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
};

export default Button;
