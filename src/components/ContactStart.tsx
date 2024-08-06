import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ContactStart = () => {
  return (
    <>
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-tr from-[#01011c] via-[#4b014b] to-[#680254] rounded-xl">
          <div className="text-center lg:text-start lg:flex justify-evenly items-center py-20 mt-20 backdrop-blur-sm bg-white/10 rounded-xl">
            <div className="">
              <div className="text-4xl pb-3 font-bold font-roboto">
                Would you like to start a project with us?
              </div>
              <div className="font-nunito">
                Etiam erat lectus, finibus eget commodo quis, tincidunt eget
                leo. Nullam quis <br /> vulputate orci, ac accumsan quam. Morbi
                fringilla congue libero.
              </div>
            </div>
            <div className="pt-5 lg:pt-0 font-roboto">
              <Link href={"/contact"}>
                <Button className="text-white backdrop-blur-lg bg-white/15 hover:bg-gradient-to-tr from-[#010126] via-[#010126] to-[#c305c3] px-6 py-6 font-semibold text-[1.10rem]">
                  CONTACT US <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactStart;
