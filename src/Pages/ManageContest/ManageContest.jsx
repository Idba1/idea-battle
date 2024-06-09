import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const ManageContest = () => {
    const [contests, setContests] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentContestId, setCurrentContestId] = useState(null);
    const [comment, setComment] = useState('');

    useEffect(() => {
        fetchContests();
    }, []);

    const fetchContests = async () => {
        try {
            const response = await axios.get('https://ideabattle-server.vercel.app/allcontest');
            setContests(response.data);
        } catch (error) {
            console.error('Failed to fetch contests:', error);
        }
    };



    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className='overflow-auto'>
            <table className='border-collapse'>
                <thead>
                    <tr>
                        <th className='p-2 border border-gray-500'>Title</th>
                        <th className='p-2 border border-gray-500'>Description</th>
                        <th className='p-2 border border-gray-500'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contests.map(contest => (
                        <tr key={contest._id}>
                            <td className='p-2 border border-gray-500'>{contest.contestName}</td>
                            <td className='p-2 border border-gray-500'>{truncateText(contest.description, 100)}</td>
                            <td className='p-2 border border-gray-500'>
                                <div className='flex gap-2'>
                                    <button className='btn'>Confirm</button>
                                    <button className='btn'>Publish</button>
                                    <button className='btn' onClick={() => {
                                        setCurrentContestId(contest._id);
                                        setIsModalOpen(true);
                                    }}>Comment</button>
                                    <button className='btn' >Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
                <h2>Add Comment</h2>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <button>Submit</button>
                <button onClick={() => setIsModalOpen(false)}>Close</button>
            </Modal>
        </div>
    );
};

export default ManageContest;
