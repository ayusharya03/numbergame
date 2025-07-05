const decreasebtn = document.getElementById("decreasebtn")
const increasebtn = document.getElementById("increasebtn")
const resetbtn = document.getElementById("resetbtn")
const countlabel = document.getElementById("countlabel")
let count = 0;

increasebtn.addEventListener('click', ()=>{
    countlabel.innerHTML = count++;
})
decreasebtn.addEventListener('click', ()=>{
    countlabel.innerHTML = count--;
})

resetbtn.addEventListener('click', ()=>{
    countlabel.innerHTML = count = 0;
})
