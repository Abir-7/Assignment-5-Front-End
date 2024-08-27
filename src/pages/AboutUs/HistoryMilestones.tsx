interface Milestone {
  year: string;
  event: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    year: "2020",
    event: "Founded the company",
    description:
      "Our journey began with a small team of passionate individuals.",
  },
  {
    year: "2021",
    event: "Launched our first product",
    description:
      "We introduced our innovative platform to the market, receiving positive feedback.",
  },
  // Add more milestones as needed
];

const HistoryMilestones = () => {
  return (
    <section className="p-6 bg-base-200 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Our History & Milestones</h2>
      <ul className="list-disc list-inside">
        {milestones.map((milestone, index) => (
          <li key={index}>
            <strong>{milestone.year}:</strong> {milestone.event} -{" "}
            {milestone.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HistoryMilestones;
