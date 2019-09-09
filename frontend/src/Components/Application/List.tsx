
import React from 'react';
import Application from '../../Model/application';
import ApplicationCard from './Card.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom';

// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

import { MyContext } from '../../App';

class ApplicationsList extends React.Component {

    render() {
        return(
            <MyContext.Consumer>
                { value => (
                    <div className="application" >
                        <Container>
                            <Row>
                                <input className="search" type="search" placeholder="Search" onChange={value.filter} ></input>
                            </Row>
                            <Row>
                                <NavLink className="btn application__text" to={"/add"}>Add New Applciation</NavLink>
                            </Row>
                            <Row>
                               { value.state.applications.map((appCard:Application) => <ApplicationCard  key = {appCard.id}  card = {appCard } />)}
                            </Row>
                        </Container>
                    </div>)}
            </MyContext.Consumer> 
        );
    }
}

export default ApplicationsList; 