import Container from "./container";
import Link from "next/link";
import { FaInstagram, FaGithub, FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";

const Footer = () => {
  const socialmedia = [
    {
      name: "github",
      icon: <FaGithub size="18px" />,
      link: "https://github.com/ryuzein",
    },
    {
      name: "twitter",
      icon: <FaXTwitter size="18px" />,
      link: "https://twitter.com/romadhonaji1",
    },
    {
      name: "instagram",
      icon: <FaInstagram size="18px" />,
      link: "https://www.instagram.com/romadhonajii",
    },
    {
      name: "dribbble",
      icon: <FaDribbble size="18px" />,
      link: "https://dribbble.com/",
    }
  ]
  const currentYear = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return year;
  }

  return (
    <section id="footer" className="dark:bg-soft border-t border-soft">
      <Container>
        <hr className="bg-[#EEF1F6] border-[0.5] border-[#EEF1F6] dark:border-navdark dark:bg-navdark" />

        <div className="py-8">
          <div className="flex items-center space-x-6 justify-center mb-6">
            <Link href="https://github.com/ryuzein" target="_blank">
              <div className="flex items-center space-x-2 ">
                <FaGithub size="24" />
                <span className="capitalize font-medium hover:underline decoration-primary decoration-2 underline-offset-[3px] text-foreground">source code</span>
              </div>
            </Link>
            <Link href="https://www.buymeacoffee.com/ryuzein" target="_blank">
              <div className="bg-[#FFDD00] hover:bg-[#FFDD00]/95 flex items-center px-3 py-2 space-x-2 rounded-md text-black">
                <SiBuymeacoffee />
                <span className="uppercase  text-xs font-medium tracking-widest">
                  buy me coffee
                </span>
              </div>
            </Link>
          </div>
          <div className="bg-soft py-5 px-8 border border-border dark:border-soft rounded-lg flex flex-col md:flex-row justify-between md:items-center space-y-3 md:space-y-0">
            <span className="text-desc font-medium ">© {currentYear()} Romadhon Aji S. All rights reserved.</span>

            <div className="flex gap-5">
              {socialmedia.map((_, idx) => (
                <Link key={idx} href={_.link} target="_blank" className="text-desc hover:text-primary">
                  {_.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;