import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const commonStyles = StyleSheet.create({
  firstItem: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  lastItem: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  withBorder: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.GREY,
  },
});

export const getCommonStyles = ({
  index,
  length,
}: {
  index: number;
  length: number;
}) => [
  index === 0 ? commonStyles.firstItem : null,
  index === length - 1 ? commonStyles.lastItem : null,
  index !== length ? commonStyles.withBorder : null,
];
