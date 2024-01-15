const todolist=[];

function fun(){
    const name=document.querySelector('.js-input').value;
    const duedate=document.querySelector('.js-date').value;
    todolist.push({name:name,duedate:duedate});
    console.log(todolist);
    document.querySelector('.js-input').value='';
    document.querySelector('.js-date').value='';
    fun2();
}
function fun2(){
    let res='';
    for(let i=0;i<todolist.length;i++){
        const {name,duedate}=todolist[i]
        console.log(name,duedate);
        const html=`<p>${name}                     ${duedate}   <button onclick="fun1(${i});" class='css-del'c>Del</button></p>`;
        res+=html;

    }
    document.querySelector('.board').innerHTML=res;
    console.log(document.querySelector('.board').innerHTML);
    

}
function fun1(ind){
    todolist.splice(ind,1);
    console.log('knn',todolist,ind);
    fun2();
}
let g=[1,2,3,4];
function fun3(){
g.splice(1,2);
console.log(g);
}
fun3();