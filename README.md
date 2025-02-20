# 📌 Testes Automatizados com Cypress
Este projeto contém testes automatizados com Cypress, organizados em diferentes etapas para garantir a validação completa das funcionalidades da aplicação. Cada conjunto de testes foca em uma parte específica do sistema, permitindo a execução modular e facilitando a manutenção.

 ## Tecnologias Utilizadas
🏗️ Cypress → Framework para testes automatizados <br>
📜 JavaScript → Linguagem utilizada nos testes  <br>
🖥️ VS Code → Editor de código recomendado  <br>
🔗 Git/GitHub → Controle de versão  <br>

## ✅ Testes Implementados
✔️  Validação da Tela Inicial

 Verifica se os elementos da interface carregam corretamente.  <br>
Confere se o campo de input possui a aria-label esperada.  <br> 
<br>
➕ Adição de Itens <br>
 Adiciona múltiplos itens à lista.  <br>
Valida se os itens aparecem corretamente após a adição.  <br>

✔️ Conclusão de Itens  <br>
Marca um ou mais itens como concluídos.  <br>
Garante que os itens concluídos tenham a formatação correta.  <br>
 <br>
 
🔎 Filtragem de Itens  <br>
Aplica filtros para exibir apenas os itens ativos ou concluídos.  <br>
Verifica se os itens filtrados correspondem ao estado esperado.  <br>
 <br>
🗑️ Exclusão de Itens  <br>
 Remove itens da lista.  <br>
Confirma se os itens foram realmente deletados.  <br>
<br>
# ▶ Como Executar os Testes <br>
1️⃣ Clone o repositório: <br>

git clone https://github.com/GabriellaFsena/MVC-To-Do-List-Cypress.git <br>
cd MVC-To-Do-List-Cypress <br> <br>
2️⃣ Instale as dependências: <br> 
npm install <br> <br>
3️⃣ Execute os testes no modo interativo: <br>
npx cypress open <br>
ou no modo headless: <br>
npx cypress run <br>

