import { useEffect, useState } from 'react';
import axios from 'axios';

const MyParticipatedContest = () => {
  const [contests, setContests] = useState([]);
  const [sortedContests, setSortedContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await axios.get('https://ideabattle-server.vercel.app/user/participated-contests');
        setContests(response.data);
        setSortedContests(response.data);
      } catch (error) {
        console.error('Failed to fetch contests', error);
      }
    };
    fetchContests();
  }, []);

  const sortContests = () => {
    const sorted = [...contests].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    setSortedContests(sorted);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">My Participated Contests</h2>
      <button onClick={sortContests} className="btn btn-primary mb-4">Sort by Deadline</button>
      <ul>
        {sortedContests.map(contest => (
          <li key={contest._id} className="mb-4">
            <div className="p-4 border rounded-md shadow-sm">
              <h3 className="text-xl font-semibold">{contest.name}</h3>
              <p>Deadline: {new Date(contest.deadline).toLocaleDateString()}</p>
              <p>Payment Status: {contest.paymentStatus}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyParticipatedContest;
