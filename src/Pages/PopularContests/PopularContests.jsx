import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const fetchPopularContests = async () => {
  const { data } = await axios.get('http://localhost:9000/contests/popular');
  return data;
};

const PopularContests = () => {
  const { data: contests, error, isLoading } = useQuery({
    queryKey: ['popularContests'],
    queryFn: fetchPopularContests
  });
  const navigate = useNavigate();

  const handleDetailsClick = (contestId) => {
    const isLoggedIn = !!localStorage.getItem('token');
    if (isLoggedIn) {
      navigate(`/contest/${contestId}`);
    } else {
      navigate('/login');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching contests</div>;

  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {contests.map(contest => (
        <div key={contest._id}>

          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={contest.image} alt={contest.contestName} /></figure>
            <div className="card-body">
              <h3>{contest.contestName}</h3>
              <p>Participants: {contest.participationCount}</p>
              <p>{contest.shortDescription.slice(0, 100)}...</p>
              <button onClick={() => handleDetailsClick(contest._id)}>View Details</button>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <button className="show-all-button" onClick={() => navigate('/all-contests')}>
        Show All
      </button>
    </div>
  );
};

export default PopularContests;
