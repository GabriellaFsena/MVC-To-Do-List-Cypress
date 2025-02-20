import telaInicial from '../support/pageObject/telaInicialPageObj'

describe('Teste Regressivo', () => {
    
    const itens = ['Item 1', 'Item 2', 'Item 3'];

    function adicionarItens() {
        itens.forEach(item => {
            telaInicial.inputText(item);
        });
    }

    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('Validar a aria-label do input de dados', () => {
            telaInicial.validarInput("What needs to be done?");
        });
    });

    context('Adicionar item', () => {
        beforeEach(() => {
            cy.visit('/');
        });

        it('Adicionar itens na lista', () => {
            adicionarItens();
        });
    });

    context('Concluir item', () => {
        beforeEach(() => {
            cy.visit('/');
            adicionarItens();
        });

        it('Concluir item', () => {
            telaInicial.concluirItem();
        });
    });

    context('Filtrar item', () => {
        beforeEach(() => {
            cy.visit('/');
            adicionarItens();
            telaInicial.concluirItem();
        });

        it('Filtrar itens ativos', () => {
            telaInicial.filtrarItem("Active");
        });
    });

    context('Deletar item', () => {
        beforeEach(() => {
            cy.visit('/');
            adicionarItens();
        });

        it('Deletar item', () => {
            telaInicial.deletarItem();
        });
    });

});
