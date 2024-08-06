import ContactMain from "@/components/ContactMain";

const contact = () => {
  return (
    <>
      <div className="bg-[url(/bg-9.jpg)] bg-no-repeat bg-cover bg-fixed text-white">
        <div className="bg-[#0202239d]">
          <div className="container mx-auto px-6">
            <div className="flex justify-center items-center flex-col h-[30rem]">
              <div className="text-5xl font-bold font-roboto">Contact Us</div>
              <div className="text-2xl font-bold py-6 text-center font-nunito">
                Contact for Premium Business Services
              </div>
              <div className="text-center font-nunito">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Suspendisse et justo. <br /> Praesent mattis commodo augue.
                Aliquam ornare hendrerit augue.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact main*************************** */}

      <ContactMain />

      {/* contact main*************************** */}
    </>
  );
};

export default contact;
