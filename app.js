const form1 = document.getElementById('form-main')
const anum = document.getElementById('a-num');
const name = document.getElementById('name');



form1.addEventListener("submit",function(f){
    if(anum.value !="" && name.value !=""){
        location.href="detail.html";
    }






    f.preventDefault();
    f.stopPropagation;
})


