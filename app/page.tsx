import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-black">
        
      <header className="w-full border-b border-zinc-800 bg-black">
        <div className="font-sans h-16 flex items-center justify-center sm:justify-end bg-black">
          <nav className="flex gap-6 text-zinc-400 sm:mr-8">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-start px-100">
        <div className="flex flex-col items-center gap-4 text-center justify-center sm:items-start sm:text-left">
          <div className="p-4">
            <span className="sm:text-3xl text-2xl">
              Hello,
            </span>
            <h1 className="sm:text-5xl text-3xl mt-2 font-bold">
              I'm Rafael Cesar.
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
              I'm a full stack software engineer specializing in{" "}  
              <span className="bg-[#0a0a0a] px-1 py-1 rounded-md border border-zinc-700">React</span>
              {", "}
              <span className="bg-[#0a0a0a] px-1 py-1 rounded-md border border-zinc-700">Typescript</span> 
              {" & "}
              <span className="bg-[#0a0a0a] px-1 py-1 rounded-md border border-zinc-700">Next.js</span>
            </p>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
              I build web and mobile applications with React, Next.js and React Native, focused on real-world products and scalability.
            </p>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
              Looking to contribute in a team environment, I thrive on collaboration and continuous learning to create impactful software solutions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
