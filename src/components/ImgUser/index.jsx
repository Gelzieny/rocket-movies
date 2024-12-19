import { Container } from './styles.js'

export function ImgUser({ size, src, ...rest }) {
  return <Container size={size} src={src} {...rest} />
}
