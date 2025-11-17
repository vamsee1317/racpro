import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosCrud() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editId, setEditId] = useState(null);

  const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

  // -------------------------------
  // GET - Fetch Todos
  // -------------------------------
  useEffect(() => {
    axios
      .get(`${BASE_URL}?_limit=10`)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  // -------------------------------
  // POST - Add Todo
  // -------------------------------
  const handleAddTodo = () => {
    if (!newTodo.trim()) return;

    axios
      .post(BASE_URL, {
        title: newTodo,
        completed: false,
        userId: 1,
      })
      .then((res) => {
        setTodos([res.data, ...todos]);
        setNewTodo("");
      })
      .catch((err) => console.log(err));
  };

  // -------------------------------
  // PUT - Update Entire Todo
  // -------------------------------
  const handleFullUpdate = (todo) => {
    axios
      .put(`${BASE_URL}/${todo.id}`, {
        title: "Fully Updated Todo",
        completed: !todo.completed,
        userId: todo.userId,
      })
      .then((res) => {
        setTodos(todos.map((t) => (t.id === todo.id ? res.data : t)));
      })
      .catch((err) => console.log(err));
  };

  // -------------------------------
  // PATCH - Partial Update
  // -------------------------------
  const handlePatchUpdate = (id) => {
    axios
      .patch(`${BASE_URL}/${id}`, {
        completed: true,
      })
      .then((res) => {
        setTodos(todos.map((t) => (t.id === id ? res.data : t)));
      })
      .catch((err) => console.log(err));
  };

  // -------------------------------
  // DELETE - Remove Todo
  // -------------------------------
  const handleDelete = (id) => {
    axios
      .delete(`${BASE_URL}/${id}`)
      .then(() => {
        setTodos(todos.filter((t) => t.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Axios CRUD Operations</h2>

      {/* Add Todo */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter todo"
          className="border px-2 py-1 mr-2"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-green-500 text-white px-3 py-1 rounded"
          onClick={handleAddTodo}
        >
          Add Todo (POST)
        </button>
      </div>

      {/* Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-3 py-2">ID</th>
            <th className="border px-3 py-2">Title</th>
            <th className="border px-3 py-2">Status</th>
            <th className="border px-3 py-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td className="border px-3 py-2">{todo.id}</td>
              <td className="border px-3 py-2">{todo.title}</td>
              <td className="border px-3 py-2">
                {todo.completed ? "Completed" : "Pending"}
              </td>
              <td className="border px-3 py-2 space-x-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => handleFullUpdate(todo)}
                >
                  PUT
                </button>

                <button
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                  onClick={() => handlePatchUpdate(todo.id)}
                >
                  PATCH
                </button>

                <button
                  className="bg-red-600 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(todo.id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
