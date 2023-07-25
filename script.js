let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click', (e)=>{
        if(e.target.innerHtml == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }

            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
    
    })
})