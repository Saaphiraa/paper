var listaPatrocinadores = {
    ultimoIdGerado: 0,
    patrocinador:[

        { RegistroPatrocinadores: 2, CNPJ: '11111111115', Email: '5@hotmail.com', Celular: '52 99885-7969' },
        { RegistroPatrocinadores: 1, CNPJ: '5458462256556', Email: 'taiane@hotmail.com', Celular: '51 99885-7969' },
        { RegistroPatrocinadores: 3, CNPJ: '22222222225', Email: 'v@hotmail.com', Celular: '53 99885-7969' }
    ]
}


function render(){
    const tbody = document.getElementById("listaRegistroBody")
    if(tbody){
        tbody.innerHTML = listaPatrocinadores.patrocinador
        .sort( (a, b) =>{
            return a.RegistroPatrocinadores < b.RegistroPatrocinadores ? -1 : 1
        }

        )
            .map(patrocinador => {
                return `<tr>
                        <td> ${patrocinador.RegistroPatrocinadores} </td>
                        <td> ${patrocinador.CNPJ} </td>
                        <td> ${patrocinador.Email} </td>
                        <td> ${patrocinador.Celular} </td>
                    </tr>`
            } ).join('')
    }
}


function insertUser(CNPJ, Email, Celular){
    const RegistroPatrocinadores = listaPatrocinadores.ultimoIdGerado + 1;
    listaPatrocinadores.ultimoIdGerado = RegistroPatrocinadores;
    listaPatrocinadores.patrocinador.push( {
       RegistroPatrocinadores, CNPJ, Email, Celular
    })
    render()
    vizualizar('lista')

}

function editUser(RegistroPatrocinadores,CNPJ, Email, Celular){

}

function deleteUser(RegistroPatrocinadores){

}



function vizualizar(pagina) {
    document.body.setAttribute("page", pagina);
    if(pagina === "cadastro"){
        document.getElementById("CNPJ").focus()
    }
}

function submeter(e){
    e.preventDefault()
    const data = {
        RegistroPatrocinadores: document.getElementById ("Registro").value,
        CNPJ: document.getElementById ("CNPJ").value,
        Email: document.getElementById ("Email").value,
        Celular: document.getElementById ("Celular").value,
    }
    if(data.RegistroPatrocinadores){
        editUser(...data)
    }else{
        insertUser( data.CNPJ, data.Email, data.Celular )
    }
}

window.addEventListener('load',() => {
    render()
    document.getElementById("cadastroPatrocinadores").addEventListener("submit", submeter)
}
)

