let string = ""
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            // console.log(e.target.innerHTML);
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector("input").value = string;
        }
        else if(e.target.innerHTML == 'x'){
            /* let arr = string.split('');
            arr.pop();

            string = "";
            for(char of arr){
                string += char;
            } */

            string = string.slice(0, string.length - 1);
            
            // console.log(arr);
            // string = arr.remove();
            // string = arr.toString();
            document.querySelector("input").value = string;
        }
        else{
            // console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
});

let myStr = "hello";
// console.log(myStr.substring(0, myStr.length - 1));
console.log(myStr.slice(0, myStr.length - 1));
/* let arr = myStr.split('');
console.log(arr);
arr.pop();

let res = "";
for(char of arr){
    res += char;
    console.log(char);
}
console.log(res); */
// let lol = arr.toString();

// console.log(lol);

// Array.from(buttons).forEach(btn1)

// function btn2(e){
//     console.log(e.target);
// }

// function btn1(button){
//     button.addEventListener('click', btn2);
// }