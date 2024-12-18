function simpleAlert(){
    alert("simpleAlert")
}

function printMyName(){
    let name = document.getElementById("input").value
    if (name ===""){
        alert("Please Type your Name")
        return
    }
document.getElementById("output").innerHTML = name
}

function printAllCities(){
    document.getElementById("output").innerHTML="";
    let cities = ["Faisalabad","Lahore","Karachi","Islamabad","Burewala","Shekhupura","Kashmir"]
    for ( let i = 0 ; i < cities.length ; i++ 
         
    ){ console.log(i,cities[i])
    let num = i + 1;

    
    document.getElementById("output").innerHTML  += num + ")" + cities[i] + "<br>";}
}
function clearOutput(){
    document.getElementById("output").innerHTML = "";
}
function addYourCityInList() {
    let cityName = document.getElementById("input").value;
    if (cityName === "") {
        alert("Please Type your City Name");
        return;
    }

    // Initialize the cities array
    let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Shekhupura", "Kashmir"];
    
    // Add the new city to the cities array
    cities.push(cityName);

    // Clear the output element before displaying the updated list
    document.getElementById("output").innerHTML = "";

    // Display the updated list of cities
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById("output").innerHTML += num + ") " + cities[i] + "<br>";
        console.log(i,cities[i])
    }
}

function generateTable() {
    let table = document.getElementById("input").value;
    if (table === "") {
        alert("Please Enter which Number of Table you want");
        return;
    }
    
    // Clear the output element before displaying the updated list
    document.getElementById("output").innerHTML = "";
  
    // Display the multiplication table
    for (let i = 1; i < 11; i++) {
        let sum = table * i;
        // Append each result to the output
        document.getElementById("output").innerHTML += table + " * " + i + " = " + sum + "<br>";
        console.log(table, "*", i ,"=",sum);
    }
}
const clearInput = () => {
    document.getElementById("input").value = ""; // Clear the input field
}

const getInputValue = () => {
    return document.getElementById("input").value; // Return the current value of the input field
}
