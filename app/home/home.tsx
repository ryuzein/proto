import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Typewritter from 'typewriter-effect';
import { FaInstagram, FaGithub, FaDribbble } from "react-icons/fa";
import { FaXTwitter, FaArrowRightLong } from "react-icons/fa6";
import LatestBlog from "./latest-blog";
import Lanyard from "../components/Lanyard/Lanyard";

const socialmedia = [
  {
    name: "github",
    icon: <FaGithub size="25px" />,
    link: "https://github.com/ryuzein",
  },
  {
    name: "twitter",
    icon: <FaXTwitter size="25px" />,
    link: "https://twitter.com/romadhonaji1",
  },
  {
    name: "instagram",
    icon: <FaInstagram size="25px" />,
    link: "https://www.instagram.com/romadhonajii",
  },
  {
    name: "dribbble",
    icon: <FaDribbble size="23px" />,
    link: "https://dribbble.com/",
  }
];

const BouncingImage = () => {
  return (
    <motion.div
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="md:w-2/5"
    >
      <Image
        src="/assets/img/techgirl.png"
        width={1000}
        height={1000}
        alt="gambar"
      />
    </motion.div>
  );
};

const Home = () => {
  return (
    <div className="bg-gradient-to-tr md:h-lvh from-mediumpastel via-viapastel to-pastel">
      <div className="mx-auto px-6 sm:px-8 md:px-10 xl:px-0 md:w-[96%] lg:w-[70%]">
        <section id="home" className="pt-28 md:pt-24 pb-16 md:pb-12 lg:pt-28 lg:pb-20 xl:pb-24 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-x-2 md:space-y-0">
            <div className="md:w-3/4 space-y-2">
              <div>
                <h1 className="font-bold text-3xl lg:text-4xl lg:leading-[52px] xl:text-[2.9rem] xl:leading-[60px] tracking-title">Hello, I&apos;m</h1>
                <h1 className="font-bold text-4xl lg:text-5xl lg:leading-[52px] xl:text-[3.3rem] xl:leading-[60px] tracking-title text-primary">Romadhon Aji Satrya</h1>
              </div>
              <div className="text-desc text-base xl:text-deskripsi tracking-desc font-medium">
                <Typewritter
                  options={{ loop: true }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("I'm IT Infrastructure Engineer")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("I'm Network Engineer")
                      .pauseFor(2000)
                      .start();
                  }}
                />
              </div>
              <div className="flex pt-2 space-x-4">
                {socialmedia.map((_, idx) => (
                  <Link key={idx} href={_.link} target="_blank" className="hover:text-primary">
                    {_.icon}
                  </Link>
                ))}
              </div>
              <div className="absolute top-[-120px] right-[-130px] transform -translate-x-1/2 hidden md:block">
                <Lanyard position={[0, 0, 17]}/>
            </div>
              <div className="flex gap-x-3 pt-3">
                <Button variant="primary"><a href="assets/img/cv.png" target="_blank">Resume</a></Button>
                <Button variant="detail_outline" className="flex items-center">
                  <Link href="/about">More Detail</Link>&nbsp;&nbsp;<FaArrowRightLong />
                </Button>
              </div>
            </div>
            <BouncingImage />
          </div>
        </section>
      </div>
      <LatestBlog />
    </div>
  );
};

export default Home;
