/* eslint-disable react/no-unknown-property */
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-gray-400 text-white p-6 rounded-lg flex justify-between items-center">
          <div>
            <a href="javascript:void(0)">
              <img
                src="https://www.cisex.org/sites/default/files/2023-02/Sofascore-01-1.png"
                width={75}
                height={50}
                alt="Float UI logo"
              />
            </a>
            <p>Footer content</p>
          </div>
          <button className="bg-gray-600 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-110">S'abonner</button>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between">
          <div>
            <p>
              Sofascore est un tableau de bord interactif conçu pour afficher les résultats en temps réel d'événements sportifs, financiers, et bien plus encore. Avec des fonctionnalités de personnalisation et d'analyse avancées, Sofascore vous permet de suivre vos événements préférés et d'accéder à des informations détaillées pour chaque club, incluant les statistiques des joueurs et les performances des équipes. Restez informé et prenez des décisions éclairées avec Sofascore.
            </p>
          </div>
          <div className="col-6 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold">Contactez-nous</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:18001213637" className="hover:text-gray-900">1800-121-3637</a>
              </li>
              <li>
                <a href="tel:+212605006993" className="hover:text-gray-900">+212 605006993</a>
              </li>
              <li>
                <a href="tel:+212612161736" className="hover:text-gray-900">+212 612161736</a>
              </li>
              <li>
                <a href="mailto:sofascore@email.com" className="hover:text-gray-900">sofascore@email.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-300 pt-4">
          <p className="text-center">© 2024 Sofascore. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
