import React from "react";

export function TodoCard({ data, handleEdit, handleDelete, testId }) {
  const { _id, title, description } = data;

  return (
    <li key={testId} data-testid={`todo-${testId}`}>
      <div className="title-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="button-container">
        <button className="button" name={_id} onClick={handleEdit}>
          edit
        </button>
        <button className="button" name={_id} onClick={handleDelete}>
          delete
        </button>
      </div>
    </li>
  );
}
