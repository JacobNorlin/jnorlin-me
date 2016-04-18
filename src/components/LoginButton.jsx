"use strict"

import React from 'react';
import {Row, Col, Glyphicon, Grid, PageHeader, Navbar, NavItem, Nav, Button} from 'react-bootstrap';
import $ from 'jquery';

export default class LoginButton extends React.Component {
	
	constructor(props){
		super(props);
	}

	auth(){

	}

	render(){
		return <Button href={"http://localhost:3000/login"}>Login</Button>
	}

}