class Pessoa{
	constructor(
		public nome,
		public endereco,
		public idade
		){}
}

interface IPessoa{
	nome: string;
	endereco: string;
	idade: number
}

function CadastroPessoa(person: IPessoa){
	return person.nome + " Foi Cadastrado com sucesso"
}