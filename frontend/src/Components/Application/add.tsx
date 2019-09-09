import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MyContext } from '../../App';
import { NavLink } from 'react-router-dom';

import Application from '../../Model/application';
import Version from '../../Model/version';

class ApplicationAdd extends React.Component {

    newApp: Application = new Application();
    appVer: {id: string , file: string} = {id:"" , file:""};
    state = {
        id: "",
        name: "",
        verId: "",
        verFile: ""
    }

    handleIDChange = (e:any) => {
        this.setState({id: e.target.value});
        this.newApp.id = this.state.id;
    }
    handleNameChange = (e:any) => {
        this.setState({name: e.target.value});
        this.newApp.name = this.state.name;
    }

    handleVerIDChange = (e:any) => {
        this.setState({ verId: e.target.value});
        this.appVer.id = this.state.verId;
    }

    handleVerNameChange = (e:any) => {
        this.setState({verFile: e.target.value});
        this.appVer.file = this.state.verFile;
    }    
    
    render() {
        // console.log( ) 
        // console.log(this.newApp) 
        return(
            <MyContext.Consumer>
            { value => (
                <>
                <Form>
                    <Form.Group>
                        <Form.Label>Applciation Id</Form.Label>
                        <Form.Control type="text" placeholder="Enter Application Id" value={this.state.id} onChange={this.handleIDChange} ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Application Name" value={this.state.name} onChange={this.handleNameChange} ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Version Id</Form.Label>
                        <Form.Control type="text" placeholder="Enter Version Id" value={this.state.verId}  onChange={this.handleVerIDChange} ></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Version File</Form.Label>
                        <Form.Control type="text" placeholder="Enter Version Name" value={this.state.verFile} onChange={this.handleVerNameChange} ></Form.Control>
                    </Form.Group>

                        {/* {(q:[]) => this.newApp.versions[this.newApp.versions.length] = this.appVer} */}
                    <Button>
                        <NavLink onClick={e => value.createVer(this.state.id , this.appVer)} to="/"> Add </NavLink>
                    </Button>
                </Form>
                </>
             ) }
            </MyContext.Consumer>
        )
    }

}

export default ApplicationAdd;