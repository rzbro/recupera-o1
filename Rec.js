let modeloTeclado = "Teclado Mecânico RGB";
let marca = "Redragon";
let preco = 250.90;
let temEstoque = true;


let lojasDisponiveis = ["Kabum", "Pichau", "Terabyte", "Amazon"];

console.log(`Quero comprar o ${modeloTeclado} da marca ${marca} por R$ ${preco}.`);

console.log(`Lojas que vendem: ${lojasDisponiveis.join(", ")}.`);

if (temEstoque) {
    console.log(`Boa! Tá disponível na ${lojasDisponiveis[0]}. Pode comprar tranquilo.`);
} else {
    console.log(`Poxa, esgotou em todas as lojas: ${lojasDisponiveis.join(", ")}. Vou ter que esperar.`);
}

let orcamento = 300.00; 
if (preco <= orcamento) {
    console.log(`O preço de R$ ${preco} cabe no seu orçamento de R$ ${orcamento}. Vale a pena!`);
} else {
    console.log(`O preço de R$ ${preco} tá acima do orçamento de R$ ${orcamento}. Melhor esperar uma promoção.`);
}
