import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from "framer-motion";

type Props = {};

const socials = [
  {
    name: "facebook",
    link: "https://facebook.com",
    icon: (
      <FaFacebookF className="w-4 h-4 text-slate-800 dark:text-slate-100" />
    ),
  },
  {
    name: "linkedIn",
    link: "https://linkedin.com",
    icon: (
      <FaLinkedinIn className="w-4 h-4 text-slate-800 dark:text-slate-100" />
    ),
  },
  {
    name: "github",
    link: "https://github.com",
    icon: <FaGithub className="w-4 h-4 text-slate-800 dark:text-slate-100" />,
  },
  {
    name: "instagram",
    link: "https://instagram.com",
    icon: (
      <FaInstagram className="w-4 h-4 text-slate-800 dark:text-slate-100" />
    ),
  },
  {
    name: "twitter",
    link: "https://twitter.com",
    icon: <FaTwitter className="w-4 h-4 text-slate-800 dark:text-slate-100" />,
  },
];

const Footer = (props: Props) => {
  return (
    <footer className="px-6 py-2 bg-white rounded-md dark:bg-slate-800">
      <div className="flex items-center justify-between font-medium space-x-2">
        <div>Developed By: Manav kaushal</div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                when: "beforeChildren",
                staggerChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="show"
          className="flex items-center gap-3 ml-5"
        >
          {socials.map((social) => (
            <motion.a
              variants={{
                hidden: { y: -10, opacity: 0 },
                show: { y: 0, opacity: 1 },
              }}
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 p-2 hover:bg-gray-300 dark:hover:bg-gray-400 transition-200 dark:bg-gray-500">
                {social.icon}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
