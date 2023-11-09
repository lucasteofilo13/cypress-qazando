import commum_page from '../support/pages/commum_page'
import login_page from '../support/pages/login_page'
import { faker, fakerPT_BR } from '@faker-js/faker'

describe('Login', () => {

  beforeEach('Acessar cadastro de usuário', () => {
    commum_page.acessarLogin()
  })
  it('Login com email vazio', () => {
    login_page.clicarLogin()
    login_page.validarMensagemErro('E-mail inválido.')
  })
  it('Login com email invalido', () => {
    login_page.preencheEmail('lucas')
    login_page.clicarLogin()
    login_page.validarMensagemErro('E-mail inválido.')
  })
  it('Login com senha vazia', () => {
    login_page.preencheEmail('lucasvsteofilo@teste.com.br')
    login_page.clicarLogin()
    login_page.validarMensagemErro('Senha inválida.')
  })

  it('Login com senha invalida', () => {
    login_page.preencheEmail('lucasvsteofilo@teste.com.br')
    login_page.preencheSenha('123')
    login_page.clicarLogin()
    login_page.validarMensagemErro('Senha inválida.')
  })
  it('Login com sucesso', () => {
    login_page.preencheEmail('lucasvsteofilo@teste.com.br')
    login_page.preencheSenha('123456')
    login_page.clicarLogin()
    login_page.confereLoginRealizado()
  })
  it('Login com sucesso e checkbox "Lembrar de mim"', () => {
    login_page.preencheEmail('lucasvsteofilo@teste.com.br')
    login_page.preencheSenha('123456')
    login_page.checkboxLembrarLogin()
    login_page.clicarLogin()
    login_page.confereLoginRealizado()
  })
})