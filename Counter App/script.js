const btn1 = document.querySelector(".btn-1");
const text = document.querySelector(".btn-2");
const btn3 = document.querySelector(".btn-3");


// btn1.addEventListener("click",sub);
// btn3.addEventListener("click",add);
// function sub(){
//     let value = +(text.innerText);
//     value = value - 1;
//     text.innerText = value;
// }
// function add(){
//     let value = +(text.innerText);
//     value = value + 1;
//     text.innerText = value;
// }



const btns = document.querySelector(".btns");
btns.addEventListener("click",operation);
function operation(e)
{
    if(e.target==btn1)
    {
        let value = +(text.innerText);
        value = value - 1;
        text.innerText = value;
    }
    else if(e.target==btn3)
    {
        let value = +(text.innerText);
        value = value + 1;
        text.innerText = value;
    }
}
