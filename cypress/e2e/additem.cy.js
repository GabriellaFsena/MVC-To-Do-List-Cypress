import telaInicial from '../support/pageObject/telaInicialPageObj'
describe('Adicionar item', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Adicionar item', () => {
    var item = ['Item 1', 'Item 2', 'Item 3']
    item.forEach(function (item, indice,array ) {
        telaInicial.inputText(item)
            
        })
    })
})