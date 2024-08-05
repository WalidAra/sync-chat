import React from "react";
import Svg, { Path } from "react-native-svg";

const MessageIcon = ({ color = "#000", height, size, width }: Icon) => {
  return (
    <Svg
      stroke={color}
      fill={color}
      viewBox="0 0 24 24"
      height={size|| height || 24}
      width={size || width || 24}
      strokeWidth={"0"}
    >
      <Path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM8 10V12H16V10H8Z"></Path>
    </Svg>
  );
};

export default MessageIcon;
