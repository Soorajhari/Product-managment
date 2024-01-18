import React from 'react'
import {motion,AnimatePresence} from 'framer-motion'

const Modal = () => {
  return (
    <AnimatePresence>
    <motion.div className=' flex justify-center font-serif' initial={{opacity:1}}  animate={{opacity:0}} exit={{opacity:0}}  transition={{duration:2, ease:[0.12,0,0.39,0] }} >
        <motion.div className='flex justify-center mt-6 border border-black rounded-lg w-[350px] h-[80px] items-center'>
            <motion.p className='text-2xl font-medium'>Item added to your whishlist</motion.p>
        </motion.div>
    </motion.div>
    </AnimatePresence>
  )
}

export default Modal