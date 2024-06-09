import { useEffect, useState } from 'react';
import axios from 'axios';

const MyCreatedContest = () => {
    const [contests, setContests] = useState([]);
    const userId = 'currentUserId';

    useEffect(() => {
        const fetchContests = async () => {
            try {
                const response = await axios.get(`https://ideabattle-server.vercel.app/allcontest`);
                setContests(response.data);
            } catch (error) {
                console.error('Failed to fetch contests', error);
            }
        };

        fetchContests();
    }, [userId]);



    return (
        <div className='overflow-auto w-full p-4'>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className='p-2 border border-gray-500'>Contest Name</th>
                        <th className='p-2 border border-gray-500'>Status</th>
                        <th className='p-2 border border-gray-500'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contests.map((contest) => (
                        <tr key={contest._id}>
                            <td className='p-2 border border-gray-500'>{contest.contestName}</td>
                            <td className='p-2 border border-gray-500'>{contest.status}</td>
                            <td className='p-2 border border-gray-500'>
                                {contest.status === 'pending' ? (
                                    <>
                                        <button className="btn btn-sm btn-primary mr-2">Edit</button>
                                        <button className="btn btn-sm btn-danger">Delete</button>
                                    </>
                                ) : (
                                    <button className="btn btn-sm btn-secondary mr-2" disabled>Edit</button>
                                )}
                                <button className="btn btn-sm btn-info">See Submissions</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyCreatedContest;
