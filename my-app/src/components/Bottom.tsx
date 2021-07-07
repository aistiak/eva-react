
import style from "./Bottom.module.scss";

export default function Bottom() {
    return (
        <div className={` h-96 w-full ${style.wave__2} flex flex-col items-center justify-end text-white py-12 text-center`} style={{fontFamily:"PoppinsRegular"}}>
            <div className="mb-5 text-2xl border-b-2 border-grey-100 py-3">Start a project with me</div>
            <div className="mb-5">
                 let’s discuss our ideas for presenting your business to the world <br /> in an attractive,  efficient and effective way.
            </div>
            <div className=""> 
                <button className="bg-white-700 mb-5  hover:bg-blue-700  py-2 px-12 text-purple-500 font-bold rounded-full">HIRE ME</button>
            </div>
        </div>
    )
}   