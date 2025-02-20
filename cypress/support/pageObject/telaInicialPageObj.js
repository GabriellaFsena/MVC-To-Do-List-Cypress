const elem = require('../elements/telaInicialElements').ELEMENTS
const item = require('../elements/telaInicialElements').ITENS
const filtroItem = require('../elements/telaInicialElements').FILTROS

class telaInicial {
    inputText(dado) {
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }
    concluirItem() {
        cy.get(item.buttonConcluir)
            .first()
            .click()
    }

    filtrarItem(menu) {
        cy.get(filtroItem.filtroToDo)
            .contains(menu)
            .and('be.visible')
            .click()
    }
    deletarItem() {
        cy.get(item.listaItens)
            .find('button')
            .invoke('show')
            .first()
            .click()
    }
    validarInput(texto) {
        cy.get(elem.inputToDo)
            .should('have.attr', 'placeholder')
            .and('include', texto)
    }

}
export default new telaInicial();