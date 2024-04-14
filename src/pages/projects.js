'use client'
import React, { useState, useEffect, useRef } from "react";
import { Disclosure } from '@headlessui/react'
import { MenuButton } from "../menu/menu-button";
import { motion, useAnimation, AnimatePresence, easeIn } from 'framer-motion';
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import './/line.css';

export default function Projects() {

  const [isOpen, setOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const { ref: firstRef, inView: inView1 } = useInView();
  const { ref: secondRef, inView: inView2 } = useInView();
  const { ref: thirdRef, inView: inView3 } = useInView();
  const { ref: fourthRef, inView: inView4 } = useInView();
  const { ref: fivthRef, inView: inView5 } = useInView();
  const { ref: sixthRef, inView: inView6 } = useInView();
  const { ref: seventhRef, inView: inView7 } = useInView();
  const { ref: eighthRef, inView: inView8 } = useInView();

  useEffect(() => {
    if (inView1) {
      setIsVisible(true);
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      setIsVisible(true);
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      setIsVisible(true);
    }
  }, [inView3]);

  useEffect(() => {
    if (inView4) {
      setIsVisible(true);
    }
  }, [inView4]);

  useEffect(() => {
    if (inView5) {
      setIsVisible(true);
    }
  }, [inView5]);

  useEffect(() => {
    if (inView6) {
      setIsVisible(true);
    }
  }, [inView6]);

  useEffect(() => {
    if (inView7) {
      setIsVisible(true);
    }
  }, [inView7]);

  useEffect(() => {
    if (inView8) {
      setIsVisible(true);
    }
  }, [inView8]);

  const projects1 = [
    {
      id: 1,
      href: '/project_stuff',
      src: './stuff_master.png',
      ref: firstRef,
      inView: inView1,
    },
    {
      id: 2,
      href: '/door-project',
      src: '/door.png',
      ref: secondRef,
      inView: inView2,
    },
    {
      id: 3,
      href: '#',
      src: './Project3.png',
      ref: thirdRef,
      inView: inView3,
    },
    {
      id: 4,
      href: '#',
      src: './Project4.png',
      ref: fourthRef,
      inView: inView4,
    },
  ]

  const projects2 = [
    {
      id: 5,
      href: '/project_fitness',
      src: './fitness.png',
      ref: fivthRef,
      inView: inView5,
    },
    {
      id: 6,
      href: '/project_guitar',
      src: './guitar.png',
      ref: sixthRef,
      inView: inView6,
    },
    {
      id: 7,
      href: '#',
      src: './Project1.png',
      ref: seventhRef,
      inView: inView7,
    },
    {
      id: 8,
      href: '#',
      src: './Project7.png',
      ref: eighthRef,
      inView: inView8,
    },
  ]

  return (
    <div className="mx-auto md:max-w-7xl overflow-y-hidden max-w-screen overflow-x-hidden mt-10 px-0 md:px-4 py-2 bg-white">
      <div className="md:px-20 md:py-2 top-0 left-0 w-full z-[60]">
        <div className="flex justify-between boxx items-center z-[60] px-4 py-2">
          <div className="text-[24px] absolute top-[20px] md:left-[5rem] left-[1rem] font-bold">
            WebSolutions
          </div>
          <div>
            <MenuButton
              className='fixed z-[70] top-[20px] md:right-[5rem] right-[1rem] md:translate-y-[40%] translate-y-4 cursor-pointer'
              isOpen={isOpen}
              onClick={() => setOpen(!isOpen)}
              strokeWidth="4"
              color={isOpen ? "#000" : "#000"}
              lineProps={{ strokeLinecap: "round" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              width="24"
              height="24"
            />
          </div>
        </div>
      </div>
      <div className="fixed z-[53]">
        <Disclosure as="nav" className="z-50 h-[4rem] menu fixed top-0 left-0 w-full">
          {({ open }) => (
            <>
              <div className="mx-auto w-full px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-18 items-center justify-between">

                  <motion.div
                    className="h-[100vh] w-screen sm:w-[40vw] text-left sm:px-0 px-4 flex items-center z-8 fixed top-0 right-0 bg-[#ffffff] shadow-2xl"
                    initial={{ x: isOpen ? '0vw' : '100vw' }}
                    animate={{ x: isOpen ? '0vw' : '100vw' }}
                    transition={{ type: "spring", stiffness: 100, damping: 18 }}
                  >
                    <div className="flex justify-center flex-grow">
                      <ul className="space-y-2">
                        <Link className="max-w-xl" onClick={() => setOpen(!isOpen)} to={"/"}>
                          <motion.div whileTap={{ scale: 0.99 }}>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="rounded-full md:text-[40px] py-6 text-[24px] font-[400] leading-6 text-[#222222] text-left" // Изменено на text-left
                              type="submit"
                            >
                              <span>О нас</span>
                            </motion.button>
                          </motion.div>
                        </Link>

                        <Link to={'/projects'} className="max-w-xl">
                          <motion.div whileTap={{ scale: 0.99 }}>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="rounded-full py-6 md:text-[40px] text-[24px] font-[400] leading-6 text-[#222222] text-left" // Изменено на text-left
                              type="submit"
                            >
                              <span>Проекты</span>
                            </motion.button>
                          </motion.div>
                        </Link>

                        <Link to={"/"} className="max-w-xl" onClick={() => setOpen(!isOpen)}>
                          <motion.div whileTap={{ scale: 0.99 }}>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="rounded-full md:text-[40px] py-6 text-[24px] font-[400] leading-6 text-[#222222] text-left" // Изменено на text-left
                              type="submit"
                            >
                              <span>Клиенты</span>
                            </motion.button>
                          </motion.div>
                        </Link>

                        <Link to={"/"} className="max-w-xl" onClick={() => setOpen(!isOpen)}>
                          <motion.div whileTap={{ scale: 0.99 }}>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="rounded-full py-6 md:text-[40px] text-[24px] font-[400] leading-6 text-[#222222] text-left" // Изменено на text-left
                              type="submit"
                            >
                              <span>Технологии</span>
                            </motion.button>
                          </motion.div>
                        </Link>

                        <ScrollLink className="max-w-xl" onClick={() => setOpen(!isOpen)} to="contact" smooth={true} duration={900}>
                          <motion.div whileTap={{ scale: 0.99 }}>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="rounded-full md:text-[40px] py-6 leading-6 text-[24px] font-[400] text-[#222222] text-left" // Изменено на text-left
                              type="submit"
                            >
                              <span>Связаться с нами</span>
                            </motion.button>
                          </motion.div>
                        </ScrollLink>
                      </ul>
                    </div>
                  </motion.div>

                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>

      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => setOpen(false)}
            />
          )}
        </AnimatePresence>
        <img src="Rectangle mob.png" className="absolute z-0 md:hidden block w-[100vw] px-0 h-full"></img>
        <div className="mt-[10rem] relative">
          <motion.h1 ref={firstRef} initial={{ y: 60, opacity: 0 }} animate={inView1 ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1, ease: "easeInOut" }} className="md:text-[64px] md:pl-0 pl-4 text-[24px] font-medium md:tracking-[-3px] md:leading-[70px] text-[#222222] relative z-10">
            Наши проекты
          </motion.h1>
        </div>
        <img className="absolute z-0 md:block hidden" src="./Rectangle1.png"></img>
        <img className="absolute top-[50%] z-0 md:block hidden" src="./Rectangle1.png"></img>
        <img className="absolute top-[80%] z-0 md:block hidden" src="./Rectangle1.png"></img>
        <div className="grid grid-cols-2 gap-4 mt-[10rem] relative z-48 px-4 md:px-0 pb-[4rem]">
          <div className="">
            {projects1.map((id, index) => (
              <motion.div
                ref={id.ref}
                initial={{ x: -100, opacity: 0 }}
                animate={id.inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1), ease: "easeInOut" }}
                className="" 
              >
                <Link to={id.href}>
                  <img className="rounded-[20px] md:h-auto mt-8" src={id.src}></img>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-[15rem]">
            {projects2.map((id, index) => (
              <motion.div
                ref={id.ref}
                initial={{ x: 100, opacity: 0 }}
                animate={id.inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1), ease: "easeInOut" }}
              >
                <Link to={id.href} className="">
                  <img className="rounded-[20px] md:h-auto mt-8" src={id.src}></img>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}