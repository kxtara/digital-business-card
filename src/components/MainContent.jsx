export default function MainContent(){
    return(
        <main className="mr-auto ml-9 mt-9 mb-5">
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
        </main>
    )
}