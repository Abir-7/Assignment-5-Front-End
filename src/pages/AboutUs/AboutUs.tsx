import ContactInformation from "./ContactInformation";
import HistoryMilestones from "./HistoryMilestones";
import MissionStatement from "./MissionStatement";
import TeamSection from "./TeamSection";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <MissionStatement />
      <TeamSection />
      <HistoryMilestones />
      <ContactInformation />
    </div>
  );
};

export default AboutUs;
