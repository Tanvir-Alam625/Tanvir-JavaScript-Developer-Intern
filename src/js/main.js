import "../css/style.css";
//  all elements  
const carouselContainer = document.getElementById("carousel-container");
const indicatorsContainer = document.getElementById("indicators-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtnModal = document.getElementById("prev-btn-modal");
const nextBtnModal = document.getElementById("next-btn-modal");
const modalCarouselContainer =document.getElementById('modal-carousel-container');
const modalClose = document.getElementById('modal-close');
const carouselChildrens = carouselContainer.children;
const carouselItemsConvert = Array.from(carouselChildrens);
const modalCarouselItemsConvert = Array.from(modalCarouselContainer.children);
let count = 1;
let modalCount = 1;

// for active indicators function 
const activeIndicator = () => {
  let div = document.createElement("div");
  div.setAttribute("class", "flex");
  div.innerHTML = ` <i class="mr-2 ${
    count == 1 ? "fa-solid" : "fa-regular"
  } fa-circle"></i>
  <i class=" mr-2 ${count == 2 ? "fa-solid" : "fa-regular"} fa-circle"></i>
  <i class="mr-2 ${count == 3 ? "fa-solid" : "fa-regular"} fa-circle"></i>
  <i class="mr-2 ${count == 4 ? "fa-solid" : "fa-regular"} fa-circle"></i>
  <i class=" mr-2 ${count == 5 ? "fa-solid" : "fa-regular"} fa-circle"></i>
  <i class="${count == 6 ? "fa-solid" : "fa-regular"} fa-circle"></i>`;
  indicatorsContainer.textContent = "";
  indicatorsContainer.appendChild(div);
};
// carousel previouse event function 
const getPrevBtnEvenListener = () => {
  count < 1 ? (count = carouselChildrens.length - 1) : (count = count);
  const previousCarousel = carouselItemsConvert[count];
  const filterCarousel = carouselItemsConvert.filter(
    (caro) => caro !== previousCarousel
  );
  previousCarousel.style.display = "flex";
  previousCarousel.style.transition = "400s ease-in-out";
  filterCarousel.forEach((element) => {
    element.style.display = "none";
    element.style.transition = "400s ease-in-out";
  });
  count--;
  activeIndicator();
};
// next  event  function
const getNextBtnEventListener = () => {
  count > 5 ? (count = 0) : (count = count);
  const previousCarousel = carouselItemsConvert[count];
  const filterCarousel = carouselItemsConvert.filter(
    (caro) => caro !== previousCarousel
  );
  previousCarousel.style.display = "flex";
  previousCarousel.style.transition = "transform 400ms ease-in-out";
  filterCarousel.forEach((element) => {
    element.style.display = "none";
    element.style.transition = "transform 400ms ease-in-out";
  });
  count++;
  activeIndicator();
};
// modal previous event function 
const getPrevBtnEvenListenerModal = () => {
  modalCount < 1 ? (modalCount = carouselChildrens.length - 1) : (modalCount = modalCount);

  const previousCarousel = modalCarouselItemsConvert[modalCount];
  const filterCarousel = modalCarouselItemsConvert.filter(
    (caro) => caro !== previousCarousel
  );
  previousCarousel.style.display = "flex";
  previousCarousel.style.transition = "400s ease-in-out";
  filterCarousel.forEach((element) => {
    element.style.display = "none";
    element.style.transition = "400s ease-in-out";
  });
};
// modal event  function
const getNextBtnEventListenerModal = () => {
  modalCount > 5 ? (modalCount = 0) : (modalCount = modalCount);
  const previousCarousel = modalCarouselItemsConvert[modalCount];
  const filterCarousel = modalCarouselItemsConvert.filter(
    (caro) => caro !== previousCarousel
    );
  previousCarousel.style.display = "flex";
  filterCarousel.forEach((element) => {
    element.style.display = "none";
  });
  count++;
};

// auto play carousel 
let autoPlay = setInterval(getNextBtnEventListener, 1500);
// clear interval
let carouselItems = [...carouselItemsConvert, prevBtn, nextBtn];

carouselItems.forEach((item) => {
  // auto play carousel stop
  item.addEventListener("mouseover", () => {
    clearInterval(autoPlay);
  });
  // auto play carousel continue
  item.addEventListener("mouseout", () => {
    autoPlay = setInterval(getNextBtnEventListener, 1500);
  });
});
//  modal open 
carouselItemsConvert.map((item,index) =>{
  item.addEventListener('click', ()=>{
    let parentDiv =  modalCarouselContainer.parentNode.parentNode
    parentDiv.style.display = 'flex';
    modalCount = index
    let convertModalCarousel = Array.from(modalCarouselContainer.children);
    let activeCarousel = convertModalCarousel[index];
    activeCarousel.style.display = 'flex';
    let restCarousel = convertModalCarousel.filter(c => c !== activeCarousel);
    restCarousel.map(restC =>{
      restC.style.display = 'none';
    })
  })
})
//   all event listener
nextBtn.addEventListener("click", getNextBtnEventListener);
prevBtn.addEventListener("click", getPrevBtnEvenListener);
nextBtnModal.addEventListener("click", getNextBtnEventListenerModal);
prevBtnModal.addEventListener("click", getPrevBtnEvenListenerModal);
// modal close 
modalClose.addEventListener('click', ()=>{
  let parentDiv =  modalCarouselContainer.parentNode.parentNode
  parentDiv.style.display = 'none';
})

