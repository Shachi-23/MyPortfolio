// import React, { useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import { useNavigate } from 'react-router-dom'

// export default function Homepage() {
//   const [isRotated, setIsRotated] = useState(false)
//   const [isOpen, setIsOpen] = useState(false)
//   const [isCircleVisible, setIsCircleVisible] = useState(true)
//   const navigate = useNavigate()

//   const handleClick = () => {
//     setIsRotated(!isRotated)
//     setTimeout(() => {
//       setIsOpen(!isOpen)
//     }, 500) // Delay the opening animation
//   }

//   useEffect(() => {
//     if (isOpen) {
//       setTimeout(() => {
//         setIsCircleVisible(false)
//         navigate('./about')
//       }, 1000)
//     }
//   }, [isOpen, navigate])

//   return (
//     <div className="h-screen w-full flex items-center justify-center bg-gray-100">
//       <div className="relative w-full h-full flex overflow-hidden">
//         {/* Left Section */}
//         <motion.div
//           className="w-1/2 h-full bg-yellow-400 flex flex-col items-end justify-center"
//           animate={{ x: isOpen ? '-100%' : '0%' }}
//           transition={{ duration: 0.5, ease: 'easeInOut' }}
//         >
//           <div className="text-right mr-10">
//             <h1 className="text-6xl font-bold" style={{ color: '#222' }}>Hi!!  I'm</h1>
//             <p className="text-lg mt-4" style={{ color: 'white', opacity:'80%' }}>
//               I'm a Designer and Developer based in Bangalore, India.
//             </p>
//           </div>
//         </motion.div>

//         {/* Right Section */}
//         <motion.div
//           className="w-1/2 h-full bg-black flex flex-col items-start justify-center"
//           animate={{ x: isOpen ? '100%' : '0%' }}
//           transition={{ duration: 0.5, ease: 'easeInOut' }}
//         >
//           <div className="ml-10">
//             <h1 className="text-6xl font-bold" style={{ color: '#ffb400' }}>Shachi</h1>
//             <p className="text-lg mt-4" style={{ color: 'white', opacity:'80%' }}>
//               I strive to build immersive projects through
//               carefully crafted code.
//             </p>
//           </div>
//         </motion.div>

//         {/* Center Circle */}
//         {isCircleVisible && (
//           <motion.div
//             className="absolute top-[70%] left-[46.52%] w-24 h-24 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full cursor-pointer"
//             animate={{ rotate: isRotated ? 180 : 0 }}
//             transition={{ duration: 0.5, ease: 'easeInOut' }}
//             onClick={handleClick}
//           >
//             <div className="w-full h-full rounded-full overflow-hidden">
//               <div className="w-1/2 h-full bg-yellow-400 float-right"></div>
//             </div>
            
//           </motion.div>
//         )}
//       </div>
//     </div>
//   )
// }





// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { useNavigate } from "react-router-dom"

// // Simple hand icon SVG
// const HandIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
//     <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
//     <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
//     <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
//   </svg>
// )

// export default function Homepage() {
//   const [isRotated, setIsRotated] = useState(false)
//   const [isOpen, setIsOpen] = useState(false)
//   const [isCircleVisible, setIsCircleVisible] = useState(true)
//   const navigate = useNavigate()

//   const handleClick = () => {
//     setIsRotated(!isRotated)
//     setTimeout(() => {
//       setIsOpen(!isOpen)
//     }, 500) // Delay the opening animation
//   }

