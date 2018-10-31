import React, { Component } from 'react';
import TopMenu from './top-menu/top-menu';
import PrimaryMenu from './primary-menu/primary-menu';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            a :  0
        }
        this.update = this.update.bind(this);
    }

    update(){
        this.setState({
            a : this.state.a + 1,
        })
    }

    render() {
        return (
            <div className="header">
                {this.state.a}
                <TopMenu hihi={this.update} haha={this.state.a}/>
                <PrimaryMenu />
            </div>
        );
    }
}

export default Header;
