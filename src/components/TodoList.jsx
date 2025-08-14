import React from 'react'

const TodoList = () => {
 return (
    <div className="card w-75 mx-auto">
        <div className="card-header">Todos</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold">Sample Task 1</div>
              <div>Complete the React workshop</div>
              <small className="text-muted">Due: 2025-08-14T10:00</small><br />
              <span className="badge bg-info text-dark">Martin Josefsson</span>
              <span className="badge bg-secondary">2 attachments</span>
            </div>
            <div>
              <button className="btn btn-sm btn-outline-success me-1"><i className="bi bi-check-lg"></i></button>
              <button className="btn btn-sm btn-outline-primary me-1"><i className="bi bi-pencil"></i></button>
              <button className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></button>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div>
              <div className="fw-bold">Sample Task 2</div>
              <div>Plan team meeting</div>
              <small className="text-muted">Due: 2025-08-15T14:00</small><br />
              <span className="badge bg-info text-dark">Mehrdad Jarvan</span>
            </div>
            <div>
              <button className="btn btn-sm btn-outline-success me-1"><i className="bi bi-check-lg"></i></button>
              <button className="btn btn-sm btn-outline-primary me-1"><i className="bi bi-pencil"></i></button>
              <button className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></button>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default TodoList