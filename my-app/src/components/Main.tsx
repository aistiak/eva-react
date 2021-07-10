import React from "react"
import { useState } from "react";
import styles from "./Main.module.scss";

export default function Main() {
  const [textState, setTextState] = useState({
    color: "",
    background: "",
    fontFamily: "",
  });
  const setBgColor = (color: string) => {
    setTextState({ ...textState, background: color });
  };
  const setFont = (font: string) => {
    setTextState({ ...textState, fontFamily: font });
  };
  const setColor = (color: string) => {
    setTextState({ ...textState, color: color });
  };
  return (
    <div className="flex flex-col border border-8 border-black-800 h-screen w-screen">
      <div
        className="flex flex-col items-center border-4 border-black-500 h-80 m-2 p-5"
       
      >
        <div>
          <h2 className="text-2xl text-bold">
            Change the text and generate Code !
          </h2>
        </div>
        <div  style={{ ...textState }} className="h-full w-full text-center">  
          <p contentEditable="true">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa
            iste dolore veritatis modi architecto debitis magni error
            consequuntur, delectus vero, ex vitae eligendi tenetur voluptate
            molestiae quidem quae laborum pariatur repudiandae ad. Nisi, ex
            maiores ducimus quas tempore autem unde corporis modi? Dolore,
            quibusdam eveniet dignissimos numquam aliquam inventore repellat
            magni provident tenetur sint culpa sapiente repellendus cum quasi?
            In modi ut accusamus magnam animi quos veritatis non delectus illum
            itaque, obcaecati vel ad nulla tenetur consequuntur officiis neque
            libero quisquam porro voluptas soluta maxime, accusantium
            consequatur. Voluptate laborum reiciendis, quas, eum, labore nulla
            quod rerum exercitationem ipsam ipsa voluptas quis praesentium
            voluptatibus et sunt quam eveniet hic inventore velit assumenda
            quisquam laudantium at deleniti. Consectetur inventore excepturi
            rerum iusto aspernatur reprehenderit vitae hic eligendi iure?
          </p>
        </div>
      </div>
      <div className="flex flex-row h-full w-full">
        <div className="flex flex-col   h-full w-full border-4 border-black m-2">
          <div className="flex flex-row items-center justify-between m-6">
            <div>Background Color : </div>
            <div>
              <button
                onClick={() => setBgColor("blue")}
                className="bg-blue-800  text-white-500  py-2 px-12 rounded-full"
              >
                BLUE
              </button>
            </div>
            <div>
              <button
                onClick={() => setBgColor("green")}
                className="bg-green-800   py-2 px-12 text-white-500 rounded-full"
              >
                GREEN
              </button>
            </div>
            <div>
              <button
                onClick={() => setBgColor("red")}
                className="bg-red-800   py-2 px-12 text-white-500 rounded-full"
              >
                RED
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between m-6">
            <div>Font Family : </div>
            <div>
              <button
                onClick={() => setFont("ubuntu")}
                className="bg-black  text-white-500  py-2 px-12 rounded-full"
              >
                UBUNTU
              </button>
            </div>
            <div>
              <button
                onClick={() => setFont("roboto")}
                className="bg-black  py-2 px-12 text-white-500 rounded-full"
              >
                ROBOTO
              </button>
            </div>
            <div>
              <button
                onClick={() => setFont("courier new")}
                className="bg-black  py-2 px-12 text-white-500 rounded-full"
              >
                COURIER NEW
              </button>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between m-6">
            <div>Font Color : </div>
            <div>
              <button
                onClick={() => setColor("cyan")}
                className="bg-transparent border-4 border-blue-300 text-black  py-2 px-12 rounded-full"
              >
                CYAN
              </button>
            </div>
            <div>
              <button
                onClick={() => setColor("purple")}
                className="bg-transparent  border-4 border-purple-600 py-2 px-12 text-black rounded-full"
              >
                PURPLE
              </button>
            </div>
            <div>
              <button
                onClick={() => setColor("black")}
                className="bg-transparent border-4 border-black  py-2 px-12 text-black rounded-full"
              >
                BLACK
              </button>
            </div>
          </div>

          <div className="self-center">
            <button
              onClick={() => {
                setTextState({
                  color: "",
                  background: "",
                  fontFamily: "",
                });
              }}
              className="bg-yellow-400  text-white-500  py-2 px-12 "
            >
              RESET
            </button>
          </div>
        </div>
        <div className="h-full w-full border-4 border-black m-2 p-10">
          <div> fontFamily : {textState.fontFamily || '""'} </div>
          <div> color : {textState.color || '""'} </div>
          <div> background : {textState.background || '""'} </div>
        </div>
      </div>
    </div>
  );
}
