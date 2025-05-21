let todoname=JSON.parse(localStorage.getItem("list"))||[{name:'Enter name of todo',date:'Enter duedate'}]

createhtml()

function createhtml(){
let todonames ='';
  todoname.forEach(function(todoObject,index){
    const {name,date} = todoObject
    const html =`<div>${name}</div><div>${date}</div><button class ='js-delete-button'>Delete</button>`
    todonames += html;
  })
  
  document.querySelector('.todo-list')
  .innerHTML=todonames;


document.querySelectorAll('.js-delete-button')
.forEach((deletebutton,index)=>{
  deletebutton.addEventListener('click',() =>{
    todoname.splice(index,1)
      createhtml();
      localStorage.removeItem('list')
  });
});
}
document.querySelector('.addbutton')
.addEventListener('click',() => {
  addtodo();
})

function addtodo(){
const inputElement = document.querySelector('.input1')
  const inputvalue = inputElement.value;

  const inputdate=document.querySelector('.input2')  
  const inputdatevalue = inputdate.value

  todoname.push({name:inputvalue,date:inputdatevalue})
  localStorage.setItem('list',JSON.stringify(todoname))
  inputElement.value = '';
  createhtml()
  }