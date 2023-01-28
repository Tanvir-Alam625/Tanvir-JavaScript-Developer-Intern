import "../css/style.css";


// variables 
const parentDiv = document.querySelector('.parent-div');
const carouselContainer = document.querySelector('.carousel-container');
const indicatorsContainer = document.getElementById('indicators-container')
const modalContainer = document.getElementById('modal-container')
const modalClose = document.getElementById('modal-close')
const prevButton = document.getElementById('prev-btn')
const nextButton = document.getElementById('next-btn')
const modalPrevButton = document.getElementById('modal-prev-btn')
const modalNextButton = document.getElementById('modal-next-btn')
const carouselItems = document.querySelectorAll('.carousel-item');
const modalCarouselItems = document.querySelectorAll('.modal-carousel-item');
const modalCarouselContainer = document.querySelector('.modal-carousel-container');
const indicators = document.querySelectorAll('.indicator');
// necessary variables 
let index = 0;
let modalIndex = 0;
let carouselWidth  = carouselItems[index].clientWidth;
let modalCarouselWidth  = modalCarouselItems[index].clientWidth;
let carouselLength = carouselItems.length - 1; 
let convertCarouselItems = Array.from(carouselItems);
let convertIndicators = Array.from(indicators);




// =================================
// start the function definations 
// =================================


// indicators event function 
convertIndicators.map((indicator,index)=>{
        indicator.addEventListener('click', ()=>{
                getActiveIndicator(indicator)
                carouselContainer.style.transform = `translate(-${index * carouselWidth + 1}px)`;
        })
})

// active indicator function 
const getActiveIndicator = (active) =>{
        active.style.background = 'rgba(1,114,232,1)';
        const filteredIndicators = convertIndicators.filter((indicator)=> indicator !== active);
        filteredIndicators.forEach(indicator => {
                indicator.style.background = '#fff';
        });
}


// window resize function 
const getCarouselWidth = () => {
        carouselWidth = carouselItems[index].clientWidth;
}
// button next function 
const getNextCarousel = () => {
        index++;
        if (index > carouselLength){
                index = 0;
                carouselContainer.style.transform = `translate(0px)`;
                let activeIndicator = convertIndicators[index];
                getActiveIndicator(activeIndicator);
        }else{
                carouselContainer.style.transform = `translate(-${index * carouselWidth + 1}px)`;
                let activeIndicator = convertIndicators[index];
                getActiveIndicator(activeIndicator);
        }
}
// button previous function
const getPrevCarousel = () => {
        index--;
        if (index < 0){
                index = carouselLength;
                carouselContainer.style.transform = `translate(-${index * carouselWidth + 1}px)`;
                let activeIndicator = convertIndicators[index];
                getActiveIndicator(activeIndicator);
        }else{
                carouselContainer.style.transform = `translate(-${index * carouselWidth + 1}px)`;
                let activeIndicator = convertIndicators[index];
                getActiveIndicator(activeIndicator);
        }
}
// =================================
// end the function definations 
// =================================


// start the functions calling 
window.onresize = getCarouselWidth;
nextButton.addEventListener('click', getNextCarousel)
prevButton.addEventListener('click', getPrevCarousel)
//  for  carousel items auto slide 
let autoPlay = setInterval(getNextCarousel, 2000);


// once mouse over the parent div  auto slide off 
parentDiv.addEventListener('mouseover', ()=>{
        clearInterval(autoPlay)
})
// once mouse out the parent div  auto slide on 
parentDiv.addEventListener('mouseout', ()=>{
        autoPlay = setInterval(getNextCarousel, 2000);
})


// modal event function 
convertCarouselItems.map((carousel,index)=> {
        carousel.addEventListener('click', ()=>{
                modalIndex =index;
                // is modal initial Index  value  zero 
                getShowHideBtn();
                modalContainer.style.transform  = 'scale(1)';
                modalCarouselContainer.style.transform = `translate(-${index * modalCarouselWidth}px)`;
        })
})


// close modal 
modalClose.addEventListener('click', ()=>{
        modalContainer.style.transform  = 'scale(0)';
})

// modal button show hide function 
const getShowHideBtn = () => {
        console.log(modalIndex);
        modalIndex === 0 ? modalPrevButton.style.display = 'none': modalPrevButton.style.display = 'block';
        modalIndex === modalCarouselItems.length -1 ? modalNextButton.style.display = 'none': modalNextButton.style.display = 'block';
}

// modal prev button 
modalPrevButton.addEventListener('click', (e)=>{
        if (modalIndex >= 0 ) {
                modalIndex--;
                modalCarouselContainer.style.transform = `translate(-${modalIndex * modalCarouselWidth}px)`;
                getShowHideBtn();
        }
})
// modal next button 
modalNextButton.addEventListener('click', (e)=>{
        if (modalIndex < modalCarouselItems.length -1 ) {
                modalIndex++;
                modalCarouselContainer.style.transform = `translate(-${modalIndex * modalCarouselWidth}px)`;
                getShowHideBtn();
        }
})
