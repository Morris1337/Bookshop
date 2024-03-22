(()=>{"use strict";let e=parseInt(localStorage.getItem("bookCount"))||0;const t=document.querySelectorAll(".shop"),n=document.querySelectorAll(".cartItemCount");function o(){n.forEach((t=>{t.textContent=e}))}function c(c){c?e>0&&e--:e++,t.forEach((e=>{e.classList.add("in")})),o(),n.forEach((t=>{t.textContent=e})),localStorage.setItem("bookCount",e.toString()),0===e&&t.forEach((e=>{e.classList.remove("in")}))}o();const l="Books";let s=JSON.parse(localStorage.getItem(l));let i=0,a="Architecture";const r=document.querySelector(".guud-section"),d=document.querySelector(".more-books-block");let u="";function m(e){e!==u&&(r.innerHTML="",u=e,i=0),fetch(`https://www.googleapis.com/books/v1/volumes?key=AIzaSyCI1HC6K97kM3xGytOBR8bOoy0P9Q3UoxM&maxResults=6&printType=books&q=+subject:${e}&startIndex=${i}`).then((e=>e.json())).then((e=>{console.log(e),e.items.forEach((e=>{!function(e){const t=document.createElement("div");t.classList.add("guud-list");const n=document.createElement("div"),o=document.createElement("img");e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.thumbnail?o.src=e.volumeInfo.imageLinks.thumbnail:o.alt="Book-image",n.appendChild(o),r.appendChild(n);const i=document.createElement("div");i.classList.add("guud-info");const a=document.createElement("p");a.textContent=e.volumeInfo.authors;const d=document.createElement("h2");d.textContent=e.volumeInfo.title;const u=document.createElement("div");u.classList.add("info-statistic");const m=document.createElement("p"),f=document.createElement("div");console.log(e.volumeInfo.averageRating);const p=e.volumeInfo.averageRating;if(e.volumeInfo.averageRating){for(let e=0;e<p;e++){const e=document.createElement("img");e.classList.add("infoImg"),e.src="../img/ICON/StarGold.png",f.appendChild(e)}m.textContent=e.volumeInfo.ratingsCount+" review"}else f.innerHTML="";u.appendChild(f),u.appendChild(m);const h=document.createElement("p");h.textContent=e.volumeInfo.description;h.style.display="-webkit-box",h.style.WebkitBoxOrient="vertical",h.style.overflow="hidden",h.style.webkitLineClamp=3;const g=document.createElement("div");g.classList.add("infoPrice");const v=document.createElement("h3"),C=document.createElement("h3");e.saleInfo&&e.saleInfo.retailPrice&&e.saleInfo.retailPrice.amount?(C.textContent=e.saleInfo.retailPrice.amount,e.saleInfo&&e.saleInfo.retailPrice&&"EUR"===e.saleInfo.retailPrice.currencyCode?v.textContent="€":e.saleInfo&&e.saleInfo.retailPrice&&"USD"===e.saleInfo.retailPrice.currencyCode?v.textContent="$":e.saleInfo&&e.saleInfo.retailPrice&&"RUB"===e.saleInfo.retailPrice.currencyCode&&(v.textContent="₽")):C.innerHTML="";const I=document.querySelector(".shop"),L=function(e,t){const n=document.createElement("button");n.textContent="BUY NOW";let o=!1;return s&&s.includes(e)&&(o=!0,n.textContent="IN THE CART",t.classList.add("in")),console.log(s,e),n.classList.add("btnBuy"),n.addEventListener("click",(()=>{c(o),o=!o,function(e,t){t?(s?s.push(e):s=[e],localStorage.setItem(l,JSON.stringify(s))):(s=s.filter((t=>t!==e)),localStorage.setItem(l,JSON.stringify(s))),console.log(s)}(e,o),o?(n.textContent="IN THE CART",t.classList.add("in")):n.textContent="BUY NOW"})),n}(e.id,I);i.appendChild(a),i.appendChild(d),i.appendChild(u),i.appendChild(h),i.appendChild(g),g.appendChild(v),g.appendChild(C),i.appendChild(L),t.appendChild(n),t.appendChild(i),r.appendChild(t),setTimeout((()=>{t.classList.add("active")}),10)}(e)}))})).catch((e=>{console.error("Ошибка при загрузке книг:",e)}))}d.addEventListener("click",(()=>{m(a),i+=6})),s||(s=[]);const f=document.querySelectorAll(".category-li");let p=!1;f.forEach((e=>{e.addEventListener("click",(()=>{p=!0;const t=e.dataset.key;console.log(t,a),a=t,m(a),f.forEach((e=>{e.classList.remove("clicked")})),e.classList.add("clicked")}))})),m(a);const h=document.querySelector(".mobile-menu-icon"),g=document.querySelector(".mobile-menu-block");!function(){const e=document.querySelectorAll(".ellipse-circle"),t=document.querySelectorAll(".banner-img");let n=0;function o(o){t.forEach((e=>{e.classList.remove("active")})),t[o].classList.add("active"),e.forEach(((e,t)=>{t===n?e.classList.add("push"):e.classList.remove("push")}))}o(0),e.forEach(((e,t)=>{e.addEventListener("click",(()=>{n=t,o(t)}))}));let c=null;c=setInterval((()=>{n=(n+1)%t.length,o(n)}),5e3)}(),function(){const e=document.querySelector(".category");e.addEventListener("click",(()=>{e.classList.toggle("active")})),h.addEventListener("click",(()=>{g.classList.toggle("open")}))}(),function(){const e=document.querySelector("header");function t(){window.innerWidth>375?window.scrollY<=60?e.classList.remove("scroll"):e.classList.add("scroll"):e.classList.remove("scroll")}window.addEventListener("scroll",t),window.addEventListener("load",t),window.addEventListener("resize",t)}()})();