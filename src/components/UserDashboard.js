import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const res = await axios.get('/api/auctions/ongoing');
        setAuctions(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAuctions();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <h3>Ongoing Tournaments</h3>
      <ul>
        {auctions.map(auction => (
          <li key={auction._id}>
            <h4>{auction.tournament}</h4>
            <ul>
              {auction.players.map(player => (
                <li key={player}>{player}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
