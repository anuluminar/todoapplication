import { commonAPI } from "./commonApi";
const serverURL='http://localhost:5000'

//upload todo kitems

export const uploadTodo=async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/todolist`,reqBody)
}

//get all to do items

export const getAllTodo= async ()=>{
    return await commonAPI('GET',`${serverURL}/todolist`,"")
 }

 //delete todo item
 export const deleteAllTodo=async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/todolist/${id}`,{})
 }

 //to get details of specific task by its id
 export const getTodoDetailsById= async (id)=>{
    return await commonAPI('GET',`${serverURL}/todolist/${id}`,"")
 }