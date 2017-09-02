import React, { Component } from 'react';
import Header from '../header'
import Footer from '../footer'
import './App.css'
import { 
	Container, 
	Card, 
	Button, 
	CardImg, 
	CardTitle, 
	CardText, 
	CardDeck,
 	CardSubtitle, 
 	CardBlock,
 	Form, 
 	Label,
 	Input,
 	Row, 
 	Col
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
      	<Header />
      		{/* To be moved to its component folder - Entidade */}
      		<Container>
      			<h1 className="pageTitle">Lista de Entidades</h1>
      			<div className="formSearch">
	      			<div class='container'>
							  <div class='content-wrapper'>
							    <div class='row'>
							      <div class='col-xs-12 col-sm-12 col-md-4 col-lg-4'>
							        <form class='navbar-form'>
							          <div class='input-group'>
							            <input class='form-control' type='text' name='search' placeholder='Location' />
							            <span class="input-group-btn">
							              <button type='submit' class='btn btn-default'>
							                <span class='glyphicon glyphicon-search'></span>
							              </button>
							            </span>
							          </div>
							        </form>
							      </div>
							    </div>
							  </div>
							</div>
			      </div>
						<CardDeck>
					      <Card>
					        <CardImg top width="100%" src="http://laresperanca.com/site/wp-content/uploads/1-clubinho.jpg" />
					        <CardBlock>
					          <CardTitle>Lar Esperança</CardTitle>
					          <CardSubtitle>Atender crianças e adolescentes em situação de vulnerabilidade social.</CardSubtitle>
					          <br />
					          <CardText>Promover a educação e o amor cristão para resgatar a auto-estima e a cidadania, acreditando que é possível ter um futuro melhor.</CardText>
					          <Button color="info">Ver Perfil</Button>
					        </CardBlock>
					      </Card>
				      <Card>
				        <CardImg top width="100%" src="https://www.amigosdobem.org/wp-content/uploads/2015/07/educ2.jpg" />
				        <CardBlock>
				          <CardTitle>ONG Amigos do Bem</CardTitle>
				          <CardSubtitle>Ajude-nos a Combater a Miséria</CardSubtitle>
				          <br />
				          <CardText>Um futuro promissor para mais de 10 mil crianças. 4 cidades do bem com completa infraestrutura.</CardText>
				          <Button color="info">Ver Perfil</Button>
				        </CardBlock>
				      </Card>
				      <Card>
				        <CardImg top width="100%" src="http://www.jb.com.br/media/fotos/2011/10/11/627w/visita-dos-doadores-da-actionaid-em-uma-comunidade-no-piaui-em-2010.jpg" />
				        <CardBlock>
				          <CardTitle>CADI Brasil</CardTitle>
				          <CardSubtitle>Apadrinhe uma criança</CardSubtitle>
				          <br />
				          <CardText>Acompanhe o desenvolvimento da criança, troque cartas, visite-a e um vínculo especial surgirá.</CardText>
				          <Button color="info">Ver Perfil</Button>
				        </CardBlock>
				      </Card>
				      <Card>
				        <CardImg top width="100%" src="http://www.mensageirodacaridade.org/images/image4.jpg" />
				        <CardBlock>
				          <CardTitle>Mensageiro da Caridade</CardTitle>
				          <CardSubtitle>Todos somos irmãos</CardSubtitle>
				          <br />
				          <CardText>Em mais de cinco décadas de história, o apoio da comunidade tem sido decisivo para a realização da missão institucional.</CardText>
				          <Button color="info">Ver Perfil</Button>
				        </CardBlock>
				      </Card>
				    </CardDeck>
					</Container>
      	<Footer />
      </div>
    );
  }
}

export default App;
