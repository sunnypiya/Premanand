const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".To select");
const msg = document.querySelector(".msg");

for (let select of dropdown) {
  for (let code in countryList) {
    let Newoption = document.createElement("option");
    Newoption.innerText = code;
    Newoption.value = code;
    if(select.name==="from"&& code==="USD"){
        Newoption.selected="selected";
    }else if(select.name==="To"&& code==="INR"){
        Newoption.selected="selected";
    }
    select.append(Newoption);
    // console.log(code)
  } 
  // console.log(select)
  select.addEventListener("change",(evnt)=>{
    // console.log(evnt)
 UPdateflag(evnt.target);
  });
}

const UPdateflag=(element)=>{
    // console.log(element)
    let currcode=element.value;
    // console.log(currcode)
    let countrycode = countryList[currcode];
    let NewSrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = NewSrc;
    // console.log(currcode)
}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if(amtval ===""||amtval<1){
        amtval = 1;
        amount.value = "1";
    }

    // console.log(fromcurr.value,tocurr.value);
   const URL =`${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
   let respons = await fetch(URL);
  //  console.log(respons);
   let exchangeRate = await respons.json();
   console.log(exchangeRate);
   let Rate = exchangeRate[tocurr.value.toLowerCase()];
   console.log(Rate);

   let finalamount= amtval*Rate;
   console.log(finalamount);
   msg.innerText = `${amtval}${fromcurr.value} = ${finalamount}${tocurr.value}`
});


