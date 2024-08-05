import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg';

const SearchIcon = ({ color = "#000", height, size, width }: Icon) => {
  return (
    <Svg
      stroke={color}
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={size || height || 24}
      width={size || width || 24}
    >
      <Circle cx="11" cy="11" r="8"></Circle>
      <Path d="m21 21-4.3-4.3"></Path>
    </Svg>
  );
};

export default SearchIcon