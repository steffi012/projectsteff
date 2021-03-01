function addProduct(){


    let productid=document.getElementById("productid")
    let productname=document.getElementById("productname")
    let price=document.getElementById("price")

    if(productid.value==""){
        alert("id is an empty field")
        productid.focus()
        return false
    }

    if(productname.value==""){
        alert("name is an empty field")
        productname.focus()
        return false
    }

    if(price==""){
        alert("price is an empty field")
        price.focus()
        return false
    }
    let p=new productAdd(productid,productname,price)
    p1.show()

}

function productAdd(){

    this.productid=productid
    this.productname=productname
    this.price=price

    this.show=function(){
        console.log(`Product id=${this.productid}`)
        console.log(`Product name=${this.productname}`)
        console.log(`Price=${this.price}`)
    }
}



