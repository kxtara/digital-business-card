import profile from "./assets/profile.jpg";
function App() {
  return (
    // className='flex items-center justify-center h-[100vh] font-["inter"]'
    <main className="flex items-center justify-center mt-5 mb-5 md:h-[100vh] lg:h-[100vh]">
      <div className="flex flex-col items-center bg-[#1a1b20] rounded-xl text-[#fafbfd] w-[21rem] mb-4 shadow-[0_0_10px_3px_rgba(255,255,255,0.1)]">
        <img
          className="rounded-t-xl w-full"
          src={profile}
          alt="image of lady"
        />
        <h1 className="font-semibold mt-5 text-2xl tracking-widest">Kiara Hoheb</h1>
        <span className="text-[#b07d59] font-normal text-sm">
          Frontend Developer
        </span>

        <a
          target="blank"
          className="font-extralight text-xs mt-1"
          href="https://github.com/kxtara"
        >
          Kiara.github
        </a>

        <div className="flex gap-7 mt-5">
          <a
            target="blank"
            href="mailto:kiaraleefiles@gmail.com"
            className="bg-[#fff] text-[#462929] rounded-md px-7 py-[.4rem] text-base hover:border-[#b07d59] hover:border-[1px]"
          >
            <i className="bi bi-envelope-fill mr-2 relative -top-[2px] text-sm"></i>
            Email
          </a>

          <a
            target="blank"
            className="bg-[#6091dc] rounded-md px-5 text-base py-[.4rem] hover:border-[#b07d59] hover:border-[1px]"
            href="https://www.linkedin.com/in/kiara-hoheb-641157244/"
          >
            <i class="bi bi-linkedin mr-2 relative -top-[2.5px] text-sm"></i>
            LinkedIn
          </a>
        </div>
        <section className="mr-auto ml-9 mt-9 mb-5">
          <h2 className="font-semibold text-xl">About</h2>
          <p className="font-light text-sm mt-2 leading-6">
            <strong className="text-[#b07d59] text-base">
              Frontend Developer
            </strong>{" "}
            eager to expand my knowledge. I've developed a solid foundation in
            various technologies including:
            <ol className="list-disc ml-4 mt-2 marker:text-[#6091dc] marker:text-lg">
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Git</li>
              <li>GitHub</li>
            </ol>
          </p>

          <h2 className="font-semibold text-xl mt-4">Interest</h2>
          <p className="font-light text-sm mt-2 leading-6 pr-8">
            I'm into photography, videography, coding, and cooking. I also love
            hanging out with my family and sharing a good laugh.
          </p>
        </section>

        <footer className="bg-[#16151a] w-full flex justify-around py-3 px-16 rounded-b-xl">
          <a target="blank" href="https://twitter.com/kiarahoheb">
            <i className="bi bi-twitter text-2xl hover:text-[#6091dc]"></i>
          </a>
          <a target="blank" href="https://www.twitch.tv/kxtaralee">
            <i className="bi bi-twitch text-2xl hover:text-[#6091dc]"></i>
          </a>
          <a target="blank" href="https://www.instagram.com/kiarahoheb">
            <i className="bi bi-instagram text-2xl hover:text-[#6091dc]"></i>
          </a>
          <a target="blank" href="https://github.com/kxtara">
            <i className="bi bi-github text-2xl hover:text-[#6091dc]"></i>
          </a>
        </footer>
      </div>
    </main>
    //inter 200,300,600
  );
}

export default App;
