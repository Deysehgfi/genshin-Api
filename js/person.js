 document.addEventListener('DOMContentLoaded',()=>{
     const urlParam = new URLSearchParams(window.location.search)
    //  console.log(urlParam.get('index'))
   const paramIndex= urlParam.get('index')
//    divPersonagens.innerHTML= `
//    <div class = "personagem-caixa">
//         <img class="img-personagem" src= "./img/foto${index}.jpg">
//        <div> 
//            <h3 class="name-person">${item.name}</h3>
//         </div> 
//    </div>`;
   
    //console.log(paramIndex) valor do index do parâmetro
  const url = `https://gsi.fly.dev/characters/${parseInt(paramIndex)+1}/`
    
    fetch(url)
    .then((Response)=>{
         if(!Response.ok){
             throw new Error('Error de rewde: código'+ Response.status)
             
     }
         return Response.json()
     })
    .then((data)=>{
       personagem(data.slice0,6)
       
 divPersonagens.innerHTML= `
 <div class = "personagem-dados">
      <img class="img-personagem" src= "./img/foto${index}.jpg">
     <div> 
         <h3 class="name-person">${item.name}</h3>
      </div> 
 </div>`;
    })
     .catch((err)=>console.log(err))

    
     function personagem(item){
        // <span class="raridade">rarity</span>
        // <span class="arma">weapon</span>
        // <span class="visão">vision</span>



        // <span class="resultado">result</span>
        // <span class="raridade">rarity</span>
        // <span class="arma">weapon</span>
        // <span class="visao">vision</span>
        // <span class="modelo">modeltype</span>
        // <span class="aniversario">birthday</span>
        // <span class="constelacao">constellation</span>

        const personagemImg = document.querySelector('.personagem-img')
        const nome = document.querySelector('.nome')
        const raridade = document.querySelector('.raridade')
        const arma = document.querySelector('.arma')
        const visao = document.querySelector('.visao')
        const modelo = document.querySelector('.modelo')
        const aniversario = document.querySelector('.aniversario')
        const constelacao = document.querySelector('.constelacao')

    personagemImg.src = `./img/foto${paramIndex}.jpg`
        nome.innerHTML =`Nome :${item.name}`
        raridade.innerHTML =`Raridade :${item.rarity}`
        arma.innerHTML =`Arma :${item.weapon}[]`
        visao.innerHTML =`Visão:${item.vision}`
        modelo.innerHTML =`Modelo:${item.model_type}`
        aniversario.innerHTML =`Aniversário:${item.birthday}`
        constelacao.innerHTML =`constelação:${item.constellation}`
       

   }
 })

 
//  divPersonagens.innerHTML= `
//  <div class = "personagem-dados">
//       <img class="img-personagem" src= "./img/foto${index}.jpg">
//      <div> 
//          <h3 class="name-person">${item.name}</h3>
//       </div> 
//  </div>`;

// const page = 1
// const baseURL = "https://gsi.fly.dev/";
// const loadCharacter = async ()=> {
//     const res = await fetch(`${baseUrl}character?page=${page}`);
//     const data = await res.json();
//     const limitData = data.results.slice(0,6)
//      return  { results:limitData}
     
// };
// const loadperson = async () => {
//     const res = await fetch(`${baseUrl}/character?${id.character}`)
//     return await res.json()};


// const loadAllWithPromiseAll = async () => {
//     const[character,person] = await Promise.all([
// loadCharacter(),
// loadperson(),])

// console.log("character", character)
// console.log("person", person)}

// document.addEventListener('DOMContentLoaded',()=>{
//     const urlParam = new URLSearchParams(window.location.search)
//     // console.log(urlParam.get('index'))
//     const paramIndex= urlParam.get('index')
//     //console.log(paramIndex) valor do index do parâmetro
//     const url = `https://gsi.fly.dev/character${parseInt(paramIndex)+1}`
    
//     fetch(url)
//     .then((Response)=>{
//         if(!Response.ok){
//             throw new Error('Error de rewde: código'+ Response.status)
//     }
//         return Response.json()
//     })
//     .then((data)=>{
//        personagem(data)//
//     })
//     .catch((err)=>console.log(err))
//     function personagem(item){
//         const personagemImg = document.querySelector('.personagem-img')
//         const nome = document.querySelector('.nome')
//         const raridade = document.querySelector('.raridade')
//         const arma = document.querySelector('.arma')
//         const visao = document.querySelector('.visao')
//         const modelo = document.querySelector('.modelo')
//         const aniversario = document.querySelector('.aniversario')
//         const constelacao = document.querySelector('.constelacao')

//     personagemImg.src = `./img/foto${paramIndex}.jpg`
//         nome.innerHTML =`Nome :${item.name}`
//         raridade.innerHTML =`Raridade :${item.rarity}`
//         arma.innerHTML =`Arma :${item.weapon}kg`
//         visao.innerHTML =`genero:${item.vision}`
//         modelo.innerHTML =`cor do cabelo :${item.model_type}`
//         aniversario.innerHTML =`cor dos olhos :${item.birthday}`
//         constelacao.innerHTML =`cor da pele :${item.constellation}`
       
//     }
// })




