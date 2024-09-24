import Link from "next/link";

export default function Developer() {
  return (
    <div className="border-t border-input">
      <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-0 px-2 py-1 text-[8px] sm:justify-between sm:px-10 md:px-24">
        <div>
          <span className="text-Grey">Designed and Developed: </span>
          <span className="font-semibold underline hover:text-gray-400 focus-visible:hover:text-gray-400">
            <Link
              href={"https://www.linkedin.com/in/txusif/"}
              target="_blank"
              className="outline-none focus-visible:hover:text-gray-400"
            >
              Toushief Ansari
            </Link>
          </span>
        </div>
        <span className="">Last Updated | 24 09 2024</span>
      </div>
    </div>
  );
}
