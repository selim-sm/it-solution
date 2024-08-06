import Catagory from "@/components/Catagory";
import ContactStart from "@/components/ContactStart";
import Portfolio from "@/components/Portfolio";

const service = () => {
  return (
    <>
      <div className="bg-[url(/bg-3.webp)] bg-no-repeat bg-cover bg-fixed text-white">
        <div className="bg-[#0202239d]">
          <div className="container mx-auto px-6">
            <div className="flex justify-center items-center flex-col h-[30rem]">
              <div className="text-5xl font-bold font-roboto">Services</div>
              <div className="text-2xl font-bold py-6 text-center font-nunito">
                We provide a wide range of Services
              </div>
              <div className="text-center font-nunito">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Suspendisse et justo. <br /> Praesent mattis commodo augue.
                Aliquam ornare hendrerit augue.
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-gradient-to-r from-[#000428] to-[#022864] text-white pb-16">
        <Catagory />
        <Portfolio />
        <ContactStart />
      </div>
    </>
  );
};

export default service;
