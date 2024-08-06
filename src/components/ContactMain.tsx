import { Mail, MapPin, Phone, PhoneOutgoing } from "lucide-react";
import ContactStart from "./ContactStart";

const ContactMain = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#000428] to-[#022864] text-white">
        <div className="container mx-auto px-6 ">
          <div className="lg:flex gap-5 p-5 justify-center">
            <div className="pb-5 lg:pb-0">
              <iframe
                className="rounded-xl w-[21rem] h-[20rem] lg:w-[30rem] lg:h-[30rem]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28600.750622423344!2d88.54243489991654!3d22.776174712140893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a4992da3b94d%3A0xa42b7bb4473e5613!2sChaltaberia%2C%20Joypul%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1722656789527!5m2!1sen!2sin"
                // width="600"
                // height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-gradient-to-tr from-[#000023] to-[#0582b8] shadow-lg shadow-cyan-500 p-10 rounded-xl">
              <div className="text-3xl font-bold pb-10 font-roboto">
                Get In Touch
              </div>
              <div className="flex gap-3 font-nunito">
                <MapPin /> 123/B, Route 66, Downtown, Washington, DC 20004, US​
              </div>
              <div className="flex gap-3 py-5 font-nunito">
                <Mail />
                info@example.com
              </div>
              <div className="flex gap-3 font-nunito">
                <PhoneOutgoing />
                +001 987-654-3210
              </div>
              <div className="text-3xl font-bold pt-10 pb-5 font-roboto">
                Call us Toll Free
              </div>
              <div className="flex gap-3 font-nunito">
                <Phone />
                1-800-1234-567
              </div>
            </div>
          </div>
          {/* mail************************ */}
          <div className="bg-[url(/bg-10.jpeg)] bg-no-repeat bg-cover text-black rounded-xl">
            <div className="backdrop-blur-sm bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/30 rounded-xl">
              <div className="text-4xl text-center font-bold py-10 text-white font-roboto">
                Contact Me
              </div>
              <div className="md:flex justify-center gap-3">
                <div className="flex justify-center mb-5 md:mb-0">
                  <input
                    className="ring-2 ring-cyan-400 rounded-sm py-2 w-[18rem] p-5"
                    placeholder="Full Name"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    className="ring-2 ring-cyan-400 rounded-sm py-2 w-[18rem] p-5"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="md:flex justify-center items-center gap-3 pt-3">
                <div className="flex justify-center mb-5 md:mb-0">
                  <input
                    className="ring-2 ring-cyan-400 rounded-sm py-2 w-[18rem] p-5"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="flex justify-center">
                  <input
                    className="ring-2 ring-cyan-400 rounded-sm py-2 w-[18rem] p-5"
                    placeholder="Email Subject"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center pt-5 pb-10">
                <textarea
                  className="ring-2 ring-cyan-400 rounded-sm w-[37rem] h-[20rem] p-5"
                  placeholder="Enter your text here..."
                ></textarea>
              </div>
              <div className="flex justify-center pb-16 font-roboto">
                <div className="bg-white/15 text-white cursor-pointer text-xl font-bold shadow-xl shadow-fuchsia-500 rounded-xl px-10 py-3">
                  SUBMIT
                </div>
              </div>
            </div>
          </div>
          {/* mail************************ */}

          {/* contact top */}
          <div className="pb-10">
            <ContactStart />
          </div>

          {/* contact top */}
        </div>
      </div>
    </>
  );
};

export default ContactMain;
