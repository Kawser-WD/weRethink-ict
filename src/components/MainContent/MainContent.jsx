import { Link } from "react-router-dom";
import aboutUsLogo from "../../assets/images/aboutus2.png";
import barshik from "../../assets/images/barshik.png";
import biggopti from "../../assets/images/biggopti.png";
import budget from "../../assets/images/budget.png";
import film from "../../assets/images/film.jpg";
import forms from "../../assets/images/forms.jpg";
import nirapotta from "../../assets/images/nirapotta.png";
import nitimala from "../../assets/images/nitimala.png";
import obhijog from "../../assets/images/obhijog.png";
import odbhaboni from "../../assets/images/odbhaboni.png";
import others from "../../assets/images/others.jpg";
import press from "../../assets/images/press.jpg";
import sdg from "../../assets/images/sdg.png";
import seba from "../../assets/images/seba.png";
import sebaprodan from "../../assets/images/sebaprodan.jpg";
import shoddhachar from "../../assets/images/shoddhachar.jpg";
import sohoj from "../../assets/images/sohoj.png";
import television from "../../assets/images/television.png";
import tottho from "../../assets/images/tottho.png";
import law from "../../assets/images/law.jpg";
import { FaRegCircle } from "react-icons/fa6";
import Container from "../Container/Container";
import { Select, Option } from "@material-tailwind/react";
import Logo from "../../assets/images/logo.png";

const services = [
  {
    logo: aboutUsLogo,
    title: "আমাদের বিষয়",
    subsections: [
      "ভিশন ও মিশন",
      "সাংগঠনিক কাঠামো",
      "কর্মকর্তাবৃন্দ",
      "কর্মবন্টন",
    ],
  },
  {
    logo: biggopti,
    title: "বিজ্ঞপ্তি/আদেশ/পরিপত্র",
    subsections: [
      "প্রজ্ঞাপন/পরিপত্র",
      "অফিস আদেশ/বিদেশ ভ্রমণের জিও/পাসপোর্ট অনাপত্তিপত্র",
      "সংবাদ বিজ্ঞপ্তি",
      "দরপত্র/নিয়োগ বিজ্ঞপ্তি",
    ],
  },
  {
    logo: nitimala,
    title: "নীতিমালা ও প্রকাশনা",
    subsections: [
      "নীতিমালা",
      "আইন ও বিধি",
      "প্রকাশনা ও বার্ষিক প্রতিবেদন",
      "বিভিন্ন প্রতিবেদন",
    ],
  },
  {
    logo: seba,
    title: "নাগরিক ই-সেবাসমূহ",
    subsections: [
      "বিদেশী চলচ্চিত্র আমদানির অনাপত্তি প্রদান",
      "বেসরকারি মালিকানাধীন এফ এম বেতার কেন্দ্রের লাইসেন্স নবায়ন",
    ],
  },
  {
    logo: sebaprodan,
    title: "সেবা প্রদান প্রতিশ্রুতি",
    subsections: [
      "সেবা প্রদান প্রতিশ্রুতি",
      "ফোকাল পয়েন্ট কর্মকর্তা/পরিবীক্ষণ কমিটি",
      "কর্মপরিকল্পনা, পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
    ],
  },
  {
    logo: barshik,
    title: "বার্ষিক কর্মসম্পাদন চুক্তি",
    subsections: [
      "নির্দেশিকা/পরিপত্র/এপিএ টিম/ ফোকাল পয়েন্ট",
      "বার্ষিক কর্মসম্পাদন চুক্তি ও ফলাফল",
      "পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
      "এপিএএমএস সফটওয়্যার লিংক",
    ],
  },
  {
    logo: shoddhachar,
    title: "জাতীয় শুদ্ধাচার কৌশল",
    subsections: [
      "উত্তম চর্চা কর্মপরিকল্পনা সফটওয়্যার লিংক",
      "নৈতিকতা কমিটি ও ফোকাল পয়েন্ট",
      "পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
    ],
  },
  {
    logo: obhijog,
    title: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
    subsections: [
      "অনিক ও আপিল কর্মকর্তা",
      "কর্মপরিকল্পনা, পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
      "অভিযোগ দাখিল (অনলাইন)",
    ],
  },
  {
    logo: tottho,
    title: "তথ্য অধিকার",
    subsections: [
      "দায়িত্বপ্রাপ্ত কর্মকর্তা, আপিল কর্তৃপক্ষ",
      "কর্মপরিকল্পনা, আবেদন, আপিল, অভিযোগ ফরম ও সফটওয়্যার লিংক",
      "স্বপ্রণোদিতভাবে প্রকাশযোগ্য তথ্যসমূহ",
    ],
  },
  {
    logo: odbhaboni,
    title: "উদ্ভাবনী কার্যক্রম",
    subsections: [
      "কর্মপরিকল্পনা/নির্দেশিকা/ প্রকল্পসমূহ",
      "ইনোভেশন টিম",
      "প্রজ্ঞাপন/পরিপত্র/নীতিমালা/সংকলন",
      "মূল্যায়ন প্রতিবেদন সফটওয়্যার লিংক",
    ],
  },
  {
    logo: sohoj,
    title: "সেবা সহজিকরণ",
    subsections: [
      "সেবা সহজিকরণ ম্যানুয়াল",
      "প্রজ্ঞাপন/পরিপত্র/নীতিমালা/অফিস আদেশ/সংকলন",
      "সহজিকৃত সেবার তালিকা",
      "সেবা সহজিকরণের দৃষ্টান্ত",
    ],
  },
  {
    logo: budget,
    title: "বাজেট ও প্রকল্প",
    subsections: [
      "বার্ষিক ক্রয় পরিকল্পনা",
      "বাজেট ও এমটিবিএফ বাজেট",
      "বাজেট প্রতিবেদন/অফিস আদেশ",
      "গুরুত্বপূর্ণ সমাপ্ত প্রকল্প সমূহ",
    ],
  },
  {
    logo: sdg,
    title: "এসডিজি ও উন্নয়ন কর্মপরিকল্পনা",
    subsections: [
      "মন্ত্রণালয়/বিভাগের এসডিজি",
      "এসডিজি ফোকাল / বিকল্প ফোকাল পয়েন্ট",
      "এসডিজি জাতীয় ডকুমেন্ট",
      "পঞ্চবার্ষিকী পরিকল্পনা ও প্রতিবেদন",
    ],
  },
  {
    logo: forms,
    title: "ফরমসমূহ",
    subsections: ["সাংবাদিক কল্যাণ তহবিল আবেদন", "সকল সরকারি ফরম", "রিকুজিশন"],
  },
  {
    logo: nirapotta,
    title: "সামাজিক নিরাপত্তা",
    subsections: [
      "সামাজিক নিরাপত্তা",
      "সমন্বয় ব্যবস্থাপনা",
      "কার্যক্রম",
      "প্রজ্ঞাপন/পরিপত্র/নীতিমালা",
    ],
  },
  {
    logo: film,
    title: "চলচ্চিত্র",
    subsections: [
      "জাতীয় চলচ্চিত্র পুরস্কার / জুরি বোর্ড / সেন্সর বোর্ড",
      "যৌথ প্রযোজনায় চলচ্চিত্র নির্মান",
      "স্বল্পদৈর্ঘ্য চলচ্চিত্র নীতিমালা-২০১২",
    ],
  },
  {
    logo: television,
    title: "টেলিভিশন",
    subsections: [
      "অনাপত্তি প্রদানকৃত দেশি ও বিদেশি টেলিভিশন চ্যানেল এর তালিকা",
      "জাতীয় সম্প্রচার নীতিমালা",
      "অনুমোদিত আইপি টিভির তালিকা",
    ],
  },
  {
    logo: press,
    title: "প্রেস",
    subsections: [
      "সরকারি মিডিয়াভুক্ত সংবাদপত্রের তালিকা",
      "আইন,বিধি,নীতিমালা,পরিপত্র, নির্দেশিকা ও প্রজ্ঞাপন",
      "অনুমোদনকৃত অনলাইন পোর্টাল ও দৈনিক অনলাইন নিউজ পোর্টালের তালিকা",
      "ক্রোড়পত্র প্রকাশ সংক্রান্ত কার্যক্রমের ধাপসমূহ",
    ],
  },
  {
    logo: law,
    title: "আইন/নীতিমালা",
    subsections: [
      "জাতীয় সম্প্রচার নীতিমালা",
      "ক্যাবল টিভি বিধিমালা-২০১০",
      "সাংবাদিক কল্যাণ ট্রাস্ট বিধিমালা",
    ],
  },
  {
    logo: others,
    title: "বিবিধ",
    subsections: ["বার্ষিক প্রতিবেদন", "টেন্ডার", "ফটোগ্যালারী", "অন্যান্য"],
  },
];

