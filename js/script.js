const doces = [
  { nome: "Brigadeiro", preco: 3 },
  { nome: "Beijinho", preco: 3 },
  { nome: "Cajuzinho", preco: 4 },
  { nome: "Pão de Mel", preco: 5 },
  { nome: "Trufa", preco: 6 },
  { nome: "Brownie", preco: 7 }
];

const cardapioDiv = document.getElementById('cardapio');

doces.forEach((doc, idx) => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <h3>${doc.nome}</h3>
    <p>R$ ${doc.preco.toFixed(2)}</p>
    <label>Quantidade:</label>
    <input type="number" min="0" value="0" id="qtd${idx}" onchange="atualizarTotal()">
    <label>Observações:</label>
    <input type="text" id="obs${idx}" placeholder="Ex: sem açúcar, mais recheio">
  `;
  cardapioDiv.appendChild(div);
});

function atualizarTotal() {
  let total = 0;
  doces.forEach((doc, idx) => {
    const qtd = parseInt(document.getElementById(`qtd${idx}`).value) || 0;
    total += qtd * doc.preco;
  });
  document.getElementById('total').innerText = total.toFixed(2);
}

function enviarWhatsApp() {
  let mensagem = "Olá, gostaria de fazer o pedido:%0A";
  let total = 0;
  doces.forEach((doc, idx) => {
    const qtd = parseInt(document.getElementById(`qtd${idx}`).value) || 0;
    const obs = document.getElementById(`obs${idx}`).value;
    if(qtd > 0){
      mensagem += `- ${doc.nome} x${qtd}`;
      if(obs) mensagem += ` (${obs})`;
      mensagem += "%0A";
      total += qtd * doc.preco;
    }
  });
  mensagem += `Total: R$ ${total.toFixed(2)}`;
  const telefone = "5585989080542"; // Coloque seu número com código do país
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
}
