import React from 'react'
import { Group, Shape } from 'react-zdog'
import Zdog from 'zdog'

export interface ZTextProps {
  readonly text: string
  readonly fontSize: number
  readonly font: any
  readonly color?: string
  readonly stroke?: number
  readonly fill?: boolean
  readonly origin?: { x: number; y: number; z: number }
  readonly textAlign?: 'left' | 'center' | 'right'
  readonly textBaseline?: 'top' | 'middle' | 'bottom'
}

export const ZText: React.FC<ZTextProps> = ({
  text,
  fontSize,
  font,
  color,
  stroke,
  fill,
  origin,
  textAlign,
  textBaseline,
}) => {
  const textPath = font.getTextPath(
    text,
    fontSize,
    origin?.x || 0,
    origin?.y || 0,
    origin?.z || 0,
    textAlign || 'left',
    textBaseline || 'top'
  )

  // console.log('measured text', text, font.measureText(text, fontSize))

  return (
    <Group>
      <Shape
        closed={false}
        path={textPath}
        stroke={stroke || 0.05}
        color={color || '#fff'}
        fill={fill || true}
        backface={false}
      />
      {/* invisible Shape to counter-balance group z-index */}
      <Shape translate={{ z: Zdog.TAU * 1000 }} visible={false} />
    </Group>
  )
}
