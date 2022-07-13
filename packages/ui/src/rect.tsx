/* @jsx h */
import { h } from 'preact'
import { RectProps } from '../ui'

const Rect = ({ draw, width, height, mx, my, fill }: RectProps) => (
  <div>{draw.rect(width, height).move(mx, my).fill(fill)}</div>
)

export default Rect
