import React, { Component } from 'react';
import './Header.css';
import { 
	Row, 
	Col, 
	ButtonGroup, 
	Button
} from 'reactstrap';

class Header extends Component {
  render() {
    return (
        <div className="App-header container-fluid">
        		<Row>
        			<Col>
        				<h4 className="App-name">Nome da Webapp</h4>
        			</Col>
        			<Col className="text-right">
        				<ButtonGroup>
        					<Button color="info">Login</Button>
        					<Button color="light">Cadastre-se</Button>
        				</ButtonGroup>
        			</Col>
        		</Row>
        </div>
    );
  }
}

export default Header;
