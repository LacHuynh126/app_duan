import * as React from 'react';
import Svg, { Circle, Rect,Path,G,Text } from 'react-native-svg';
export default function Icon6(props) {
    return (
      <Svg {...props}>
        <Circle cx="35" cy="35" r="30" stroke="gray"  strokeWidth={2} fill="white"/>
        <Circle cx="35" cy="35" r="25" stroke="gray"   fill="black" />
        <Text fill="#ffffff" fontSize={16} font-family="Verdana" x="16" y="40">Used</Text>
      </Svg>
    );
  }
