var c=Math.random()*10000
var d=Math.round(c)
console.log(d);
var y=document.getElementById("display")
var form=document.getElementById("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    bye()
})
function otp(){
alert("otp is "+d+"\n"+"Don't share your otp ")
}
function bye(){
    var x=document.getElementById("check").value
    console.log(x)
if(x==d){
   y.innerText="otp is correct"
}else if(x===""){
    y.innerText="otp can't be blank"
}else{
    y.innerText="otp is incorrect"
}
}