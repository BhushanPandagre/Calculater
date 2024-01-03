
function mydel()
{
    let mystr=document.getElementById("txt").value;
    let ans=mystr.substr(0,mystr.length-1);
    document.getElementById("txt").value=ans;
}

