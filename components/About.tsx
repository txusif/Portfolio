import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const About = () => {
  return (
    <section id="about" className="px-8 space-y-8">
      <h1 className="text-center text-4xl font-medium">About</h1>
      <div className="grid md:grid-cols-[28rem_1fr] gap-6 lg:gap-12">
        <Card className="order-2 md:order-none">
          <CardHeader className="pb-0">
            <CardTitle className="text-lg">
              Bachelor&apos;s of Science, Computer Science
            </CardTitle>
            <CardDescription>CGPA: 8.94</CardDescription>
          </CardHeader>
          <CardContent className="flex p-6 flex-col">
            <div>
              <p>University of Mumbai</p>
              <p className="text-muted-foreground">2021 &mdash; 2024</p>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-3 order-1 md:order-none">
          <p>
            I&apos;m Toushief Ansari, a Full Stack Developer and self-taught Blockchain Developer based in Mumbai,
            India.
          </p>
          <p>
          I specialize in creating dynamic, user-friendly web applications, with expertise in front-end and back-end technologies. My hands-on experience with blockchain development and certifications reflect my passion for Web3 and decentralized solutions.
          </p>
          <p>
            Beyond coding, I enjoy discovering new music, reading, and staying
            active through fitness.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
