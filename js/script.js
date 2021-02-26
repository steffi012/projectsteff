let i=123; let j="123"
if(i===j)
{
    console.log("i and j are equal")
    console.log(i+j)
}
else if(typeof j=="string")
{
    let s=parseInt(j)
    console.log(typeof s)
}
elseif(typeof i=="number")
{
console.log(i**3)
}
    else{
    let sum=parseInt(j)+i
    console.log(sum)
}
console.log("After if-else block")