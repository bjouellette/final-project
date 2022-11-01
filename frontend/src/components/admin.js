import logo from '../connectLogo.png';
import '../App.css';
import { Navbar, Container } from 'react-bootstrap';
import Table from './table';
import React from 'react';


export default function Admin() {
  
    return (
    <div className="App m-3">
      <main style={{ padding: "1rem 0" }}>
      <Navbar bg="dark" fixed="top">
        <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt="Connect Logo"
       
            />
        </Navbar.Brand>
         
        </Container>
        </Navbar>
        <br></br>
        <Table/>

      </main>
    </div>
    );
  }

