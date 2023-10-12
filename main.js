// format the active link
document.querySelectorAll("header a").forEach(function(link){
    link.addEventListener("click",function(){
        document.querySelectorAll("header a").forEach(function(a){
            a.classList.remove("active");
        })
    link.classList.add("active");
    });
});


// format beast sealers 
let slider = document.querySelector(".sellers .container .holder .slider ");
let icons = document.querySelectorAll(".sellers .container .holder .controle i ");
let unitWidth = document.querySelectorAll(".sellers .container .holder .slider .slide")[0].clientWidth + 30;
let scrollMax = slider.scrollWidth - slider.clientWidth;

icons.forEach(function(i){
    i.addEventListener("click",function(){
        if(i.classList.contains("move-r")){
            slider.scrollLeft -= unitWidth;
        }
        if(i.classList.contains("move-l")){
            slider.scrollLeft += unitWidth;
        }

    })
});


// format coches part 
let slider2 = document.querySelector(".coches .image ");
let icons2 = document.querySelectorAll(".coches .controle span ");
let unitWidth2 = document.querySelectorAll(".coches .image  .img")[0].clientWidth ;
let scrollMax2 = slider.scrollWidth - slider.clientWidth;
let paragefs = document.querySelectorAll(".coches .container .more .para p");
let spanName = document.querySelectorAll(".coches .container .more .name .n-s");


icons2.forEach(function(span,ind){
    span.addEventListener("click",function(){
        icons2.forEach(function(e){
            e.classList.remove("active");
        })
        //format the controle spans
        span.classList.add("active");
        //format the photo changs
        slider2.scrollLeft = unitWidth2 * ind;
        //format paragrafs change
        paragefs.forEach(function(ele){
            ele.classList.add("hidden");
            setTimeout(function(){
                ele.classList.remove("active");
                ele.classList.remove("hidden");
                paragefs[ind].classList.add("active");
            },300)

        })
        //format names change
        spanName.forEach(function(ele){
            ele.classList.add("hidden");
            setTimeout(function(){
                ele.classList.remove("active");
                ele.classList.remove("hidden");
                spanName[ind].classList.add("active");
            },300)

        })
    })
});

//format the shope part

let shSections = document.querySelectorAll(".shop .container .main .sections span ");
let shSliders = document.querySelectorAll(".shop .container .holder .slide");
shSections.forEach(function(span,ind){
    span.addEventListener("click",function(){
        shSections.forEach(function(spn){
            spn.classList.remove("active");
        })
        span.classList.add("active");

        //format slider change
        shSliders.forEach(function(ele){
        ele.classList.add("hidden");
        setTimeout(function(){
            ele.classList.remove("active");
            ele.classList.remove("hidden");
            shSliders[ind].classList.add("active");
        },300);
        
        })

    })
})