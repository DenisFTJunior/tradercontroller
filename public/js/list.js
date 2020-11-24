function colorChange (value){
    let obj = document.querySelector(".principal-div")
    if(value == "positive"){
       return obj.className = "principal-div is-green"
    }
    return obj.className = "principal-div is-red"
   
}

