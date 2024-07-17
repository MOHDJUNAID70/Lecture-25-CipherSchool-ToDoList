import { Component } from "react";
import ToDoScreen from "./screens/ToDoScreen";
import AddTask from "./components/AddTask";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const ap=createBrowserRouter([
  {
    path:"/",
    element: <ToDoScreen/>,
  },
  {
    path: "/add-task",
    element: <AddTask/>
  }
])

class App extends Component{
  render(){
    return(
      <RouterProvider router={ap}/>
    )
  }
}

export default App;