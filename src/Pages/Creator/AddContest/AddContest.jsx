import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';



const AddContest = () => {
  const [contestName, setContestName] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [prizeMoney, setPrizeMoney] = useState('');
  const [submissionInstruction, setSubmissionInstruction] = useState('');
  const [deadline, setDeadline] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('contestName', contestName);
    formData.append('image', image);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('prizeMoney', prizeMoney);
    formData.append('submissionInstruction', submissionInstruction);
    formData.append('deadline', deadline);

    try {
      await axios.post('http://localhost:9000/add-contest', formData);
      alert('Contest added successfully');
    } catch (error) {
      console.error('Failed to add contest:', error);
      alert('Failed to add contest');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add Contest</h2>

      <label className="block mb-2">
        Contest Name
        <input
          type="text"
          value={contestName}
          onChange={(e) => setContestName(e.target.value)}
          className="input input-bordered w-full mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        Image
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="input input-bordered w-full mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        Contest Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered w-full mt-1"
          required
        ></textarea>
      </label>

      <label className="block mb-2">
        Contest Price
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input input-bordered w-full mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        Prize Money or Others
        <input
          type="text"
          value={prizeMoney}
          onChange={(e) => setPrizeMoney(e.target.value)}
          className="input input-bordered w-full mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        Task Submission Instruction
        <textarea
          value={submissionInstruction}
          onChange={(e) => setSubmissionInstruction(e.target.value)}
          className="textarea textarea-bordered w-full mt-1"
          required
        ></textarea>
      </label>



      <label className="block mb-4">
        Contest Deadline
        <DatePicker
          selected={deadline}
          onChange={(date) => setDeadline(date)}
          className="input input-bordered w-full mt-1"
          required
        />
      </label>

      <button type="submit" className="btn btn-primary w-full">Add Contest</button>
    </form>
  );
};

export default AddContest;
