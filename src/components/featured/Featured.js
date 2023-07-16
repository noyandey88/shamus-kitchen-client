import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <section>
      <div className="py-8 mx-auto sm:py-12">
        <header className="text-center">
          <motion.h2
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 70 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-gray-900 sm:text-3xl">
            Our Featured <span className="text-orange-500">Foods</span>
          </motion.h2>
          <motion.p
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto mt-4 text-gray-500">
            Savor the taste of our featured foods, where culinary artistry meets flavor perfection            </motion.p>
        </header>
        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <motion.li
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 20 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="block overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlzaHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" />
              <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Buldak Bokkeum Myeon
                </h3>
                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>
                  <span className="tracking-wider text-gray-900"> £10.00 USD </span>
                </p>
              </div>
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 30 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="block overflow-hidden group">
              <img src="https://plus.unsplash.com/premium_photo-1671559021681-28cecb3631a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" />
              <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Epicurean Enclave
                </h3>
                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>
                  <span className="tracking-wider text-gray-900"> £14.00 USD </span>
                </p>
              </div>
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 40 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="block overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" />
              <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Culinary Reserve
                </h3>
                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>
                  <span className="tracking-wider text-gray-900"> £11.00 USD </span>
                </p>
              </div>
            </Link>
          </motion.li>
          <motion.li
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="block overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="" className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]" />
              <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Gastronomia Eterna
                </h3>
                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>
                  <span className="tracking-wider text-gray-900"> £16.00 USD </span>
                </p>
              </div>
            </Link>
          </motion.li>
        </ul>
      </div>
    </section>
  )
}