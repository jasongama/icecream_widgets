var IceCreamTypeRadio = document.querySelectorAll(".IceCreamTypeRadio").value;
var ConeTypeRadio = document.querySelectorAll(".ConeTypeRadio").value;
var submitButton= document.querySelector("#addButton");

var iceCreamDom = IceCreamFactory();

var templateSources = document.querySelector(".ConsumerTemplate").innerHTML;

var userTemplate = Handlebars.compile(templateSources);

var userDataElem = document.querySelector(".icecream"); 


function iceCreamPop(){
    IceCreamTypeRadio = document.querySelectorAll(".IceCreamTypeRadio").value;
     ConeTypeRadio = document.querySelectorAll(".ConeTypeRadio").value
    
var userData2HTML = userTemplate({
    Contanier: iceCreamDom.addConCost(),
    Flovour:iceCreamDom.addFlovsCost(),
    TotalAmount:iceCreamDom.addIceCreamCost()
    
});
userDataElem.innerHTML = userData2HTML;
}

submitButton.addEventListener("click",iceCreamPop )