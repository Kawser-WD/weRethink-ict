import Container from "../../components/Container/Container";
import Logo from "../../assets/images/np-logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <div className="bg-[#caccd1] mt-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:px-2 lg:px-0 px-2 py-20">
          <div className="grid space-y-4">
            <a href="">গোপনীয়তার-নীতিমালা</a>
            <a href="">সাইট ম্যাপ</a>
            <a href="">যোগাযোগ</a>
            <a href="">ব্যবহারের শর্তাবলি</a>
            <a href="">সচরাচর জিজ্ঞাস্য</a>
          </div>
          <div className="grid space-y-4">
            <p>পরিকল্পনা ও বাস্তবায়নে:</p>
            <a href="">মন্ত্রিপরিষদ বিভাগ, এটুআই, বিসিসি, </a>
            <a href="">ডিওআইসিটি ও বেসিস।</a>
            <p>কারিগরি সহায়তায়:</p>
            <img src={Logo} alt="" />
          </div>
          <div>
            <p>সামাজিক যোগাযোগ মাধ্যম</p>
            <div className="flex gap-4 mt-4">
              <a href="">
                <FaFacebookSquare />
              </a>
              <a href="">
                <IoLogoYoutube></IoLogoYoutube>
              </a>
            </div>
          </div>
        </div>
        <div className="text-start text-sm font-normal md:px-2 lg:px-0 px-2 py-5">
          <p>সাইটটি শেষ হাল-নাগাদ করা হয়েছে: ২০২৪-০৮-১৭ ০০:২৩:২৩</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
