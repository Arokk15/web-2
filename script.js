const loginf=document.querySelector("#login")
const crt=document.querySelector("#reg")

console.log(loginf)


console.log(document.querySelector("#log_f").style.right)

loginf.addEventListener("click",()=>{

    if(document.querySelector("#log_f").style.right=="-500px"){
        console.log("hhhhhhhhhh")
        document.querySelector("#log_f").style.right="0"
        document.querySelector("#log_f").style.height="390px"
        document.querySelector("#log_sheet").style.margin="auto"
        console.log("if",document.querySelector("#log_f").style.right)
    }
    else{
        document.querySelector("#log_f").style.right="-500px"
        console.log("else",document.querySelector("#log_f").style.right)
    }

})
crt.addEventListener("click",()=>{

    if(document.querySelector("#log_f").style.right=="-500px"){
        console.log("hhhhhhhhhh")
        document.querySelector("#log_f").style.right="0"
        document.querySelector("#log_sheet").style.transform="translateY(-390px)"
        document.querySelector("#log_f").style.height="500px"
        document.querySelector("#log_sheet").style.margin="auto"
        console.log("if",document.querySelector("#log_f").style.right)
    }
    else{
        document.querySelector("#log_f").style.right="-500px"
        console.log("else",document.querySelector("#log_f").style.right)
    }

})




const cbt=document.querySelector("#btc")
const lbt=document.querySelector("#lbt")
console.log(cbt)
console.log(lbt)

cbt.addEventListener("click",()=>{
    console.log("aaaaaaa")
    document.querySelector("#log_sheet").style.transform="translateY(-390px)"
    document.querySelector("#log_f").style.height="500px"

})
lbt.addEventListener("click",()=>{
    console.log("aaaaaaa")
    document.querySelector("#log_sheet").style.transform="translateY(0)"
    document.querySelector("#log_f").style.height="390px"

})