import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Container from "../Container/Container";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdOutlineEmergency } from "react-icons/md";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function ImportantLinks() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <Container className="my-20">
      <h1 className="sm:text-4xl text-2xl text-center font-bold mt-20">
        গুরুত্বপূর্ণ লিংকসমূহ
      </h1>
      <div className="my-20 sm:px-0 px-2">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            জরুরী নোটিশ
          </AccordionHeader>
          <AccordionBody className="grid gap-2">
            <div className="flex gap-2">
              <MdOutlineEmergency className="text-red-700"></MdOutlineEmergency>
              <a href="/">
                জি.ও.নং-১৬০২/১(৮) (প্রজ্ঞাপন: বহিঃ বাংলাদেশ ছুটি) (নতুন)
              </a>
            </div>
            <div className="flex gap-2">
              <MdOutlineEmergency className="text-red-700"></MdOutlineEmergency>
              <a href="/">জি.ও.নং-৩৩২ (শোকবার্তা) (নতুন)</a>
            </div>
            <div className="flex gap-2">
              <MdOutlineEmergency className="text-red-700"></MdOutlineEmergency>
              <a href="/">
                জি.ও.নং-৩৩০(৮) (প্রজ্ঞাপন) কর্মকর্তাগণের বদলি/পদায়ন। (নতুন)
              </a>
            </div>
            <div className="flex gap-2">
              <MdOutlineEmergency className="text-red-700"></MdOutlineEmergency>
              <a href="/">
                জি.ও.নং-২৩৭ (অফিস আদেশ: নিজ দপ্তরে যোগদানের নির্দেশনা প্রদান)
              </a>
            </div>
            <div className="flex gap-2">
              <MdOutlineEmergency className="text-red-700"></MdOutlineEmergency>
              <a href="/">
                জি.ও.নং-৩২২(৫) (প্রজ্ঞাপন) চাকরি স্থায়ীকরণ সংক্রান্ত।
              </a>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            অভ্যন্তরীণ ই-সেবাসমূহ
          </AccordionHeader>
          <AccordionBody className="grid gap-2">
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">বিদেশী চলচ্চিত্র আমদানির অনাপত্তি প্রদান।</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">
                বেসরকারি মালিকানাধীন এফ এম বেতার কেন্দ্রের লাইসেন্স নবায়ন
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">অনলাইন আবেদন (বাংলাদেশ চলচ্চিত্র সেন্সর বোর্ড)</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">পরীক্ষণ ফি ও স্ক্রিনিং ফি এর জন্য ক্যালকুলেটর</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">ওয়েব মেইল</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">অনলাইন ক্যাটলগিং (বাংলাদেশ ফিল্ম আর্কাইভ)</a>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>সকল</AccordionHeader>
          <AccordionBody className="grid gap-2">
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">বাংলাদেশ ই-ডিরেক্টরি</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">এক ঠিকানায় সরকারি সব সেবা।</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">এই দপ্তরের ডিজিটাল সেবা সমূহ।</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">রাষ্ট্রপতির কার্যালয়</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">মন্ত্রিপরিষদ বিভাগ</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">জনপ্রশাসন মন্ত্রণালয়</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">জাতীয় তথ্য বাতায়ন</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">সরকারি কর্মচারী ব্যবস্থাপনা পদ্ধতি (GEMS)</a>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            ইনোভেশন কর্নার
          </AccordionHeader>
          <AccordionBody className="grid gap-2">
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">ইনোভেশন টিম</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">ইনোভেশন টিমের বার্ষিক কর্ম-পরিকল্পনা</a>
            </div>
            <div className="flex gap-2 items-center">
              <CiLocationArrow1 className="text-[#7fbb00]"></CiLocationArrow1>
              <a href="/">অগ্রগতি প্রতিবেদন</a>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </Container>
  );
}
