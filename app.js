function animatedForm(){
    const arrows =document.querySelectorAll(".fa-arrow-down");
    
    arrows.forEach(arrow =>{
        arrow.addEventListener("click", ()=>{
            const input =arrow.previousElementSibling;
            const parent =arrow.parentElement;
            const next = parent.nextElementSibling;

           // console.log(input);

           // check for validation

           validateUser
        })
    })


}

function validateUser(user){
    if(user.value.length <6){
        console.log("Not enough character");
        error('rgb(189, 87, 87)');

    }else{
        error('rgb(87,189,130)');
        return true;
    }
}

function error(color){
document.body.style.backgroundColor=color;

}

animatedForm();