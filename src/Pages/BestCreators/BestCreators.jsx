
const BestCreators = () => {
  const creators = [
    {
      name: 'John Doe',
      image: 'https://i.ibb.co/s98GyMd/pexels-photo-3768894.webp',
      contestName: 'Amazing Art Contest',
      contestDescription: 'Create the most amazing artwork to win great prizes!',
    },
    {
      name: 'Jane Smith',
      image: 'https://i.ibb.co/gZmtr83/pexels-photo-91227.webp',
      contestName: 'Best Blog Writing',
      contestDescription: 'Write the best blog post and win exciting rewards!',
    },
    {
      name: 'Bob Johnson',
      image: 'https://i.ibb.co/3pvyPq7/pexels-photo-774909.webp',
      contestName: 'Creative Marketing Ideas',
      contestDescription: 'Share your creative marketing ideas and get rewarded!',
    },
  ];

  return (
    <div className="p-6  text-sky-800 rounded-lg shadow-lg mt-6">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold">Top Contest Creators</h2>
        <p className="text-lg mt-2">Meet our top contest creators and their amazing contests!</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
        {creators.map((creator, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
            <img src={creator.image} alt={creator.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">{creator.name}</h3>
            <p className="text-sm text-gray-600">{creator.contestName}</p>
            <p className="text-sm mt-2">{creator.contestDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestCreators;
