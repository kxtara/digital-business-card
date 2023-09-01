import profile from '../assets/profile.jpg'
export default function Intro(){
    return(
        <>
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
        </>
    )
}