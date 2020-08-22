/* import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

function Information(props) {
  return (
    <Svg
      width={27}
      height={27}
      viewBox='0 0 24 24'
      fill='none'
      stroke='rgba(255,255,255,0.8)'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='prefix__feather prefix__feather-info'
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d='M12 16v-4M12 8h.01' />
    </Svg>
  )
} */
/* 
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Information(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill='rgba(255,255,255,0.8)'
      strokeLinecap='round'
      strokeLinejoin='round'
      viewBox='0 0 512 512'
      {...props}
    >
      <Path d='M277.332 128c0 11.781-9.55 21.332-21.332 21.332s-21.332-9.55-21.332-21.332 9.55-21.332 21.332-21.332 21.332 9.55 21.332 21.332zm0 0M256 405.332c-8.832 0-16-7.168-16-16V224h-21.332c-8.832 0-16-7.168-16-16s7.168-16 16-16H256c8.832 0 16 7.168 16 16v181.332c0 8.832-7.168 16-16 16zm0 0' />
      <Path d='M256 512C114.836 512 0 397.164 0 256S114.836 0 256 0s256 114.836 256 256-114.836 256-256 256zm0-480C132.48 32 32 132.48 32 256s100.48 224 224 224 224-100.48 224-224S379.52 32 256 32zm0 0' />
      <Path d='M304 405.332h-96c-8.832 0-16-7.168-16-16s7.168-16 16-16h96c8.832 0 16 7.168 16 16s-7.168 16-16 16zm0 0' />
    </Svg>
  )
}

export default Information */

import * as React from "react";
import Svg, { Defs, G, Circle, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Information(props) {
  return (
    <Svg viewBox="0 0 210 210" {...props} width={24} height={24}>
      <Defs></Defs>
      <G id="prefix__Layer_2" data-name="Layer 2">
        <G id="prefix__Layer_5" data-name="Layer 5">
          <Circle
            cx={105}
            cy={105}
            r={94.5}
            fill="none"
            stroke="#fff"
            strokeMiterlimit={10}
            strokeWidth={21}
          />
          <Circle
            className="prefix__cls-2"
            cx={105}
            cy={59}
            r={12}
            fill="white"
          />
          <Path className="prefix__cls-2" d="M93 85h24v80H93z" fill="white" />
        </G>
      </G>
    </Svg>
  );
}

export default Information;
