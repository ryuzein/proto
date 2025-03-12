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
          name: "Go Lang",
          img: "https://go.dev/images/favicon-gopher.png",
          url: "https://go.dev/"
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
          name: "Laravel Filament",
          img: "https://filamentphp.com/favicon/apple-touch-icon.png?v=w1dBNxT7Wg",
          url: "https://filamentphp.com/"
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
          name: "Codeigniter",
          img: "https://codeigniter.com/favicons/apple-touch-icon.png",
          url: "https://codeigniter.com/"
        },
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
      ],
      code_img: [
        {
          name: "Figma",
          img: "https://avatars.githubusercontent.com/u/5155369?s=200&v=4",
          url: "https://www.figma.com/"
        },
        {
          name: "Postman",
          img: "https://camo.githubusercontent.com/5c2595c2fcc9ef7ffa97d14f868547d945d5cee65045377c7c34611b5a67c139/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
          url: "https://postman.com/"
        },
        {
          name: "Canva",
          img: "https://public.canva.site/logo/media/dfb96cc174513093cd6ed61489ccb750.svg",
          url: "https://canva.com/"
        },
        {
          name: "Photoshop CS6",
          img: "https://upload.wikimedia.org/wikipedia/commons/b/be/Adobe_Photoshop_CS6_icon.png",
          url: "https://postman.com/"
        },
        {
          name: "VSCode",
          img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
          url: "https://code.visualstudio.com/"
        }
      ]
    },
    {
      id: 5,
      name: "IT Networking",
      code: [
        {
          name: "Git",
          icon: <i className="fa-brands fa-git-alt"></i>,
          color: "language-git",
          url: "https://git-scm.com/"
        },
      ],
      code_img: [
        {
          name: "Linux",
          img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
          url: "#"
        },
        {
          name: "Windows Server",
          img: "https://www.cdnlogo.com/logos/w/40/windows-server-2.svg",
          url: "#"
        },
        {
          name: "DVR/NVR",
          img: "https://www.distributor-cctv.com/blog/wp-content/uploads/2025/02/cara-backup-rekaman-dvr-cctv-ke-hard-drive.png",
          url: "#"
        },
        {
          name: "SQL Yog",
          img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
          url: "#"
        }
      ]
    },
  ]
  const workExperiences = [
    {
      title: "Network Engineer",
      corp: "PT. Lintas Data Prima",
      year: "Nov 2019 - Apr 2020",
      description: "I was responsible for installing and configuring MikroTik antennas to optimize network coverage, monitoring internet activity to ensure stable connections, and maintaining WiFi networks and fiber optic cables. I also assisted in managing the Network Operation Center, troubleshooting network issues, and ensuring smooth data traffic for clients.",
      companyLogo: "/assets/img/ldp.png",
      companyName: "PT. Lintas Data Prima"
    },
    {
      title: "IT Support",
      corp: "Lippo Plaza Sidoarjo",
      year: "Jul 2022 - Feb 2023",
      description: "I handled troubleshooting for hardware, software, and electrical systems, ensuring smooth IT operations. I maintained and monitored the network infrastructure, configured access points, and provided maintenance for CCTV DVR/NVR systems to enhance security. Additionally, I supported the company’s branding efforts by applying my graphic design skills and helped maintain a seamless entertainment experience for customers.",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/800px-Google_%22G%22_logo.svg.png",
      companyName: "Lippo Plaza Sidoarjo"
    },
    // https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/ca6khrwp649w1h9wugpv
    
    {
      title: "IT Support and System Specialist",
      corp: "PT. Grand Pasific Pratama",
      year: "Mar 2023 - Present",
      description: "I managed the company's IT infrastructure, including network security, system administration, and troubleshooting. I installed and maintained CCTV, NVR, and DVR systems, ensuring reliable security monitoring. I was also responsible for administering and optimizing Linux and Windows servers, implementing cybersecurity measures to protect company data, and providing IT solutions to enhance operational efficiency and business continuity.",
      companyLogo: "/assets/img/pt2.png",
      companyName: "PT. Grand Pasific Pratama"
    }
  ]

  const educationExperiences = [
    {
      degree: "SMK Negeri 5 Madiun",
      institution: "Computer Engineering and Networking",
      year: "2018 - 2021",
      description: "I studied Computer Engineering and Networking at SMKN 5 Madiun, where I gained knowledge in network installation, configuration, and maintenance. My coursework covered LAN and WAN setup, server administration using Linux and Windows, and network security, including firewalls and troubleshooting techniques. Additionally, I developed hands-on experience in configuring network infrastructure and optimizing connectivity solutions."
    },
    {
      degree: "PT. Lintas Data Prima",
      institution: "Network Engineer & Network Operation Center",
      year: "2019 - 2020",
      description: "During my six-month internship at Lintas Data Prima, I worked as a Network Engineer and Network Operation Center (NOC) technician, handling network monitoring, troubleshooting, and maintenance. I was responsible for configuring routers and switches (Cisco/MikroTik), diagnosing network issues, and ensuring stable connectivity for clients. This experience enhanced my problem-solving skills, technical expertise, and ability to manage real-world networking challenges efficiently."
    },
    {
      degree: "Cisco Networking Academy",
      institution: "Online Course - CISCO",
      year: "2020",
      description: "The Cisco Introduction to Cybersecurity course covers global cyber threats, network vulnerabilities, and industry impacts. It introduces Cisco’s security approach, career opportunities, and certification paths, providing essential cybersecurity awareness."
    }
  ];
  

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
      <div>
      <motion.h1 
        className="font-bold text-3xl xl:text-[1.7rem] tracking-title text-primary mt-8"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
      >
        Education
      </motion.h1>
      
      {educationExperiences.map((edu, index) => (
        <motion.div 
          key={index} 
          className="bg-background dark:bg-soft border border-border p-6 rounded-lg shadow-md mt-4"
          custom={index}
          variants={workExpVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <h4 className="text-l font-semibold">{edu.institution}</h4>
          <p className="text-gray-400">{edu.year}</p>
          <p className="text-gray-300 mt-2">{edu.description}</p>
        </motion.div>
      ))}
    </div>
    </div>
  );
}

export default Skills;