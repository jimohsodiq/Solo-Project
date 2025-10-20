let convertBtn = document.getElementById("btn")
let value = []
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
let valueEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function(){
    console.log("I have been clicked")
    value.push(valueEl.value)
    convert(value)
    valueEl.value= ""
})

function convert(conv){
    let lengthConvs = ""
    let volumeConvs = ""
    let massConvs = ""  
    for(let i = 0; i < conv.length; i++){
        let currentValue = conv[i]
        
        lengthConvs = `
            <h3>Length(Meter/Feet)</h3>
            <p>
                ${currentValue} meters = ${metresToFeet(currentValue).toFixed(3)} feet | ${currentValue} feet = ${feetToMetres(currentValue).toFixed(3)} meters
            </p>
        `
        
        volumeConvs = `
            <h3>Volume(Liters/Gallons)</h3>
            <p>
                ${currentValue} liters = ${litersToGallons(currentValue).toFixed(3)} gallons | ${currentValue} gallons = ${gallonsToLiters(currentValue).toFixed(3)} liters
            </p>
        `
        
        massConvs = `
            <h3>Mass(Kilograms/Pounds)</h3>
            <p>
                ${currentValue} kilograms = ${kilogramsToPounds(currentValue).toFixed(3)} pounds | ${currentValue} pounds = ${poundsToKilograms(currentValue).toFixed(3)} kilograms
            </p>
        `
    }
    lengthEl.innerHTML = lengthConvs
    volumeEl.innerHTML = volumeConvs
    massEl.innerHTML = massConvs
}
    

function metresToFeet(value){
    return value * 3.28084
}

function feetToMetres(value){
    return value / 3.28084
}

function litersToGallons(value){
    return value * 0.264172
}

function gallonsToLiters(value){
    return value / 0.264172
}

function kilogramsToPounds(value){
    return value * 2.20462
}

function poundsToKilograms(value){
    return value / 2.20462
}