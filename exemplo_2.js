var Pessoa = (function () {
    function Pessoa(nome, endereco, idade) {
        this.nome = nome;
        this.endereco = endereco;
        this.idade = idade;
    }
    return Pessoa;
})();
function CadastroPessoa(person) {
    return person.nome + " Foi Cadastrado com sucesso";
}
