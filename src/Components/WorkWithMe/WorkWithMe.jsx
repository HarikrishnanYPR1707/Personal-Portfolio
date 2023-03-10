import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import workWithMeSvg from '../../assets/workwithme.svg';

const WorkWithMe = () => {

    // Setting State Management Variables
    const [to_name, setTo_Name] = useState("");
    const [from_name, setFrom_Name] = useState("");
    // const [from_email, setFrom_Email] = useState("");
    const [message, setMessage] = useState("");

    const submitInfo = () => {
        console.log(to_name + from_name + message);

        const emailContent = {
            to_name : to_name,
            from_name : from_name,
            message : message
        };


        emailjs.send('service_rfdbcpf', 'template_j2710cq', emailContent, 'U4XgEU2J8pLlsjzlc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className="pt-6 pl-6 pr-6 pb-6 m-5 bg-[#282828] rounded-lg flex flex-col justify-center items-center md:w-5/6 md:mx-auto lg:w-5/6 lg:px-[100px]">
            <h1 className="mb-3 text-white text-center font-swad text-5xl uppercase">
                Work With Me
            </h1>
            <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-[100px]">
                <div className="">
                    <img src={workWithMeSvg} alt="workWithMeSvg" className="w-72 mt-5 mb-5 md:w-[500px] lg:w-[450px]" />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <input type="text" id="input-1" className="bg-[#282828] text-white w-[350px] py-2 pl-5 mb-5 rounded-lg border-b-2 border-[#a6f8db] outline-none md:w-[500px] lg:w-[350px]" placeholder="Enter your Name" onChange={(event) => { setTo_Name(event.target.value) }} required />
                    <input type="email" id="input-2" className="bg-[#282828] text-white w-[350px] py-2 pl-5 mb-5 rounded-lg border-b-2 border-[#a6f8db] outline-none md:w-[500px] lg:w-[350px]" placeholder="Enter your Email" onChange={(event) => { setFrom_Name(event.target.value) }} required />
                    <textarea name="" cols="30" rows="4" id="input-3" className="bg-[#282828] text-white w-[350px] py-2 pl-5 mb-5 rounded-lg border-b-2 border-[#a6f8db] outline-none md:w-[500px] lg:w-[350px]" placeholder="Enter your Message" onChange={(event) => { setMessage(event.target.value) }} required />
                    <input type="submit" className="px-10 py-2 font-bold bg-[#a6f8db] rounded-md md:px-[100px]" onClick={submitInfo} />
                </div>
            </div>
        </section>
    )
}

export default WorkWithMe
