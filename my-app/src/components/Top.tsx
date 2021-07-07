import { useEffect, useState } from "react";
import styles from "./Top.module.scss";

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
  const toggleMenu = () => {
      document.querySelector(".mobile-options")?.classList.toggle("hidden")
  }
  return (
    <div>
      <div className=" flex flex-col  bg-gradient-to-r to-purple-600 from-pink-300 ">
        <nav className="my-header cursor-pointer">
          <div className="border-b border-grey-100 md:border-grey font-bold text-white md:mb-10 bar">
            <div className="flex flex-row justify-between p-3 mx-5 md:mx-40 ">
              <div className="flex items-center">
                <img src={ !state.scrolled ? "/assets/imgs/logo_white.png"  : "/assets/imgs/logo_01.png"} alt="" />
              </div>
              <div className="hidden  md:flex flex-row  items-center" style={{fontFamily:"PoppinsRegular"}}>
                <div className="mr-3 ml-3 ">Home</div>
                <div className="mr-3 ml-3">Portfolio</div>
              </div>
              <div className="hidden md:block"  style={{fontFamily:"PoppinsRegular"}}>
                {!state.scrolled ? 
                
                <button className="bg-white  text-purple-700 font-bold py-2 px-4 rounded-full">
                  HIRE ME
                </button> :
                <button className="bg-gradient-to-r from-purple-600 to-pink-300   text-white font-bold py-2 px-4 rounded-full">
                  HIRE ME
                </button>
              
                }
              </div>
              <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="34" viewBox="0 0 42 34">
                        <g id="Group_203" data-name="Group 203" transform="translate(-362 -23)">
                            <g id="Rectangle_36" data-name="Rectangle 36" transform="translate(362 23)" fill="none" stroke="#4b5563" stroke-width="1">
                            <rect width="42" height="34" rx="6" stroke="none"/>
                            <rect x="0.5" y="0.5" width="41" height="33" rx="5.5" fill="none"/>
                            </g>
                            <g id="Group_200" data-name="Group 200" transform="translate(-5727.5 -137.5)">
                            <line id="Line_6" data-name="Line 6" x2="13" transform="translate(6104.5 173.5)" fill="none" stroke="#4b5563" stroke-width="1"/>
                            <line id="Line_7" data-name="Line 7" x2="13" transform="translate(6104.5 177.5)" fill="none" stroke="#4b5563" stroke-width="1"/>
                            <line id="Line_8" data-name="Line 8" x2="13" transform="translate(6104.5 181.5)" fill="none" stroke="#4b5563" stroke-width="1"/>
                            </g>
                        </g>
                        </svg>

                    </button>
              </div>
            </div>
          </div>
          <div className={`mobile-options md:hidden bg-white flex flex-col items-center p-10 fixed w-screen`}  style={{fontFamily:"PoppinsRegular"}} >
              <div className="mb-20 flex flex-col justify-between items-center">
                <div className="mb-8">Home</div>
                <div>Portfolio</div>
              </div>
              <div>
                  <button className="bg-gradient-to-r from-purple-600  via-purple-500 to-purple-400  text-white font-bold py-2 px-20 rounded-full">HIRE ME</button>
              </div>
          </div>
        </nav>

        <div className={`mt-12 ${styles.wave__1}`}>
          <div className="mx-20 md:mx-40 flex flex-wrap justify-center md:justify-between text-white items-center">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <div style={{fontFamily:"LatoRegular"}}>
                <p className="text-xs"   >BUSINESS WORKFLOW</p>
              </div>
              <div className="mt-10">
                <p className="text-4xl"  style={{fontFamily:"PoppinsBold"}}>
                  GET THE MOST <br />
                  EFFICIENT UI DESIGN FOR <br />
                  YOUR BUSINESS NOW !
                </p>
              </div>
              <div className="mt-10">
                <p className="text-base " style={{fontFamily:"LatoRegular"}} >
                  HIRE ME TO DESIGN A CLEAN AND MODERN UI FOR YOUR PRODUCT
                  WEBSITE
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap mb-10" style={{fontFamily:"PoppinsRegular"}}>
                <button className="bg-white  text-purple-700 font-bold py-2 px-20 md:px-8 rounded-full mr-4 mb-4 sm:mb-0">
                  HIRE  ME  
                </button>
                <button className="bg-transparent border-solid border-2 border-white  text-white font-bold py-2 px-20 md:px-8 rounded-full">
                  PORTFOLIO
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <img src={"/assets/imgs/image_01.png"} alt="" />
              </div>
            </div>
          </div>
        <div className="h-80">

        </div>
        </div>
        {/* <div>
          <img
            src="/assets/imgs/Shape_01.png"
            alt=""
            className="object-cover w-screen"
          />
        </div> */}
      </div>
    </div>
  );
}
