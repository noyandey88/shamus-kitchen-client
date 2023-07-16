import { motion } from "framer-motion"

export default function Faq() {
  return (
    <section className="container mx-auto mb-16">
      <div className="text-center mb-4">
        <motion.h2
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 70 }}
          viewport={{ once: true }}
          className="text-3xl font-bold">Frequently asked <span className="text-orange-500">questions</span></motion.h2>
      </div>
      <div className="space-y-4">
        {/* 1 */}
        <motion.details
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 60 }}
          viewport={{ once: true }}
          className="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">
              What is a cloud kitchen?
            </h2>
            <svg className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            A cloud kitchen, also known as a virtual kitchen or ghost kitchen, is a type of food service establishment that operates solely for online food delivery orders. Unlike traditional restaurants, cloud kitchens don't have a physical dine-in space and focus primarily on preparing and delivering food to customers' doorsteps. They are designed to optimize efficiency, reduce overhead costs, and cater to the growing demand for food delivery services.
          </p>
        </motion.details>
        {/* 2 */}
        <motion.details
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          viewport={{ once: true }}
          className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">
              How does the ordering process work?
            </h2>
            <svg className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Ordering from our cloud kitchen is simple and convenient. Just visit our website or mobile app, browse through our menu of delicious dishes, and select the items you'd like to order. Add them to your cart, provide your delivery address, and proceed to checkout. You can make secure online payments through various options available. Once your order is confirmed, our team will start preparing your food with care and deliver it to you at the designated time. Enjoy a hassle-free ordering experience from the comfort of your home or office.
          </p>
        </motion.details>
        {/* 3 */}
        <motion.details
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 40 }}
          viewport={{ once: true }}
          className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            <h2 className="font-medium">
              Is the food from your cloud kitchen safe and hygienic?
            </h2>
            <svg className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 px-4 leading-relaxed text-gray-700">
            Ensuring the safety and hygiene of our food is our top priority. We follow strict standards and protocols when it comes to food handling, preparation, and delivery. Our cloud kitchen is equipped with state-of-the-art facilities and adheres to food safety regulations. Our skilled chefs and kitchen staff maintain the highest levels of cleanliness and hygiene practices throughout the cooking process. Additionally, we prioritize using fresh, quality ingredients to deliver delicious and safe food to our valued customers. Your health and satisfaction are of utmost importance to us.
          </p>
        </motion.details>
      </div>
    </section>
  )
}