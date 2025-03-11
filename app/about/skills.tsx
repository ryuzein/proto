"use client"
import Image from "next/image";
import { useTheme } from 'next-themes';
import { useState, useEffect } from "react";
import { SiNextdotjs } from "react-icons/si";
import { motion, Variants } from "framer-motion";

const Skills = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const style_nextjs = { color: theme == "light" ? "black" : "white", fontSize: "19px"}

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };
  const first_data = [
    {
      id: 1,
      name: "Languages",
      code: [
        {
          name: "HTML",
          icon: <i className="fa-brands fa-html5"></i>,
          color: "language-html",
        },
        {
          name: "CSS",
          icon: <i className="fa-brands fa-css3-alt"></i>,
          color: "language-css",
        },
        {
          name: "JavaScript",
          icon: <i className="fa-brands fa-js"></i>,
          color: "language-js",
        },
        {
          name: "PHP",
          icon: <i className="fa-brands fa-php"></i>,
          color: "language-php",
        },
      ],
      code_img: [
        {
          name: "Kotlin",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/600px-Kotlin_Icon.png?20210501145042",
          url: "https://kotlinlang.org/"
        },
        {
          name: "C#",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/205px-C_Sharp_Logo_2023.svg.png",
          url: "https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"
        },
      ]
    },
  ]
  const official_data = [
    {
      id: 2,
      name: "Libraries",
      code: [
        {
          name: "React.js",
          icon: <i className="fa-brands fa-react"></i>,
          color: "language-react",
          url: "https://reactjs.org/"
        },
      ],
      code_img: [
        {
          name: "Styled-Components",
          img: "https://styled-components.com/atom.png",
          url: "https://styled-components.com/"
        },
        {
          name: "Chakra-UI",
          img: "https://avatars.githubusercontent.com/u/54212428?s=200&v=4",
          url: "https://chakra-ui.com/"
        }
      ]
    },
    {
      id: 3,
      name: "Framework",
      code: [
        {
          name: "Boostrap",
          icon: <i className="fa-brands fa-bootstrap"></i>,
          color: "language-bootstrap",
          url: "https://getbootstrap.com/"
        },
        {
          name: "Laravel",
          icon: <i className="fa-brands fa-laravel"></i>,
          color: "language-laravel",
          url: "https://laravel.com/"
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs style={style_nextjs} />,
          color: "",
          url: "https://nextjs.org/"
        },
      ],
      code_img: [
        {
          name: "Tailwind",
          img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          url: "https://tailwindcss.com/"
        },
      ]
    },
    {
      id: 4,
      name: "Tools & Systems",
      code: [
        {
          name: "Github",
          icon: <i className="fa-brands fa-github"></i>,
          color: theme == "light" ? "language-github" : "white",
          url: "http://github.com/"
        },
        {
          name: "Git",
          icon: <i className="fa-brands fa-git-alt"></i>,
          color: "language-git",
          url: "https://git-scm.com/"
        },
      ],
      code_img: [
        {
          name: "Figma",
          img: "https://avatars.githubusercontent.com/u/5155369?s=200&v=4",
          url: "https://www.figma.com/"
        },
        {
          name: "VSCode",
          img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
          url: "https://code.visualstudio.com/"
        }
      ]
    },
  ]
  const workExperiences = [
    {
      title: "IT Infrastructure Engineer",
      corp: "Google",
      year: "2022 - Present",
      description: "Responsible for managing and maintaining IT infrastructure, ensuring system stability, and implementing security measures.",
      companyLogo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
      companyName: "Google"
    },
    {
      title: "Network Engineer",
      corp: "Google",
      year: "2020 - 2022",
      description: "Designed, implemented, and maintained network solutions to ensure connectivity and security across various platforms.",
      companyLogo: "/assets/img/pt2.png",
      companyName: "Net Solutions"
    }
  ]

  // Animation variants for section headers
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for skill categories
  const categoryVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for skill items with bounce
  const skillItemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -100,
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
        mass: 1.2
      }
    })
  };

  // Animation variants for work experience items
  const workExpVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -50,
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.3,
        type: "spring",
        stiffness: 120,
        damping: 14,
        mass: 1
      }
    })
  };

  return (
    <div>
      <motion.h1 
        className="font-bold text-3xl xl:text-[1.7rem] tracking-title text-primary"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        Skills 
      </motion.h1>

      {first_data.map((category) => (
        <div key={category.id}>
          <motion.h4 
            className="font-medium text-lg my-2"
            variants={categoryVariants}
            initial="hidden"
            animate="visible"
          >
            {category.name}
          </motion.h4>
          
          <div className="flex flex-col md:flex-row flex-wrap md:space-x-2 space-y-2 md:space-y-0 items-start md:items-center">
            {category.code.map((item, index) => (
              <motion.div 
                custom={index}
                variants={skillItemVariants}
                initial="hidden"
                animate="visible"
                className="border border-border flex flex-row px-5 py-2 rounded-lg items-center bg-background dark:bg-soft hover:bg-hoversoft dark:hover:bg-hoversoft hover:cursor-default" 
                key={index}
              >
                <div className={`text-${item.color}`}>
                  {item.icon}
                </div>
                &nbsp;&nbsp;
                {item.name}
              </motion.div>
            ))}

            {category.code_img.map((item, index) => (
              <motion.a 
                href={item.url} 
                target="_blank" 
                key={index}
                custom={index + category.code.length}
                variants={skillItemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="border border-border flex flex-row color-gray-700 px-5 py-2 rounded-lg items-center bg-background dark:bg-soft hover:bg-hoversoft dark:hover:bg-hoversoft">
                  <div className="flex items-center">
                    <div className="w-5">
                      <Image
                        src={item.img}
                        width={100}
                        height={100}
                        alt="language"
                      />
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    {item.name}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      ))}

      {official_data.map((category) => (
        <div key={category.id}>
          <motion.h4 
            className="font-medium text-lg my-2"
            variants={categoryVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: category.id * 0.1 }}
          >
            {category.name}
          </motion.h4>
          
          <div className="flex flex-col md:flex-row flex-wrap md:space-x-2 space-y-2 md:space-y-0 items-start md:items-center">
            {category.code.map((item, index) => (
              <motion.a 
                href={item.url} 
                target="_blank" 
                key={index}
                custom={(category.id * 5) + index}
                variants={skillItemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="border border-border flex flex-row color-gray-700 px-5 py-2 rounded-lg items-center bg-background dark:bg-soft hover:bg-hoversoft dark:hover:bg-hoversoft">
                  <div className={`text-${item.color}`}>
                    {item.icon}
                  </div>
                  &nbsp;&nbsp;
                  {item.name}
                </div>
              </motion.a>
            ))}

            {category.code_img.map((item, index) => (
              <motion.a 
                href={item.url} 
                target="_blank" 
                key={index}
                custom={(category.id * 5) + index + category.code.length}
                variants={skillItemVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="border border-border flex flex-row color-gray-700 px-5 py-2 rounded-lg items-center bg-background dark:bg-soft hover:bg-hoversoft dark:hover:bg-hoversoft">
                  <div className="flex items-center">
                    <div className="w-5">
                      <Image
                        src={item.img}
                        width={100}
                        height={100}
                        alt="language"
                      />
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    {item.name}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      ))}

      <motion.h1 
        className="font-bold text-3xl xl:text-[1.7rem] tracking-title text-primary mt-8"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
      >
        Work Experience
      </motion.h1>
      
      {workExperiences.map((exp, index) => (
        <motion.div 
          key={index} 
          className="bg-background dark:bg-soft border border-border p-6 rounded-lg shadow-md mt-4 flex items-center"
          custom={index}
          variants={workExpVariants}
          initial="hidden"
          animate="visible"
        >
          <Image src={exp.companyLogo} width={50} height={50} alt={exp.companyName} className="mr-4" />
          <div>
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <h4 className="text-l font-semibold">At {exp.corp}</h4>
            <p className="text-gray-400">{exp.year}</p>
            <p className="text-gray-300 mt-2">{exp.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Skills;