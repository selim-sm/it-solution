import { Divider } from "@nextui-org/react";
import { Copyright } from "lucide-react";
import Link from "next/link";

const Foter = () => {
  return (
    <>
      <div className="bg-[url(/foter-1.jpg)] lg:pt-32 py-20 bg-no-repeat w-full bg-cover">
        <div className="container mx-auto px-6">
          <div className=" lg:flex justify-around text-center lg:text-start lg:gap-5 text-white">
            <div className="">
              <Link href={"/"}>
                <div className="flex justify-center">
                  <img src="/logo.png" alt="" />
                </div>
              </Link>
              <div className="font-nunito">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis{" "}
                <br />
                harum quos dolore repellendus magni ad, tenetur eveniet corporis{" "}
                <br />
                tempore molestiae cumque sit rerum adipisci saepe? Et quam{" "}
                <br />
                consequuntur odio voluptas?
              </div>
            </div>

            <div className="">
              <div className="text-2xl font-bold pb-4 pt-3 font-nunito">
                Company
              </div>
              <Link href={"/"}>
                <div className="hover:text-red-500">HOME</div>
              </Link>
              <Link href={"/about"}>
                <div className="hover:text-red-500">ABOUT</div>
              </Link>
              <Link href={"/service"}>
                <div className="hover:text-red-500">SERVICE</div>
              </Link>
              <Link href={"/contact"}>
                <div className="hover:text-red-500">CONTACT US</div>
              </Link>
            </div>
            <div className="">
              <div className="text-2xl font-bold pb-4 pt-3 font-nunito">
                Business
              </div>
              <Link href={"#"}>
                <div className="hover:text-red-500">Project</div>
              </Link>
              <Link href={"#"}>
                <div className="hover:text-red-500">Our Team</div>
              </Link>
              <Link href={"#"}>
                <div className="hover:text-red-500">Facts</div>
              </Link>
              <Link href={"#"}>
                <div className="hover:text-red-500">Customers</div>
              </Link>
            </div>
            <div className="">
              <div className="text-2xl font-bold pt-3 font-nunito">
                Get In Touch
              </div>
              <div className="py-4">
                Rt. 66, Downtown, Washington, DC <br /> info@example.com​ <br />
                1-800-1234-567 <br /> +001 987-654-3210
              </div>
              <div className="flex gap-5 justify-center lg:justify-normal">
                {/* facebook */}
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-facebook hover:stroke-cyan-400"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                {/* facebook */}
                {/* insta */}
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram hover:stroke-cyan-400"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                {/* insta */}
                {/* twiter */}
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-twitter hover:stroke-cyan-400"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                {/* twiter */}
                {/* inbox */}
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail-plus hover:stroke-cyan-400"
                  >
                    <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    <path d="M19 16v6" />
                    <path d="M16 19h6" />
                  </svg>
                </Link>
                {/* inbox */}
                {/* linkdin */}
                <Link href={"#"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-linkedin hover:stroke-cyan-400"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                {/* linkdin */}
              </div>
            </div>
          </div>
          <div className="pt-32">
            <Divider className="bg-white" />
          </div>
          <div className="text-white flex justify-center items-center gap-2 pt-3">
            <Copyright /> {"   "} 2024 SM IT Solution. All rights reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Foter;
