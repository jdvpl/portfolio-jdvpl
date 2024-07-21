import { slideInFromTop } from '@/util/motion'
import { motion } from 'framer-motion'
import React from 'react'
import ImageLoader from '../ui/ImageLoader/ImageLoader'
import { TypeAnimation } from 'react-type-animation'

const Encription = () => {
  return (
    <div className='flex flex-row relative items-center justify-center w-full h-full min-h-screen'>
      <div className="absolute w-auto h-auto top-0 z-[20]">
        <motion.div
            variants={slideInFromTop}
            className='text-[40px] font-medium text-center text-gray-200 z-40'
        >   
         Performance  
         <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> & </span> security

        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
            <ImageLoader
                src={'/assets/LockTop.png'}
                width={50}
                height={50}
                className='translate-y-5 transition-all duration-200 group-hover:translate-y-11'
            />
            <ImageLoader
                src={'/assets/LockMain.png'}
                width={70}
                height={70}
                className='z-10'
            />
        </div>
        <div className='Welcome-box px-[15px] py-1  border z-[20] border-[#7042f88b] mt-10 opacity-[0.9]'>

        <TypeAnimation
            className='Welcome-text text-[15px]'
            sequence={[
              'Encryption',
              1000,
              'Node forge',
              1000,
              'Node RSA',
              1000,
              'Assymetric Encryption',
              1000,
              'GCM Cipher',
              1000,
              'Cryptography',
              1000,
              'Security',
              1000,
              'Server side rendering',
              1000,
              'client side rendering',
              1000,

            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>

        <div className='absolute z-[20] bottom-1 px-[5px]'>
    <div className='cursive text-[20px] text-gray-300  mt-2 text-center font-medium'>
        Secure your data with end-to-end encryption
        </div>
    </div>

      <div className='w-full flex items-start justify-center absolute'>
        <video
            loop
            muted
            autoPlay
            playsInline
            preload='false'
            className='w-full h-auto'
            src='/assets/encryption.webm'

        />
      </div>
    </div>
  )
}

export default Encription
