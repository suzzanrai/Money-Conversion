// // const URL = "GET https:/37151c32abc3356231b96a27/v6.exchangerate-api.com/v6//latest/USD"
// // const URL = "GET https://open.er-api.com/v6/latest/USD"

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const formCurr = document.querySelector(".form select");
// const toCurr = document.querySelector(".to select");
// const startDate = document.querySelector("#startDate ");
// const endDate = document.querySelector("#endDate ");
// // to see data of ContryCode.js
// // for(ContryCode in countryList){
// //     console.log(ContryCode ,countryList[ContryCode]);
// // }
// for (let select of dropdowns) {
//     for (let currCode in countryList) {
//         let newOption = document.createElement("option");
//         newOption.innerText = currCode;
//         newOption.value = currCode;

//         // logic to show first selected country code
//         if (select.name == "from" && currCode === "USD") {
//             newOption.selected = "selected";
//         }
//         else if (select.name == "to" && currCode === "NPR") {
//             newOption.selected = "selected";
//         }

//         select.append(newOption);
//     }


//     select.addEventListener("change", (evt) => {
//         updateFlag(evt.target);
//     });

// }
// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// };
// btn.addEventListener("click", async (evt) => {
//     evt.preventDefault();

//     let fromCurrency = formCurr.value;
//     let toCurrency = toCurr.value;
//     let amountInput = document.querySelector(".amount input");
//     let amount = parseFloat(amountInput.value);
//     console.log(amount);
    
//     // code to refress the enter amount and set to default
//     if (!amount || amount < 1) {
//         amount = 1;
//         amountInput.value = "1";
//     }

//     try {
//         const response = await fetch("https://open.er-api.com/v6/latest/USD");
//         if (!response.ok) {
//             throw new error("Fail to fetch exchange rates");
//         }
//         const data = await response.json();
        

//         // date fetch and make it is rsponsive form of date:
//         const startDate = data.time_last_update_utc;
//         const endDate = data.time_next_update_utc;

//         // calculate the exchange rate
//         const fromRate = data.rates[fromCurrency];
//         const toRate = data.rates[toCurrency];
//         const exchangeRate = toRate / fromRate;

//         const convertedAmount = (amount * exchangeRate).toFixed(2);
//         //Display the result
//         const output = document.getElementById("output");
//         output.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

//         // for date:
//         const startDateDiv = document.querySelector("#startDate")
//         const endDateDiv = document.querySelector("#endDate")

//         //DOM changing :
//         if (startDateDiv && endDateDiv){
//             startDateDiv.textContent = ` ${startDate}`;
//             endDateDiv.textContent = `${endDate}`;
//         }
//     }
//     catch (error) {
//         console.log("Error fetching or processing data:", error);
//         alert("Something went wrong while fetching exchange rates.");
//     }
   
//     // const URL =`URL`;
//     // console.log(formCurr.value, toCurr.value);
// });
// document.querySelector(".amount input").addEventListener("keypress",(evt)=>{
//     if (evt.key === "Enter"){
//         evt.preventDefault();
//         btn.click();
//     }
// });
















// const URL = "GET https:/37151c32abc3356231b96a27/v6.exchangerate-api.com/v6//latest/USD"
// const URL = "GET https://open.er-api.com/v6/latest/USD"

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const formCurr = document.querySelector(".form select");
const toCurr = document.querySelector(".to select");
const startDate = document.querySelector("#startDate ");
const endDate = document.querySelector("#endDate ");
// to see data of ContryCode.js
// for(ContryCode in countryList){
//     console.log(ContryCode ,countryList[ContryCode]);
// }
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        // logic to show first selected country code
        if (select.name == "from" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name == "to" && currCode === "NPR") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }


    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });

}
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

 const autoConvertCurrency = async () => {
    // evt.preventDefault();

    let fromCurrency = formCurr.value;
    let toCurrency = toCurr.value;
    let amountInput = document.querySelector(".amount input");
    let amount = parseFloat(amountInput.value);
    console.log(amount);
    
    // code to refress the enter amount and set to default
    if (!amount || amount < 1) {
        amount = 1;
        amountInput.value = "1";
    }

    try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        if (!response.ok) {
            throw new error("Fail to fetch exchange rates");
        }
        const data = await response.json();
        

        
        // calculate the exchange rate
        const fromRate = data.rates[fromCurrency];
        const toRate = data.rates[toCurrency];
        const exchangeRate = toRate / fromRate;

        const convertedAmount = (amount * exchangeRate).toFixed(2);
        //Display the result
        const output = document.getElementById("output");
        output.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

        // date fetch and make it is rsponsive form of date:
        const startDate = data.time_last_update_utc;
        const endDate = data.time_next_update_utc;

        // for date:
        const startDateDiv = document.querySelector("#startDate")
        const endDateDiv = document.querySelector("#endDate")

        //DOM changing :
        if (startDateDiv && endDateDiv){
            startDateDiv.textContent = ` ${startDate}`;
            endDateDiv.textContent = `${endDate}`;
        }
    }
    catch (error) {
        console.log("Error fetching or processing data:", error);
        alert("Something went wrong while fetching exchange rates.");
    }
   
    // const URL =`URL`;
    // console.log(formCurr.value, toCurr.value);
};
document.querySelector(".amount input").addEventListener("keypress",(evt)=>{
    if (evt.key === "Enter"){
        evt.preventDefault();
        btn.click();
    }
});
btn.addEventListener("click", async (evt) => {
        evt.preventDefault();
        await autoConvertCurrency();
});
formCurr.addEventListener("change", autoConvertCurrency);
toCurr.addEventListener("change",autoConvertCurrency);