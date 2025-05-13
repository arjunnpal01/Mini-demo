export default function Lservice() {
  return (
    <div className="bg-[#f8f1ed] py-12 px-4 relative z-[9999]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Left: Sale */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md  h-[500px] relative ">
          <img
            src="/g6.jpg"
            alt="Pink Dress"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-30 flex flex-col items-center justify-center text-black p-6">
            <h2 className="text-lg uppercase">In-Store and Online</h2>
            <p className="text-5xl font-bold">30% Off</p>
            <p className="text-sm mt-2">Save extra for a limited time</p>
            <button className="mt-4 bg-white text-black px-4 py-2 text-sm rounded">
              Shop Our Sale Collection
            </button>
            <p className="text-xs mt-1">*Runs until 11:59pm PST</p>
          </div>
        </div>

        {/* Right: Free Tote */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md  h-[500px] relative">
          <img
            src="/g7.jpg"
            alt="Free Tote"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  bg-opacity-30 flex flex-col items-center justify-center text-black p-6  ">
            <h2 className="text-xs uppercase">For a Limited Time</h2>
            <p className="text-4xl font-bold">Free Tote</p>
            <p className="text-sm mt-2">With every purchase over $99</p>
            <p className="text-sm mt-1">ALOHA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
