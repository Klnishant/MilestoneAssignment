function calculate(){
    const rent=document.getElementById("car").value;
    const days=document.getElementById("days").value;
    const result=document.getElementById("result");

    let total_rent=rent*days;

    result.innerText=`Total Rent:${total_rent}`;
    result.style.fontSize="20 px";
    result.style.fontWeight="600"
}