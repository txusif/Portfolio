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
        <div className="flex flex-col items-center md:items-start ">
          <h1 className="font-semibold text-4xl text-left">Toushief Ansari</h1>
          <p>Full Stack Developer from Mumbai, India</p>
          <p className="mt-4 text-lg italic text-center md:text-left">
            Transforming Ideas into Engaging Digital Solutions
          </p>
        </div>
        <div className="mt-6 text-center md:text-left">
          <Link
            href=""
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
          quality={100}
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Hero;