const MainContent = () => {
  return (
    <Container>
      <div className="sm:text-4xl text-2xl text-center font-bold mt-20">
        <img src={Logo} alt="logo" className="mx-auto my-10" />
        <h1>তথ্য ও সম্প্রচার মন্ত্রণালয়</h1>
        <h1 className="leading-loose">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-0 gap-2 sm:px-0 px-2 my-20">
        <div className="w-72 flex gap-2">
          <Select label="অফিসের ধরন">
            <Option>মন্ত্রণালয়/বিভাগ</Option>
            <Option>অধিদপ্তর/বাতায়ন</Option>
            <Option>বিভাগীয় বাতায়ন</Option>
            <Option>জেলা বাতায়ন</Option>
            <Option>উপজেলা বাতায়ন</Option>
          </Select>
          <button className="bg-[#333333] h-10 rounded-md">
            <p className="text-white text-sm px-2">খুজুন</p>
          </button>
        </div>
        <form className="max-w-md w-full place-self-end">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            খুজুন
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 ps-10 text-sm text-gray-900 border border-[#d7d7d8] rounded-lg bg-gray-50 focus:border-[#9f9fa3] dark:placeholder-gray-400 focus:outline-none dark:text-white"
              placeholder="অনুসন্ধান করুন..."
              required
            />
            {/* <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-[#333333] hover:bg-black focus:outline-none focus:ring-[#333333] font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button> */}
          </div>
        </form>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 sm:px-0 px-2 mt-10">
        {services.map((service, i) => {
          return (
            <div
              className="rounded-md bg-[#fefefe] border border-[#caccd1] h-auto w-auto p-5"
              key={i}
            >
              <div className="flex items-center gap-4">
                <img src={service.logo} alt="logo" className="h-20 w-20" />
                <h5 className="text-xl font-medium">{service.title}</h5>
              </div>
              <div>
                {service.subsections.map((item, i) => {
                  return (
                    <Link to="/" key={i}>
                      <div className="rounded-md mt-4 p-4 bg-[#f3f4f7] flex gap-4 items-center border border-[#7fbb00] hover:bg-[#caccd1] hover:delay-100 hover:duration-300 transition ease-in-out">
                        <FaRegCircle className="text-[#7fbb00] size-4" />
                        <p className="text-base font-normal">{item}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default MainContent;
