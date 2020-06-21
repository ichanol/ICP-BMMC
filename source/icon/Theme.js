import * as React from "react"
import Svg, { Rect, Circle, Path } from "react-native-svg"

function Theme(props) {
  var color = props.mode == true ? "black": "white";
  return (
    <Svg
      width={30}
      height={30}
      fill="none"
      stroke={color}
      viewBox="0 0 24 24"
      {...props}
    >
      <Rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
      <Circle cx={8.5} cy={8.5} r={1.5} />
      <Path d="M21 15l-5-5L5 21" />
    </Svg>
  )
}

export default Theme
