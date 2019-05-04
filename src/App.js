import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import Title from './components/title/Title';
import SearchForm from './components/search-form/SearchForm';
import NewsList from './components/news-list/NewsList';


const BASE_PATH = 'https://newsapi.org/v2';
const ALL_NEWS = '/everything?';
const TOP_NEWS = '/top-headlines?';
const QUERY = 'q=';
const COUNTRY = 'country=';
const CATEGORY = 'category=';
const KEY = '47387a80918944f6baaa6e32fc95233d';


class App extends Component {
    state = {
        searchQuery: '',
        news: [],
        country: 'us',
        category: 'general'
    };

    componentDidMount() {
        const {searchQuery, country} = this.state;
        this.fetchData(searchQuery, country, true);
    }

    fetchData = async (searchQuery, topNews) => {
        let news;
        let countryURL = '';
        let categoryURL = '';
        if (topNews) {
            news = TOP_NEWS;
            const {country, category} = this.state;
            countryURL = `&${COUNTRY}${country}`;
            categoryURL = `&${CATEGORY}${category}`;
        } else {
            news = ALL_NEWS
        }

        let url = `${BASE_PATH}${news}${QUERY}${searchQuery}${countryURL}${categoryURL}`;
        console.log(url);

        let res = await fetch(url, {
            headers: {
                Authorization: KEY
            }
        });
        let resJson = await res.json();

        this.setState({
            news: resJson.articles
        })
    };

    handleInputChange = ({target: {value}}) => {
        this.setState({
            searchQuery: value
        })
    };

    handleSelectChange = ({target: {value}}) => {
        this.setState({
            category: value
        })
    };

    handleBtnClick = (e) => {
        e.preventDefault();
        const {searchQuery} = this.state;
        let topNews = false;
        if (searchQuery === '') {
            topNews = true
        }

        this.fetchData(searchQuery, topNews);
    };


    render() {
        const {searchQuery, news} = this.state;
        return (
            <div className="wrapper">
                <Title header="News"/>
                <SearchForm value={searchQuery}
                      handleInputChange={this.handleInputChange}
                      handleBtnClick={this.handleBtnClick}
                />
                <NewsList news={news}/>
            </div>
        )
    }
}


export default App;
