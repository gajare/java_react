import React from 'react';

const Card = ({user_name}) => {
    return (
        <div className="relative h-[400px] w-[300px] rounded-b-md">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent">
            <img 
                src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Profile" 
                className="absolute inset-0 h-full w-full object-cover"
            />
            </div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{user_name}</h1>
              <p className="mt-2 text-sm text-gray-300">
                Ram-ram go dada kathe hotat tumhi itala divas vai gayat mantl kahi olkhal parichay she ka nhi tumhle. kay bho tumhi aate motha manase vai gayat.
              </p>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">View profile</button>
            </div>
        </div>
    );
}

const CardContainer = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-2">
    {Array.from({ length: 9 }).map((_, index) => (
        <Card key={index} />
    ))}
</div>
  );
}

export default CardContainer;
