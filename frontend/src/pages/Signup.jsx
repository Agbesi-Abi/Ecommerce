import React from 'react';
// import { useAuth } from '../hooks/useAuth'; 
// import { useNavigate } from 'react-router-dom';



const Signup = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative">
        <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute -left-20 -top-20">
          <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.6) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  strokeWidth="1"
                  stroke="none"
                  fill="black"
                />
              </pattern>
            </defs>
            <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#a)" />
          </svg>
        </div>
        <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute -right-20 -bottom-20">
          <svg id="patternId" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="b"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.5) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  strokeWidth="1"
                  stroke="none"
                  fill="black"
                />
              </pattern>
            </defs>
            <rect width="800%" height="800%" transform="translate(0,0)" fill="url(#b)" />
          </svg>
        </div>

        <div className="relative flex flex-col w-full sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
          <div className="flex-auto p-2 lg:p-6">
            <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <a href="/" className="flex cursor-pointer items-center gap-2 text-primary no-underline hover:text-pink-500">
                <span className="uppercase flex-shrink-0 text-3xl font-black tracking-tight opacity-100">
                  Forever
                </span>
              </a>
            </div>

            <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">Create your account</h4>

            <form className="mb-4">
              <div className="mb-4">
                <label htmlFor="name" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-2 inline-block text-xs font-medium uppercase text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  className="block w-full cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                  id="email"
                  name="email-username"
                  placeholder="example@gmai.com"
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700" htmlFor="password">
                    Password
                  </label>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="password"
                    id="password"
                    className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    name="password"
                    placeholder="············"
                  />
                </div>
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label className="mb-2 inline-block text-xs font-medium uppercase text-gray-700" htmlFor="confirm-password">
                    Confirm Password
                  </label>
                </div>
                <div className="relative flex w-full flex-wrap items-stretch">
                  <input
                    type="password"
                    id="confirm-password"
                    className="relative block flex-auto cursor-text appearance-none rounded-md border border-gray-400 bg--100 py-2 px-3 text-sm outline-none focus:border-indigo-500 focus:bg-white focus:text-gray-600 focus:shadow"
                    name="confirm-password"
                    placeholder="············"
                  />
                </div>
              </div>

              <div className="mb-4">
                <button
                  className="grid w-full cursor-pointer select-none rounded-md border bg-black py-2 px-5 text-center align-middle text-sm text-white shadow focus:text-white focus:shadow-none"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </form>

            <p className="mb-4 text-center text-sm">
              Already have an account?
              <a href="login" className="cursor-pointer text-primary no-underline hover:text-pink-500">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;