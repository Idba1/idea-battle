import { useEffect, useState } from 'react';
import axios from 'axios';

const ContestSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [selectedContestId, setSelectedContestId] = useState('');

  useEffect(() => {
    const fetchSubmissions = async () => {
      const { data } = await axios.get(`http://localhost:9000/submissions/${selectedContestId}`);
      setSubmissions(data);
    };
    if (selectedContestId) {
      fetchSubmissions();
    }
  }, [selectedContestId]);

  const handleDeclareWinner = async (submissionId) => {
    try {
      await axios.put(`http://localhost:9000/declare-winner/${submissionId}`, { contestId: selectedContestId });
      setSubmissions(submissions.map((sub) => ({
        ...sub,
        isWinner: sub._id === submissionId ? true : false,
      })));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contest-submissions">
      <h2 className="text-2xl font-bold mb-4">Contest Submissions</h2>
      <select onChange={(e) => setSelectedContestId(e.target.value)}>
        <option value="">Select Contest</option>
        {/* Add logic to populate contest options */}
      </select>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className='p-2 border border-gray-500'>Participant Name</th>
            <th className='p-2 border border-gray-500'>Email</th>
            <th className='p-2 border border-gray-500'>Submitted Task</th>
            <th className='p-2 border border-gray-500'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission._id}>
              <td className='p-2 border border-gray-500'>{submission.participantName}</td>
              <td className='p-2 border border-gray-500'>{submission.email}</td>
              <td className='p-2 border border-gray-500'><a href={submission.taskLink} target="_blank" rel="noopener noreferrer">View Task</a></td>
              <td className='p-2 border border-gray-500'>
                {submission.isWinner ? (
                  <span>Winner</span>
                ) : (
                  <button onClick={() => handleDeclareWinner(submission._id)}>Declare Winner</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContestSubmissions;
