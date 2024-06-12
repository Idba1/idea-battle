import { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddContest = () => {
  const [contest, setContest] = useState({
    name: '',
    image: '',
    description: '',
    price: '',
    prizeMoney: '',
    taskSubmission: '',
    type: '',
    deadline: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContest((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setContest((prev) => ({ ...prev, deadline: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9000/add-contest', contest);
      alert('Contest added successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-contest">
      <h2 className="text-2xl font-bold mb-4">Add Contest</h2>
      <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-md">
        <input className="input input-bordered w-full mt-2" name="name" placeholder="Contest Name" onChange={handleChange} />
        <input className="input input-bordered w-full mt-2" name="image" placeholder="Image URL" onChange={handleChange} />
        <textarea className="textarea textarea-bordered w-full mt-1" name="description" placeholder="Description" onChange={handleChange} />
        <input className="input input-bordered w-full mt-2" name="price" placeholder="Contest Price" onChange={handleChange} />
        <input className="input input-bordered w-full mt-2" name="prizeMoney" placeholder="Prize Money" onChange={handleChange} />
        <textarea className="textarea textarea-bordered w-full mt-2"name="taskSubmission" placeholder="Task Submission Instructions" onChange={handleChange} />
        <select className="input input-bordered w-full mt-2" name="type" onChange={handleChange}>
          <option value="">Select Type</option>
          <option value="Image Design">Image Design</option>
          <option value="Article Writing">Article Writing</option>
          <option value="Marketing Strategy">Marketing Strategy</option>
          <option value="Digital Advertisement">Digital Advertisement</option>
          <option value="Gaming Review">Gaming Review</option>
          <option value="Book Review">Book Review</option>
          <option value="Business Idea">Business Idea</option>
          <option value="Movie Review">Movie Review</option>
        </select>
        <DatePicker className="input input-bordered w-full mt-2" selected={contest.deadline} onChange={handleDateChange} />
        <button type="submit" className="btn btn-primary w-full">Add Contest</button>
      </form>
    </div>
  );
};

export default AddContest;
