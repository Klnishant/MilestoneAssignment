function unitConverter() {
    const celcius=document.getElementById("celcius").value;
    const result=document.getElementById("result");

    farenheit=(celcius*9/5)+32;

    result.innerText=`Temprature in farenheit:${farenheit}`
    result.style.fontSize="20px"
    result.style.fontWeight="600"
}