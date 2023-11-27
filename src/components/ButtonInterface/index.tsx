import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";
import { styles } from "./styles";

export interface IBInterface extends TouchableOpacityProps {
  onPressI: () => void;
  title: string;
}
export function ButtonInterface({
  onPressI,
  title,
  ...rest
}: IBInterface) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPressI}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
