
import style from "./Bottom.module.scss";

export default function Bottom() {
    return (
        <div className={` h-96 w-full ${style.wave__2} flex flex-col items-center justify-end text-white py-12 text-center`}>
            <div className="mb-5 text-2xl">Start a project with me</div>
            <div className="mb-5">
                 let’s discuss our ideas for presenting your business to the world <br /> in an attractive,  efficient and effective way.
            </div>
            <div className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-full"> 
                <button>HIRE ME</button>
            </div>
        </div>
    )
} 