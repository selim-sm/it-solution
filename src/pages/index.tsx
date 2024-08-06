import Catagory from "@/components/Catagory";
import ContactStart from "@/components/ContactStart";
import Foter from "@/components/Foter";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Portfolio from "@/components/Portfolio";

const index = () => {
  return (
    <>
      <Hero />
      <div className="bg-gradient-to-r from-[#000428] to-[#022864] text-white pb-16">
        <Catagory />
        <Portfolio />
        <ContactStart />
      </div>
    </>
  );
};

export default index;
