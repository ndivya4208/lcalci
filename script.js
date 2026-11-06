function love(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var res=Math.floor(Math.random()*100);
    var par=document.getElementById("par");
    par.innerHTML="The love between" +name1+ "and" +name2+ "is" +res + "%";
    if(res>=80){
        par.innerHTML="marriage is fixed";
    }else if(res>=60){
        par.innerHTML="good pair"
    }else if(res>=40){
        par.innerHTML="50-50"
    }else if(res>=20){
        par.innerHTML="try again"
    }else{
        par.innerHTML="dont even try---fogettt✌️"
    }
}