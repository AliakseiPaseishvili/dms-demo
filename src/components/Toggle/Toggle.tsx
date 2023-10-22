import React, { FC } from "react";
import { Switch } from "react-native";

type ToggleProps = {
  value: boolean;
  onValueChange: (value: boolean) => void;
};

export const Toggle: FC<ToggleProps> = ({ value, onValueChange }) => {
  return <Switch value={value} onValueChange={onValueChange} />;
};
