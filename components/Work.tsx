import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Work = () => {
  return (
    <section id="work" className="px-8 space-y-8">
      <h1 className="text-center text-4xl font-medium">Work Experience</h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="outline-none focus:shadow-md focus:shadow-secondary p-4 rounded-t-xl">
            <div className="flex justify-between items-center w-full">
              <div
                className="flex flex-col gap-2
              "
              >
                <h1 className="text-lg">Full Stack Developer Intern</h1>
                <p className="text-left text-base text-muted-foreground">
                  DataSpeaks
                </p>
              </div>
              <div className="hidden md:flex md:flex-col lg:flex-row items-center gap-2 lg:gap-16 mr-10">
                <p>Dec 2023 &mdash; Aug 2024</p>
                <p>Remote | Gujarat</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-3 text-base list-disc border-t pt-4">
              <li className="text-muted-foreground text-sm flex md:hidden gap-8">
                <span>Dec 2023 &mdash; Aug 2024</span>
                <span>Remote | Gujarat</span>
              </li>
              <li>
                At DataSpeaks, a pioneering startup that empowers users to
                create dynamic videos from data sources like Excel files, PDFs,
                and images, I contributed as a Full Stack Developer.
              </li>
              <li>
                End-to-End Development: Led the design and development of the
                landing page, core DataSpeaks application, and an intuitive
                admin panel, optimizing both user experience and functionality.
              </li>
              <li>
                Backend Engineering: Architected and implemented robust backend
                solutions, integrated AWS S3 for scalable data storage, and
                incorporated a machine learning endpoint to enhance the
                platform&apos;s data processing capabilities.
              </li>
              <li>
                Secure Authentication: Developed and deployed secure
                authentication systems, ensuring the protection of user data.
              </li>
              <li>
                Video Creation from Code: Gained and applied expertise in
                generating videos programmatically using advanced libraries such
                as Remotion, Motion-Canvas, and Revideo. This role enabled me to
                combine technical expertise with innovative problem-solving,
                driving forward-looking solutions at the intersection of data,
                machine learning, and video technology.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Work;
