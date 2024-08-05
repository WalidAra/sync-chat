import React from 'react'
import Svg, { Path } from 'react-native-svg';

const EditPenIcon = ({ color = "#000", height, size, width }: Icon) => {
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
      <Path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></Path>
      <Path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></Path>
    </Svg>
  );
};

export default EditPenIcon