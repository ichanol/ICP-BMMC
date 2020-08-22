import * as React from "react";
import Svg, { Defs, G, Circle, Path, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function SelectLocation(props) {
  return (
    <Svg viewBox="0 0 899.78 643.5" {...props} width={300} height={300}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix___1" data-name={1}>
          <Circle
            className="prefix__cls-1"
            cx={130.25}
            cy={513.25}
            r={130.25}
            fill="#e0dede"
          />
          <Path
            d="M130.26 617l58.07-101.34s8.58-15.2 8.58-31.57-14.42-67-66.65-67-66.65 50.67-66.65 65.48 2 21.18 8.22 33.59z"
            fill="#e74c3c"
          />
          <Circle cx={130.26} cy={485.69} r={38.85} fill="#c0392b" />
          <Circle cx={130.26} cy={485.69} r={20.74} fill="#e0dede" />
          <Rect
            className="prefix__cls-1"
            x={336.78}
            width={563}
            height={643}
            rx={38.01}
            fill="#e0dede"
          />
          <Path
            className="prefix__cls-1"
            transform="rotate(45 337.995 520.902)"
            d="M303.28 486.18h69.44v69.44h-69.44z"
            fill="#e0dede"
          />
          <Rect
            className="prefix__cls-5"
            x={381.8}
            y={123.9}
            width={473}
            height={51}
            rx={25.5}
            fill="#fff"
          />
          <Rect
            className="prefix__cls-5"
            x={381.8}
            y={243.9}
            width={473}
            height={51}
            rx={25.5}
            fill="#fff"
          />
          <Rect
            className="prefix__cls-5"
            x={381.8}
            y={360.9}
            width={473}
            height={51}
            rx={25.5}
            fill="#fff"
          />
          <Rect
            className="prefix__cls-5"
            x={381.8}
            y={480.9}
            width={473}
            height={51}
            rx={25.5}
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SelectLocation;
