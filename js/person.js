// document.addEventListener('DOMContentLoaded',()=>{
//     const urlParam = new URLSearchParams(window.location.search)
//     // console.log(urlParam.get('index'))
//     const paramIndex= urlParam.get('index')
//     //console.log(paramIndex) valor do index do parâmetro
//     const url = `https://gsi.fly.dev/characters${parseInt(paramIndex)+1}`
    
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
//         // <span class="raridade">rarity</span>
//         // <span class="arma">weapon</span>
//         // <span class="visão">vision</span>


//         const personagemImg = document.querySelector('.personagem-img')
//         const nome = document.querySelector('.nome')
//         const raridade = document.querySelector('.raridade')
//         const arma = document.querySelector('.arma')
//         const visao = document.querySelector('.visao')
    
//     personagemImg.src = `../image/perso${paramIndex}`
//         nome.innerHTML =`Nome :${item.name}`
//         raridade.innerHTML =`raridade:${item.rarity}`
//         arma.innerHTML =`arma:${item.waeapon}`
//         visao.innerHTML =`visao:${item.vision}`

//     }
// })