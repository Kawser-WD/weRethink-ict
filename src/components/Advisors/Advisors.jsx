import yunus from "../../assets/images/yunus.jpg";
import secretary from "../../assets/images/secretary.jpg";
import Container from "../Container/Container";
const Advisors = () => {
  return (
    <div className="my-20">
      <h1 className="sm:text-4xl text-2xl text-center font-bold my-20">
        উপদেষ্টা পরিচিতি
      </h1>
      <Container>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 justify-items-center md:gap-2 gap-2 w-full max-w-4xl mx-auto">
          <div className="rounded-md h-auto w-96 bg-[#fefefe] border border-[#caccd1] p-4">
            <div className="grid space-y-6">
              <img
                src={yunus}
                alt=""
                className="h-32 w-auto rounded-full mx-auto"
              />
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-xl font-semibold text-[#00112c] leading-loose">
                    ড. মুহাম্মদ ইউনূস
                  </h2>
                  <h2 className="text-base font-normal text-[#00112c]">
                    মাননীয় প্রধান উপদেষ্টা
                  </h2>
                </div>
                <button className="text-[#7fbb00]">বিস্তারিত</button>
              </div>
            </div>
          </div>
          <div className="rounded-md h-auto w-96 bg-[#fefefe] border border-[#caccd1] p-4">
            <div className="grid space-y-6">
              <img
                src={secretary}
                alt=""
                className="h-32 w-auto rounded-full mx-auto"
              />
              <div className="flex justify-between">
                <div className="">
                  <h2 className="text-xl font-semibold text-[#00112c] leading-loose">
                    মোঃ হুমায়ুন কবীর খোন্দকার
                  </h2>
                  <h2 className="text-base font-normal text-[#00112c]">
                    সিনিয়র সচিব, তথ্য ও সম্প্রচার...
                  </h2>
                </div>
                <button className="text-[#7fbb00]">বিস্তারিত</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Advisors;
