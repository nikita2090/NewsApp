import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import Title from './components/title/Title';
import SearchForm from './components/search-form/SearchForm';
import NewsList from './components/news-list/NewsList';
import SelectForm from "./components/select-form/SelectForm";
import Row from "./components/row/Row";

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
        const {searchQuery} = this.state;
        this.fetchData(searchQuery).catch( err => {
            alert(err);
        });
    }

    fetchData = async (searchQuery) => {
        let news;
        let countryURL = '';
        let categoryURL = '';
        if (!searchQuery) {
            news = TOP_NEWS;
            const {country, category} = this.state;
            countryURL = `&${COUNTRY}${country}`;
            categoryURL = `&${CATEGORY}${category}`;
        } else {
            news = ALL_NEWS
        }

        let url = `${BASE_PATH}${news}${QUERY}${searchQuery}${countryURL}${categoryURL}`;

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
        });
    };

    handleSelectChange = ({target}) => {
        const name = target.name;
        const {value} = target;

        this.setState({
            [name]: value
        }, () => {
            this.fetchData('').catch(err => {
                alert(err)
            });
        });
    };

    handleBtnClick = (e) => {
        e.preventDefault();
        const {searchQuery} = this.state;
        this.fetchData(searchQuery).catch(err => {
            alert(err)
        });
    };


    render() {
        const {searchQuery, news, country, category} = this.state;
        return (
            <div className="container">
                <Row>
                    <Title header="News"
                           className="col-12"/>
                </Row>

                <Row>
                    <SelectForm className="col-12 col-lg-4 col-xl-3"
                                handleSelectChange={this.handleSelectChange}
                                selectedCountry={country}
                                selectedCategory={category}/>

                    <SearchForm className="col-12 col-lg-8 col-xl-9"
                                value={searchQuery}
                                handleInputChange={this.handleInputChange}
                                handleBtnClick={this.handleBtnClick}/>
                </Row>

                <NewsList className="row"
                          news={news}/>
            </div>
        )
    }
}

export default App;
