import React, { Component } from 'react';
import './App.css';
import NavBarMain from './components/navbar';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Contact from './components/contact';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inEnglish: true
        }
    }

    render() {
        return (
            <div>
                <NavBarMain />
                <AboutMe />
            </div>
        );
    }
}
export default App;
    