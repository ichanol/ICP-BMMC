import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function Mappin(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="red"
      stroke="black"
      viewBox="0 0 512 512"
      {...props}
    >
      <Path d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 278.719c-51.442 0-93.292-41.851-93.292-93.293S204.559 92.134 256 92.134s93.291 41.851 93.291 93.293-41.85 93.292-93.291 93.292z" />
    </Svg>
  );
}

export default Mappin;
{
  /* <Svg
      width={24}
      height={24}
      fill="red"
      stroke="black"
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <Circle fill="white" cx={12} cy={10} r={3} />
    </Svg> */
}
