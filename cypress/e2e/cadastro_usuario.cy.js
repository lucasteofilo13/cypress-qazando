/// <reference types="cypress"/>

import cadastro_usuario_page from '../support/pages/cadastro_usuario_page'
import commum_page from '../support/pages/commum_page'
import { faker, fakerPT_BR } from '@faker-js/faker'

describe('Cadastro de usuario', () => {

  beforeEach('Acessar cadastro de usuário', () => {
    commum_page.acessarCadastroUsuario()
  })

  it('Campo Nome Vazio', () => {
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo nome deve ser prenchido')
  })

  it('Campo E-mail Vazio', () => {
    cadastro_usuario_page.preencheNome(fakerPT_BR.person.fullName())
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
  })

  it('Campo E-mail Inválido', () => {
    cadastro_usuario_page.preencheNome(fakerPT_BR.person.fullName())
    cadastro_usuario_page.preencheEmail(fakerPT_BR.person.firstName())
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
  })

  it('Campo Senha Vazio', () => {
    cadastro_usuario_page.preencheNome(fakerPT_BR.person.fullName())
    cadastro_usuario_page.preencheEmail(faker.internet.email())
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Campo Senha Inválido', () => {
    cadastro_usuario_page.preencheNome(fakerPT_BR.person.fullName())
    cadastro_usuario_page.preencheEmail(faker.internet.email())
    cadastro_usuario_page.preencheSenha('1234')
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
  })

  it('Cadastro com sucesso', async () => {

    const name = await fakerPT_BR.person.fullName()

    cadastro_usuario_page.preencheNome(name)
    cadastro_usuario_page.preencheEmail(faker.internet.email())
    cadastro_usuario_page.preencheSenha('123456')
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.validaCadastro(name)
  })
})