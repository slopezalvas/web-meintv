import React from 'react';

class Detalles extends React.Component {

  render() {

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Intro</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn btn-secondary" href="#" rel="noopener noreferrer" role="button">Leer más &raquo;</a></p>
                </div>
                <div className="col-md-6">
                    <h2>Join Team</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn btn-secondary" href="#" rel="noopener noreferrer" role="button">Leer más &raquo;</a></p>
                </div>
               
            </div>

        </div>

    )
    
  }

}

export default Detalles;