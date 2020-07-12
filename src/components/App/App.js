import React from 'react';
import './App.css';
import BusinessList from '.components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';


const business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

const businesses = [business, business, business, business, business, business];
class App extends React.Component {
    render() {

        const searchYelp() = { term, location, sortBy }
        return ( <
            div className = "App" >
            <
            h1 > Pushengers < /h1> <
            SearchBar / >
            <
            BusinessList businesses = { businesses }
            /> < /
            div >

            console.log("Searching Yelp with Pizza", +Brooklyn, +"best_match");
        );
    }
}

export default App;