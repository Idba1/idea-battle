import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const fetchContestDetails = async (id) => {
  const { data } = await axios.get(`http://localhost:9000/allcontest/${id}`);
  return data;
};

const ContestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Correcting the useQuery call to use the object form
  const { data: contest, error, isLoading } = useQuery({
    queryKey: ['contestDetails', id],
    queryFn: () => fetchContestDetails(id)
  });

  const handleRegister = async () => {
    const userId = localStorage.getItem('userId'); // Assume user ID is stored in local storage after login
    if (!userId) {
      alert('Please log in to register for the contest.');
      navigate('/login'); // Redirect to login page if user is not logged in
      return;
    }

    try {
      await axios.post('http://localhost:9000/register', { contestId: id, userId });
      alert('Registration successful!');
      navigate(`/contest/${id}`);
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching contest details</div>;

  const isContestAvailable = new Date(contest.deadline) > new Date();

  return (
    <div className="contest-details">
      <h1>{contest.contestName}</h1>
      <img src={contest.image} alt={contest.contestName} />
      <p>Participants: {contest.participationCount}</p>
      <p>{contest.description}</p>
      <p>Prize: {contest.prize}</p>
      {contest.winner && (
        <>
          <h2>Winner</h2>
          <p>{contest.winner.name}</p>
          <img src={contest.winner.image} alt={contest.winner.name} />
        </>
      )}
      <div>
        <h2>Deadline</h2>
        {isContestAvailable ? (
          <p>{new Date(contest.deadline).toLocaleString()}</p>
        ) : (
          <p>Not available</p>
        )}
      </div>
      {isContestAvailable && (
        <button onClick={handleRegister}>Register</button>
      )}
    </div>
  );
};

export default ContestDetails;
