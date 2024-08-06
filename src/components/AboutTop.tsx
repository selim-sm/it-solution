import { Accordion, AccordionItem, Button, Divider } from "@nextui-org/react";
import { ArrowRight, Dot, Inbox } from "lucide-react";
import ContactStart from "./ContactStart";

const AboutTop = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <div className="bg-[url(/about.jpg)] bg-no-repeat bg-cover bg-fixed text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center flex-col h-[35rem]">
            <div className="text-5xl font-bold font-nunito">About Us</div>
            <div className="text-2xl font-bold py-6 font-roboto">
              Welcome to The Digital Agency
            </div>
            <div className="font-nunito">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Suspendisse et justo. Praesent mattis commodo augue. Aliquam
              ornare hendrerit augue.
            </div>
          </div>
        </div>
      </div>

      {/* card sec start********************** */}

      <div className="bg-gradient-to-r from-[#000428] to-[#022864] text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 relative bottom-32">
            <div className="px-10 py-5 backdrop-blur-lg bg-white/10 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#570257] rounded-xl">
              <div className="py-0.5 w-20 bg-white">
                <Divider />
              </div>
              <div className="pt-5 text-3xl font-bold font-nunito">
                Who Are We
              </div>
              <div className="pt-5">
                Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
                elit tellus, luctus nec ullam corper mattis, pulvinar. Etiam
                erat lectus, finibus eget commodo quis, tinci dunt eget leo.
                Nullam quis vulpu tate orci, ac accum san quam.
              </div>
            </div>
            <div className="px-10 py-5 backdrop-blur-lg bg-white/10 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#570257] rounded-xl">
              <div className="py-0.5 w-20 bg-white">
                <Divider />
              </div>
              <div className="pt-5 text-3xl font-bold font-nunito">
                Our Mission
              </div>
              <div className="pt-5">
                Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut
                elit tellus, luctus nec ullam corper mattis, pulvinar. Etiam
                erat lectus, finibus eget commodo quis, tinci dunt eget leo.
                Nullam quis vulpu tate orci, ac accum san quam.
              </div>
            </div>
            <div className="px-10 py-5 backdrop-blur-lg bg-white/10 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#570257] rounded-xl">
              <div className="py-0.5 w-20 bg-white">
                <Divider />
              </div>
              <div className="pt-5 text-3xl font-bold font-nunito">
                What We Do
              </div>
              <div className="pt-5">
                <div className="flex items-center">
                  <Dot size={32} /> UI UX Design
                </div>
                <div className="flex items-center">
                  <Dot size={32} />
                  Website Development
                </div>
                <div className="flex items-center">
                  <Dot size={32} />
                  Marketing
                </div>
                <div className="flex items-center">
                  <Dot size={32} />
                  Social Media
                </div>
                <div className="flex items-center">
                  <Dot size={32} />
                  eCommerce Store
                </div>
                <div className="flex items-center">
                  <Dot size={32} />
                  Tech Support
                </div>
              </div>
            </div>
          </div>
          {/* card sec end********************** */}

          {/* process sec********************************** */}

          <div className="pb-20">
            <div className="text-center text-5xl font-bold pb-16 font-nunito">
              Our 6-D Process
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-10 lg:gap-16">
              <div className="">
                <div className="text-8xl font-bold text-[#ffffff1b]">01.</div>
                <div className="text-2xl font-bold mt-[-1rem]">Discover</div>
                <div className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </div>
              </div>
              <div className="">
                <div className="text-8xl font-bold text-[#ffffff1b]">02.</div>
                <div className="text-2xl font-bold mt-[-1rem]">Define</div>
                <div className="">
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </div>
              </div>
              <div className="">
                <div className="text-8xl font-bold text-[#ffffff1b]">03.</div>
                <div className="text-2xl font-bold mt-[-1rem]">Design</div>
                <div className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </div>
              </div>
              <div className="">
                <div className="text-8xl font-bold text-[#ffffff1b]">04.</div>
                <div className="text-2xl font-bold mt-[-1rem]">Develop</div>
                <div className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </div>
              </div>
              <div className="">
                <div className="text-8xl font-bold text-[#ffffff1b]">05.</div>
                <div className="text-2xl font-bold mt-[-1rem]">Deploy</div>
                <div className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </div>
              </div>
              <div className="">
                <div className="text-8xl font-bold text-[#ffffff1b]">06.</div>
                <div className="text-2xl font-bold mt-[-1rem]">Deliver</div>
                <div className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </div>
              </div>
            </div>
          </div>

          {/* process sec********************************** */}
        </div>

        {/* why you chose us********************************* */}
        <div className="bg-[url(/bg-8.jpg)] bg-no-repeat bg-cover">
          <div className="container mx-auto px-6">
            <div className="lg:grid lg:grid-cols-2 gap-10 py-20">
              <div className="">
                <img src="/side.png" alt="" />
              </div>
              <div className="">
                <div className="text-5xl font-bold pb-5 font-nunito">
                  Why Choose Us?
                </div>
                <div className="pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar.
                </div>
                <div className="bg-white rounded-xl">
                  <Accordion variant="shadow">
                    <AccordionItem
                      className="text-black"
                      key="1"
                      aria-label="Accordion 1"
                      title="Best Quality Designs"
                    >
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                      className="text-black"
                      key="2"
                      aria-label="Accordion 2"
                      title="24x7 Live Support"
                    >
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                      className="text-black"
                      key="3"
                      aria-label="Accordion 3"
                      title="Result Oriented Projects"
                    >
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                      className="text-black"
                      key="4"
                      aria-label="Accordion 1"
                      title="Award Winning Support Team"
                    >
                      {defaultContent}
                    </AccordionItem>
                    <AccordionItem
                      className="text-black"
                      key="5"
                      aria-label="Accordion 2"
                      title="Experienced Professionals"
                    >
                      {defaultContent}
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* why you chose us********************************* */}

        {/* company growth***************************************** */}

        <div className="lg:flex justify-center items-center gap-10 pt-28">
          <div className="text-center pb-5 lg:pb-0">
            <div className="text-5xl font-bold font-nunito">
              Our Comapny Growth
            </div>
            <div className="pt-10">
              <Button className="font-roboto text-white backdrop-blur-lg bg-white/15 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#c305c3] px-6 py-6 font-semibold text-[1.10rem]">
                Get Started <ArrowRight />
              </Button>
            </div>{" "}
          </div>
          <div className="grid grid-cols-2 text-center justify-center gap-10 rounded-xl bg-gradient-to-tr from-[#010144] to-[#00ffff] px-5 py-5 shadow-lg shadow-cyan-500">
            <div className="">
              <div className="text-5xl font-bold">80+</div>
              <div className="text-2xl font-semibold font-nunito">
                Professionals
              </div>
            </div>
            <div className="">
              <div className="text-5xl font-bold">150+</div>
              <div className="text-2xl font-semibold font-nunito">
                Satisfied Clients
              </div>
            </div>
            <div className="">
              <div className="text-5xl font-bold">200+</div>
              <div className="text-2xl font-semibold font-nunito">
                Projects Completed
              </div>
            </div>
            <div className="">
              <div className="text-5xl font-bold">10+</div>
              <div className="text-2xl font-semibold font-nunito">
                Year Experience
              </div>
            </div>
          </div>
        </div>
        {/* company growth **************************************/}
        <div className="pb-10">
          <ContactStart />
        </div>
      </div>
    </>
  );
};

export default AboutTop;
