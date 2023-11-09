/// <reference types="cypress"/>

export default {
  clicarLogin() {
    cy.get('#btnLogin')
      .click()
  },

  validarMensagemErro(mensagem) {
    cy.get('.invalid_input')
      .should('be.visible')
      .should('have.text', mensagem)
  },
  preencheEmail(email) {
    cy.get('#user')
      .type(email)
  },
  preencheSenha(senha) {
    cy.get('#password')
      .type(senha)
  },
  confereLoginRealizado() {
    cy.get('#swal2-title')
      .should('be.visible')
      .should('have.text', 'Login realizado')

      .get('#swal2-html-container')
      .should('be.visible')
      .should('have.text', 'Olá, lucasvsteofilo@teste.com.br')
  },
  checkboxLembrarLogin() {
    cy.get('#materialUnchecked')
      .check()
  }
}  