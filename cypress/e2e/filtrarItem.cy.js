import telaInicial from '../support/pageObject/telaInicialPageObj'
describe('Filtar item', () => {
    beforeEach(() => {
        cy.visit('/')
    var item = ['Item 1', 'Item 2', 'Item 3']
    item.forEach(function (item, indice,array ) {
        telaInicial.inputText(item)
            
        })
        telaInicial.concluirItem()
  })
  it('Filtrar itens ativos', () => {
    telaInicial.filtrarItem("Active")
});
})
