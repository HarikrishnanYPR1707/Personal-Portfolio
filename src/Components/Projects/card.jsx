import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const card = ({ name, desc, link }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* <div className="">
						<img src="" alt="Logo-Project-1" className="" />
					</div> */}
            <div className=" px-3 py-5 bg-[#343434] mb-5 rounded-lg drop-shadow-lg text-center flex flex-col justify-center items-center">
                <h2 className="text-[#a00d20] font-robotoMono text-2xl text-center uppercase underline underline-offset-4 md:text-xl">
                    {name}
                </h2>
                <p className="mt-1 text-white text-sm text-center">
                    {desc}
                </p>
                <a href={link} target="_blank" className="px-3 mt-3 text-3xl text-[#a6f8db]">
                    <BsFillArrowRightCircleFill />
                </a>
            </div>
        </div>
    )
}

export default card
