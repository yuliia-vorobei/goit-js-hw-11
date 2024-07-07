import{i as c,S as m}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const y="23547596-77757707a75e05ac426ee1dd8",g="https://pixabay.com/api/",u=document.querySelector(".loader");function p(o){const s=new URLSearchParams({key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString(),i=`${g}?${s}`;return fetch(i).then(t=>{if(h(),console.log(t),!t.ok)throw new Error(t.status);return t.json()}).then(t=>{t.total===0&&t.totalHits===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",color:"red",position:"topRight"})}).finally(()=>b())}function h(){u.style.visibility="visible"}function b(){u.style.visibility="hidden"}function L(o){return console.log(o),o.hits.map(({webformatURL:s,largeImageURL:i,tags:t,likes:e,views:r,comments:n,downloads:d})=>`
        <div class="gallery-item">
             <a href="${i}" class="gallery-link">
              <img class="img" src="${s}" alt="${t}" />
            </a>
            <div class="gallery-text-container">
            <p class="gallery-text"><b>Likes </b>${e}</p>
            <p class="gallery-text"><b>Views </b>${r}</p>
            <p class="gallery-text"><b>Comments </b>${n}</p>
            <p class="gallery-text"><b>Downloads </b>${d}</p>
            </div>
      </div>
      
      `).join("")}const f=document.querySelector(".form"),l=document.querySelector(".gallery");let a;f.addEventListener("submit",v);function v(o){o.preventDefault();const i=o.currentTarget.elements.text.value.toLowerCase();if(i===""){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",color:"red",position:"topRight"});return}p(i).then(t=>{l.innerHTML="",l.insertAdjacentHTML("beforeend",L(t)),a=new m(".gallery a",{}),a.refresh()}).catch(t=>console.log(t)).finally(()=>f.reset())}
//# sourceMappingURL=commonHelpers.js.map
