# Documentação back-end 

## Sessão 1

- Lista

texto normal

> Está é uma citação

```python
def function(var1,var2)
    return var1 + var2
```

```bash
npm install
```

## Requisitos Funcionais

- Cadastro de Usuários: O sistema deve permitir que usuários se cadastrem, criando perfis que armazenem informações pessoais e preferências.
- Catálogo de Livros: um sistema de catalogação que permita aos usuários visualizar todos os livros disponíveis, como título, autor, preço, e disponibilidade.
- Sistema de Busca: uma funcionalidade de busca que permita aos usuários encontrar livros por título, autor ou gênero.
- Carrinho de Compras: Os usuários devem poder adicionar livros ao carrinho e finalizar as compras.
- Processamento de Pagamentos: deve ter métodos de pagamento seguros, como cartões de crédito, PayPal e etc.
- Gerenciamento de Pedidos: Os usuários devem poder acompanhar o status de seus pedidos, desde a confirmação até a entrega.
- Sistema de Avaliações e Comentários: Os usuários podem avaliar e comentar sobre os livros adquiridos.

## Requisitos Não Funcionais

- O sistema deve ser responsivo e acessível em diferentes dispositivos e navegadores
- O sistema deve ter um design intuitivo e fácil de usar
- O sistema vai ser seguro e  proteger os dados dos usuários
- O sistema vai ter um bom desempenho e carregar rapidamente
- O sistema vai ser capaz de lidar com um grande número de usuários e postagens.

## Dependências

- Typescript


## Análise de Riscos

- Falha no servidor ou no banco de dados
- Vulnerabilidades de segurança
- Problemas de compatibilidade com diferentes navegadores
- Dificuldade em escalar o sistema com o crescimento do número de usuários
- Problemas de desempenho devido a um grande número de postagens ou interações

## Comandos de Inicialização do TypeScript

1. Instale o TypeScript globalmente:

```bash
npm install -g typescript
```

2. Crie um novo projeto TypeScript:

```bash
tsc --init
```

3. Compile o código TypeScript:

```bash
tsc
```

4. Compile e observe alterações em tempo real:

```bash
tsc -w
```

5. Execute o código TypeScript compilado:

```bash
node app.js
```

Certifique-se de ter o Node.js instalado para executar o código TypeScript compilado.