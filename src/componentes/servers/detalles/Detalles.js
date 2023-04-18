import React from 'react';

class Jumbotron extends React.Component {

  render() {

    return (

        <div className="jumbotron">
            <div className="container">
                <h1 className="display-3">Intro </h1>
                <p>
                    Exercitation sunt proident aliqua adipisicing sint exercitation do esse ullamco ipsum.
                    <br/>
                    Amet laborum nulla aliqua minim anim.
                </p>
                <p><a className="btn btn-primary btn-lg" href="https://twitch.tv/MeinTV" rel="noopener noreferrer" target="_blank" role="button">Visitar Web</a></p>
            </div>
        </div>

    )
    
  }

}

export default Jumbotron;