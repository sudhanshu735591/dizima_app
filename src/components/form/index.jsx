import Footer from "../Footer";
import Header from "../header";
function FormData() {
  return (
    <div className="bg-gradient-to-r from-black to-purple-500">
      <Header />
      <div className="flex flex-wrap md:flex-nowrap mt-10 gap-10">
        {/* Left Section */}
        <div className="text-start flex flex-col gap-5 p-5 md:p-20 w-full md:w-1/2">
          <p className="text-2xl">TAKE THE SILK ROAD TO</p>
          <h1 className="text-4xl md:text-6xl text-[#04E4FF] text-shadow-glow font-semibold">
            Digitizing Your Business
             Growth
          </h1>
          <div className="flex flex-wrap md:flex-nowrap gap-5 mt-10">
            <div className="border-r-2 pr-4">Expert Team Members</div>
            <div className="border-r-2 pr-4">Results-Driven Approach</div>
            <div>Streamlined Execution</div>
          </div>
          <p className="text-2xl md:text-4xl underline mt-10 md:mt-20">
            Premium Digital Agency Recognized by
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="p-6 md:p-8 max-w-full md:max-w-lg mx-auto bg-white rounded-md shadow-lg">
            <h6 className="text-lg font-bold text-blue-900">
              REQUEST A FREE CONSULTATION
            </h6>
            <h4 className="mt-2 mb-6 text-xl md:text-2xl font-bold text-blue-800">
              Let’s Create Something AMAZING Together
            </h4>
            <form className="space-y-4">
              <div className="flex items-center border-b border-gray-300 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM6.75 21c0-3.727 3.023-6.75 6.75-6.75s6.75 3.023 6.75 6.75H6.75z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  className="ml-2 flex-1 outline-none text-black"
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2.25a7.5 7.5 0 017.5 7.5v3.75h-3.75a3.75 3.75 0 01-7.5 0H4.5V9.75a7.5 7.5 0 017.5-7.5zM8.25 21h7.5"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Company Name*"
                  required
                  className="ml-2 flex-1 outline-none text-black"
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V9m10.5-6.75l8.25 6m-16.5 0L12 2.25M12 2.25v16.5"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  className="ml-2 flex-1 outline-none text-black"
                />
              </div>
              <div className="flex items-center border-b border-gray-300 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 11.25H6a2.25 2.25 0 00-2.25 2.25v3.75A2.25 2.25 0 006 19.5h12a2.25 2.25 0 002.25-2.25v-3.75a2.25 2.25 0 00-2.25-2.25h-1.5m-7.5 0v-.75a3 3 0 116 0v.75m-6 0h6"
                  />
                </svg>
                <input
                  type="tel"
                  placeholder="Phone*"
                  required
                  className="ml-2 flex-1 outline-none text-black"
                />
              </div>
              <div className="flex items-start border-b border-gray-300 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 3.75h15.75M4.5 9.75h15.75M4.5 15.75h15.75"
                  />
                </svg>
                <textarea
                  placeholder="Your Message*"
                  required
                  className="ml-2 flex-1 outline-none resize-none text-black"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 font-bold rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default FormData;