import type { NextPage } from 'next'
import * as S from './styles'

const Contact: NextPage = () => {
  return (
    <S.Contact id="contact">
      <h1>Contact</h1>
      <form>
        <label>Nome</label>
        <input />
        <label>E-mail</label>
        <input />
        <label>Mensagem</label>
        <textarea />
        <button>Enviar</button>
      </form>
    </S.Contact>
  )
}

export default Contact
