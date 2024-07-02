import {ADD_Todo,EDIT_Todo,DELETE_Todo,TOGGLE_Todo} from "./action" ;

const intialTodo={
    todo:JSON.parse(localStorage.getItem("todo"))||[]
}
const TodoReducer=(state=intialTodo ,action)=>{
switch(action.type){
    case ADD_Todo:{
const newTodo=[...state ,action.payload] ;
localStorage.setItem("todo",JSON.stringify(newTodo))
    }
}
}