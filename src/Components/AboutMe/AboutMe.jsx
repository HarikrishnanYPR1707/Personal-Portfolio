import React from 'react';

const AboutMe = () => {
    return (
        <section className="p-6 m-5 bg-[#282828] rounded-lg md:w-5/6 md:mx-auto lg:w-5/6">
            <h1 className="text-white text-center font-swad text-5xl uppercase">
                About Me
            </h1>
            <div className="mt-5">
                <p className="text-white font-robotoMono text-center">
                    Hi, I am <span className="text-[#a8d2fd] uppercase">Harikrishnan Prasannakumar</span> from <span className="text-[#a8d2fd]">Mumbai, India</span>. I am pursuing <span className="text-[#a8d2fd]">B.E in Computer Engineeing</span> from <span className="text-[#a8d2fd]">Universal College of Engineering</span>.
                </p>
                <p className="pt-2 text-white font-robotoMono text-center">
                    I am a <span className="text-[#a8d2fd]">self-taught Developer</span> and have been learning and want to learn new technologies and frameworks. I recognized my interest in <span className="text-[#a8d2fd]">Web Development, UI Design and Competitive Programming</span> when I Enrolled for the Engineering.
                </p>
                <p className="pt-2 text-white font-robotoMono text-center">
                    Speaking of avocation, my hobbies are <span className="text-[#a8d2fd]">Music, Playing Carnatic Music Instrument - [ Mridangam ], Photography, Content Creation and Video Editing.</span>
                </p>
                <p className="pt-2 text-white font-robotoMono text-center">
                    I work with <span className="text-[#a8d2fd]">JavaScript, React and Website Development.</span> I have a <a href="https://www.youtube.com/@coding_adda" target="_blank" className="text-[#a8d2fd] underline underline-offset-2 hover:underline-offset-4 ">Youtube Channel</a> where I upload EdTech and Programming Content. You can check them out and join my YT family if you like!!
                </p>
            </div>
        </section>
    )
};

export default AboutMe;
