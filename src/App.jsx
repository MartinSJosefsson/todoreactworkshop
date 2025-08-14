import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container-fluid">
      <button
        className="btn btn-outline-dark bg-white d-md-none position-fixed top-0 start-0 m-2 z-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebar-column"
        aria-expanded="false"
        aria-controls="sidebar-column"
      >
        <i className="bi bi-list"></i>
      </button>
      <div className="row flex-nowrap">
        <div className="col-md-3 col-lg-2 p-0 collapse" id="sidebar-column">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9 col-lg-10 pb-4">
          <Header />
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App