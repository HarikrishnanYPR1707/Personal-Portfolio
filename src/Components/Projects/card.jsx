import React from 'react'

const card = ({ name, desc, link }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <div className="">
						<img src="" alt="Logo-Project-1" className="" />
					</div> */}
            <div className=" px-3 py-5 bg-[#343434] mb-5 rounded-lg drop-shadow-lg flex flex-col justify-center items-center">
                <h2 className="text-[#a00d20] font-robotoMono text-2xl text-center uppercase underline underline-offset-4 md:text-xl">
                    {name}
                </h2>
                <p className="mt-1 text-white text-sm text-center">
                    {desc}
                </p>
                <button className="mt-2 px-16 py-1 w-auto text-[#343434] bg-[#a6f8db] font-black rounded-lg">
                    <a href={link} target="_blank">
                        View
                    </a>
                </button>
            </div>
        </div>
    )
}

export default card
