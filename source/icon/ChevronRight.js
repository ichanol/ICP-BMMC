import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChevronRight(props) {
  var color = props.mode === true ? "black": "white";
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke={color}
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M9 18l6-6-6-6" />
    </Svg>
  )
}

export default ChevronRight
