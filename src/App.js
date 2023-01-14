import React, { Component } from 'react';
import Cookies from 'js-cookie';

import './App.css';
import NavBarMain from './components/navbar';
import Home from './components/home';
import AboutMe from './components/aboutme';
import Contact from './components/contact';

class App extends Component {
    constructor(props) {
        super(props);
        /*
            0 = home
            1 = about me
            2 = contact
            3 = portfolio
        */
        this.state = {
            inEnglish: true,
            page: 0
        }
        this.changePage = this.changePage.bind(this);
        this.changeLanguage = this.changeLanguage.bind(this);
    }
    
    changePage(pageNumber) {
        this.setState({
            page: pageNumber
        });
    }

    changeLanguage(booleanVar) {
        Cookies.remove('inEng');
        this.setState({
            inEnglish: booleanVar
        });
        if (booleanVar) {
            Cookies.set('inEng', 'eng');
        }
        else {
            Cookies.set('inEng', 'pt');
        }
    }

    componentDidMount() {
        if (Cookies.get('inEng') !== undefined) {
            if (Cookies.get('inEng') === 'eng') {
                this.setState({
                    inEnglish: true
                });
            }
            else {
                this.setState({
                    inEnglish: false
                });
            }
        }
    }

    render() {
        let showComponent;
        switch(this.state.page) {
            case 0:
                showComponent = <Home onClick={() => this.changePage(2)} inEnglish={this.state.inEnglish} />
                break;
            case 1:
                showComponent = <AboutMe onClick={() => this.changePage(2)} inEnglish={this.state.inEnglish} />
                break;
            case 2:
                showComponent = <Contact inEnglish={this.state.inEnglish} />
                break;
            case 3:
                //showComponent = <Portfolio inEnglish={this.state.inEnglish} />
                break;
            default:
                showComponent = <Home inEnglish={this.state.inEnglish} />
                break;
        }

        return (
            <div>
                <NavBarMain inEnglish={this.state.inEnglish} pageFunc={this.changePage} langFunc={this.changeLanguage} />
                {showComponent}
            </div>
        );
    }
}
export default App;
    