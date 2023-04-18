import React from 'react';

import Menu from '../menu/Menu';
import Detalles from './detalles/Detalles';
import Servidores from './servidores/Servidores';
import Footer from '../footer/Footer';


class Servers extends React.Component {

	render() {

		return(

			<>

			<Menu />

			<main role="main" className="flex-shrink-0 mt-5">
		        
				<Detalles />
				<Servidores />	

	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default Servers;