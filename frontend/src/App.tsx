

import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import ApplicationsList from './Components/Application/List';
import ApplicationEdit from './Components/Application/edit';
import ApplicationAdd from './Components/Application/add';
import ApplicationDetails from './Components/Application/details';

import axios from 'axios';
import Application from './Model/application';
import Version from './Model/version';

interface IContextProps {
  state: any;
  deleteApp: any;
  createApp: any;
  createVer: any;

  filter: any;
}
export const MyContext = React.createContext({} as IContextProps);

class App extends Component {
  
  state = {
    applications: [] 
  }

  // Get All Apps
  async componentDidMount() {
    axios.get("http://127.0.0.1:5000/api/apps")
    .then(res => {
      this.setState({
        applications: res.data
      })
    });
  }
 
  //Create An App 
  createApp = (app: Application) => {
    console.log(app)
    axios({
      method:'post',
      url: `http://127.0.0.1:5000/api/apps/${app.id}`,
      data: app
    })
    .then(res => {
     this.setState({
      applications: this.state.applications.concat(res.data)
    })
      console.log(this.state.applications)
    });
  }

  // Get App by Id
  getAppById = (id: string) =>{
    axios.get(`http://127.0.0.1:5000/api/apps/${id}`)
    .then(res => {
      return res.data
    })
  }

  // Delete An App
  deleteApp = (id: string) =>{
    axios.delete(`http://127.0.0.1:5000/api/apps/${id}`)
    .then(res => {
      this.setState({
        applications: res.data
      })
      return res.data
    })
  }

  // Create New Version
  createVer = (appId: string ,ver: Version) => {
    // console.log(ver.id)
    axios({
      method:'post',
      url: `/api/apps/${appId}/${ver.id}`,
      data: ver
    })
    .then(res => {
     this.setState({
      applications: this.state.applications.concat(res.data)
    })
      console.log(res)
    });
  }
    //search
    filter = (e: any) => {
      const value = e.target.value.toLowerCase();
      const filteredData = this.state.applications.filter( (m : Application)=> m.name.toLowerCase().includes(value) );
      // this.setState({applications: filteredData});
    }


  render() {

    let value = { 
      state: this.state,
      deleteApp: this.deleteApp,
      createApp: this.createApp,
      createVer: this.createVer,
      filter: this.filter,
    }
    return (
      <MyContext.Provider value = { value }>
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={ApplicationsList}/>
              <Route exact path="/api/apps/edit:id" component={ApplicationEdit}/> 
              <Route exact path="/api/apps/view:id" component={ApplicationDetails}/>
              <Route exact path="/add" component={ApplicationAdd}/>
            </Switch>
          </div>
      </BrowserRouter>
      </MyContext.Provider>
    );
  }
}

export default App;
