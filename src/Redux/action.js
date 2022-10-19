export const ADD_DATA="ADD_DATA";
export const TOGGLE_STATUS="TOGGLE_STATUS"
export const DELETE_TODO="DELETE_TODO";
export const COMPLETE_ALL="COMPLETE_ALL"
export const CLEAR_COMPLETED="CLEAR_COMPLETED"
export const DELETE_DUPLICATES="DELETE_DUPLICATES"
export const TODO_CLICKED="TODO_CLICKED"

export const addTodo=(payload)=>({type:ADD_DATA,payload})
export const toggleStatus=(payload)=>({type:TOGGLE_STATUS,payload})
export const clearTodo=(payload)=>({type:DELETE_TODO,payload})
export const completeAlltodos=(payload)=>({type:COMPLETE_ALL,payload})
export const clearAllCompleted=(payload)=>({type:CLEAR_COMPLETED,payload})
export const deleteAllDuplicates=(payload)=>({type:DELETE_DUPLICATES,payload})
export const todoClicked=(payload)=>({type:TODO_CLICKED,payload})