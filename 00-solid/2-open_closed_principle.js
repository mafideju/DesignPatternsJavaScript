// PRINCIPIO 02 => ABERTO PARA EXPANSÃO
//                 FECHADO PARA MODIFICAÇÃO
// Solução: criar classes de especificação e usar essas classes dentro da classe principal
// em OOP essas seriam classes abstratas.

let color = Object.freeze({
	red: 'red',
	green: 'green',
	blue: 'blue'
});

let size = Object.freeze({
	small: 'small',
	medium: 'medium',
	large: 'large'
});

class Product {
	constructor(name, color, size) {
		this.name = name;
		this.color = color;
		this.size = size;
	}
}

class FilterProducts {
	filterByColor(products, color){
		return products.filter(prod => prod.color === color);
	} 
	filterBySize(products, size) {
		return products.filter(prod => prod.size === size)
	}
}


let apple = new Product('Maça', color.green, size.small);
let tree = new Product('Árvore', color.green, size.large);
let house = new Product('Casa', color.blue, size.small);

let products = [apple, tree, house];
let filter = new FilterProducts();

for (let product of filter.filterByColor(products, color.green)) {
	console.log(`${product.name} é verde..`);
};
