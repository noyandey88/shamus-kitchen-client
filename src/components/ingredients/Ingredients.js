import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Ingredients() {
  return (
    <motion.section
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1, type: "spring", stiffness: 60 }}
      viewport={{ once: true }}
      className="container mx-auto mb-8 overflow-hidden bg-[url(https://images.pexels.com/photos/5645088/pexels-photo-5645088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-top bg-no-repeat">
      <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <motion.h2
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Our <span className="text-orange-500">Ingredients</span>
          </motion.h2>
          <div className="flex justify-center">
            <motion.p
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 40 }}
              viewport={{ once: true }}
              className="text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Handpicked fruits, vegetables, and herbs sourced from local farms to ensure the highest quality and flavor in your dishes. Tender cuts of beef, chicken, pork, and seafood that will elevate your menu and leave your customers craving for more.
            </motion.p>
          </div>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 30 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-8">
            <Link to="/services" className="inline-block rounded-full bg-orange-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring focus:ring-yellow-400">
              Explore
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}