class Start{
	public static main(mensagem:string):string{
		return "Resultado: " + mensagem;
	}
}

document.querySelector("#resultado").innerHTML = 
					Start.main('Sua Mensagem em TypeScript');