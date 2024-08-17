import Marquee from "react-fast-marquee";
import Container from "../Container/Container";

const Notice = () => {
  return (
    <Container>
      <div className="bg-[#00112c] p-2">
        <Marquee pauseOnHover={true} className="cursor-pointer">
          <div className="flex gap-2">
            <h1 className="text-center text-lg font-bold text-red-700">
              সর্বশেষ নোটিশ
            </h1>
            <h1 className="text-base font-normal text-[#f3f4f7]">
              <span className="text-red-700">*</span>জি.ও.নং-১৬০২/১(৮)
              (প্রজ্ঞাপন: বহিঃ বাংলাদেশ ছুটি) (নতুন)
              <span className="text-red-700">*</span>
            </h1>
            <h1 className="text-base font-normal text-[#f3f4f7]">
              <span className="text-red-700">*</span>জি.ও.নং-৩৩২ (শোকবার্তা)
              (নতুন)<span className="text-red-700">*</span>
            </h1>
            <h1 className="text-base font-normal text-[#f3f4f7]">
              <span className="text-red-700">*</span>জি.ও.নং-৩৩০(৮) (প্রজ্ঞাপন)
              কর্মকর্তাগণের বদলি/পদায়ন। (নতুন)
              <span className="text-red-700">*</span>
            </h1>
          </div>
        </Marquee>
      </div>
    </Container>
  );
};

export default Notice;
