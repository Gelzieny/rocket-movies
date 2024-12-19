import { FiPlus } from 'react-icons/fi'
import { Container, Content, Movie, MovieList } from './styles'

import { Header } from '@/components/Header'
import { ButtonLink } from '@/components/ButtonLink'
import { Tags } from '@/components/Tags'
import { Stars } from '@/components/Stars'

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <header>
          <h2>Meus filmes</h2>
          <ButtonLink title="Adicionar filme" icon={FiPlus} />
        </header>

        <MovieList>
          <Movie to="/preview/1">
            <h3>Interestellar</h3>
            <Stars className="small" readonly initialRating="4" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              obcaecati ducimus atque ab ea assumenda veritatis doloribus
              explicabo fuga, voluptatibus dolorum beatae culpa ullam eveniet
              est excepturi perspiciatis libero. Cumque.
            </p>
            <Tags value="Ficção Científica" />
            <Tags value="Drama" />
            <Tags value="Família" />
          </Movie>
        </MovieList>
      </Content>
    </Container>
  )
}
