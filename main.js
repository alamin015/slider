const slider_item = document.querySelectorAll(".slider_item");
console.log(slider_item);

let counter = 1;
let slider_length = slider_item.length;
setInterval(() => {
    counter++;
    let current = document.querySelector(".current");
    current.classList.remove("current");

    if(counter > slider_length){
        slider_item[0].classList.add("current");
        counter = 1;
    }else{
        current.nextElementSibling.classList.add("current");
    }
},3000);