//   useEffect(() => {
//     if (isOpen) {
//       setTimeout(() => {
//         setIsCircleVisible(false)
//         navigate("/about")
//       }, 1000)
//     }
//   }, [isOpen, navigate])

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 overflow-hidden">
//       <div className="relative w-full h-screen flex flex-col md:flex-row">
//         {/* Left Section */}
//         <motion.div
//           className="w-full md:w-1/2 h-1/2 md:h-full bg-yellow-400 flex flex-col items-center md:items-end justify-center p-6 md:p-10"
//           animate={{ x: isOpen ? "-100%" : "0%" }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         >
//           <div className="text-center md:text-right">
//             <h1 className="text-4xl md:text-6xl font-bold" style={{ color: "#222" }}>
//               Hi!! I'm
//             </h1>
//             <p className="text-base md:text-lg mt-4" style={{ color: "white", opacity: "80%" }}>
//               I'm a Designer and Developer based in Bangalore, India.
//             </p>
//           </div>
//         </motion.div>

//         {/* Right Section */}
//         <motion.div
//           className="w-full md:w-1/2 h-1/2 md:h-full bg-black flex flex-col items-center md:items-start justify-center p-6 md:p-10"
//           animate={{ x: isOpen ? "100%" : "0%" }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         >
//           <div className="text-center md:text-left">
//             <h1 className="text-4xl md:text-6xl font-bold" style={{ color: "#ffb400" }}>
//               Shachi
//             </h1>
//             <p className="text-base md:text-lg mt-4" style={{ color: "white", opacity: "80%" }}>
//               I strive to build immersive projects through carefully crafted code.
//             </p>
//           </div>
//         </motion.div>

//         {/* Center Circle */}
//         <AnimatePresence>
//           {isCircleVisible && (
//             <motion.div
//               className="absolute left-1/2 top-1/2 w-20 h-20 md:w-24 md:h-24 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full cursor-pointer z-10"
//               animate={{ rotate: isRotated ? 180 : 0 }}
//               transition={{ duration: 0.5, ease: "easeInOut" }}
//               onClick={handleClick}
//               initial={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0 }}
//             >
//               <div className="w-full h-full rounded-full overflow-hidden">
//                 <div className="w-1/2 h-full bg-yellow-400 float-right"></div>
//               </div>

//               {/* Hand icon */}
//               <motion.div
//                 className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-gray-800"
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1, duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
//               >
//                 <HandIcon />
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }






import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from "react-router-dom"

const ArrowIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
)

export default function Homepage() {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsOpen(true)
    }, 1000)
  }

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        navigate("/about")
      }, 2000)
    }
  }, [isOpen, navigate])

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 overflow-hidden">
      <div className="relative w-full h-screen flex flex-col md:flex-row">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2 h-1/2 md:h-full bg-yellow-400 flex flex-col items-center md:items-end justify-center p-6 md:p-10"
          animate={{ x: isOpen ? "-100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-6xl font-bold" style={{ color: "#222" }}>
              Hi!! I'm
            </h1>
            <p className="text-base md:text-lg mt-4" style={{ color: "white", opacity: "80%" }}>
              I'm a Designer and Developer based in Bangalore, India.
            </p>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full md:w-1/2 h-1/2 md:h-full bg-black flex flex-col items-center md:items-start justify-center p-6 md:p-10"
          animate={{ x: isOpen ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold" style={{ color: "#ffb400" }}>
              Shachi
            </h1>
            <p className="text-base md:text-lg mt-4" style={{ color: "white", opacity: "80%" }}>
              I strive to build immersive projects through carefully crafted code.
            </p>
          </div>
        </motion.div>

        {/* Animated Arrow */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className="absolute left-1/2 bottom-16 -translate-x-1/2 cursor-pointer z-10"
              onClick={handleClick}
              initial={{ opacity: 1, y: 0 }}
              animate={{
                opacity: [1, 0.5, 1],
                y: [0, -10, 0],
                rotate: isAnimating ? [0, 0, 270] : 0,
                scale: isAnimating ? [1, 1, 0.5] : 1,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: isAnimating ? 2 : 1.5,
                repeat: isAnimating ? 0 : Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="bg-white rounded-full p-4 shadow-lg">
                <ArrowIcon className="w-16 h-16 text-yellow-400" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Spinner */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 360 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

