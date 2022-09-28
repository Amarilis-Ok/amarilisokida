import React, { Component } from 'react';
import './App.css';
import NavBarMain from './components/navbar';

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
            </div>
        );
    }
}
export default App;
    