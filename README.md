<h1 align="center">API Currency Conveter</h1>
<h1>Introducao</h1>
Este foi um projeto destinado para conversao de moedas, com as seguintes cotações : Euro, Dolar, Real. Só não isso como apresentação de cotações por gráfico e as reais cotações com API. Utilizando uma API do site Awesome-API, o site é feito com que o usuário entre com o valor e atráves da consulta à API faça o processor de conversao de moedas. A home de gráfico é exibida as últimas atualizações nos últimos 5 dias atrá. Depois, na home de cotações é feita uma consulta a API em tempo real.

## 【📹】 **Projeto no Figma**
Para inspiração do projeto, primeiro desenvolvemos um protótipo no figma, com 4 páginas, são elas : cotação, sidebar, visão geral e conversor. E nelas foram baseadas para o projeto real. O sidebar foi feito para navegação do usuário entre as telas, assim pode facilitar com que o usuário não se perca (e também questão de organização). Seguindo assim, com a página "Ações em Destaque" que serve para realizar a busca de das moedas feitas pela a API. Depois "Visao Geral" que foi feito um gráfico para com que o usuário faça um processo de consulta nos últimos 5 dias das cotações selecionadas pela a API. Finalizando assim, a paǵina "Conversor" que vai ser explica quando for apresetada o real projeto. 

https://user-images.githubusercontent.com/90520597/206915167-02dc275a-1734-446a-aaa0-6192cafa69ec.mp4

## 【🛠️】 **Tecnologias**

- [Javascript](https://docs.oracle.com/en/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [ChartJS](https://www.chartjs.org/)

## 【💡】 **API**

- [Awesome API](https://docs.awesomeapi.com.br/)

# Projeto Real

**Explicação do Projeto :**
> No `index.html` só apresenta um pequeno resumo da pagina, e a afinidade do projeto. Assim é usado a pergunta a pergunta "O que é projeto ?".

## **Página :**

### **1.1**
A parte mais importante é o conversor de moedas, aonde você entra com o valor e assim é convertido em qual moeda você deseja. Caso o valor do usuário seja menor que zero o campo com valor '' e null, ele vai alertar para você e inserir um campo vazio, pedindo para com que você digite o valor maior que zero. O valor é imprimido dentro da aŕea de conversão e assim funciona para todas as seguintes coatações.
### **1.2**
Assim que o usuário clica em cotações, nela poderar escolher qual cotação deseja, primeira coisa que é exibida na tela é o nome(tag h1) da cotação com a conversão, e embaixo tem os valores, código da moeda, valor unitário dela e assim por diante, as informações são "puxadas" de um arquivo json da API.
### **1.3**
Por último, tem a página "Visão Geral" que é exibido em uma tag html chamada canvas, usando uma biblioteca javascript chamada "chartjs", (infelizmente não foi conseguido colocar a api dentro do gráfico), então o gráfico é "manual", mas foi melhor para ganhar experiência. Voltando, o gráfico é exibido na sua barra lateral valores da cotação, e na barra embaixo do gráfico é exibido os dias que foram inseridos no gráfico. Assim, o gráfico faz uma comparação com os dias e os valores e gera o gráfico.

https://user-images.githubusercontent.com/90520597/206917695-310a389a-da5d-4f5c-a1f3-950698f83f88.mp4

## **Componentes :**

### **1.1**
O primeiro componente é sidebar, que foi desenvolvido para facilitar a navegação do usuário
