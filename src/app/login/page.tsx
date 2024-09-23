import Image from "next/image";
import mySvg from "@/app/assets/googleBtn.svg";
import myLogo from "@/app/assets/proposalifyLogo.svg";
import arrow from "@/app/assets/arrow.svg";

export default function LoginPage() {
  return (
    <main className="h-full">
      {/* Nav bar starts here */}
      <header>
        <nav className="navbar flex justify-around items-center py-7">
          <div className="logoCont text-xl md:text-2xl text-[#14A475] font-bold flex justify-center items-center gap-2">
            <Image
              className="myLogo h-8 w-8 md:h-10 md:w-10"
              src={myLogo}
              alt="Proposalify Logo"
            />
            <h1>Proposilfy.ai</h1>
          </div>
          <div className="links">
            <ul className="flex gap-10 md:text-xl text-base font-semibold">
              <li>
                <a
                  href="#"
                  className="hover:underline hover:decoration-[#14A475] hover:underline-offset-4 "
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline hover:underline-offset-4 hover:decoration-[#14A475] "
                >
                  Extension
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* Nav bar ends here */}

      {/* main body starts here */}
      <main className="h-[50%] flex justify-center items-center">
        <div className="main-content flex justify-center items-center w-[50%] cursor-pointer">
          <div className="loginBtn1 border-[1px] border-black p-3 rounded-full px-5 md:px-6 z-10 bg-white top-[42.5%] absolute flex justify-center items-center gap-2">
            <div className="googleLogo">
              <Image
                className="image w-4 h-4 md:w-5 md:h-5"
                src={mySvg}
                alt="This is an image"
              />
            </div>
            <div className="loginText md:text-xl text-base font-semibold">
              Login with Google
            </div>
          </div>
          <div className="loginBtn2 border-[1px] border-black p-6 md:p-7 rounded-full px-[6rem] md:px-[7.4rem] top-[43.9%] md:top-[43.5%] ml-3 absolute bg-white"></div>
          <div className="arrowSvg"></div>
        </div>
      </main>
      {/* main body ends here */}

      {/* footer starts here */}
      <footer className=" h-auto w-[100vw] m-auto xl:w-[70vw] 2xl:w-[60vw]">
        <div className="footer-content]">
          <Image
            className="image h-[210px w-[210px] md:h-[350px] md:w-[350px] absolute bottom-0 "
            src={arrow}
            alt="This is an image"
          />
        </div>
      </footer>
      {/* footer ends here */}
    </main>
  );
}
