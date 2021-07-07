export default function Mid() {
  const items = [...Array(3).fill(1)];
  return (
    <div className="bg-white-300 h-auto flex flex-col justify-around items-center mb-20 mx-10">
      <div className="border-b-4 border-grey text-4xl p-3">Pacakages</div>
      <div className="flex flex-col lg:flex-row  lg:space-x-8">
        {['Singularity','Plurality','Professional'].map((v, i) => (
          <>
            <div className="lg:max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
                <div className="py-3">
                    <p>Getting Started</p>
                </div>
                <div>
                    <h2 className="text-gray-800 text-3xl font-semibold">
                     {v}
                    </h2>
                    <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                    dolores deserunt ea doloremque natus error, rerum quas odio
                    quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                    minus consequuntur!
                    </p>
                </div>
                <div className="flex  mt-8 mb-8">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        SEE MORE 
                    </button>
                </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
