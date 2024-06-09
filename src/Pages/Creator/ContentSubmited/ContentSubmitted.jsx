
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ContentSubmitted = () => {
    const { contestId } = useParams();
    const [contest, setContest] = useState(null);
    const [submissions, setSubmissions] = useState([]);
    const [winnerDeclared, setWinnerDeclared] = useState(false);

    useEffect(() => {
        const fetchContestDetails = async () => {
            try {
                const contestResponse = await axios.get(`https://ideabattle-server.vercel.app/allcontest/`);
                setContest(contestResponse.data);
                const submissionsResponse = await axios.get(`https://ideabattle-server.vercel.app/allcontest/`);
                setSubmissions(submissionsResponse.data);
                if (submissionsResponse.data.some(submission => submission.isWinner)) {
                    setWinnerDeclared(true);
                }
            } catch (error) {
                console.error('Failed to fetch contest details', error);
            }
        };

        fetchContestDetails();
    }, [contestId]);


    return (
        <div className="p-4">
            {contest && (
                <>
                    <h2 className="text-2xl font-bold mb-4">{contest.contestName}</h2>
                    <p>Prize: {contest.prizeMoney}</p>
                </>
            )}
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
                    {submissions.map(submission => (
                        <tr key={submission._id}>
                            <td className='p-2 border border-gray-500'>{submission.participantName}</td>
                            <td className='p-2 border border-gray-500'>{submission.email}</td>
                            <td className='p-2 border border-gray-500'><a href={submission.taskLink} target="_blank" rel="noopener noreferrer">View Task</a></td>
                            <td className='p-2 border border-gray-500'>
                                {winnerDeclared ? (
                                    submission.isWinner ? <span>Winner</span> : <span>Un-success</span>
                                ) : (
                                    <button
                                        className="btn btn-sm btn-success"

                                    >
                                        Declare Win
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContentSubmitted;

