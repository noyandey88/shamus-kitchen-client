import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Featured <span className="text-orange-500">Foods</span></h2>
                <p className="mt-4 text-gray-500">
                  Visit our site to get updated to our products and discounts.
                </p>
              </header>
              <Link to="/" className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-orange-500 border rounded hover:shadow focus:outline-none focus:ring">
                Explore
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2 lg:py-8">
            <ul className="grid grid-cols-2 gap-4">
              <li>
                <Link to="/" className="block group">
                  <img src="https://images.pexels.com/photos/2297961/pexels-photo-2297961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" className="object-cover w-full rounded aspect-square" />
                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      New Dish
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">$50</p>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/" className="block group">
                  <img src="https://images.pexels.com/photos/1346381/pexels-photo-1346381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="food" className="object-cover w-full rounded aspect-square" />
                  <div className="mt-3">
                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                      New Dish
                    </h3>
                    <p className="mt-1 text-sm text-gray-700">$40</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}