const button = document.getElementById("button-convert")
const select = document.getElementById("select-coin")
const dolar = 5.06
const euro = 5.22
const bitcoin = 147256

const ConvertValues = () => {
    const inputReais = document.getElementById("input-value").value
    const valueRealAtt = document.getElementById("paragraph-value")
    const valueConvertedDólar = document.getElementById("paragraph-value-converted")
    
    if(select.value === "U$$ Dólar Americano"){
    valueConvertedDólar.innerHTML = new Intl.NumberFormat("en-US",
    { style: "currency", currency: "USD" }
    ).format(inputReais / dolar);
    }
    
    if(select.value === "€ Euro"){
    valueConvertedDólar.innerHTML = new Intl.NumberFormat("de-DE",
    { style: "currency", currency: "EUR" }
    ).format(inputReais / euro);
    }

    if(select.value === "Bitcoin") {
        valueConvertedDólar.innerHTML = Intl.NumberFormat('de-DE', 
    { style: 'currency', currency: 'XBT' }
    ).format(inputReais / bitcoin);
    }

    valueRealAtt.innerHTML =  new Intl.NumberFormat("pt-BR",
    { style: "currency", currency: "BRL" }
    ).format(inputReais);
}

const changeFlag = () => {
    const changeCoinText = document.getElementById("paragraph-changed-coin")
    const CurrentImg = document.getElementById("current-img")
    if(select.value === "€ Euro") {
        changeCoinText.innerHTML = "Euro"
        CurrentImg.src = "./assets/EURO.jpg"
    } 
    if(select.value === "U$$ Dólar Americano") {
        changeCoinText.innerHTML = "Dólar Americano"
        CurrentImg.src = "./assets/EUA.jpg"
    }
    if(select.value === "Bitcoin") {
        changeCoinText.innerHTML = "Bitcoin"
        CurrentImg.src = "./assets/Bitcoin.png"
    }
    ConvertValues()
}   

button.addEventListener("click", ConvertValues)
select.addEventListener("change", changeFlag)

