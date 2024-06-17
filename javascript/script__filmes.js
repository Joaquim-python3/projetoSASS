const objs = [
    {
        titulo: "O Poderoso Chefão",
        duracao: "175 minutos",
        sinopse: "A história da família mafiosa Corleone, liderada por Don Vito Corleone, e seu império do crime.",
        imagem: "https://m.media-amazon.com/images/I/51-NM6z5EEL._AC_SY679_.jpg"
    },
    {
        titulo: "Deadpool",
        duracao: "200 minutos",
        sinopse: "História do Deadpool",
        imagem: "/images/filmes/image__deadpool__launch.png"
    },
    {
        titulo: "Um Sonho de Liberdade",
        duracao: "142 minutos",
        sinopse: "A amizade entre dois prisioneiros ao longo de várias décadas em uma prisão dos Estados Unidos.",
        imagem: "https://m.media-amazon.com/images/I/51rggtPgmRL._AC_SY679_.jpg"
    },
    {
        titulo: "A Origem",
        duracao: "148 minutos",
        sinopse: "Um ladrão que invade os sonhos das pessoas para roubar segredos precisa realizar um último trabalho: implantar uma ideia na mente de alguém.",
        imagem: "https://m.media-amazon.com/images/I/51kzp75EXkL._AC_SY679_.jpg"
    },
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        duracao: "178 minutos",
        sinopse: "Frodo Baggins embarca em uma jornada épica para destruir um anel poderoso e maligno.",
        imagem: "https://m.media-amazon.com/images/I/51ZSP8M1SBL._AC_SY679_.jpg"
    },
    {
        titulo: "Pulp Fiction: Tempo de Violência",
        duracao: "154 minutos",
        sinopse: "Histórias entrelaçadas de dois assassinos de aluguel, um boxeador, a esposa de um gangster e dois pequenos criminosos.",
        imagem: "https://m.media-amazon.com/images/I/51VyoayK-cL._AC_SY679_.jpg"
    },
    {
        titulo: "Clube da Luta",
        duracao: "139 minutos",
        sinopse: "Um trabalhador insatisfeito e um vendedor de sabonetes formam um clube de luta clandestino que se transforma em algo maior.",
        imagem: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg"
    },
    {
        titulo: "Forrest Gump: O Contador de Histórias",
        duracao: "142 minutos",
        sinopse: "A vida extraordinária de um homem simples que, sem querer, testemunha e influencia momentos históricos dos Estados Unidos.",
        imagem: "https://m.media-amazon.com/images/I/61yH7t5a5NL._AC_SY679_.jpg"
    },
    {
        titulo: "Matrix",
        duracao: "136 minutos",
        sinopse: "Um hacker descobre a verdade sobre sua realidade e seu papel na guerra contra seus controladores.",
        imagem: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg"
    },
    {
        titulo: "Os Incríveis",
        duracao: "115 minutos",
        sinopse: "Uma família de super-heróis tenta viver uma vida normal enquanto enfrenta vilões e seus próprios problemas.",
        imagem: "https://m.media-amazon.com/images/I/51zLMzEXQKL._AC_SY679_.jpg"
    },
    {
        titulo: "Interestelar",
        duracao: "169 minutos",
        sinopse: "Exploradores espaciais viajam através de um buraco de minhoca em busca de um novo lar para a humanidade.",
        imagem: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg"
    },
    {
        titulo: "A Rede Social",
        duracao: "120 minutos",
        sinopse: "A história da criação do Facebook e as batalhas legais e pessoais enfrentadas pelo seu fundador, Mark Zuckerberg.",
        imagem: "https://m.media-amazon.com/images/I/51-1hON5tUL._AC_SY679_.jpg"
    }
];


function verFilmes(){

    //JSON
    // converser objeto para json
    const jsonData = JSON.stringify(objs);
    // console.log(jsonData);
    // console.log(typeof jsonData); //string
    
    // converter json para objeto javascript
    const objData = JSON.parse(jsonData);
    // console.log(objData);
    // console.log(typeof objData);
    
    objData.map((filme) =>{
        console.log(filme.titulo)
    });
}

function searchByNameMovieInJSON(name){
    var name;
    //JSON
    // converser objeto para json
    const jsonData = JSON.stringify(objs);
    // console.log(jsonData);
    // console.log(typeof jsonData); //string
    
    // converter json para objeto javascript
    const objData = JSON.parse(jsonData);
    // console.log(objData);
    // console.log(typeof objData);
    
    objData.map((filme) =>{

        if(name == filme.titulo){
            name = filme.titulo;
            console.log(name);
        }
    });

    return name;
}

function test(){
    document.getElementById("nome-filme").innerHTML = "Novo Nome";
}