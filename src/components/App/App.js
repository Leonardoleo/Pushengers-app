import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        h1 > ravenous < /h1>
        div className = "SearchBar" >
        <
        div className = "SearchBar-sort-options" >
        <
        ul >
        .renderSortByOptions() <
        /ul> < /
        div > <
        div className = "SearchBar-fields" >
        <
        input placeholder = "Search Businesses" / >
        <
        input placeholder = "Where?" / >
        <
        /div> <
        div className = "SearchBar-submit" >
        <
        a > Let 's Go</a> < /
        div > <
        /div>

        <
        div className = "BusinessList" >
        <
        Business > < /Business> <
        Business > < /Business> <
        Business > < /Business> <
        Business > < /Business> <
        Business > < /Business> <
        Business > < /Business> < /
        div >
        <
        /div> 
    );
}

export class App extends
Component {

};