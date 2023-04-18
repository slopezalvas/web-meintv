import React from 'react';

import Menu from '../menu/Menu';

import Footer from '../footer/Footer';


class Donaciones extends React.Component {

	render() {

		return(

			<>

			<Menu />

			<main role="main" className="flex-shrink-0 mt-5">

				<section className="text-center">
				    <div class="container">
				      <h1 className="jumbotron-heading">Donaciones </h1>
				      <p className="lead text-muted">
				      	Gracias por contribuir!
				      </p>				      
				    </div>
				</section>

		        <div className="album py-5 bg-light">
				    <div className="container">

   
				    </div>
				</div>

	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default Donaciones;