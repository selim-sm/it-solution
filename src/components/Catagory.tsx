import {
  BadgeCheck,
  BadgeDollarSign,
  CircleUser,
  FolderCode,
  Inbox,
  PanelRightOpen,
  SquarePen,
} from "lucide-react";

const Catagory = () => {
  return (
    <>
      <div className="">
        <div className="bg-[url(/bg-4.jpg)] bg-no-repeat bg-cover py-20">
          <div className="container mx-auto px-6">
            <div className="text-center text-5xl font-bold pb-6 font-nunito">
              How can we help you?
            </div>
            <div className="text-center pb-10">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Suspendisse et <br /> justo. Praesent mattis commodo augue.​
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
              <div className="rounded-xl px-10 py-5 backdrop-blur-lg bg-white/10 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#570257]">
                <SquarePen size={32} />{" "}
                <div className="pt-5 text-3xl font-bold font-nunito">
                  Design
                </div>
                <div className="pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis voluptatem natus, hic saepe temporibus provident eaque
                  deserunt dolorem quod accusamus.
                </div>
              </div>
              <div className="rounded-xl px-10 py-5 backdrop-blur-md bg-white/10 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#570257]">
                <FolderCode size={32} />
                <div className="pt-5 text-3xl font-bold font-nunito">
                  Development
                </div>
                <div className="pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis voluptatem natus, hic saepe temporibus provident eaque
                  deserunt dolorem quod accusamus.
                </div>
              </div>
              <div className="rounded-xl px-10 py-5 backdrop-blur-md bg-white/10 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#570257]">
                <BadgeDollarSign size={32} />{" "}
                <div className="pt-5 text-3xl font-bold font-nunito">
                  Marketing
                </div>
                <div className="pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis voluptatem natus, hic saepe temporibus provident eaque
                  deserunt dolorem quod accusamus.
                </div>
              </div>
              <div className="rounded-xl px-10 py-5 backdrop-blur-md bg-white/10 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#570257]">
                <BadgeCheck size={32} />{" "}
                <div className="pt-5 text-3xl font-bold font-nunito">
                  Social Media
                </div>
                <div className="pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis voluptatem natus, hic saepe temporibus provident eaque
                  deserunt dolorem quod accusamus.
                </div>
              </div>
              <div className="rounded-xl px-10 py-5 backdrop-blur-md bg-white/10 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#570257]">
                <PanelRightOpen size={32} />{" "}
                <div className="pt-5 text-3xl font-bold font-nunito">
                  eCommerce
                </div>
                <div className="pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis voluptatem natus, hic saepe temporibus provident eaque
                  deserunt dolorem quod accusamus.
                </div>
              </div>
              <div className="rounded-xl px-10 py-5 backdrop-blur-md bg-white/10 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#570257]">
                <CircleUser size={32} />{" "}
                <div className="pt-5 text-3xl font-bold font-nunito">
                  Help & Support
                </div>
                <div className="pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis voluptatem natus, hic saepe temporibus provident eaque
                  deserunt dolorem quod accusamus.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catagory;
