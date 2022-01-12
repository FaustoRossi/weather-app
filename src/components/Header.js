function Header() {
	return (
		<ul className="flex ml-auto w-full font-bold">
			<li className="text-xs text-gray-800 ml-auto mr-6 border-b-2 border-green-400 cursor-pointer">
				Clima
			</li>
			<li className="text-xs text-gray-800 mr-6 alert-notice cursor-pointer border-b-2 hover:border-green-400">
				Alertas
			</li>
			<li className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400">
				Mapa
			</li>
			<li className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400">
				Satélite
			</li>
			<li className="text-xs text-gray-800 cursor-pointer border-b-2 hover:border-green-400">
				Noticias
			</li>
		</ul>
	);
}

export default Header;
