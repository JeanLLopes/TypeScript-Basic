var Start = (function () {
    function Start() {
    }
    Start.main = function (mensagem) {
        return "Resultado: " + mensagem;
    };
    return Start;
})();
document.querySelector("#resultado").innerHTML =
    Start.main('Sua Mensagem em TypeScript');
