import { motion } from "framer-motion";

const DownloadApp = () => {
  return (
    <div className="py-10 mx-auto lg:py-10">
      <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
          <div className="max-w-xl mb-6">
            <motion.h2
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 70 }}
              viewport={{ once: true }}
              className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6">
              Shamus's Kitchen is also available in <span className="font-bold text-orange-500">Mobile App</span>
            </motion.h2>
            <motion.p
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 65 }}
              viewport={{ once: true }}
              className="text-gray-700 text-base md:text-lg">Download Shamu's Kitchen App from Google play store or Apple app store to get services easily.</motion.p>
          </div>
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 60 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3">
            <a href="https://www.apple.com/app-store/" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/app-store.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
            <a href="https://play.google.com/store/apps" className="w-32 transition duration-300 hover:shadow-lg">
              <img src="https://kitwind.io/assets/kometa/google-play.png" className="object-cover object-top w-full h-auto mx-auto" alt="" />
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 70 }}
          viewport={{ once: true }}
          className="flex items-center justify-center lg:w-1/2">
          <div className="w-full">
            <img className="object-cover w-full h-full shadow-lg rounded-sm" src="https://i.ibb.co/0ZqKBPL/abillion-b-MTl6u-FMONg-unsplash.jpg" alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadApp;