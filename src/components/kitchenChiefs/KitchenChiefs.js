export default function KitchenChiefs() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-3xl md:mx-auto">
          The precious <span className="text-orange-500">chiefs</span> of our kitchen
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Chiefs are the precious assets of a kitchen. Their creativeness of making unique foods are makes our customers happy and satisfied.
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 row-gap-5 mb-8 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto">
        <img
          className="object-cover w-full aspect-square rounded shadow-lg"
          src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="object-cover w-full aspect-square rounded shadow-lg"
          src="https://images.pexels.com/photos/4057748/pexels-photo-4057748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="object-cover object-top w-full aspect-square rounded shadow-lg"
          src="https://images.pexels.com/photos/5907911/pexels-photo-5907911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="object-cover w-full aspect-square rounded shadow-lg"
          src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </div>
  )
}