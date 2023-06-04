import { Link } from "react-router-dom";

export default function Ingredients() {
  return (
    <section className="container mx-auto mb-8 overflow-hidden bg-[url(https://images.pexels.com/photos/5645088/pexels-photo-5645088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-top bg-no-repeat">
      <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Our <span className="text-orange-500">Ingredients</span>
          </h2>
          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Handpicked fruits, vegetables, and herbs sourced from local farms to ensure the highest quality and flavor in your dishes. Tender cuts of beef, chicken, pork, and seafood that will elevate your menu and leave your customers craving for more.
          </p>
          <div className="mt-4 sm:mt-8">
            <Link to="/" className="inline-block rounded-full bg-orange-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-700 focus:outline-none focus:ring focus:ring-yellow-400">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}