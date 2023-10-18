import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Button: FC<TouchableOpacityProps> = ({ children, ...props }) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};
