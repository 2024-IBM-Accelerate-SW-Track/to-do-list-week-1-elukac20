import React from "react";
import "../component/todos.css";

import {Card,CardContent,Grid,ListItemButton,ListItemText,Checkbox,} from "@mui/material"
import DeleteIconOutlined from '@mui/icons-material/Delete'


var globalList;

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI

/*added this function to delete tasks*/
const clearTask = () =>{
  for(var i=globalList.length-1; i>=0; i--){
    var itm = document.getElementById(globalList.pop().id);
    itm.innerHTML="deleted"
  }
  
  
}

const deleteTask = (id) =>{
  //alert(id)
  //var indx = globalList.indexOf(document.getElementById(id))
  
  //globalList.splice(indx, 1);

  var itm = document.getElementById(id);
  itm.innerHTML="deleted"
  
}

const Todos = ({ todos }) => {
    globalList = todos;
    const todoList = todos.length ? (
      
      todos.map((todo) => {


        return (
          <div>
          <Grid key={todo.id}>
            <Card>
              {/* Remember, we set the local state of this todo item when the user submits the form in 
              AddTodo.js. All we need to do is return the todo list item */}
              <CardContent>
                <span style={{ padding: "20px" }}>
                  <ListItemButton>
                    <Checkbox color="success"></Checkbox>
                        
                       <ListItemText id={todo.id}>{todo.content}</ListItemText> 
                       <button onClick={function(){deleteTask(todo.id)}}>
                          <DeleteIconOutlined></DeleteIconOutlined>
                        </button>
                      </ListItemButton>
                </span>
              </CardContent>
            </Card>
          </Grid>
          </div>
        );
      })
    ) : (
      <p>{"You have no todo's left"}</p>
    );

    <script>todoList = globalList</script>

    // Lastly, return the todoList constant that we created above to show all of the items on the screen.
    return (
      <div className="todoCollection" style={{ padding: "10px" }}>
        
        {todoList}
        <button onClick={clearTask}>Clear all Tasks</button>

      </div>
    );
};
  
export default Todos;
