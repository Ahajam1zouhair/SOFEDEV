/* eslint-disable react/no-unknown-property */
export default function Footer() {
  const footerNavs = [
    {
      label: "Ressources",
      items: [
        {
          href: "javascript:void()",
          name: "Contact",
        },
        {
          href: "javascript:void()",
          name: "Support",
        },
      ],
    },
    {
      label: "À propos",
      items: [
        {
          href: "javascript:void()",
          name: "Conditions",
        },
        {
          href: "javascript:void()",
          name: "Licence",
        },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-auto py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
          <a href="javascript:void(0)">
              <img
                src="https://www.cisex.org/sites/default/files/2023-02/Sofascore-01-1.png"
                width={75}
                height={50}
                alt="Float UI logo"
              />
            </a>
            <h3 className="text-white text-2xl font-bold mb-4">
footer content            </h3>
            <p className="text-gray-300">
              sofascore est un tableau de bord interactif conçu pour afficher les résultats en temps réel d'événements sportifs, financiers, et bien plus encore. Avec des fonctionnalités de personnalisation et d'analyse avancées, sofascore vous permet de suivre vos événements préférés et d'accéder à des informations détaillées pour chaque club, incluant les statistiques des joueurs et les performances des équipes. Restez informé et prenez des décisions éclairées avec sofascore.
            </p>
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
                  placeholder="Entrez votre email"
                  className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                S'abonner
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 text-gray-300" key={idx}>
              <h4 className="text-gray-200 font-semibold">{item.label}</h4>
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
            © 2024 sofascore. Tous droits réservés.
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
                    d="M24 1A24.086 24.086 0 008.454 6.693 24.127 24.127 0 001.001 22.5c-.549 8.267 2.833 16.134 9.06 21.116.632.462.994.997 1.149 1.728.187.89.308 1.79.462 2.686.102.563.271 1.115.433 1.667.267.935.605 1.847 1.407 2.541.929.79 2.052.844 3.193.573a2.25 2.25 0 00.516-.189c1.292-.57 2.527-1.277 3.774-1.965 1.185-.655 2.38-1.302 3.642-1.739 1.355-.472 2.722-.435 4.083-.05 1.31.373 2.58.915 3.861 1.413.907.344 1.794.797 2.764.922.646.084 1.278.032 1.869-.271a3.376 3.376 0 001.672-1.956c.225-.725.246-1.465.273-2.209.04-.966.222-1.913.541-2.832.162-.474.436-.9.84-1.209 5.142-3.934 8.27-9.11 9.204-15.536 1.918-12.812-4.893-24.93-17.59-28.33C28.785 1.48 26.392 1 24 1zm0 3a21.087 21.087 0 0114.759 6.098A21.134 21.134 0 0145 24c0 5.97-2.558 11.372-7.007 15.215-.988.882-1.411 1.946-1.656 3.233-.193.978-.264 1.973-.35 2.964-.032.388-.043.78-.112 1.166-.08.426-.214.616-.594.58-.485-.045-.919-.275-1.348-.473-1.487-.661-2.96-1.358-4.507-1.848a12.566 12.566 0 00-6.919-.314c-1.605.411-3.122 1.145-4.597 1.846-.45.21-.894.43-1.364.62-.5.204-.87.028-1.122-.367-.333-.52-.434-1.115-.544-1.705-.235-1.221-.465-2.447-.673-3.674-.183-1.086-.716-2.02-1.605-2.668C7.516 33.074 3.857 25.852 4.362 18.16 4.805 11.15 9.573 5.444 16.35 3.327A21.077 21.077 0 0124 4z"
                    clipRule="evenodd"
                  />
                  <path d="M34 15a3 3 0 100 6 3 3 0 000-6z" />
                </g>
                <defs>
                  <clipPath id="clip0_910_44">
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