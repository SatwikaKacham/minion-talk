var btnTrans = document.querySelector("#btn-translate");
 var txtInput = document.querySelector("#text-input");
 var outPut = document.querySelector("#output");
 console.log(outPut);
 console.log(btnTrans);
console.log(txtInput);
 function urlLink(text){
  return  "https://api.funtranslations.com/translate/minion.json" +"?text=" + text
 }
 function errorHandler(error)
 {
     console.log("error occured: "+error);
     alert("ERROR!! Something wrong with the server try again after some time.");
 }
 function clickEvent() 
 {
    
    var textInput = txtInput.value;
    fetch(urlLink(textInput))
    .then(response => response.json())
    .then(json => outPut.innerText = json.contents.translated)
    .catch(errorHandler);
 };


 btnTrans.addEventListener("click", clickEvent)


