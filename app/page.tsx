'use client'
import Image from 'next/image';
import styles from "./home.module.css";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { TbBrandWebflow } from "react-icons/tb";
import { SiGoogleanalytics } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { SiShopify } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { LuFigma } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from 'next/link';
import { motion } from "motion/react";
import { useScroll } from "motion/react"
export default function Home() {
  return (
    <div>
      <section className={`${styles.bentoContainer} grid gap-4  max-w-screen-2xl mt-20 mx-auto`}>
        <div className={`${styles.itemOne} rounded-2xl p-4 shadow-gray-500/50 shadow-sm bg-gradient-to-b from-blue-900/25 via-blue-950/25 to-blackrounded-2xl text-white flex justify-center items-center`}>
           
          <div className={`${styles.homePageHero} `}>
            <div className="text-center max-w-4xl px-4 mx-auto">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Where Cool Meets Digital Brilliance
            </h1>
        
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Crafting cutting-edge campaigns with modern flair. Redefining your brand’s journey in the digital age.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              <a
                href="#services"
                className="bg-teal-500 text-black py-3 px-6 rounded-md text-sm font-semibold hover:bg-teal-400 transition"
              >
                Explore Our Services
              </a>
              <a
                href="#contact"
                className="border border-white py-3 px-6 rounded-md text-sm font-semibold hover:bg-white hover:text-black transition"
              >
                Get In Touch
              </a>
            </div>
          </div>
          </div>
          
        
        </div>
        <div className={`${styles.itemTwo} shadow-gray-500/50 shadow-sm rounded-2xl text-white p-4 bg-gradient-to-b from-blue-900/25 via-blue-950/25 to-black flex flex-col`}><CiVideoOn />
        <Link href="/" className="text-sm flex items-center justify-left mt-auto">Learn more<MdOutlineArrowOutward /></Link>
        </div>
        <div className={`${styles.itemThree}  shadow-gray-500/50 shadow-sm rounded-2xl text-white p-4 bg-gradient-to-b from-blue-900/25 via-blue-950/25 to-black flex flex-col`}><MdOutlinePhotoCamera /><Link href="/" className="text-sm flex items-end justify-left mt-auto">Learn more<MdOutlineArrowOutward className="border"/></Link></div>
        <div className={`${styles.itemFour}  shadow-gray-500/50 shadow-sm rounded-2xl text-white p-4 bg-gradient-to-b from-blue-900/25 via-blue-950/25 to-black flex flex-col`}><MdDesignServices /><LuFigma /><Link href="/" className="text-sm flex items-center justify-left mt-auto">Learn more<MdOutlineArrowOutward /></Link></div>
        <div className={`${styles.itemFive}  shadow-gray-500/50 shadow-sm rounded-2xl text-white p-4 bg-gradient-to-b from-blue-900/25 via-blue-950/25 to-black flex flex-col`}><TbBrandWebflow /><Link href="/" className="text-sm flex items-center justify-left mt-auto">Learn more<MdOutlineArrowOutward /></Link></div>
        <div className={`${styles.itemSix}  shadow-gray-500/50 shadow-sm rounded-2xl text-white p-4 bg-gradient-to-b from-blue-900/25 via-blue-950/25 to-black flex flex-col`}><SiGoogleanalytics /><Link href="/" className="text-sm flex items-center justify-left mt-auto">Learn more<MdOutlineArrowOutward /></Link></div>
        {/* <motion.div 
          className={`${styles.itemSeven} text-white flex justify-center items-center shadow-gray-500/50 shadow-sm rounded-2xl`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/workcbanner.png"
            alt="Projects Worked On"
            width={1200}
            height={200}
          />
        </motion.div> */}
       
 <div className={`${styles.itemSeven} text-white flex justify-center items-center overflow-x-hidden  min-w-full`}>
 <div className={`${styles.scrollContainer}`}>
 <div className={`${styles.scrollContent} flex`}>
  <div className={`${styles.primary}`}>
     <Image
            src="/images/workcbanner.png"
            alt="Projects Worked On"
            width={4000}
            height={80}
          />
  </div>
         
          <div className={`${styles.primary} ${styles.secondary}` }>
            <Image
            src="/images/workcbanner.png"
            alt="Projects Worked On"
            width={4000}
            height={80}
          /> 
          </div>
        </div>
 </div>
       
       
       
        </div>
        
       <div className={`${styles.itemEight}  shadow-gray-500/50 bg-gradient-to-b from-blue-900/25 via-blue-950/25 to-black shadow-sm rounded-2xl text-white p-4`}><FaTools />
       <div>
    <div className="flex flex-direction-col">
           <FaReact />
          <SiShopify />
          <VscVscode />
          
          
          </div>
       
       
       </div>
       </div>
        
       
      </section>
    </div>
  );
}