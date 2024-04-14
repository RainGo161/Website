'use client'
import React, { useState, useEffect, useRef } from "react";
import { Disclosure } from '@headlessui/react'
import { MenuButton } from "../menu/menu-button";
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import './/line.css';
import './/button-wave.css';
import './/button-buble.css';
import MouseFollower from "../cursor/cursor";
import Magnetic from "../cursor/magnetic";
import gsap from "gsap";
import $ from 'jquery';
import '../cursor/cursor.scss'



export default function Main() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Письмо успешно отправлено');
        // Очистка формы после отправки
        setFormData({
          name: "",
          email: "",
          text: ""
        });
      } else {
        throw new Error('Что-то пошло не так');
      }
    } catch (error) {
      console.error('Ошибка отправки письма:', error);
      alert('Что-то пошло не так, попробуйте еще раз');
    }
  };

  const [isOpen, setOpen] = useState(false);

  //анимация блоков, хуки 
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);
  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);
  const [isVisible11, setIsVisible11] = useState(false);
  const [isVisible12, setIsVisible12] = useState(false);
  const [isVisible13, setIsVisible13] = useState(false);
  const [isVisible14, setIsVisible14] = useState(false);
  const [isVisible15, setIsVisible15] = useState(false);
  const [isVisible16, setIsVisible16] = useState(false);
  const [isVisible17, setIsVisible17] = useState(false);



  const controls = useAnimation();
  const { ref: firstRef, inView: inView1 } = useInView();
  const { ref: secondRef, inView: inView2 } = useInView();
  const { ref: thirdRef, inView: inView3 } = useInView();
  const { ref: fourthRef, inView: inView4 } = useInView();
  const { ref: fivthRef, inView: inView5 } = useInView();
  const { ref: Ref6, inView: inView6 } = useInView();
  const { ref: Ref7, inView: inView7 } = useInView();
  const { ref: Ref8, inView: inView8 } = useInView();
  const { ref: Ref9, inView: inView9 } = useInView();
  const { ref: Ref10, inView: inView10 } = useInView();
  const { ref: Ref11, inView: inView11 } = useInView();
  const { ref: Ref12, inView: inView12 } = useInView();
  const { ref: Ref13, inView: inView13 } = useInView();
  const { ref: Ref14, inView: inView14 } = useInView();
  const { ref: Ref15, inView: inView15 } = useInView();
  const { ref: Ref16, inView: inView16 } = useInView();
  const { ref: Ref17, inView: inView17 } = useInView();



  useEffect(() => {
    if (inView1) {
      setIsVisible1(true);
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      setIsVisible2(true);
    }
  }, [inView2]);

  useEffect(() => {
    if (inView3) {
      setIsVisible3(true);
    }
  }, [inView3]);

  useEffect(() => {
    if (inView4) {
      setIsVisible4(true);
    }
  }, [inView4]);

  useEffect(() => {
    if (inView5) {
      setIsVisible5(true);
    }
  }, [inView5]);

  useEffect(() => {
    if (inView6) {
      setIsVisible6(true);
    }
  }, [inView6]);

  useEffect(() => {
    if (inView7) {
      setIsVisible7(true);
    }
  }, [inView7]);

  useEffect(() => {
    if (inView8) {
      setIsVisible8(true);
    }
  }, [inView8]);

  useEffect(() => {
    if (inView9) {
      setIsVisible9(true);
    }
  }, [inView9]);

  useEffect(() => {
    if (inView10) {
      setIsVisible10(true);
    }
  }, [inView10]);

  useEffect(() => {
    if (inView11) {
      setIsVisible11(true);
    }
  }, [inView11]);

  useEffect(() => {
    if (inView12) {
      setIsVisible12(true);
    }
  }, [inView12]);

  useEffect(() => {
    if (inView13) {
      setIsVisible13(true);
    }
  }, [inView13]);

  useEffect(() => {
    if (inView14) {
      setIsVisible14(true);
    }
  }, [inView14]);

  useEffect(() => {
    if (inView15) {
      setIsVisible15(true);
    }
  }, [inView15]);

  useEffect(() => {
    if (inView16) {
      setIsVisible16(true);
    }
  }, [inView16]);

  useEffect(() => {
    if (inView17) {
      setIsVisible17(true);
    }
  }, [inView17]);

  function noneClick(e) {
    e.preventDefault();
  }

  {/*MouseFollower.registerGSAP(gsap);

  const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
      '-pointer': 'a,button',
      '-hidden': 'iframe'
    },
    visible: true,
    visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 2,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300
  });

  useEffect(() => {
    const el = document.querySelector('.my-element');
    const magnetic = new Magnetic('.button', {
      y: 0.2, // horizontal delta
      x: 0.2, // vertical delta
      s: 0.2, // speed
      rs: 0.7 // release speed
    });

    document.querySelector('.button').addEventListener('mouseenter', () => {
      cursor.addState('-text');
    });

    document.querySelector('.button').addEventListener('mouseleave', () => {
      cursor.removeState('-text');
    });

    $('[data-magnetic]').each(function () {new Magnetic(this);});

    const button = document.querySelector('.button-menu');

    document.querySelector('.boxx').addEventListener('mouseleave', () => {
      cursor.setStick(button);
    });

    document.querySelector('.boxx').addEventListener('mouseleave', () => {
      cursor.removeStick();
    });

    el.addEventListener('mouseenter', () => {
      cursor.hide();
    });

    el.addEventListener('mouseleave', () => {
      cursor.show();
    });

    const ele = document.querySelector('.textt');

    ele.addEventListener('mouseenter', () => {
      cursor.addState('-exclusion');
    });

    ele.addEventListener('mouseleave', () => {
      cursor.removeState('-exclusion');
    });
  }); */}

  return (
    <div className="mx-auto my-element md:max-w-7xl w-screen overflow-x-hidden md:overflow-x-visible md:px-4 md:py-2 bg-white">
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
                        <ScrollLink className="max-w-xl" onClick={() => setOpen(!isOpen)} to="us" smooth={true} duration={900}>
                          <motion.div whileTap={{ scale: 0.99 }} className="textt">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="rounded-full md:text-[40px] py-6 text-[24px] font-[400] leading-6 text-[#222222] text-left" // Изменено на text-left
                              type="submit"
                            >
                              <span>О нас</span>
                            </motion.button>
                          </motion.div>
                        </ScrollLink>

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

                        <ScrollLink className="max-w-xl" onClick={() => setOpen(!isOpen)} to="clients" smooth={true} duration={900} >
                          <motion.div whileTap={{ scale: 0.99 }}>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="rounded-full md:text-[40px] py-6 text-[24px] font-[400] leading-6 text-[#222222] text-left" // Изменено на text-left
                              type="submit"
                            >
                              <span>Клиенты</span>
                            </motion.button>
                          </motion.div>
                        </ScrollLink>

                        <ScrollLink className="max-w-xl" onClick={() => setOpen(!isOpen)} to="tech" smooth={true} duration={900}>
                          <motion.div whileTap={{ scale: 0.99 }}>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="rounded-full py-6 md:text-[40px] text-[24px] font-[400] leading-6 text-[#222222] text-left" // Изменено на text-left
                              type="submit"
                            >
                              <span>Технологии</span>
                            </motion.button>
                          </motion.div>
                        </ScrollLink>

                        <ScrollLink className="max-w-xl" onClick={() => setOpen(!isOpen)} to="tech" smooth={true} duration={900}>
                          <motion.div whileTap={{ scale: 0.99 }}>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              className="rounded-full md:text-[40px] py-6 text-[24px] font-[400] leading-6 text-[#222222] text-left" // Изменено на text-left
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
              className="fixed inset-0 bg-black z-[50]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => setOpen(false)}
            />
          )}
        </AnimatePresence>
        <div className="flex justify-between items-center">
          <div className="md:max-w-3xl w-full md:mt-[10rem]">
            <div className="w-full md:hidden absolute -translate-y-[5%]">
              <svg className="w-screen h-auto" viewBox="0 0 320 505" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_253_4)">
                  <path d="M145.944 94.3786L386.666 130.975L187.577 334.281L145.944 94.3786Z" fill="#4B7CDC" fillOpacity="0.4" />
                </g>
                <g filter="url(#filter1_f_253_4)">
                  <path d="M-0.899521 20.7124L190.464 49.8051L32.197 211.424L-0.899521 20.7124Z" fill="#B5FFA9" fillOpacity="0.7" />
                </g>
                <g filter="url(#filter2_f_253_4)">
                  <path d="M-9.45724 224.867L120.903 244.173L12.5755 354.794L-9.45724 224.867Z" fill="url(#paint0_linear_253_4)" fillOpacity="0.4" />
                </g>
                <rect x="-142" y="-121" width="606" height="564" fill="url(#pattern0)" />
                <defs>
                  <filter id="filter0_f_253_4" x="-4.05566" y="-55.6215" width="540.722" height="539.902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_253_4" />
                  </filter>
                  <filter id="filter1_f_253_4" x="-150.899" y="-129.288" width="491.363" height="490.712" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_253_4" />
                  </filter>
                  <filter id="filter2_f_253_4" x="-159.457" y="74.8674" width="430.36" height="429.927" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_253_4" />
                  </filter>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_253_4" transform="matrix(0.000244141 0 0 0.000262321 0 -0.00182067)" />
                  </pattern>
                  <linearGradient id="paint0_linear_253_4" x1="36.7214" y1="256.433" x2="38.2373" y2="338.575" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C84BDC" />
                    <stop offset="1" stopColor="#F8A9FF" />
                  </linearGradient>
                </defs>
              </svg>
              <img className="w-full absolute top-0 scale-150" src="img1.jpg"></img>
            </div>
            <motion.h1 ref={firstRef} initial={{ opacity: 0 }} animate={isVisible1 ? { opacity: 1 } : {}} transition={{ duration: 0.5, ease: "easeInOut" }} className="md:text-[64px] pr-4 text-[24px] font-medium md:tracking-[-3px] md:leading-[70px] md:mt-0 mt-[20rem] md:pl-0 pl-4 text-[#222222] relative z-10">
              Ваш сайт - это лицо вашего бизнеса
            </motion.h1>
            <motion.h1 ref={firstRef} initial={{ opacity: 0 }} animate={isVisible1 ? { opacity: 1 } : {}} transition={{ duration: 0.5, ease: "easeInOut" }} className="md:text-[64px] text-[24px] font-medium md:tracking-[-3px] md:leading-[70px] md:pl-0 pl-4 text-[#222222] relative">
              Доверьте его профессионалам
            </motion.h1>
            <img className="md:block hidden absolute top-0 -translate-y-[32%] left-0 scale-50 -z-[0] -translate-x-[40%]" src="/gradient_1.png"></img>
            <motion.div ref={secondRef} initial={{ x: -70, opacity: 0 }} animate={isVisible2 ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }} className="md:pt-[10rem] pt-[4rem] md:pl-0 pl-4">
              <a className="md:max-w-3xl max-w-md px-[4rem] wave-effect rounded-[100px] md:h-[100px] border-2 border-[#222222] md:px-[10rem] font-medium md:text-[24px] text-[16px] md:py-6 py-4" href="#">
                Сотрудничать
              </a>
            </motion.div>
          </div>

          <motion.div ref={thirdRef} initial={{ scale: 0, opacity: 0 }} animate={isVisible3 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }} className=" max-w-7xl hidden sm:block">
            <img src="/w_gr 1.png"></img>
          </motion.div>
        </div>

        <div className="mt-[10rem] px-4 md:px-0" id="us">
          <h1 className="md:font-medium font-bold sm:text-[64px] text-[24px] sm:tracking-[-3px] sm:leading-[70px] tracking-[-5%] text-[#222222]">
            Почему мы?
          </h1>
          <div className="md:mt-[10rem] mt-3" id="us">
            {/* Destkop block:     "Why We?"       */}
            <div className="md:flex md:mt-[8rem] mt-0 hidden">
              <div className="w-1/3 relative">
                <motion.div ref={fourthRef} initial={{ y: -100, opacity: 0 }} animate={isVisible4 ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }} className="absolute h-full left-0 top-0 bg-[#222222] w-[1px]" />
                <motion.div ref={fourthRef} initial={{ scale: 0, opacity: 0 }} animate={isVisible4 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}>
                  <h1 className="text-[64px] ml-2 font-bold">01</h1>
                  <img className="top-0 -translate-y-[30%] left-0 -translate-x-[35%] absolute -z-[0]" src="/gradient_1.png"></img>
                  <h5 className="ml-3 font-medium text-[24px]">Качество</h5>
                </motion.div>
                <motion.p ref={fourthRef} initial={{ opacity: 0 }} animate={isVisible4 ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }} className="ml-3 font-medium text-[24px] mt-[8rem]">Мы гордимся качеством нашей работы и стремимся к совершенству в каждой детали</motion.p>
              </div>

              <div className="w-1/3 relative">
                <motion.div ref={fivthRef} initial={{ y: -100, opacity: 0 }} animate={isVisible5 ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }} className="absolute h-full left-0 top-0 bg-[#222222] w-[1px]" />
                <motion.div ref={fivthRef} initial={{ scale: 0, opacity: 0 }} animate={isVisible5 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}>
                  <h1 className="text-[64px] ml-2 font-bold">02</h1>
                  <img className="top-0 -translate-y-[30%] left-0 -translate-x-[35%] absolute -z-[0]" src="/gradient_2.png"></img>
                  <h5 className="ml-3 text-[24px] font-medium">Сроки</h5>
                </motion.div>
                <motion.p ref={fivthRef} initial={{ opacity: 0 }} animate={isVisible5 ? { opacity: 1 } : {}} transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }} className="ml-3 font-medium text-[24px] mt-[8rem]">Мы понимаем важность соблюдения сроков и уважаем ваше время</motion.p>
              </div>

              <div className="w-1/3 relative">
                <motion.div ref={Ref6} initial={{ y: -100, opacity: 0 }} animate={isVisible6 ? { y: 0, opacity: 1 } : {}} transition={{ delay: 0.8, duration: 0.5, ease: "easeInOut" }} className="absolute h-full left-0 top-0 bg-[#222222] w-[1px]" />
                <motion.div ref={Ref6} initial={{ scale: 0, opacity: 0 }} animate={isVisible6 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}>
                  <h1 className="text-[64px] ml-2 font-bold">03</h1>
                  <img className="top-0 -translate-y-[30%] left-0 -translate-x-[35%] absolute -z-[0]" src="/gradient_3.png"></img>
                  <h5 className="ml-3 text-[24px] font-medium">Поддержка</h5>
                </motion.div>
                <motion.p ref={Ref6} initial={{ opacity: 0 }} animate={isVisible6 ? { opacity: 1 } : {}} transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }} className="ml-3 font-medium text-[24px] mt-[8rem]">Мы предоставляем постоянную поддержку, гарантируя стабильность работы наших веб-приложений</motion.p>
              </div>
            </div>

            {/* Mobile block:     "Why We?"       */}
            <div className="md:hidden block mt-[1rem]">
              <div className="md:w-1/3 relative">
                <motion.div ref={Ref11} initial={{ scale: 0, opacity: 0 }} animate={isVisible11 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}>
                  <h1 className="text-[64px] font-bold">01</h1>
                  <img className="top-0 -translate-y-[30%] left-0 -translate-x-[40%] absolute" src="/gradient_1.png"></img>
                  <h5 className=" font-medium text-[16px]">Качество</h5>
                </motion.div>
                <motion.p ref={Ref11} initial={{ opacity: 0 }} animate={isVisible11 ? { opacity: 1 } : {}} transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }} className=" font-light text-[16px] mt-[1rem]">Мы гордимся качеством нашей работы и стремимся к совершенству в каждой детали</motion.p>
                <motion.div ref={Ref11} initial={{ x: -100, opacity: 0 }} animate={isVisible11 ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }} className="w-full left-0 top-0 bg-[#222222] mt-2 h-[1px]" />
              </div>

              <div className="md:w-1/3 relative">
                <motion.div ref={Ref12} initial={{ scale: 0, opacity: 0 }} animate={isVisible12 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}>
                  <h1 className="text-[64px] font-bold">02</h1>
                  <img className="top-0 -translate-y-[30%] left-0 -translate-x-[40%] absolute" src="/gradient_3.png"></img>
                  <h5 className="text-[16px] font-medium">Сроки</h5>
                </motion.div>
                <motion.p ref={Ref12} initial={{ opacity: 0 }} animate={isVisible12 ? { opacity: 1 } : {}} transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }} className=" font-light text-[16px] mt-[1rem]">Мы понимаем важность соблюдения сроков и уважаем ваше время</motion.p>
                <motion.div ref={Ref12} initial={{ x: -100, opacity: 0 }} animate={isVisible12 ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }} className="w-full left-0 top-0 bg-[#222222] mt-2 h-[1px]" />
              </div>

              <div className="md:w-1/3 relative">
                <motion.div ref={Ref13} initial={{ scale: 0, opacity: 0 }} animate={isVisible13 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}>
                  <h1 className="text-[64px] font-bold">03</h1>
                  <img className="top-0 -translate-y-[30%] left-0 -translate-x-[40%] absolute" src="/gradient_2.png"></img>
                  <h5 className="text-[16px] font-medium">Поддержка</h5>
                </motion.div>
                <motion.p ref={Ref13} initial={{ opacity: 0 }} animate={isVisible13 ? { opacity: 1 } : {}} transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }} className="font-light text-[16px] mt-[1rem]">Мы предоставляем постоянную поддержку, гарантируя стабильность работы наших веб-приложений</motion.p>
                <motion.div ref={Ref13} initial={{ x: -100, opacity: 0 }} animate={isVisible13 ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }} className="w-full left-0 top-0 bg-[#222222] mt-2 h-[1px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[8rem]">
          <div className="md:max-w-3xl w-full relative">
            <img className="absolute -translate-y-[40%] scale-50 -translate-x-[35%] top-0 md:block hidden -z-[2]" src="gradient_3.png"></img>

            <svg className="absolute md:hidden block w-screen h-auto" viewBox="0 0 320 655" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_0_1)">
                <path d="M166.101 265.712L325.474 289.942L193.664 424.543L166.101 265.712Z" fill="url(#paint0_linear_0_1)" fill-opacity="0.7" />
              </g>
              <g filter="url(#filter1_f_0_1)">
                <path d="M3.10054 150.712L162.474 174.942L30.6644 309.543L3.10054 150.712Z" fill="#B5FFA9" fill-opacity="0.7" />
              </g>
              <g filter="url(#filter2_f_0_1)">
                <path d="M107.609 380.712L159.425 504.437L22.2107 484.152L107.609 380.712Z" fill="url(#paint1_linear_0_1)" fill-opacity="0.4" />
              </g>
              <defs>
                <filter id="filter0_f_0_1" x="16.1006" y="115.712" width="459.374" height="458.831" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_0_1" />
                </filter>
                <filter id="filter1_f_0_1" x="-146.899" y="0.712341" width="459.374" height="458.831" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_0_1" />
                </filter>
                <filter id="filter2_f_0_1" x="-127.789" y="230.712" width="437.214" height="423.726" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_0_1" />
                </filter>
                <linearGradient id="paint0_linear_0_1" x1="222.68" y1="304.502" x2="224.125" y2="404.869" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C84BDC" />
                  <stop offset="1" stop-color="#F8A9FF" />
                </linearGradient>
                <linearGradient id="paint1_linear_0_1" x1="107.584" y1="440.651" x2="39.488" y2="482.88" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#4B7CDC" />
                  <stop offset="1" stop-color="#8CABE9" />
                </linearGradient>
              </defs>
            </svg>

            <img className="w-full md:hidden block relative z-20" src="img3.jpg"></img>

            {/* Destkop Text */}
            <motion.h1 ref={Ref7} initial={{ opacity: 0 }} animate={isVisible7 ? { opacity: 1 } : {}} transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }} className="md:text-[64px] md:block hidden text-[24px] font-medium md:tracking-[-3px] tracking-[-5%] md:leading-[70px] text-[#222222] relative z-10 md:px-0 px-4">
              Мы верим, что каждый проект заслуживает индивидуального подхода
            </motion.h1>
            <motion.div ref={Ref7} initial={{ x: -70, opacity: 0 }} animate={isVisible7 ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }} className="mt-11 md:block hidden">
              <a className="md:max-w-3xl max-w-xl px-[4rem] buble-button text-center rounded-[100px] border-2 border-[#222222] md:px-[10rem] font-medium md:text-[24px] text-[16px] md:py-6 py-2" href="/projects">
                Наши проекты <span></span><span></span><span></span><span></span>
              </a>
            </motion.div>

            {/* Mobile Text */}
            <motion.h1 ref={Ref14} initial={{ opacity: 0 }} animate={isVisible14 ? { opacity: 1 } : {}} transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }} className="md:text-[64px] md:hidden block text-[24px] font-medium md:tracking-[-3px] tracking-[-5%] md:leading-[70px] text-[#222222] relative z-10 md:px-0 px-4">
              Мы верим, что каждый проект заслуживает индивидуального подхода
            </motion.h1>
            <motion.div ref={Ref14} initial={{ x: -70, opacity: 0 }} animate={isVisible14 ? { x: 0, opacity: 1 } : {}} transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }} className="mt-11 md:hidden block">
              <a className="md:max-w-3xl max-w-xl px-[4rem] buble-button ml-4 text-center rounded-[100px] border-2 border-[#222222] md:px-[10rem] font-medium md:text-[24px] text-[16px] md:py-6 py-4" href="/projects">
                Наши проекты <span></span><span></span><span></span><span></span>
              </a>
            </motion.div>
          </div>

          <motion.div ref={Ref7} initial={{ scale: 0, opacity: 0 }} animate={isVisible7 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }} className="max-w-8xl md:block hidden">
            <img src="/w_gr 2.png"></img>
          </motion.div>
        </div>

        <div className="md:flex md:justify-between md:items-center md:mt-[8rem]" id="clients">

          <motion.div ref={Ref8} initial={{ scale: 0, opacity: 0 }} animate={isVisible8 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }} className="gap-5 max-w-6xl md:block hidden">
            <img src="/w_gr 3.png"></img>
          </motion.div>

          <div className="md:max-w-3xl md:gap-5 md:pl-8 px-4 mt-4 relative">
            <img className="absolute top-0 md:block -translate-y-[42%] -translate-x-[35%] hidden scale-50 -z-[10]" src="gradient_1.png"></img>

            <motion.img ref={Ref15} initial={{ opacity: 0, }} animate={isVisible15 ? { opacity: 1, } : {}} transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }} src="img2.jpg" className="scale-125 md:hidden block relative z-30"></motion.img>
            <img className="top-0 translate-y-[20%] right-0 absolute md:hidden block" src="/gradient_1.png"></img>
            <img className="top-0 left-0 -translate-x-[35%] absolute md:hidden block" src="/gradient_3.png"></img>


            <motion.h1 ref={Ref8} initial={{ opacity: 0 }} animate={isVisible8 ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.5 }} className="md:text-[64px] text-[24px] font-medium md:tracking-[-3px] md:leading-[70px] text-[#222222] relative z-10">
              Наши клиенты
            </motion.h1>
            <motion.p ref={Ref8} initial={{ scale: 1.5, opacity: 0 }} animate={isVisible8 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.5, ease: "easeInOut" }} className="md:text-[24px] text-[16px] font-medium text-[#222222] relative z-10 md:mt-[8rem] mt-4">WebSolutions сотрудничает с широким кругом клиентов из различных отраслей. От стартапов до крупных корпораций, мы предоставляем высококачественные веб-решения, которые соответствуют их уникальным потребностям и целям.</motion.p>
            <motion.p ref={Ref8} initial={{ scale: 1.5, opacity: 0 }} animate={isVisible8 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }} className="md:text-[24px] text-[16px] font-medium text-[#222222] relative z-10 md:mt-[4rem] mt-4">Мы гордимся тем, что наши клиенты рекомендуют нас своим коллегам и партнерам. Их положительные отзывы и постоянный бизнес являются свидетельством нашей способности предоставлять превосходные веб-решения и строить прочные отношения с клиентами.</motion.p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-[8rem] md:px-0" id="tech">
          <div className="md:max-w-xl w-full relative">
            <img className="absolute top-0 md:block hidden scale-50 -translate-y-[40%] -translate-x-[35%] -z-[2]" src="gradient_3.png"></img>

            <motion.img ref={Ref16} initial={{ opacity: 0, }} animate={isVisible16 ? { opacity: 1, } : {}} transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }} src="img4.jpg" className="relative z-30 md:hidden block"></motion.img>

            <svg className="absolute -translate-y-[30rem] md:hidden block w-screen h-auto" viewBox="0 0 320 614" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_0_1)">
                <path d="M145.944 223.977L386.666 260.574L187.577 463.879L145.944 223.977Z" fill="#4B7CDC" fill-opacity="0.4" />
              </g>
              <g filter="url(#filter1_f_0_1)">
                <path d="M-0.899521 150.311L190.464 179.403L32.197 341.022L-0.899521 150.311Z" fill="#B5FFA9" fill-opacity="0.7" />
              </g>
              <defs>
                <filter id="filter0_f_0_1" x="-4.05566" y="73.9769" width="540.722" height="539.902" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_0_1" />
                </filter>
                <filter id="filter1_f_0_1" x="-150.899" y="0.310608" width="491.363" height="490.712" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_0_1" />
                </filter>
              </defs>
            </svg>

            {/* Destkop Text */}
            <motion.h1 ref={Ref9} initial={{ opacity: 0 }} animate={isVisible9 ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }} className="md:text-[64px] md:px-0 px-4 text-[24px] font-medium md:tracking-[-3px] md:leading-[70px] text-[#222222] relative z-10 md:block hidden">
              Технологии
            </motion.h1>
            <motion.p ref={Ref9} initial={{ scale: 1.5, opacity: 0 }} animate={isVisible9 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }} className="md:text-[24px] text-[16px] md:px-0 px-4 font-medium text-[#222222] relative z-10 md:mt-[6rem] mt-[2rem] md:block hidden">Мы используем новейшие технологии и фреймворки, чтобы создавать современные и высокопроизводительные веб-решения.</motion.p>
            <motion.p ref={Ref9} initial={{ scale: 1.5, opacity: 0 }} animate={isVisible9 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }} className="md:text-[24px] text-[16px] md:px-0 px-4 font-medium text-[#222222] relative z-10 md:mt-[2rem] mt-[2rem] md:block hidden">Мы специализируемся на таких технологиях, как React, Node.js, Python и AWS.</motion.p>

            {/* Mobile Text */}
            <motion.h1 ref={Ref17} initial={{ opacity: 0 }} animate={isVisible17 ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }} className="md:text-[64px] md:px-0 px-4 text-[24px] font-medium md:tracking-[-3px] md:leading-[70px] text-[#222222] relative z-10 md:hidden block">
              Технологии
            </motion.h1>
            <motion.p ref={Ref17} initial={{ scale: 1.5, opacity: 0 }} animate={isVisible17 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.7, duration: 0.5, ease: "easeInOut" }} className="md:text-[24px] text-[16px] md:px-0 px-4 font-medium text-[#222222] relative z-10 md:mt-[6rem] mt-[2rem] md:hidden block">Мы используем новейшие технологии и фреймворки, чтобы создавать современные и высокопроизводительные веб-решения.</motion.p>
            <motion.p ref={Ref17} initial={{ scale: 1.5, opacity: 0 }} animate={isVisible17 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }} className="md:text-[24px] text-[16px] md:px-0 px-4 font-medium text-[#222222] relative z-10 md:mt-[2rem] mt-[2rem] md:hidden block">Мы специализируемся на таких технологиях, как React, Node.js, Python и AWS.</motion.p>
          </div>

          <motion.div ref={Ref9} initial={{ scale: 0, opacity: 0 }} animate={isVisible9 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }} className="max-w-7xl md:block hidden">
            <img src="/w_gr 4.png"></img>
          </motion.div>
        </div>


        <div className="w-full md:hidden absolute -translate-y-[5%]">
          <svg className="w-screen h-auto" viewBox="0 0 320 505" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_253_4)">
              <path d="M145.944 94.3786L386.666 130.975L187.577 334.281L145.944 94.3786Z" fill="#4B7CDC" fillOpacity="0.4" />
            </g>
            <g filter="url(#filter1_f_253_4)">
              <path d="M-0.899521 20.7124L190.464 49.8051L32.197 211.424L-0.899521 20.7124Z" fill="#B5FFA9" fillOpacity="0.7" />
            </g>
            <g filter="url(#filter2_f_253_4)">
              <path d="M-9.45724 224.867L120.903 244.173L12.5755 354.794L-9.45724 224.867Z" fill="url(#paint0_linear_253_4)" fillOpacity="0.4" />
            </g>
            <rect x="-142" y="-121" width="606" height="564" fill="url(#pattern0)" />
            <defs>
              <filter id="filter0_f_253_4" x="-4.05566" y="-55.6215" width="540.722" height="539.902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_253_4" />
              </filter>
              <filter id="filter1_f_253_4" x="-150.899" y="-129.288" width="491.363" height="490.712" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_253_4" />
              </filter>
              <filter id="filter2_f_253_4" x="-159.457" y="74.8674" width="430.36" height="429.927" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="75" result="effect1_foregroundBlur_253_4" />
              </filter>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_253_4" transform="matrix(0.000244141 0 0 0.000262321 0 -0.00182067)" />
              </pattern>
              <linearGradient id="paint0_linear_253_4" x1="36.7214" y1="256.433" x2="38.2373" y2="338.575" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C84BDC" />
                <stop offset="1" stopColor="#F8A9FF" />
              </linearGradient>
            </defs>
          </svg>
          <img className="w-full absolute top-0 scale-150" src="img1.jpg"></img>
        </div>
        <div className="md:flex justify-between items-center mt-[15rem] pb-[8rem] px-4 md:px-0">
          <motion.div ref={Ref10} initial={{ scale: 0, opacity: 0 }} animate={isVisible10 ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }} className="max-w-2xl md:block hidden relative md:mr-auto -z-[0]">
            <img src="/w_gr 1.png"></img>
          </motion.div>
          <div className="md:max-w-2xl w-full md:ml-[4rem] pb-[7rem] " id="contact">
            <h1 className="md:text-[64px] text-[24px] font-medium md:tracking-[-3px] md:leading-[70px] text-[#222222] relative z-10">
              Связаться с нами
            </h1>
            <div className="mt-10">
              <form onSubmit={handleSubmit} className="">
                <div className="input-wrapper">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <motion.label ref={Ref10} initial={{ opacity: 0 }} animate={isVisible10 ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }} htmlFor="name">Ваше Имя</motion.label>
                  <motion.div ref={Ref10} initial={{ width: 0, opacity: 0 }} animate={isVisible10 ? { width: '100%', opacity: 1 } : {}} transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }} className="w-full left-0 top-0 bg-[#222222] h-[1px]" />
                </div>

                <div className="input-wrapper">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <motion.label ref={Ref10} initial={{ opacity: 0 }} animate={isVisible10 ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }} htmlFor="name">Ваша Почта</motion.label>
                  <motion.div ref={Ref10} initial={{ width: 0, opacity: 0 }} animate={isVisible10 ? { width: '100%', opacity: 1 } : {}} transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }} className="w-full left-0 top-0 bg-[#222222] h-[1px]" />
                </div>

                <div className="input-wrapper">
                  <input
                    id="text"
                    name="text"
                    required
                    value={formData.text}
                    onChange={handleChange}
                    className="block w-full py-1.5 text-gray-900  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                  <motion.label ref={Ref10} initial={{ opacity: 0 }} animate={isVisible10 ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }} htmlFor="text">Вопрос</motion.label>
                  <motion.div ref={Ref10} initial={{ width: 0, opacity: 0 }} animate={isVisible10 ? { width: '100%', opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }} className="w-full left-0 top-0 bg-[#222222] h-[1px]" />
                </div>
                <div className="mt-11">
                  <button type="submit" className="md:max-w-3xl wave-effect rounded-[100px] border-2 border-[#222222] md:px-[10rem] font-medium md:text-[24px] text-[16px] w-full py-4 -z-[20]">
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
