!function(){let e=[];function t(){return e}$("#exampleModal").on("hidden.bs.modal",function(e){let t=$(".modal-body"),n=$(".modal-title");t.empty(),n.empty()}),fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(e){return e.json()}).then(function(t){t.results.forEach(function(t){var n;let i={name:t.name,detailsUrl:t.url,height:t.height,type:t.types};"object"==typeof(n=i)&&"name"in n?e.push(n):console.log("pokemon is not correct"),console.log(i)})}).catch(function(e){console.error(e)}).then(()=>{e.forEach(e=>{let t=document.createElement("li");t.classList.add("list-group-item"),t.innerText=e.name,t.addEventListener("click",()=>{(function e(t){(function e(t){let n=t.detailsUrl;return fetch(n).then(function(e){return e.json()}).then(function(e){t.imageUrlFront=e.sprites.front_default,t.imageUrlBack=e.sprites.back_default,t.height=e.height,t.types=e.types.map(e=>e.type.name),t.abilities=e.abilities.map(e=>e.ability.name)}).catch(function(e){console.error(e)})})(t).then(()=>{!function e(t){let n=$(".modal-body"),i=$(".modal-title");n.empty(),i.empty();let a=$(`<h1>${t.name}</h1>`),o=$(`<img class="modal-img" src="${t.imageUrlFront}">`),l=$(`<img class="modal-img" src="${t.imageUrlBack}">`),p=$(`<p>Height : ${t.height}</p>`),r=$(`<p>Types : ${t.types}</p>`),m=$(`<p>Abilities : ${t.abilities}</p>`);i.append(a),n.append(o),n.append(l),n.append(p),n.append(r),n.append(m)}(t)})})(e),$("#exampleModal").modal("show")}),$(".list-group").append(t)})})}();