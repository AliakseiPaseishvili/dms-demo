import React from "react";
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

export const User = () => (
  <Svg
    width="92"
    height="92"
    viewBox="0 0 92 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx="46" cy="46" r="46" fill="white" />
    <Path
      d="M46 92C20.7728 92 0 71.2272 0 46C0 20.8169 20.7728 0 45.9559 0C71.1831 0 92 20.8169 92 46C92 71.2272 71.2272 92 46 92ZM46 53.0125C54.7325 53.1007 61.4803 45.6031 61.4803 36.0326C61.4803 26.9914 54.6443 19.4056 46 19.4056C37.3116 19.4056 30.4314 26.9914 30.4756 36.0326C30.4756 45.6031 37.2234 52.9684 46 53.0125ZM46 83.9291C55.6587 83.9291 66.3317 79.8715 72.9473 72.7268C67.6548 64.9645 57.7315 60.7306 46 60.7306C34.1361 60.7306 24.257 65.0968 19.0527 72.7268C25.6242 79.8715 36.2972 83.9291 46 83.9291Z"
      fill="url(#paint0_linear_2408_35882)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_2408_35882"
        x1="0"
        y1="0"
        x2="92"
        y2="92"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A1A6B3" />
        <Stop offset="1" stopColor="#878C96" />
      </LinearGradient>
    </Defs>
  </Svg>
);
