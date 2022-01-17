import React from 'react';

const AppSpinner = ({ type = 'border', variant = 'primary' }) => (
  <div className="app-spinner">
    <div
      className={`spinner-${type} spinner-circle ${variant ? `text-${variant}` : ''}`}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default AppSpinner;
