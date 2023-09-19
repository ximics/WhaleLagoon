import {Image} from "@nextui-org/image";


export const Navbar = () => {


	return (
		<nav className="bg-blue-800 flex justify-center p-4">
			<div className="container flex items-center justify-between md:pr-28 ">
				<a href="mailto:contact@whalelagoonsmma.com" className="text-white text-lg font-semibold hidden md:block">
				contact@whalelagoonsmma.com
				</a>
				<Image
				className=""
				width={160}
				alt="Logo"
				src="/images/logo1.png"
				/>
				<button className="bg-blue-200 text-blue-500 hover:bg-blue-300 px-4 py-2 rounded-full text-lg font-semibold">
					<a href="mailto:contact@whalelagoonsmma.com">
					Contáctanos
					</a>
				</button>
			</div>
		</nav>


		  
		
		
	);
};