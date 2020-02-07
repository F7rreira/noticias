const APY_KEY = "2c96cecdcda74188ad28e01ef47f541e";
let noticia = document.getElementById("noticia");
let btnCarregar = document.getElementById("botao");
let config = {
    method: "GET"

}
//let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + APY_KEY, config)
  //  .then((resposta) => {
    //    return (resposta.json()) // função assincrona, 
    //})
    //.then((json) => {
      //  console.log(json.articles[0])
        //mostrarNaTela(json.articles)
    //})

  

    btnCarregar.onclick = () => {
    let resposta = fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + APY_KEY, config)
        .then((resposta) => {
            return resposta.json() // função assincrona, 
        })
        .then((json) => {
           
            mostrarNaTela(json.articles)
        })
        
        function mostrarNaTela(listaNoticias) {
            listaNoticias.forEach(text => {
                let nova = ` <div class="col-md-4">
                    <div class="card" style="width: 18rem;">
                        <img src="${text.urlToImage}" class="card-img-top" alt="descrição img">
        
                        <div class="card-body">
                            
                            <h5 class="text-center">${text.title}</h5>
                            
                            <p class="card-text text-justify"">
                            ${text.description}
                            </p>
        
                            <a href=" #" class="btn btn-primary">veja+</a>
                        </div>
        
                    </div>
                </div>`
                noticia.insertAdjacentHTML('beforeend', nova)
            })
        } 
     
    }


 