import { useState } from 'react';

const MyParticipatedContest = () => {
  const [contests, setContests] = useState([
    {
      id: 1,
      name: 'Art Contest',
      paymentStatus: 'Completed',
      deadline: new Date('2024-07-01'),
    },
    {
      id: 2,
      name: 'Blog Writing Contest',
      paymentStatus: 'Pending',
      deadline: new Date('2024-06-15'),
    },
    {
      id: 3,
      name: 'Marketing Strategy Contest',
      paymentStatus: 'Completed',
      deadline: new Date('2024-06-20'),
    },
  ]);

  const [sortBy, setSortBy] = useState('deadline');

  const sortContests = (criteria) => {
    const sortedContests = [...contests].sort((a, b) => {
      if (criteria === 'deadline') {
        return new Date(a.deadline) - new Date(b.deadline);
      }
      return 0;
    });
    setContests(sortedContests);
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-lg mt-6">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold">My Participated Contests</h2>
        <p className="text-lg mt-2">Here are all the contests you have participated in:</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Sort By:
        </label>
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
            sortContests(e.target.value);
          }}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="deadline">Deadline</option>
        </select>
      </div>
      <div className="grid gap-6">
        {contests.map((contest) => (
          <div key={contest.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{contest.name}</h3>
            <p className="text-sm text-gray-600">Payment Status: {contest.paymentStatus}</p>
            <p className="text-sm">Deadline: {contest.deadline.toDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyParticipatedContest;
