const loginf=document.querySelector("#login")
const crt=document.querySelector("#reg")

console.log(document.querySelector("#log_f").style)


console.log(document.querySelector("#log_f").style.right)

loginf.addEventListener("click",()=>{

    if(document.querySelector("#log_f").style.display==""){
        console.log("hhhhhhhhhh")
        document.querySelector("#log_f").style.display="inline"
        document.querySelector("#log_f").style.height="390px"
        document.querySelector("#log_sheet").style.margin="auto"
    }

    else if(document.querySelector("#log_f").style.display=="inline" && document.querySelector("#log_f").style.height=="500px" ){
        document.querySelector("#log_f").style.display="inline"
        document.querySelector("#log_f").style.height="390px"
        document.querySelector("#log_sheet").style.margin="auto"
        document.querySelector("#log_sheet").style.transform="translateY(0)"
    }
    else{
        document.querySelector("#log_f").style.display=''
        console.log("else",document.querySelector("#log_f").style.right)
    }

})
crt.addEventListener("click",()=>{
    

    if(document.querySelector("#log_f").style.display==""){
        document.querySelector("#log_f").style.display="inline"
        document.querySelector("#log_sheet").style.transform="translateY(-390px)"
        document.querySelector("#log_f").style.height="500px"
        document.querySelector("#log_sheet").style.margin="auto"
        console.log("if",document.querySelector("#log_f").style.right)
    }
    else if(document.querySelector("#log_f").style.display=="inline" && document.querySelector("#log_f").style.height=="390px" ){
        document.querySelector("#log_f").style.display="inline"
        document.querySelector("#log_sheet").style.transform="translateY(-390px)"
        document.querySelector("#log_f").style.height="500px"
        document.querySelector("#log_sheet").style.margin="auto"

    }
    else{
        document.querySelector("#log_f").style.display=''
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