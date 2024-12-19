import { ContainerLink } from './styles'

export function ButtonLink({ title, icon: Icon, ...rest }) {
  return (
    <ContainerLink {...rest}>
      {Icon && <Icon />}
      {title}
    </ContainerLink>
  )
}
