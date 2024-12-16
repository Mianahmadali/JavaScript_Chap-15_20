document.getElementById("Simple Alert").onclick = function(){
    alert("Simple Alert")
}

function PrintMyName(){
    let name = document.getElementById("input").value
    if (name ---""){
        alert("Please Type your Name")
        return
    }
document.getElementById("output").innerHTML = name
}
