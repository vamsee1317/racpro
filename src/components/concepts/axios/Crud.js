// Get - Fetch Todos :

// GET is used to retrieve data from the server.
import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

// Post - Create New Todo :

// POST is used to send new data to the server.
// Althought JSONPlaceholder won't save it permanently, it will still return a fake created object.

axios.post("https://jsonplaceholder.typicode.com/todos", 
    {
        title : "New Todo Created",
        completed : false,
        userId : 1,
    })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));

    // Expected Response :

    // {
    //     "title" :"New Todo Created",
    //     "completed" : false,
    //     "userId" : 1,
    //     "id" : 201
    // }


// Put - Update Existing Todo :
// PUT replaces the entire object.

axios.put("https://jsonplaceholder.typicode.com/todos/1", 
    {
        title : "Updated Full Todo",
        completed : true,
        userId : 1
    }
)
.then((res)=> console.log("Put Response" , res.data))
.catch((err) => console.log(err));

// The entire todo object is replaced


// Patch - Update Part of Existing Todo :


axios.patch("https://jsonplaceholder.typicode.com/todos/1", 
    {
        completed : true,
    }
)
.then((res)=> console.log("Put Response" , res.data))
.catch((err) => console.log(err));


// Delete - Remove Todo :


axios.delete("https://jsonplaceholder.typicode.com/todos/1")
.then((res)=> console.log("Put Response" , res.data))
.catch((err) => console.log(err));