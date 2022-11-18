# Requisitos necessários:

1. Instalar o "node.js"
2. Instalar o "npm" (já vem com o node).

	Para verificar a versão basta, após as instalações, digitar no terminal:

		node -v
	
		npm -v

3. Instalar a biblioteca "http-server"

		npm install -g http-server

		npm ls -g (lista os pacotes instalados como *Global* )


# Comandos:

1. Criar o arquivo "index.html" através do Git Bash:

		touch index.html (cria, via Git Bash, arquivo limpo)
	
2. Executar o servidor http na pasta onde encontra-se o "index.html":
		
		http-server ./ (invoca, através do Git Bash, o servidor http em uma pasta específica)

