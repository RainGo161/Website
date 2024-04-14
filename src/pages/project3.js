'use client'
import React, { useState, useEffect, useRef } from "react";
import { Disclosure } from '@headlessui/react'
import { MenuButton } from "../menu/menu-button";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ScrollLink } from "react-scroll";
import './/line.css';

export default function Project3() {
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
  const { ref: ninethRef, inView: inView9 } = useInView();


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

  useEffect(() => {
    if (inView9) {
      setIsVisible(true);
    }
  }, [inView9]);

  return (
    <div>
      <div className="mx-auto max-w-7xl mt-10 px-4 bg-white">
        <div className="md:px-20 top-0 left-0 w-full z-[60]">
          <div className="flex justify-between boxx items-center z-[60] px-4 py-2">
            <div className="text-[24px] absolute z-10 top-[20px] md:left-[5rem] left-[1rem] font-bold">
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
        <div className="fixed z-[55]">
          <Disclosure as="nav" className="z-[49] h-[4rem] menu fixed top-0 left-0 w-full">
            {({ open }) => (
              <>
                <div className="mx-auto w-full px-2 md:px-6 lg:px-8">
                  <div className="relative flex h-18 items-center justify-between">

                    <motion.div
                      className="h-[100vh] w-screen md:max-w-2xl sm:w-[40vw] text-left sm:px-0 px-4 flex items-center z-8 fixed top-0 right-0 bg-[#ffffff] shadow-2xl"
                      initial={{ x: isOpen ? '0vw' : '100vw' }}
                      animate={{ x: isOpen ? '0vw' : '100vw' }}
                      transition={{ type: "spring", stiffness: 100, damping: 18 }}
                    >
                      <div className="flex justify-center flex-grow">
                        <ul className="">
                          <Link className="max-w-xl" onClick={() => setOpen(!isOpen)} to={'/'}>
                            <motion.div whileTap={{ scale: 0.99 }} className="textt">
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
                                className="rounded-full py-6  md:text-[40px] text-[24px] font-[400] leading-6 text-[#222222] text-left" // Изменено на text-left
                                type="submit"
                              >
                                <span>Проекты</span>
                              </motion.button>
                            </motion.div>
                          </Link>

                          <Link className="max-w-xl" onClick={() => setOpen(!isOpen)} to={'/'} >
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

                          <Link className="max-w-xl" onClick={() => setOpen(!isOpen)} to={'/'}>
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

                          <Link className="max-w-xl" onClick={() => setOpen(!isOpen)} to={'/'}>
                            <motion.div whileTap={{ scale: 0.99 }}>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="rounded-full md:text-[40px] py-6 text-[24px] font-[400] leading-6 text-[#222222] text-left" // Изменено на text-left
                                type="submit"
                              >
                                <span>Связаться с нами</span>
                              </motion.button>
                            </motion.div>
                          </Link>
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
        </div>
      </div>
      <div className="w-full -translate-y-14">
        <img className="h-full px-0 py-0 w-[100vw] relative z-0" src="./guitar.png"></img>
      </div>

      <div className="mx-auto max-w-7xl mt-10 px-4 py-2 pb-[12rem]">
        <motion.h1 ref={firstRef} initial={{ scale: 1.1, opacity: 0 }} animate={inView1 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }} className="md:text-[64px] text-[24px] max-w-3xl font-medium md:tracking-[-3px] md:leading-[70px] text-[#222222] relative z-10">
          Интернет-магазин всякой залупы
        </motion.h1>

        <motion.img ref={secondRef} initial={{ scale: 1.1, opacity: 0 }} animate={inView2 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }} className="h-full md:rounded-[40px] rounded-[20px] md:mt-[10rem] mt-[4rem] px-0 py-0 w-[100vw] relative" src="./prewiew-fintess.jpg"></motion.img>

        <motion.h1 ref={thirdRef} initial={{ opacity: 0 }} animate={inView3 ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }} className="md:text-[64px] text-[24px] md:mt-[8rem] mt-[3rem] max-w-3xl font-medium md:tracking-[-3px] md:leading-[70px] text-[#222222] relative z-10">
          Задача
        </motion.h1>

        <motion.p ref={fourthRef} initial={{ x: -70, opacity: 0 }} animate={inView4 ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }} className="md:ml-3 max-w-3xl font-medium md:text-[24px] text-[16px] md:mt-[8rem] mt-[2rem]">Требуется разработать сайт для фитнес клуба "Пантеон". Сайт будет предоставлять широкий ассортимент абонементов, страниц о информации.</motion.p>

        <motion.p ref={fivthRef} initial={{ x: -70, opacity: 0 }} animate={inView5 ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }} className="md:ml-3 max-w-3xl font-medium md:text-[24px] text-[16px] md:mt-[8rem] mt-[2rem]">Стек: @reduxjs/toolkit, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event, axios, react, react-dom, react-redux, react-router-dom, react-scripts, web-vitals</motion.p>

        <div className="max-w-3xl flex">
        </div>

        <div className="grid grid-cols-2 gap-5 md:mt-[8rem] mt-[3rem]">
          <motion.img
            ref={seventhRef}
            initial={{ x: 100, opacity: 0 }}
            animate={inView7 ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }} className="px-0 py-0 relative md:rounded-[40px] rounded-[20px]" src="./prewiew-fintess.jpg" alt="Изображение 2"></motion.img>

          <motion.img
            ref={seventhRef}
            initial={{ x: 100, opacity: 0 }}
            animate={inView7 ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }} className="px-0 py-0 relative md:rounded-[40px] rounded-[20px]" src="./fitness-map.jpg" alt="Изображение 2"></motion.img>
        </div>

        <div className="grid grid-cols-3 gap-5 mt-[1.25rem]">
          <motion.img ref={eighthRef} initial={{ scale: 1.1, opacity: 0 }} animate={inView8 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }} className="px-0 py-0 relative md:rounded-[40px] rounded-[20px]" src="./fitness-mobile-1.jpg" alt="Изображение 2"></motion.img>

          <motion.img ref={eighthRef} initial={{ scale: 1.1, opacity: 0 }} animate={inView8 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }} className="px-0 py-0 relative md:rounded-[40px] rounded-[20px]" src="./fitness-mobile-2.jpg" alt="Изображение 2"></motion.img>
        </div>

      </div>
    </div>

  )
}