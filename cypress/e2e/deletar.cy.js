import telaInicial from '../support/pageObject/telaInicialPageObj'
describe('Deletar item', () => {
    beforeEach(() => {
        cy.visit('/')
    var item = ['Item 1', 'Item 2', 'Item 3']
    item.forEach(function (item, indice,array ) {
        telaInicial.inputText(item)
            
        })
  })
it('Deletar item', () => {  
    telaInicial.delatarItem()
});
})