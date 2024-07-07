import{i as c,S as m}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const g="23547596-77757707a75e05ac426ee1dd8",y="https://pixabay.com/api/",u=document.querySelector(".loader");function h(i){const o=new URLSearchParams({key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString(),s=`${y}?${o}`;return fetch(s).then(e=>{if(p(),console.log(e),!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.total===0&&e.totalHits===0)throw c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",color:"red",position:"topRight"}),new Error("No images found");return e}).finally(()=>b())}function p(){u.style.visibility="visible"}function b(){u.style.visibility="hidden"}function L(i){return i.hits.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:r,comments:n,downloads:d})=>`
        <div class="gallery-item">
             <a href="${s}" class="gallery-link">
              <img class="img" src="${o}" alt="${e}" />
            </a>
            <div class="gallery-text-container">
            <p class="gallery-text"><b>Likes </b>${t}</p>
            <p class="gallery-text"><b>Views </b>${r}</p>
            <p class="gallery-text"><b>Comments </b>${n}</p>
            <p class="gallery-text"><b>Downloads </b>${d}</p>
            </div>
      </div>
      
      `).join("")}const f=document.querySelector(".form"),a=document.querySelector(".gallery");let l;f.addEventListener("submit",w);function w(i){i.preventDefault();const s=i.currentTarget.elements.text.value.toLowerCase();if(s===""){c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"black",color:"red",position:"topRight"});return}h(s).then(e=>{a.innerHTML="",a.insertAdjacentHTML("beforeend",L(e)),l=new m(".gallery a",{}),l.refresh()}).catch(e=>console.log(e)).finally(()=>f.reset())}
//# sourceMappingURL=commonHelpers.js.map
