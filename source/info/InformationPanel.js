import * as React from "react";
import Svg, {
  Defs,
  G,
  Rect,
  Path,
  Text,
  Image,
  Circle,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function InformationPanel(props) {
  return (
    <Svg viewBox="0 0 1329.38 1692.15" {...props} width={350} height={350}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix___2" data-name={2}>
          <Rect
            x={214.69}
            width={900}
            height={1692.15}
            rx={51.27}
            fill="#1a1a1a"
          />
          <Path fill="#656865" d="M249.69 144.15h830v1318h-830z" />
          <Path fill="#ffff24" d="M0 232.9h1328.7v564.2H0z" />
          <Path fill="#fff" d="M0 232.9h475.81v439.49H0z" />
          <Path fill="#424242" d="M475.81 232.9h853.56v439.49H475.81z" />
          <Path
          fill="#00fc18"
            className="prefix__cls-6"
            d="M173.35 397.33c-2.84-11.6-9.44-22.7-29.61-22.7-31 0-39.14 29.57-40.5 61.19 9.77-12.1 26.18-21.77 52.49-21.77 42.45 0 72.56 31.74 72.56 78 0 50.19-31.66 87.46-85.07 87.46C76 579.48 53.61 527 53.61 460.55c0-61.19 21.39-124.73 92.39-124.73 50.35 0 73.82 32 76.1 61.51zm4.57 98.91c0-22.34-8.17-42.4-36-42.4-22.52 0-35.74 13.35-35.74 40.6 0 19 9 44.35 35.84 44.35 24.56 0 35.9-18.79 35.9-42.55zM423.64 456.18c0 64.64-20.24 123.3-89 123.3-68 0-89-56.71-89-121.83 0-64.44 23.32-121.83 90.05-121.83 64.57 0 87.95 53.61 87.95 120.36zm-126.07.88c0 43.22 4.85 81.69 37.65 81.69 32 0 36.2-36 36.2-82.26 0-45.64-5.44-79.93-35.72-79.93-29.6 0-38.13 29.6-38.13 80.5z"
          />
          <Text
            className="prefix__cls-7"
            transform="matrix(1.07 0 0 1 123.58 756.04)"
            fontSize="55"
            fontWeight="bold"
            x={120}
            textAnchor="middle"
          >
            Available
          </Text>
          <Path
          fill="#fff"
            className="prefix__cls-8"
            d="M574 349.32h148.46V387H618.89v52.12h97v37.7h-97V562H574zM802.63 349.32V562h-46V349.32zM853.52 349.32h92.94c51.39 0 70.89 26.79 70.89 54.43 0 24-12.71 39.55-27.07 46.12 14.34 5.4 33.16 20.52 33.16 48.49 0 36.4-28.6 63.68-73.85 63.68h-96.07zm87.65 83.91c21.86 0 30.89-9.81 30.89-24.76 0-15.58-11.82-23.62-29.57-23.62h-43.83v48.38zm-42.51 93.28h41.5c24.85 0 36.12-10.39 36.12-29.67 0-17.14-11.07-28.09-36.38-28.09h-41.24zM1257.6 455c0 59.21-35.54 110.18-104.63 110.18-66.76 0-101.7-48.52-101.7-109.45 0-61.91 38.59-109.45 104.67-109.45 62.23-.05 101.66 43.55 101.66 108.72zm-158.83-.2c0 41.53 18.22 73 55.94 73 40.9 0 55.39-34.26 55.39-72.17 0-40.24-16.48-71.87-56.13-71.87-38.43-.1-55.2 29.58-55.2 70.99z"
          />
          <Path fill="#00fc18" d="M38.65 702h69.68v69.68H38.65z" />
          <Path fill="red" d="M421.24 702h69.68v69.68h-69.68z" />
          <Path fill="#00f" d="M914 702h69.68v69.68H914z" />
          <Text
            className="prefix__cls-7"
            transform="matrix(1.07 0 0 1 506.09 756.04)"
            fontSize="55"
            fontWeight="bold"
            x={170}
            textAnchor="middle"
          >
            Not Available
          </Text>
          <Text
            className="prefix__cls-7"
            transform="matrix(1.07 0 0 1 999.71 756.04)"
            fontSize="55"
            fontWeight="bold"
            x={140}
            textAnchor="middle"
          >
            Normal slot
          </Text>
          <Circle
            className="prefix__cls-12"
            cx={354.38}
            cy={1115.15}
            r={52}
            fill="rgba(255,255,255,0.45)"
          />
          <Circle
            className="prefix__cls-12"
            cx={354.38}
            cy={1300.15}
            r={52}
            fill="rgba(255,255,255,0.45)"
          />
          <Path
            className="prefix__cls-13"
            d="M331.56 1563.65l46.37 26.77v-53.54l-46.37 26.77zM938.85 1534.99h56.53v56.53h-56.53z"
            fill="rgba(255,255,255,0.25)"
          />
          <Rect
            className="prefix__cls-13"
            x={635.08}
            y={1535.78}
            width={56.53}
            height={56.53}
            rx={28.26}
            fill="rgba(255,255,255,0.25)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default InformationPanel;
