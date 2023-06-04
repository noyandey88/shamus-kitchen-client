import { Link } from "react-router-dom";

export default function Review() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What our <span className="text-orange-500 ">Customers</span> say
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
          We value the trust our customers place in us, and their feedback helps us continuously improve and exceed expectations. From their genuine insights, you can gain valuable insights into how our solutions have positively impacted their lives and businesses.
        </p>
        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              “I opted for the chef's recommended dish, and I was blown away. The presentation was stunning, and the flavors were nothing short of extraordinary. Each bite was a harmonious blend of textures and tastes, leaving me craving more.”.
            </p>
            <div className="flex items-center mt-6">
              <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
              <div className="mx-4">
                <h1 className="font-semibold text-orange-500">Robbert</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">CTO, Robert Consultency</span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
            <p className="leading-loose text-gray-500 dark:text-gray-300">
              "If you're looking for a hassle-free way to enjoy restaurant-quality food in the comfort of your own home, I highly recommend giving [Food Delivery Service] a try. They have certainly earned a spot as my go-to choice for delicious and convenient dining."
            </p>
            <div className="flex items-center mt-6">
              <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
              <div className="mx-4">
                <h1 className="font-semibold text-orange-500">Mia Brown</h1>
                <span className="text-sm text-gray-500 dark:text-gray-300">Marketing Manager at Stech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}