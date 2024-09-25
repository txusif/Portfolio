import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const certificates = [
  {
    name: "The Complete 2023 Web Development Bootcamp",
    issuing_organization: "Udemy",
    issued: "May 2023",
    id: "UC-f175f078-b117-471d-b7d6-6792febde410",
    link: "https://www.udemy.com/certificate/UC-f175f078-b117-471d-b7d6-6792febde410/",
  },
  {
    name: "The Ultimate React Course 2024: React, Next.js, Redux & More",
    issuing_organization: "Udemy",
    issued: "Aug 2024",
    id: "UC-ce6a5f5d-e83a-4428-bff8-59e7b10b701c",
    link: "https://www.udemy.com/certificate/UC-ce6a5f5d-e83a-4428-bff8-59e7b10b701c/",
  },
];

const Certificates = () => {
  return (
    <div className="px-8 space-y-8">
      <h1 className="text-center text-4xl font-medium">Certificates</h1>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
        {certificates.map((certificate) => (
          <Link
            key={certificate.id}
            href={certificate.link}
            target="_blank"
            className="outline-none focus-within:scale-105 hover:scale-105 transition-transform duration-300"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{certificate.name}</span>
                  <div className="rounded-full p-2 hover:bg-secondary">
                    <FiExternalLink className="text-xl" />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-end justify-between">
                <div>
                  <p>{certificate.issuing_organization}</p>
                  <p className="text-muted-foreground text-sm">
                    {certificate.issued}
                  </p>
                </div>
                <p className="text-muted-foreground text-sm truncate w-56">
                  {certificate.id}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
