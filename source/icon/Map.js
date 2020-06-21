import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Map(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill= {props.active ? "lightgreen" : "none"}
      stroke="black"
      viewBox="0 0 24 24"
      strokeWidth={1}
      {...props}
    >
      <Path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4zM8 2v16M16 6v16" />
    </Svg>
  )
}

export default Map
