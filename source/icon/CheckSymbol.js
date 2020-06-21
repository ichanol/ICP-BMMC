import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckSymbol(props) {
  return (
    <Svg
      width={30}
      height={30}
      fill="none"
      stroke="lightgreen"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <Path d="M20 6L9 17l-5-5" />
    </Svg>
  )
}

export default CheckSymbol
