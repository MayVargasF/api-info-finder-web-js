"use strict";const listAnime=document.querySelector(".js_list_anime");let animes=[],favorites=[];function handleClickAnime(e){const i=e.currentTarget.id,n=animes.find(e=>e.mal_id.toString()===i.toString()),t=favorites.findIndex(e=>e.mal_id.toString()===i.toString());-1===t?favorites.push(n):favorites.splice(t,1),console.log(n),console.log(favorites),renderAnimes()}function listenerAnimes(){const e=document.querySelectorAll(".js_eachAnime");for(const i of e)i.addEventListener("click",handleClickAnime)}function renderAnimes(){let e="",i="";for(const n of animes){i=-1!==favorites.findIndex(e=>n.mal_id===e.mal_id)?"animeList--favorite":"",e+=`<li class="js_eachAnime ${i}" id="${n.mal_id}">`,e+='<div class="animeContainer">',e+=`<h3>${n.title}</h3>`,e+=`<img src=${imagePlaceholder(n)} alt="${n.title} cover"/>`,e+="</div></li>"}listAnime.innerHTML=e,listenerAnimes()}function imagePlaceholder(e){if("https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"!==e.images.jpg.image_url)return e.images.jpg.image_url}function getDataApi(){fetch("https://api.jikan.moe/v4/anime").then(e=>e.json()).then(e=>{animes=e.data,console.log(animes),renderAnimes()})}getDataApi();