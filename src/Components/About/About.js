import React from 'react';

const About = () => {
    return (
        <div>
            <h1 className='text-4xl mt-12 pb-3'>The Ever Inspiring Story of InstaX</h1>
            <h2 className='text-xl font-mono mt-12 pb-14 px-8 text-left'>Whether it is cameras, printers or film, 
                Instax products inspire your customers to come together and share everything your 
                business has to give. Especially the instax Link WIDE smartphone printer; its compact
                and lightweight design makes it portable. And the fast, quality reprints add richness to any 
                customer experience. The revival of vintage and a nostalgia for an analog past.
                Instead of being phased out because it's old, it turned out to be the very reason for Instax's sudden resurgence. Nowadays, everything old is the new again, where old is the new new, and vintage is the new modern. <br />
                To know more click the button below...</h2>
                <button className=" ml-7 rounded-3xl 
                    my-9 py-2 w-3/12 bg-sky-900 text-white hover:bg-cyan-700">
                    <a href="https://fujixweekly.com/2022/01/18/fujis-instant-film-the-immensely-interesting-story-of-instax/" target="_blank" rel="noopener noreferrer">Check Out</a>
                </button>
        </div>
    );
};

export default About;