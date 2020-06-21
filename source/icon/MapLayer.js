import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MapLayer(props) {
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
      <Path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </Svg>
  )
}

export default MapLayer
