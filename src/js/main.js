import "../css/style.css";
import { data } from "./data";
const carouselContainer = document.getElementById("carousel-container");
const indicatorsContainer = document.getElementById("indicators-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let count = 0;
  prevBtn.style.display = "none";
  const getBtnHideShow = (count) =>{
    count === 0 ? prevBtn.style.display = "none" : prevBtn.style.display = "block";
    count === data.length - 1 ? nextBtn.style.display = "none" : nextBtn.style.display = "block";
  }
// previous button event listener function 
const getPrevBtnEvenListener = () => {
    if (count > 0) {
      count--;
      getBtnHideShow(count)
      getBtnHideShow(count)
        let li  =document.createElement('li')
        li.setAttribute('class', 'text-slate-100 min-w-full flex items-center flex-col')
        li.innerHTML = `
        <div class="avatar w-24 ">
          <img class="w-full h-full rounded-full object-contain bg-slate-200 " src="${data[count].img}" alt="team-member">
        </div>
        <h2 class="text-2xl capitalize my-1 font-semibold -tracking-wider">${data[count].name}</h2>
        <h6 class="text-xl tracking-tight font-extralight mb-1">${data[count].designation}</h6>
        <div class="contact-info ">
          <a href="#" class="mr-2 duration-300 ease-in-out hover:text-[#1299F6]">
            <i class="text-2xl fa-brands fa-square-facebook"></i>
          </a>
          <a href="#" class="mr-2 duration-300 ease-in-out hover:text-[#1DA1F2]">
            <i class="text-2xl fa-brands fa-square-twitter"></i>
          </a>
          <a href="#" class="mr-2 duration-300 ease-in-out hover:text-[#0A66C2]">
            <i class="text-2xl fa-brands fa-linkedin"></i>
          </a>
        </div>
          `;
         
        carouselContainer.textContent = "";
        carouselContainer.appendChild(li)
}
}
// next button event listener function 
const getNextBtnEventListener = () => {
    if (count < data.length - 1) {
        count++;
        getBtnHideShow(count)
        let li  =document.createElement('li')
        li.setAttribute('class', 'text-slate-100 min-w-full flex items-center flex-col')
        li.innerHTML = `
        <div class="avatar w-24 ">
          <img class="w-full h-full rounded-full object-contain bg-slate-200 " src="${data[count].img}" alt="team-member">
        </div>
        <h2 class="text-2xl capitalize my-1 font-semibold -tracking-wider">${data[count].name}</h2>
        <h6 class="text-xl tracking-tight font-extralight mb-1">${data[count].designation}</h6>
        <div class="contact-info ">
          <a href="#" class="mr-2 duration-300 ease-in-out hover:text-[#1299F6]">
            <i class="text-2xl fa-brands fa-square-facebook"></i>
          </a>
          <a href="#" class="mr-2 duration-300 ease-in-out hover:text-[#1DA1F2]">
            <i class="text-2xl fa-brands fa-square-twitter"></i>
          </a>
          <a href="#" class="mr-2 duration-300 ease-in-out hover:text-[#0A66C2]">
            <i class="text-2xl fa-brands fa-linkedin"></i>
          </a>
        </div>
          `;
         
        carouselContainer.textContent = "";
        carouselContainer.appendChild(li)
  }
}

  //   button event listener  
  nextBtn.addEventListener("click", getNextBtnEventListener );
  prevBtn.addEventListener("click", getPrevBtnEvenListener);
