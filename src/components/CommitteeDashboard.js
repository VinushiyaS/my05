import React from 'react';
import { Link } from 'react-router-dom';

const CommitteeDashboard = () => {
  return (
    <div>
      <h2>Committee Leader Dashboard</h2>
      <Link to="/create-tournament">Create Tournament</Link>
      <Link to="/manage-auction">Manage Auction</Link>
    </div>
  );
};

export default CommitteeDashboard;
