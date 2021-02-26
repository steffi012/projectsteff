function calculate(a,b,d)
{
    let result;
    if(d=="+"){       
        result=a+b
        console.log("sum=",result)
    }
    else if(d=="-"){
        result=a-b
        console.log("sub=",result)

    }
    else if(d=="/"){
        result=a/b
        console.log("div=",result)
    }
    else{
        result=a*b
        console.log("mul=",result)
    }
    return result

}
let data=calculate(10,20,"+")
console.log(data)
console.log(calculate(10,20,"-"))


let add=function(x,y){
    return x+y
}
console.log(add)

let result=add(1,2)
console.log(result)
let i=500
function outer(){
     i=100
     let s="hello"
    console.log("inside function outer")
    console.log(i)
    function inner(){
        console.log(s)
        let k=50
        console.log("inside function inner...")
        console.log(k)
    }
    inner()
}
outer()
console.log(i)