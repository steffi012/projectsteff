function getName(){
    let Name= prompt("Enter your name")
    alert("hey "+Name)
}
function changeStyle(){
    document.getElementById('p1').style.color="red"
    document.getElementById('p1').style.fontSize="20px"
    

}
function change(){
    document.getElementById("div1").style.display="none";
    document.getElementById("div2").style.display="block";
}
function flip(){
    if(document.getElementById("img1").src=="C:\Users\Lenovo\Desktop\st\images\gh.jpg"){
        document.getElementById("img1").src=="C:\Users\Lenovo\Desktop\st\images\download.jpg"
    }
    else{
        document.getElementById("img1").src=="C:\Users\Lenovo\Desktop\st\images\gh.jpg"
    }
}