import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import Logo from '@/assets/clapperboard.svg'

import { Container, Profile } from './styles'
import { ImgUser } from '../ImgUser'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header() {
  const [searchInput, setSearchInput] = useState('')

  return (
    <Container>
      <h1>
        <img src={Logo} alt="logo" />
        RocketMovies
      </h1>
      <Input
        type="search"
        placeholder="Pesquisar pelo título"
        icon={FiSearch}
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
      <Profile>
        <div>
          <Link title="Abrir perfil" to="/profile">
            <strong>Gelzieny R. Martins</strong>
          </Link>

          <button type="button" to="/signin" title="Fazer logout">
            sair
          </button>
        </div>
        <Link title="Abrir perfil" to="/profile">
          <ImgUser
            src="https://github.com/gelzieny.png"
            alt="Foto do usuário"
            size={64}
          />
        </Link>
      </Profile>
    </Container>
  )
}
