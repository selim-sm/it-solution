import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="bg-[url(/bg-2.png)] bg-no-repeat bg-cover text-white">
        <div className="container mx-auto px-6">
          <div className="lg:flex justify-around items-center py-14">
            <div className="">
              <div className="text-2xl font-bold font-roboto">
                Fastest And Most Lightweight WP Theme
              </div>
              <div className="text-6xl font-bold pt-6 pb-5 font-nunito">
                Create Amazing <br /> Business Websites
              </div>
              <div className="font-nunito">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Suspendisse et <br /> justo. Praesent mattis commodo augue.
                Morbi fringilla congue libero, <br /> ac malesuada vulputate
                pharetra.
              </div>
              <div className="pt-10 font-roboto">
                <Link href={"/service"}>
                  <Button className="text-white backdrop-blur-lg bg-white/15 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#c305c3] px-6 py-6 font-semibold text-[1.10rem]">
                    Get Started <ArrowRight />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="pt-5 lg:pt-0">
              <img
                src="/c.jpg"
                className="w-[550px] shadow-2xl shadow-blue-950 rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
