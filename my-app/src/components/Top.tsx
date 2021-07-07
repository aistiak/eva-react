import { useEffect, useState } from "react";

export default function Top() {
  const [state, SetState] = useState({
    scrolled: false,
  });

  useEffect(() => {
    function handeScroll(e: any) {
      const scroll = window.scrollY;
      console.log(scroll);
      if (scroll > 100) {
        document.querySelector(".my-header")?.classList.add("scroll-header");
        SetState({...state,scrolled:true})
      } else {
        document.querySelector(".my-header")?.classList.remove("scroll-header");
        SetState({...state,scrolled:false})
      }
    }
    window.addEventListener("scroll", handeScroll);

    return () => window.removeEventListener("scroll", handeScroll);
  }, []);

  return (
    <div>
      <div className=" flex flex-col  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ">
        <nav>
          <div className="border-b-2 border-white font-bold text-white mb-10 my-header">
            <div className="flex flex-row justify-between p-3 mx-20 md:mx-40 ">
              <div className="flex items-center">
                <img src={ !state.scrolled ? "/assets/imgs/logo_white.png"  : "/assets/imgs/logo_01.png"} alt="" />
              </div>
              <div className="hidden  md:flex flex-row  items-center">
                <div className="mr-3 ml-3">Home</div>
                <div className="mr-3 ml-3">Portfolio</div>
              </div>
              <div className="hidden md:block">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
                  HIRE ME
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div className="flex flex-row flex-wrap p-3 ml-64 mr-64 justify-between  items-center text-left text-white">
            <div className="md:flex md:flex-col md:items-center">
              <div>
                <p className="text-xs">BUSINESS WORKFLOW</p>
              </div>
              <div className="mt-10">
                <p className="text-4xl font-bold">
                  GET THE MOST <br />
                  EFFICIENT UI DESIGN FOR <br />
                  YOUR BUSINESS NOW !
                </p>
              </div>
              <div className="mt-10">
                <p className="text-base ">
                  HIRE ME TO DESIGN A CLEAN AND MODERN UI FOR YOUR PRODUCT
                  WEBSITE
                </p>
              </div>
              <div className="mt-10 flex flex-row flex-nowrap mb-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full mr-4">
                  HIREME
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
                  PORTFOLIO
                </button>
              </div>
            </div>
            <div className="mr-20">
              <img src={"/assets/imgs/image_01.png"} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img
            src="/assets/imgs/Shape_01.png"
            alt=""
            className="object-cover w-screen"
          />
        </div>
      </div>
    </div>
  );
}
