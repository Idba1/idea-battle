import { useState } from 'react';

const MyWinningContest = () => {
  const [winningContests, setWinningContests] = useState([
    {
      id: 1,
      name: 'Art Contest',
      description: 'Create a masterpiece using any medium you choose.',
      prize: '$500',
      dateWon: new Date('2024-05-01'),
    },
    {
      id: 2,
      name: 'Blog Writing Contest',
      description: 'Write a compelling blog post on any topic of your choice.',
      prize: '$300',
      dateWon: new Date('2024-03-15'),
    },
    {
      id: 3,
      name: 'Marketing Strategy Contest',
      description: 'Develop a unique marketing strategy for a new product.',
      prize: '$1000',
      dateWon: new Date('2024-04-20'),
    },
  ]);

  return (
    <div className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-lg mt-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-red-600">My Winning Contests</h2>
        <p className="text-lg mt-2 text-gray-700">Celebrate your success! Here are the contests you have won:</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {winningContests.map((contest) => (
          <div key={contest.id} className="bg-white p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <h3 className="text-2xl font-semibold text-blue-600">{contest.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{contest.description}</p>
            <div className="mt-4">
              <span className="block text-sm text-gray-600">Prize: </span>
              <span className="block text-xl font-bold text-red-600">{contest.prize}</span>
            </div>
            <div className="mt-4">
              <span className="block text-sm text-gray-600">Date Won: </span>
              <span className="block text-md font-medium text-gray-800">{contest.dateWon.toDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWinningContest;
