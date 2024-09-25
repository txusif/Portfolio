import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

const socials = [
  {
    icon: <SiLinkedin />,
    link: "https://linkedin.com/in/txusif",
  },
  { icon: <SiGithub />, link: "https://github.com/txusif" },
  { icon: <SiInstagram />, link: "https://instagram.com/txusif" },
  { icon: <FaXTwitter />, link: "https://twitter.com/txusif" },
];

const Socials = () => {
  return (
    <section id="socials" className="space-y-5">
      <h1 className="text-center text-4xl font-medium">Socials</h1>
      <ul className="flex items-center justify-center gap-x-4">
        {socials.map((social, index) => (
          <li
            key={index}
            className="hover:bg-secondary hover:text-green-400 hover:scale-110 focus:bg-secondary rounded-full p-3 transition-all duration-300"
          >
            <Link
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl outline-none focus-visible:text-green-400"
            >
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Socials;
