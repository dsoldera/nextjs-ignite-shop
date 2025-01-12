## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Desafio 

Nesse desafio, vamos implementar um carrinho no nosso projeto, com a opção de adicionar e remover os itens antes de prosseguir ao checkout.

## Sobre o desafio

Nesse desafio, você vai aproveitar a aplicação que já desenvolvemos na trilha para implementar um carrinho que utilizará os dados da API do Stripe para buscar os itens existentes, e controlará, através da sua aplicação, o número de itens que a pessoa deseja comprar.

- [x] Você utilizará a listagem já criada pela aplicação, mas adicionará a possibilidade de adicionar aquele item ao carrinho na página do produto.
- [x] Salvar todos os itens selecionados em sua aplicação, e exibir o número de itens no carrinho
- [x] Enviar o carrinho que você armazenou na aplicação para a rota de checkout, onde irá gerar a sessão de checkout com os ``line_items`` necessários.

Para completar esse desafio você vai  precisar de realizar algumas pesquisas para entender sobre a API do Stripe.

## Figma

https://www.figma.com/design/iqumXPsyWW1ACtLtwyufec/Ignite-Shop-2.0-%E2%80%A2-Desafio-React-(Copy)?node-id=0-1&node-type=canvas&t=mtZSfdmFaSELJ6QZ-0

## Stripe

Para desenvolver esse projeto, você utilizará a aplicação base desenvolvida durante a aula.

Para armazenar os itens no carrinho, você pode fazer isso da maneira que preferir, por exemplo utilizando uma Context API para salvar os itens, ou utilizar a biblioteca [use-shopping-cart](https://www.npmjs.com/package/use-shopping-cart) que já possui diversas facilitações para essa lógica.

Você pode encontrar mais sobre o use-shopping cart [**clicando aqui.**](https://useshoppingcart.com/docs/welcome/getting-started-serverless)

⚠️ Atenção: Apesar de você conseguir realizar isso da maneira que preferir, é importante seguir sempre a [documentação do stripe](https://stripe.com/docs/api/checkout/sessions/create) para enviar os dados de checkout com o formato correto.
