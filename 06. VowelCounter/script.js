function countVowels(){
    let first_name=document.getElementById("first_name").value;
    let last_name=document.getElementById("last_name").value;
    let count=0;

    for(let i=0;i<first_name.length;i++){
        if(first_name.charAt(i)=='a' || first_name.charAt(i)=='e' || first_name.charAt(i)=='i' || first_name.charAt(i)=='o' || first_name.charAt(i)=='u' ||
            first_name.charAt(i)=='A' || first_name.charAt(i)=='E' || first_name.charAt(i)=='I' || first_name.charAt(i)=='O' || first_name.charAt(i)=='U'){
                count++;
            }
    }

    for(let i=0;i<last_name.length;i++){
        if(last_name.charAt(i)=='a' || last_name.charAt(i)=='e' || last_name.charAt(i)=='i' || last_name.charAt(i)=='o' || last_name.charAt(i)=='u' ||
        last_name.charAt(i)=='A' || last_name.charAt(i)=='E' || last_name.charAt(i)=='I' || last_name.charAt(i)=='O' || last_name.charAt(i)=='U'){
                count++;
            }
    }

    document.getElementById("result").innerText=`Number of vowels in your name:${count}`;
}