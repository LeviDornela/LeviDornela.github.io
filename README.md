# LeviDornela.github.io
# Doces da Maria - Site de Pedidos

## Estrutura de arquivos

- `index.html` : Página principal
- `css/style.css` : Estilos do site
- `js/script.js` : Lógica do site (JS)

## Como atualizar o cardápio

1. Abra `js/script.js`.
2. Adicione ou remova doces no array `doces`:
```javascript
const doces = [
  { nome: "Brigadeiro", preco: 3 },
  { nome: "Beijinho", preco: 3 }
];
