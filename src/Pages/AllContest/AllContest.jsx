import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const fetchAllContests = async () => {
  const { data } = await axios.get('http://localhost:9000/allcontest');
  return data;
};

const AllContest = () => {
  const { data: contests, error, isLoading } = useQuery({
    queryKey: ['allContests'],
    queryFn: fetchAllContests
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching contests</div>;

  return (
    <div className="all-contests">
      <div className="max-w-lg mx-auto my-10">
        <h1 className="text-3xl font-semibold text-[#0077B5] lg:text-4xl">All Contests</h1>
        <p className="mt-2 mb-10 text-sky-950">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores necessitatibus non reprehenderit voluptates laborum accusantium maiores voluptatum pariatur, illum fuga!
        </p>
      </div>
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {contests.map(contest => (
          <div key={contest._id} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <div className='h-64 w-full'>
                {contest.image && <img src={contest.image} alt={contest.contestName} />}
              </div>
            </figure>
            <div className="card-body">
              <h3>{contest.contestName}</h3>
              <p>Participants: {contest.participationCount ?? 0}</p>
              <p>{contest.shortDescription ? contest.shortDescription.slice(0, 100) : 'No description available'}...</p>
              <Link
                to={`/allcontest/${contest._id}`}
                className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllContest;
