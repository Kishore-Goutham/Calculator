
let input = document.querySelector(".calc__sec1")


// input.value.append()doesnt exist.input is just a string.string doesnt have a append() method
// only DOM nodes (<div>,<p>...etc) has append method

function display(event){
    input.value += event.target.textContent;
}

function result(){
    input.value= eval(input.value);
}

function cancel(){
    input.value =" ";
}