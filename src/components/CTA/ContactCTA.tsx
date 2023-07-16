import React from 'react'
import Image from 'next/image'
import { Plus_Jakarta_Sans } from 'next/font/google'
import juicyGrapeArt from '@/../public/juicy-artwork-grape.webp'
import juicyCoconutArt from '@/../public/juicy-artwork-coconut.svg'
import { motion } from 'framer-motion'

const jakarta = Plus_Jakarta_Sans({subsets: ['latin']});

const ContactCTA = () => {
  return (
    <motion.div 
        className='box-border w-full h-min flex flex-col justify-start items-start shadow-contact-cta hover:shadow-metrics-hover bg-white overflow-hidden p-0 content-start flex-nowrap gap-0 rounded-xl border border-solid border-black'
        initial={false}
        whileHover={{ boxShadow: "2px 2px 0px 0px #000000" }}
        animate={{ boxShadow: "0px 1px 3px 0px rgba(16, 24, 40, 0.10000000149011612)" }}
        transition={{ duration: 0.3, ease: "linear" }}
    >
        <div className="flex-shrink-0 w-full min-h-[200px] h-fit block bg-[#f4ebff] overflow-hidden relative rounded-none">
            <div className="w-full min-h-[200px] h-fit block overflow-hidden bg-[url('/bg-contact-cta.webp')] bg-cover bg-no-repeat bg-center absolute rounded-none ">
                <Image
                    src={juicyCoconutArt}
                    alt='Juicy Coconut Art Figure'
                    width={202}
                    height={204}
                    className='block overflow-visible absolute'
                />
                <Image
                    src={juicyGrapeArt}
                    alt='Juicy Grape Art Figure'
                    width={233}
                    height={233}
                    className='block overflow-visible absolute -right-9'
                />
            </div>
        </div>
        <div className="box-border flex-shrink-0 w-full h-min flex justify-start items-start py-5 px-4 overflow-hidden relative content-start flex-nowrap gap-4 rounded-b-xl border-[#eaecf0] border-solid border border-t-0">
            <div className="flex-shrink-0 flex-grow w-full h-min flex flex-col justify-start items-start overflow-visible relative p-0 content-start flex-nowrap gap-5 rounded-none">
                <div className="flex-shrink-0 w-full h-min flex flex-col justify-start items-start overflow-visible relative p-0 content-start flex-nowrap gap-1 rounded-none">
                    <p className={`flex-shrink-0 w-full h-auto whitespace-pre-wrap break-words relative font-semibold ${jakarta.className} text-[#0f1728] text-lg`}>
                        Sua experiência está suculenta?
                    </p>
                    <p className="flex-shrink-0 w-fit h-auto whitespace-pre-wrap break-words relative text-[#475466] text-sm">
                        Nós adorariamos te ouvir e ajudar em sua campanha Juicy.
                    </p>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default ContactCTA