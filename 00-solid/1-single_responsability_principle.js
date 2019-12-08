class Journal {
	constructor() {
		this.entries = {};
	}

	addEntry(text) {
		let counter = ++Journal.count;
		let entry = `${counter}: ${text}`;
		this.entries[counter] = entry;
		return counter;
	}

	removeEntry(index) {
		delete this.entries[index];
	}

	toString() {
		return Object.values(this.entries).join('\n')
	}

}

Journal.count = 0;
let journal = new Journal();
journal.addEntry('Foi foda, mas 2020 ta aí. Paciencia.');
journal.addEntry('Coragem e força. Perde aqui e ganha ali');
journal.addEntry('Imposição e respeito');
console.log(journal.toString())

// essa classe é responsável apenas pela edição do CRUD do jornal. 
// Se quiser funcionalidades que salvem os dados, por ex, será necessária a criação de outra classe.
