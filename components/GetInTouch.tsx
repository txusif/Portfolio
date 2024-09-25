import { SiGmail, SiWhatsapp } from "react-icons/si";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

const reachOut = [
  {
    icon: <SiGmail />,
    text: "txusif@gmail.com",
    link: "mailto:txusif@gmail.com",
  },
  { icon: <FaPhone />, text: "+91 9372582752", link: "+91 9372582752" },
  {
    icon: <SiWhatsapp />,
    text: "WhatsApp",
    link: "https://api.whatsapp.com/send?phone=919372582752&text=Hello%20Toushief.%20How%20are%20You%20",
  },
  {},
];

const GetInTouch = () => {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <h1 className="font-medium text-4xl">Get in touch</h1>
      <ul className="flex flex-col gap-y-6">
        <li className="text-xl flex items-center gap-x-3">
          <FaLocationDot />
          <span className="text-lg">Mumbai, India</span>
        </li>
        {reachOut.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              className="text-xl flex items-center gap-x-3 outline-none focus-visible:text-muted-foreground"
            >
              {item.icon}
              <span className="text-lg">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetInTouch;
