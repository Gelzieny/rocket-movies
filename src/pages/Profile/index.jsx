import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { ImgUser } from '@/components/ImgUser'

import { Container, Header, Content, Avatar } from './styles'
import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft /> Voltar
        </Link>
      </header>

      <form action="">
        <Avatar>
          <ImgUser
            size={16}
            src="https://avatars.githubusercontent.com/u/19843798?v=4"
            alt=""
          />
          <label htmlFor="avatar">
            <FiCamera />

            <input
              type="file"
              id="avatar"
              accept="image/png, image/jpeg"
              className="hidden"
            />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha atual" type="password" icon={FiLock} />

        <Input placeholder="Nova atual" type="password" icon={FiLock} />

        <Button title="Salvar" type="submit" />
      </form>
    </Container>
  )
}
