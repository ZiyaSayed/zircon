window.addEventListener("mouseover", coordinate);
const a_parent=document.querySelector(".a_parent");
const a_parent_2=document.querySelector(".a_parent_2");


a_parent.addEventListener("mouseover", function(e){
    a_parent.classList.add("active");
})

a_parent_2.addEventListener("mouseover", function(e){
    a_parent_2.classList.add("active");
})


function coordinate(event) {
 
    // clientX gives horizontal coordinate
    let x = event.clientX;

    // clientY gives vertical coordinates
    let y = event.clientY;
    
    if(x>101 || y>130)
        a_parent.classList.remove("active");

    if(x>220 || y>285 || x<100)
        a_parent_2.classList.remove("active");
 }

