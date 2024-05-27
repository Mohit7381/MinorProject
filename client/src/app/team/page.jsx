import teamData from '../teamdata.json';
import Image from 'next/image';
const Team = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-6 text-white">
          Our <span className='text-yellow-500'>Team</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto bg-gray-700 rounded-lg shadow-md p-8">
          {teamData.map((member, index) => (
            <div key={index} className="flex items-center space-x-4 mb-4 bg-black p-3 rounded-lg">
              <Image src={member.image || "/img/gdscnie.jpg"} alt="" className="rounded-full w-16 h-16 object-cover" width={500} height={500}/>
              <div>
                <p className="text-lg">{member.name}</p>
                <p>{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
