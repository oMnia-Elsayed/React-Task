

import React from 'react';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
// import axios from 'axios';

import Img from '../../images/online-application.jpg';   
import './application.scss';
// import { NavLink } from 'react-router-dom';
import { MyContext } from '../../App';

class ApplicationCard extends React.Component {

    
    render() {

     const {card} = this.props
     const id = card.id
        return (
            <MyContext.Consumer>
            { value => (
                <div className="col-lg-4">
                    <Card className="applicationCard">
                        <Card.Img className="applicationCard_img--top" src={Img}/>
                        <Card.Body>
                            <Card.Title className="application__text">{card.name}</Card.Title>
                            <Button className="application__text" onClick={e => value.deleteApp(id)}>Delete</Button>
                            {/* <NavLink className="application__text" to={`/api/apps/edit${card.id}`}>Edit</NavLink> */}
                            {/* <NavLink className="application__text" to={`/api/apps/view${card.id}`}>view</NavLink> */}
                        </Card.Body>
                    </Card>
                </div>

            )}
            </MyContext.Consumer>
           );
    }
}


export default ApplicationCard;