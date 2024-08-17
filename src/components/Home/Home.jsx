import Advisors from "../Advisors/Advisors";
import EmergencyHotline from "../EmergencyHotline/EmergencyHotline";
import Header from "../Header/Header";
import ImportantLinks from "../ImportantLinks/ImportantLinks";
import MainContent from "../MainContent/MainContent";
import Notice from "../Notice/Notice";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Notice></Notice>
      <div className="md:px-2">
        <MainContent></MainContent>
        <Advisors></Advisors>
        <ImportantLinks></ImportantLinks>
        <EmergencyHotline />
      </div>
    </div>
  );
};

export default Home;
