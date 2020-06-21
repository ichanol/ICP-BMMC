import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CarTV(props) {
  return (
    <Svg
      width={30}
      height={30}
      fill="lightgreen"
      strokeWidth={1.5}
      stroke="black"
      viewBox="0 0 47.032 47.032"
      {...props}
    >
      <Path d="M29.395 0H17.636c-3.117 0-5.643 3.467-5.643 6.584v34.804a5.644 5.644 0 005.643 5.644h11.759a5.645 5.645 0 005.644-5.644V6.584C35.037 3.467 32.511 0 29.395 0zm4.655 14.188v11.665l-2.729.351v-4.806l2.729-7.21zm-1.432-3.415l-2.219 8.51H16.631l-2.222-8.51c.001 0 8.884-3.018 18.209 0zm-16.877 10.94v4.492l-2.73-.349V14.502l2.73 7.211zm-2.73 16.225V27.579l2.73.343v8.196l-2.73 1.82zm1.557 2.944l2.218-3.336h13.771l2.219 3.336H14.568zm16.753-5.077v-7.872l2.729-.355v10.048l-2.729-1.821z" />
    </Svg>
  );
}

export default CarTV;
