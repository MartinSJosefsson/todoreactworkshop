import React from 'react'

const TodoForm = () => {
  return (
    <main className="p-4">
      <h1 className="text-center mb-4">My Todo App</h1>
      <div className="d-flex justify-content-center mb-4">
        <div className="card w-75">
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input type="text" id="title" className="form-control" placeholder="Enter task title" />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea id="description" className="form-control" rows="3" placeholder="Enter task description"></textarea>
            </div>
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label htmlFor="dueDate" className="form-label">Due Date</label>
                <input type="datetime-local" id="dueDate" className="form-control" />
              </div>
              <div className="col-md-6">
                <label htmlFor="assignee" className="form-label">Assign to Person (Optional)</label>
                <select id="assignee" className="form-select">
                  <option value="">-- Select Person (Optional) --</option>
                  <option value="Martin Josefsson">Martin Josefsson</option>
                  <option value="Mehrdad Jarvan">Mehrdad Jarvan</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="attachments" className="form-label">Attachments</label>
              <input type="file" id="attachments" className="form-control" multiple />
            </div>
            <button className="btn btn-primary">+ Add Todo</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default TodoForm