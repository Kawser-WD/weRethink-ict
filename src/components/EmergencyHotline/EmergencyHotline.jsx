import Marquee from "react-fast-marquee";
import emergency from "../../assets/images/marquee/999.jpg";
import bhomiSeba from "../../assets/images/marquee/bhomi-seba.png";
import btrc from "../../assets/images/marquee/btrc.png";
import dudok from "../../assets/images/marquee/dudok.jpg";
import fireService from "../../assets/images/marquee/fire-service.png";
import images from "../../assets/images/marquee/images.jpg";
import legalAid from "../../assets/images/marquee/legal-aid.png";
import nariShisho from "../../assets/images/marquee/nari-sisho.jpg";
import passport from "../../assets/images/marquee/passport.jpg";
import Container from "../Container/Container";

const EmergencyHotline = () => {
  return (
    <Container className="my-20">
      <h1 className="text-center sm:text-4xl text-2xl font-bold my-20">
        জরুরি হটলাইন
      </h1>
      <div className="sm:px-0 px-2">
        <Marquee pauseOnHover={true} className="cursor-pointer">
          <div className="flex gap-2">
            <img src={emergency} alt="" className="h-20 w-32 object-fill" />
            <img src={bhomiSeba} alt="" className="h-20 w-32 object-fill" />
            <img src={btrc} alt="" className="h-20 w-32 object-fill" />
            <img src={dudok} alt="" className="h-20 w-32 object-fill" />
            <img src={fireService} alt="" className="h-20 w-32 object-fill" />
            <img src={images} alt="" className="h-20 w-32 object-fill" />
            <img src={legalAid} alt="" className="h-20 w-32 object-fill" />
            <img src={nariShisho} alt="" className="h-20 w-32 object-fill" />
            <img src={passport} alt="" className="h-20 w-32 object-fill" />
          </div>
        </Marquee>
      </div>
    </Container>
  );
};

export default EmergencyHotline;
