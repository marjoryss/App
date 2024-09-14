const {select} = require ("@inquirer/prompts")

const start = async () => {
    
    while (true) {
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar Meta",
                    value: "Cadastrar"
                },
                {
                    name: "Listar Metas",
                    value: "Listar"
                },
                {
                    name: "Sair",
                    value: "Sair"
                }
            ]
        })

        switch (opcao) {
            case "cadastrar":
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar") 
                break
            case "sair":
                console.log("Até a próxima!")
                return 
        } 
    }
}

start()

