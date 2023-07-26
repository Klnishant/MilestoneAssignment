
function captilized(){
    let first_name=document.getElementById("first_name").value;
    let last_name=document.getElementById("last_name").value;
    let result;

   let mod_first_name=first_name.charAt(0).toUpperCase() + first_name.slice(1)
   let mod_last_name=last_name.charAt(0).toUpperCase() + last_name.slice(1)

   result=mod_first_name+" "+mod_last_name

    document.getElementById("result").innerText=`Name:${result}`;
    console.log(result);
}