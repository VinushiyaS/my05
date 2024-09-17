// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const [committeeLeaders, setCommitteeLeaders] = useState([]);
//   const [tournaments, setTournaments] = useState([]);
//   const [subscriptions, setSubscriptions] = useState([]);

//   useEffect(() => {
//     const fetchAdminData = async () => {
//       try {
//         const [leadersRes, tournamentsRes, subscriptionsRes] = await Promise.all([
//           axios.get('/api/users/committee-leaders'),
//           axios.get('/api/tournaments'),
//           axios.get('/api/subscriptions')
//         ]);

//         setCommitteeLeaders(leadersRes.data);
//         setTournaments(tournamentsRes.data);
//         setSubscriptions(subscriptionsRes.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchAdminData();
//   }, []);

//   return (
//     <div>
//       <h2>Admin Dashboard</h2>
//       <h3>Registered Committee Leaders</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>Email</th>
//             <th>Subscription Plan</th>
//             <th>Expiry Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {committeeLeaders.map(leader => (
//             <tr key={leader._id}>
//               <td>{leader.email}</td>
//               <td>{leader.subscriptionPlan}</td>
//               <td>{new Date(leader.subscriptionExpiry).toLocaleDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3>Registered Tournaments</h3>
//       <ul>
//         {tournaments.map(tournament => (
//           <li key={tournament._id}>{tournament.name}</li>
//         ))}
//       </ul>

//       <h3>Subscriptions</h3>
//       <ul>
//         {subscriptions.map(sub => (
//           <li key={sub._id}>{sub.plan}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;





import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [committeeLeaders, setCommitteeLeaders] = useState([]);
  // const [tournaments, setTournaments] = useState([]);
  // const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const [leadersRes, , ] = await Promise.all([
          axios.get('/api/users/committee-leaders'),
          // axios.get('/api/tournaments'),
          // axios.get('/api/subscriptions')
        ]);

        setCommitteeLeaders(leadersRes.data);
        // setTournaments(tournamentsRes.data);
        // setSubscriptions(subscriptionsRes.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAdminData();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <h3>Registered Committee Leaders</h3>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Subscription Plan</th>
            <th>Expiry Date</th>
          </tr>
        </thead>
        <tbody>
          {committeeLeaders.length > 0 ? (
            committeeLeaders.map(leader => (
              <tr key={leader._id}>
                <td>{leader.email}</td>
                <td>{leader.subscriptionPlan}</td>
                <td>{new Date(leader.subscriptionExpiry).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* <h3>Registered Tournaments</h3>
      <table>
        <thead>
          <tr>
            <th>Tournament Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tournaments.length > 0 ? (
            tournaments.map(tournament => (
              <tr key={tournament._id}>
                <td>{tournament.name}</td>
                <td>{new Date(tournament.date).toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No tournaments available</td>
            </tr>
          )}
        </tbody>
      </table>

      <h3>Subscriptions</h3>
      <table>
        <thead>
          <tr>
            <th>Plan</th>
            <th>Price</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.length > 0 ? (
            subscriptions.map(sub => (
              <tr key={sub._id}>
                <td>{sub.plan}</td>
                <td>{sub.price}</td>
                <td>{sub.duration}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No subscriptions available</td>
            </tr>
      //     )} */}
      {/* //   </tbody> */}
      {/* // </table> */}
    </div>
  );
};

export default AdminDashboard;
