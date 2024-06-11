import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { useDropzone } from 'react-dropzone';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MyProfile = () => {
  const [profile] = useState({
    displayName: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Springfield',
    winPercentage: 60,
    attemptedContests: 10,
    completedContests: 6,
  });

  const [newDisplayName, setNewDisplayName] = useState(profile.displayName);
  const [newAddress, setNewAddress] = useState(profile.address);
  const [profilePicture, setProfilePicture] = useState(null);

  const onDrop = (acceptedFiles) => {
    setProfilePicture(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const chartData = {
    labels: ['Completed Contests', 'Attempted Contests'],
    datasets: [
      {
        label: 'Win Percentage',
        data: [profile.completedContests, profile.attemptedContests - profile.completedContests],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-lg mt-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-red-600">My Profile</h2>
        <p className="text-lg mt-2 text-gray-700">Manage your profile and view your contest stats.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Profile Information</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Display Name</label>
            <input
              type="text"
              className="mt-1 block text-blue-700 w-full p-2 border border-gray-300 rounded-md"
              value={newDisplayName}
              onChange={(e) => setNewDisplayName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              className="mt-1 block text-blue-700 w-full p-2 border border-gray-300 rounded-md"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Profile Picture</label>
            <div {...getRootProps({ className: 'dropzone border border-gray-300 p-4 rounded-md' })}>
              <input {...getInputProps()} />
              <p className="text-gray-600">Drag & drop a picture here, or click to select one</p>
            </div>
            {profilePicture && <p className="mt-2 text-blue-600">Selected file: {profilePicture.name}</p>}
          </div>
          <button
            className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded-md"
          >
            Update Profile
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Win Percentage</h3>
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
