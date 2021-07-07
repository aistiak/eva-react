export default function Mid() {
  const items = [...Array(3).fill(1)];
  return (
    <div className="bg-white-300 h-auto flex flex-col justify-around items-center mb-20 mx-10" style={{fontFamily:"PoppinsRegular"}}>
      <div className="border-b-4 border-grey text-4xl p-3" style={{fontFamily:"PoppinsBold"}}>Pacakages</div>
      <div className="flex flex-col lg:flex-row  lg:space-x-8">
        {/* {['Singularity','Plurality','Professional'].map((v, i) => (
          <> */}
            <div className="lg:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
                <div className="py-3">
                    <p className="text-purple-500" >Getting Started</p>
                </div>
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">
                      Singularity
                    </h2>
                    <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                    dolores deserunt ea doloremque natus error, rerum quas odio
                    quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                    minus consequuntur!
                    </p>
                </div>
                <div className="flex  mt-8 mb-8">
                    <button className="bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        SEE MORE 
                    </button>
                </div>
            </div>
            <div className="lg:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
                <div className="py-3">
                    <p className="text-purple-500" >Getting Started</p>
                </div>
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">
                      Plurality
                    </h2>
                    <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                    dolores deserunt ea doloremque natus error, rerum quas odio
                    quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                    minus consequuntur!
                    </p>
                </div>
                <div className="flex  mt-8 mb-8">
                    <button className="bg-gradient-to-r from-purple-600  to-purple-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        SEE MORE 
                    </button>
                </div>
            </div>
            <div className="lg:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
                <div className="py-3">
                    <p className="text-purple-500">Getting Started</p>
                </div>
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">
                      Professional
                    </h2>
                    <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                    dolores deserunt ea doloremque natus error, rerum quas odio
                    quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                    minus consequuntur!
                    </p>
                </div>
                <div className="flex  mt-8 mb-8">
                    <button className="bg-gradient-to-r from-purple-600  to-pink-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        SEE MORE 
                    </button>
                </div>
            </div>
          {/* </>
        ))} */}
      </div>
    </div>
  );
}
