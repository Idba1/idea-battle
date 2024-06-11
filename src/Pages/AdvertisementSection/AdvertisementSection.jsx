const AdvertisementSection = () => {

  const winner = {
    name: 'John Doe',
    contestName: 'Best Article Writing',
    image: 'https://i.ibb.co/SfcxwhC/pexels-photo-3727463.webp'
  };

  const participationCount = 123;
  const totalWinners = 45;

  return (
    <div className="p-6 bg-sky-100 text-sky-800 rounded-lg shadow-lg mt-6">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold">Join Our Competitions!</h2>
        <p className="text-lg mt-2">Participate, Win, and Be Recognized!</p>
      </div>
      <div className="flex items-center justify-center mb-6">
        <img src={winner.image} alt={winner.name} className="w-16 h-16 rounded-full shadow-lg mr-4" />
        <div>
          <h3 className="text-xl font-semibold">Latest Winner: {winner.name}</h3>
          <p className="text-sm">Contest: {winner.contestName}</p>
        </div>
      </div>
      <div className="flex justify-around mt-6">
        <div className="text-center">
          <h4 className="text-2xl font-bold">{participationCount}</h4>
          <p>Participants</p>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-bold">{totalWinners}</h4>
          <p>Total Winners</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementSection;
