import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const MyCreatedContests = () => {
    const { user } = useContext(AuthContext)
    const [contests, setContests] = useState([]);

    useEffect(() => {
        const fetchContests = async () => {
            const { data } = await axios.get(`https://ideabattle-server.vercel.app/my-contests/${user?.email}`); // replace creatorId with actual id
            setContests(data);
        };
        fetchContests();
    }, [user?.email]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://ideabattle-server.vercel.app/contest/${id}`);
            setContests(contests.filter((contest) => contest._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="my-created-contests">
            <h2>My Created Contests</h2>
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
                                <td className='p-2 border border-gray-500'>{contest.name}</td>
                                <td className='p-2 border border-gray-500'>{contest.status}</td>
                                <td className='p-2 border border-gray-500'>
                                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(contest._id)}>Delete</button>
                                    <button className="btn btn-sm btn-primary mr-2">Edit</button>
                                    <button>See Submissions</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCreatedContests;
