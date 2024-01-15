let exp='';
let result=document.querySelector('.expression');
function fun(val){


    if (val==='clear') {
        exp='';
        result.innerHTML='';
    }
    else if(val==='=') {
        const r=eval(exp);
        if (r!=exp)
        result.innerHTML=r;
    }
    else{
        exp+=val;
        result.innerHTML=exp;
    }
    console.log(val,exp);
}