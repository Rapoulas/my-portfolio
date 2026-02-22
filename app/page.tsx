import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-start px-100 font-sans bg-black">
      <div className="flex flex-col items-center gap-4 text-center justify-center sm:items-start sm:text-left">
        <div className="p-4">
          <span className="sm:text-3xl text-2xl">
            Hello,
          </span>
          <h1 className="sm:text-5xl text-3xl mt-2 font-bold">
            I'm Rafael Cesar.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
            I'm a full stack software engineer specializing in React, Typescript & Next.js.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
            I build web and mobile applications with React, Next.js and React Native, focused on real-world products and scalability.
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
            Looking to contribute in a team environment, I thrive on collaboration and continuous learning to create impactful software solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
