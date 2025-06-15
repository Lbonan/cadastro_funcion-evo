# Cadastro de Funcionários ☀️

🔗 Link da produção: https://cadastro-funcion-evo.vercel.app/
<hr>

## ✨Funcionalidades
- **📝 Adicionar Funcionários**  
  Cadastro de funcionários com nome, e-mail, cidade e telefone.

- **🔍 Filtro por nome**  
  Campo de busca para localizar profissionais cadastrados.

- **🗑️ Remover e Editar Funcionários**  
  Possibilidade de editar ou excluir um funcionário da lista.

## 💻 Tecnologias Utilizadas

- **React** — Biblioteca JavaScript para criação de interfaces de usuário.
  - **React Redux** — Integração do Redux ao React.
  - **React Router DOM** — Gerenciamento de rotas.
  - **React Toastify** — Exibição de notificações de sucesso e erro.
- **Redux Toolkit** — Gerenciamento de estado global.
- **Styled Components** — Estilização dos componentes.
- **TypeScript** — Superset do JavaScript com tipagem estática.
- **Formik + Yup** — Manipulação e validação de formulários.
<hr>

## 📁 Estrutura de Pastas

````csharp
src/
│
├── assets/                    # Recursos como imagens e ícones
│
├── components/                # Componentes reutilizáveis
│   ├── EmployeeCard/          # Cartão com informações do funcionário
│   └── Header/                # Cabeçalho da aplicação
│
├── containers/                # Componentes de tela com lógica
│   ├── EmployeeList/          # Lista de funcionários com filtro
│   └── Form/                  # Formulário de cadastro/edição
│
├── models/                    # Modelos e classes TypeScript
│   └── FuncionariosClass.ts   # Classe que representa um funcionário
│
├── pages/                     # Páginas principais da aplicação (rotas)
│   └── index.tsx              # Página inicial
│
├── store/                     # Configuração e reducers do Redux
│   ├── reducers/
│   │   ├── filtro.ts          # Slice responsável pelo filtro de busca
│   │   └── funcionarios.ts    # Slice responsável pelos funcionários
│   └── index.tsx              # Configuração principal da store
│
├── styles.ts                  # Estilos globais e temas
├── App.tsx                    # Componente raiz com as rotas
└── index.tsx                  # Ponto de entrada da aplicação


`````





## 📌 Observações

> ⚠️ Este projeto ainda **não possui integração com back-end** nem **banco de dados**.  
> Todas as informações de funcionários são mantidas **localmente** na store do Redux.  
> Por esse motivo, **os dados não são persistidos ao atualizar a página**.



## 🚀 Melhorias Futuras

- Integração com uma **API back-end** para persistência de dados.
- Adição de **validação de e-mail duplicado** ou CPF (caso seja implementado).
- Implementação de **autenticação de usuário**.
- Adicionar **modal de confirmação** antes de remover um funcionário.
- Testes automatizados com **Jest** ou **React Testing Library**.


<hr>

## 🚀 Como Clonar e Executar o Projeto

1.**Clone o repositório:**
```bash
https://github.com/Lbonan/cadastro_funcion-evo.git
```
2.**Navegue até a pasta do projeto:**
```bash
cd funcionarios-evo
```
3.**Instale as dependências:**
```bash
npm install
```
4.**Execute o projeto em modo de desenvolvimento:**
```bash
npm start
```
O projeto será iniciado no endereço http://localhost:3000.



Feito com 💙 por Lucas Bonan
