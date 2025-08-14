import React from 'react'

const Header = () => {
   return (
  <header className="bg-light p-3 border-bottom">
      <div className="d-flex align-items-center">
        <h2 className="me-auto"></h2>
        <div className="input-group w-50 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search tasks..."
            aria-label="Search tasks"
          />
          <button className="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header