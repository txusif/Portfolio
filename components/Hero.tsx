import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="px-8 mt-20 flex flex-col md:flex-row items-center justify-around gap-12
      md:gap-0"
    >
      <div className="flex flex-col order-2 md:order-none">
        <div className="flex flex-col items-start">
          <h1 className="font-semibold text-4xl text-center">
            Toushief Ansari
          </h1>
          <p>Software developer from Mumbai, India</p>
        </div>
        <div className="mt-6 text-center md:text-left">
          <Link
            href="https://drive.google.com/file/d/1TAcm5ERE7E7eSw6daEL-j1LEZ7AQwP01/view?usp=sharing"
            target="_blank"
            className={buttonVariants({ variant: "default" })}
          >
            Download Resume
          </Link>
        </div>
      </div>
      <div className="order-1 md:order-none relative aspect-square h-[250px] md:h-[300px] lg:h-[350px] shadow-lg shadow-secondary rounded-full">
        <Image
          src={"/me.jpg"}
          alt="txusif"
          fill
          className="object-contain rounded-full opacity-90"
        />
      </div>
    </section>
  );
};

export default Hero;
