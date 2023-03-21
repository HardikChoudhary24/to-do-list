const input=document.querySelector("#tasks");
const todoform=document.querySelector(".todo-form")
const submit=document.querySelector(".add-task input[type='submit']");
const ul=document.querySelector(".task-list");
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const textvalue=input.value;
    if(textvalue!==""){
    input.value="";
    const newtodo=document.createElement("div");
    const innerhtml=
    `<li><span class="text-span">${textvalue}</span></li>
    <button class="btn delete">❌</button>
    <button class="btn done">✔️</button>
    `;
    newtodo.innerHTML=innerhtml;
    newtodo.classList.add("list-cont");
    ul.append(newtodo);
    }
});

ul.addEventListener("click",(e)=>{
    if(e.target.classList.contains("done")){
        e.target.parentNode.children[0].style.textDecoration="line-through"
        e.target.parentNode.children[0].style.textDecorationThickness= "3px";
    }
    if(e.target.classList.contains("delete")){
        e.target.parentNode.remove();
    }
})
