// import { motion } from 'framer-motion';

// function ProfileImage() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.8, delay: 0.5 }}
//       className="relative"
//     >
//       <div className="relative w-80 h-80 mx-auto">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="absolute inset-0 rounded-full border-2 border-primary/30"
//         />

//         <div className="absolute inset-4 rounded-full overflow-hidden glass-card group">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             className="w-full h-full relative"
//           >
//             <div className="w-full h-full bg-gradient-to-br from-primary/20 via-navy-light to-accent/20 rounded-full flex items-center justify-center relative">
//               <div className="text-center z-10">
//                 <motion.div
//                   animate={{
//                     boxShadow: [
//                       "0 0 20px rgba(100, 255, 218, 0.3)",
//                       "0 0 40px rgba(100, 255, 218, 0.5)",
//                       "0 0 20px rgba(100, 255, 218, 0.3)"
//                     ]
//                   }}
//                   transition={{ duration: 2, repeat: Infinity }}
//                   className="w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-primary/40"
//                 >
//                   <span className="text-6xl text-primary font-bold">S</span>
//                 </motion.div>
//                 <motion.p
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1 }}
//                   className="text-primary font-signature text-3xl mb-2"
//                 >
//                   Sadia Rahman
//                 </motion.p>
//                 <motion.p
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 1.2 }}
//                   className="text-secondary text-sm font-medium"
//                 >
//                   Frontend Developer
//                 </motion.p>
//               </div>

//               <div className="absolute inset-0 opacity-10">
//                 <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full"></div>
//               </div>
//             </div>

//             <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-full"></div>
//           </motion.div>
//         </div>

//         <motion.div
//           animate={{ y: [-10, 10, -10] }}
//           transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full blur-sm"
//         />
//         <motion.div
//           animate={{ y: [10, -10, 10] }}
//           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full blur-sm"
//         />

//         <motion.div
//           animate={{ rotate: [0, 360] }}
//           transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//           className="absolute top-8 right-8 w-4 h-4 border border-primary/30 rounded-full"
//         />
//         <motion.div
//           animate={{ rotate: [360, 0] }}
//           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
//           className="absolute bottom-8 left-8 w-3 h-3 border border-accent/30 rounded-full"
//         />
//       </div>
//     </motion.div>
//   )
// }

// export default ProfileImage

import { motion } from "framer-motion";

function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative"
    >
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
        {/* Animated rotating rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-primary/30"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute inset-1 rounded-full border border-primary/20"
        />

        {/* Profile Image Container */}
        <div className="absolute inset-2 sm:inset-3 rounded-full overflow-hidden glass-card group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full relative"
          >
            {/* Your Actual Photo */}
            <img
              src="/sadia rahman.jpeg"
              alt="Sadia Rahman"
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="text-primary font-semibold text-sm bg-navy/80 px-3 py-1 rounded-full backdrop-blur-sm"
              >
                Sadia Rahman
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-accent/20 rounded-full blur-sm"
        />

        {/* Decorative dots */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 w-3 h-3 sm:w-4 sm:h-4 border border-primary/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 w-2 h-2 sm:w-3 sm:h-3 border border-accent/30 rounded-full"
        />

        {/* Status badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, type: "spring" }}
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary/90 backdrop-blur-sm text-navy px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
        >
          Available for work
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ProfileImage;
