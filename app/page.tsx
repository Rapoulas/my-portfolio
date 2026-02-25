export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-black">
        
      <header className="w-full bg-black">
        <div className="font-sans h-16 flex items-center justify-center sm:justify-end bg-black">
          <nav className="flex gap-12 text-zinc-400 sm:mr-16">
            <a href="https://github.com/rapoulas" className="hover:text-black hover:bg-white rounded-md py-2 px-4 font-bold transition-colors">
              Github
            </a>
            <a href="https://www.linkedin.com/in/rafael-cesar-54220634b/" className="hover:text-black hover:bg-white rounded-md py-2 px-4 font-bold transition-colors">
              LinkedIn
            </a>
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1uoyM4n1XGXVZ7JmHT_8-DzdSUQ06nVIC&export=download" className="hover:text-black hover:bg-white rounded-md py-2 px-4 font-bold transition-colors">
              CV
            </a>
          </nav>
        </div>
      </header>
      <main className="flex flex-1 items-start pt-64 justify-start px-100">
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
      <div className="flex text-lg justify-center sm:justify-end sm:text-xl font-medium">
        <p className="sm:mr-8 sm:mb-5">
          <span className="text-green-400">rapoulas@rapoulas-computer</span>
          :
          <span className="text-blue-500">~</span>
          $ touch coffee.txt
        </p> 
      </div>
    </div>
  );
}
