import React, { Component } from "react";
import {Button} from "react-bootstrap";
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <main>
        <div className="container ">
          <div className="row mb-5 pt-4">
          </div>
          <div className="row mb-4 ml-5 text-center">
            <div className="col-md mb-4">
              <div className="card" style={{width: '18rem'}}>
              <img src="https://cdn.pixabay.com/photo/2017/08/18/00/22/address-book-2653370_960_720.png" className="card-img-top" alt="Class Base" width="250px" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Function Base</h5>
                  <Button> <Link to="/function">Chose</Link></Button>
                </div>
              </div>
            </div>

            <div className="col-md mb-4">
              <div className="card" style={{width: '18rem'}}>
                <img src="https://cdn.pixabay.com/photo/2017/08/18/00/22/address-book-2653370_960_720.png" className="card-img-top" alt="Function Base" width="250px" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Class Base</h5>
                  <Button Link to="/classbase">Chose</Button> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default Home;