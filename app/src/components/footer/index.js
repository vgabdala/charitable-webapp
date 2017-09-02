import React, { Component } from 'react';
import './Footer.css';
import { Container } from 'reactstrap'

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        	<Container className="text-center">
        		<ul className="nav justify-content-center">
						  <li className="nav-item">
						    <a className="nav-link disabled" href="#">Início</a>
						  </li>
						  <li className="nav-item">
						    <a className="nav-link disabled" href="#">Eventos</a>
						  </li>
						  <li className="nav-item">
						    <a className="nav-link active" href="#">Entidades</a>
						  </li>
						  <li className="nav-item">
						    <a className="nav-link disabled" href="#">Contato</a>
						  </li>
						</ul>
        	</Container>
        </footer>
    );
  }
}

export default Footer;
