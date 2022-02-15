///  <reference types="cypress" />

before(() => {
  cy.visit('https://cliente.americanas.com.br/minha-conta/cadastro')

})

describe('Realizar Cadastro Americanas', () => {

  it('Registrar Nome', () => {
    cy.get('[data-cy="formField__name"]').type('Jude Duarte Greenbriar')
      .should('have.value', 'Jude Duarte Greenbriar')
  })

  it('Registrar Gênero', () => {
    cy.get('[data-cy="labelFor__NI"] > .sc-iseJRi > .sc-ezHhQD').click()
  })

  it('Registrar Data de Nascimento', () => {
    cy.get('[data-cy="formField__birthDate"]').type('11122000')
      .should('have.value', '11/12/2000')
  })

  it('Registrar CPF', () => {
    cy.get('[data-cy="formField__cpf"]').type('36351394082')
      .should('have.value', '363.513.940-82')
  })

  it('Registrar Telefone', () => {
    cy.get('[data-cy="formField__phone"]').type('1149531996')
      .should('have.value', '(11) 49531996')
  })

  it('CheckBox Notificação WhatsApp', () => {
    cy.get('[data-cy="formField__whatsappNotifications"]').click()
  })

  it('Registrar Celular', () => {
    cy.get('[data-cy="formField__cellphone"]').type('11999531996')
      .should('have.value', '(11) 99953-1996')
  })

  it('Registrar E-mail', () => {
    cy.get('[data-cy="formField__email"]').type('cypress.test@gmail.com')
      .should('have.value', 'cypress.test@gmail.com')
  })

  it('Registrar Senha', () => {
    cy.get('[data-cy="formField__password"]').type('12345678')
      .should('have.value', '12345678')
  })

  it('Visualizar senha inserida', () => {
    cy.get('.sc-kITQso').click()
    cy.get('[data-cy="formField__password"]').should('have.value', '12345678')
  })

  it('Desmarcar CheckBox de Compartilhamento de Dados', () => {
    cy.get('[data-cy="formField__dataSharingThirdParty"]').click()
  })
})

describe('Abrir CAPTCHA ', () => {
  it('Clicar Botão Para Cadastro', () => {
    cy.get('[data-cy="signup-submit"]').click()
  })

})