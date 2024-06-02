/* eslint-disable react/no-unknown-property */
export default function Footer() {
  const footerNavs = [
    {
      label: "Resources",
      items: [
        {
          href: "javascript:void()",
          name: "contact",
        },
        {
          href: "javascript:void()",
          name: "Support",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "javascript:void()",
          name: "Terms",
        },
        {
          href: "javascript:void()",
          name: "License",
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-800 text-white mt-auto py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
            <h3 className="text-white text-2xl font-bold">
              Get our beautiful newsletter straight to your inbox.
            </h3>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-x-3 md:justify-end"
            >
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 text-gray-300" key={idx}>
              <h4 className="text-gray-200 font-semibold ">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="duration-150 hover:text-gray-400"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10 py-1 border-t border-gray-700 items-center justify-between sm:flex">
          <p className="text-gray-300">
            © 2022 Float UI Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-x-6 text-gray-400 mt-6 sm:mt-0">
            <a href="javascript:void()">
              <svg
                className="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="currentColor"
                    d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="javascript:void()">
              <svg
                className="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g clipPath="url(#clip0_17_80)">
                  <path
                    fill="currentColor"
                    d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_80">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="javascript:void()">
              <svg
                className="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g fill="currentColor" clipPath="url(#clip0_910_44)">
                  <path
                    fillRule="evenodd"
                    d="M24 1A24.086 24.086 0 008.454 6.693 24.127 24.127 0 001.001 22.5c-.549 8.267 2.833 16.134 9.06 21.116.632.462.994.997 1.149 1.728.187.89.308 1.79.462 2.686.102.563.271 1.115.433 1.667.267.935.605 1.847 1.254 2.61.785.927 1.855 1.376 3.01 1.619a10.147 10.147 0 003.4.237c1.605-.162 3.146-.612 4.69-.95.957-.211 1.89-.508 2.856-.683 1.654-.306 3.319-.522 4.99-.741a22.724 22.724 0 006.175-1.41c2.746-1.118 5.192-2.723 7.35-4.761a24.098 24.098 0 007.348-18.39c-.155-8.932-4.185-16.717-11.658-21.861A23.974 23.974 0 0024 1zm-3.315 11.648c.09-.001.185-.002.276-.003h.164c.09.001.185.002.276.003a14.686 14.686 0 011.707.173 7.196 7.196 0 013.538 1.564c.192.167.377.348.569.523 1.1 1.017 1.7 2.285 1.96 3.735.095.514.15 1.035.228 1.552.07.478.122.959.181 1.439.071.576.118 1.155.168 1.732.027.306.062.612.07.92a6.146 6.146 0 01-.219 1.563 7.258 7.258 0 01-1.25 2.441 4.214 4.214 0 01-2.957 1.795c-.436.057-.878.064-1.318.086-.646.032-1.291.03-1.937.05-.418.012-.838.041-1.256.009a6.465 6.465 0 01-1.684-.268 4.333 4.333 0 01-1.761-.944 7.32 7.32 0 01-1.849-2.228 4.56 4.56 0 01-.68-2.02c-.05-.594-.085-1.191-.124-1.787-.041-.626-.1-1.25-.124-1.876a27.05 27.05 0 01-.095-2.56c.015-.682.057-1.364.086-2.046.023-.537.041-1.074.065-1.61.003-.056.01-.11.017-.165a5.537 5.537 0 01.031-.225c.01-.062.022-.122.038-.18a4.64 4.64 0 01.132-.487c.042-.122.09-.242.144-.36a1.91 1.91 0 01.093-.186c.113-.19.237-.374.369-.552a4.282 4.282 0 01.593-.689 4.253 4.253 0 012.025-1.09 7.85 7.85 0 011.787-.247zm-4.315 8.08a2.882 2.882 0 105.765 0 2.882 2.882 0 00-5.765 0zm12.53 0a2.882 2.882 0 105.765 0 2.882 2.882 0 00-5.765 0z"
                    clipRule="evenodd"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_910_44">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="javascript:void()">
              <svg
                className="w-6 h-6 hover:text-gray-500 duration-150"
                fill="none"
                viewBox="0 0 48 48"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="currentColor"
                    d="M24 0C10.744 0 0 10.744 0 24c0 12.005 8.769 21.938 20.25 23.742v-16.8h-6.098V24H20.25v-5.275c0-6.021 3.583-9.347 9.074-9.347 2.627 0 5.379.466 5.379.466v5.92h-3.03c-2.986 0-3.917 1.85-3.917 3.753V24h6.673L28.375 30.937H25.77v16.8C37.231 45.938 48 36.005 48 24 48 10.744 37.256 0 24 0z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h48v48H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
