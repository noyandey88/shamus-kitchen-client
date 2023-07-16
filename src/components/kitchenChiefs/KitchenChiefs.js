import { motion } from "framer-motion"

export default function KitchenChiefs() {
  return (
    <div className="py-16 mx-auto lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <motion.h2
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 70 }}
          viewport={{ once: true }}
          className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto">
          The precious <span className="text-orange-500">chiefs</span> of our kitchen
        </motion.h2>
        <motion.p
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          viewport={{ once: true }}
          className="text-base text-gray-700 md:text-lg">
          Chiefs are the precious assets of a kitchen. Their creativeness of making unique foods are makes our customers happy and satisfied.
        </motion.p>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
        <motion.img
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 30 }}
          viewport={{ once: true }}
          className="object-cover w-full aspect-square rounded shadow-lg"
          src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <motion.img
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 40 }}
          viewport={{ once: true }}
          className="object-cover w-full aspect-square rounded shadow-lg"
          src="https://images.pexels.com/photos/4057748/pexels-photo-4057748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <motion.img
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
          className="object-cover object-top w-full aspect-square rounded shadow-lg"
          src="https://images.pexels.com/photos/5907911/pexels-photo-5907911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <motion.img
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          viewport={{ once: true }}
          className="object-cover w-full aspect-square rounded shadow-lg"
          src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  )
}