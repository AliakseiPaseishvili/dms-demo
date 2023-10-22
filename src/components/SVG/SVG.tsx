import React, { FC } from "react";
import { Gear } from "./icons/Gear";
import { Folder } from "./icons/Folder";
import { ChevronRight } from "./icons/ChevronRight";
import { User } from "./icons/User";
import { Power } from "./icons/Power";

export const ICON_NAMES = {
  GEAR: "GEAR",
  FOLDER: "FOLDER",
  CHEVRON_RIGHT: "CHEVRON_RIGHT",
  USER: "USER",
  POWER: "POWER"
};

const ICONS = {
  [ICON_NAMES.GEAR]: Gear,
  [ICON_NAMES.FOLDER]: Folder,
  [ICON_NAMES.CHEVRON_RIGHT]: ChevronRight,
  [ICON_NAMES.USER]: User,
  [ICON_NAMES.POWER]: Power,
};

type SvgProps = {
  name: string;
};

export const SVG: FC<SvgProps> = ({ name }) => {
  const Icon = ICONS[name];

  return <Icon />;
};
