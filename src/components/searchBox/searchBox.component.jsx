import React, { Component } from 'react';
import './searchBox.styles.css'

class SearchBox extends Component {
    render() {
        return (
            <input className={this.props.className} type='search' placeholder={this.props.placeHolder} onChange={this.props.changeSearchHandler} />
        );
    }
}

export default SearchBox;