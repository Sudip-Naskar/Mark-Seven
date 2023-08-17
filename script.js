var txtIn = document.querySelector("#txt-ip")
var btn = document.querySelector("#btn-translate")
var outDiv = document.querySelector("#txt-op")

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" [IT WAS A TEST API]
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"

function getURL(input){
    return serverURL+"?"+"text="+input
}

function errorHandler(){
    console.log("Error Occured!")
    alert("Something went wrong! Please try again after sometime.")
}

btn.addEventListener("click", function clickHandler(){
    var inpTxt = txtIn.value

    fetch(getURL(inpTxt))
        .then(response => response.json())
        .then(json =>{
            var data = json.contents.translated
            outDiv.innerText = data
        })
        .catch(errorHandler)
})