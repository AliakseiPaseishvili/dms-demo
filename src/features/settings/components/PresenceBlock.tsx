import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { PresenceSwitch } from "./PresenceSwitch";
import { getCommonStyles } from "../utils/commonStyles";

export const PresenceBlock = () => {
  const { t } = useTranslation("settings");

  const data = useMemo(
    () => [
      {
        title: t("settings:phone"),
      },
      {
        title: t("settings:call"),
      },
      {
        title: t("settings:email"),
      },
      {
        title: t("settings:sms"),
      },
    ],
    [t]
  );

  return (
    <>
      {data.map(({ title }, index) => (
        <PresenceSwitch
          title={title}
          key={index}
          style={getCommonStyles({ index, length: data.length })}
        />
      ))}
    </>
  );
};
