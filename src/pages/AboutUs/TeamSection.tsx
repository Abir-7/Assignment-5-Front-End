import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jane Smith",
    role: "CTO",
    image:
      "https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?t=st=1724943029~exp=1724946629~hmac=fec457b58631989a0a4bc978c87c57a3d57fe56f991eaffa41f66141fb1daf2a&w=740",
    bio: "Jane is a tech visionary with a background in software engineering and a love for cutting-edge technology.",
  },
  {
    name: "John Doe",
    role: "CEO",
    image:
      "https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?t=st=1724943029~exp=1724946629~hmac=fec457b58631989a0a4bc978c87c57a3d57fe56f991eaffa41f66141fb1daf2a&w=740",
    bio: "John has over 20 years of experience in the industry and is passionate about innovation and leadership.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image:
      "https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg?t=st=1724943029~exp=1724946629~hmac=fec457b58631989a0a4bc978c87c57a3d57fe56f991eaffa41f66141fb1daf2a&w=740",
    bio: "Jane is a tech visionary with a background in software engineering and a love for cutting-edge technology.",
  },
  // Add more team members as needed
];

const TeamSection: React.FC = () => (
  <section className="p-6 text-center bg-base-200 rounded-lg shadow-md mt-6">
    <h2 className="text-2xl font-bold mb-4">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teamMembers.map((member, index) => (
        <div key={index} className="text-center">
          <img
            src={member.image}
            alt={member.name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">{member.name}</h3>
          <p className="text-gray-600">{member.role}</p>
          <p className="text-gray-500">{member.bio}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
