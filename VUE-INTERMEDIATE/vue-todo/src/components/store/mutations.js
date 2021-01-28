const addOneItem = (state, todoItem) => {
  let obj = {completed: false, item: todoItem};
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj)
}
const removeOneItem = (state, payload) => {
  state.todoItems.splice(payload.index, 1);
  localStorage.removeItem(payload.todoItem.item);
}
const toggleOneItem = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearAllItem = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

export {addOneItem, toggleOneItem, removeOneItem, clearAllItem}
