import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import Title from './components/title/Title';
import PaginationForm from "./components/pagination-form/PaginationForm";
import SearchForm from './components/search-form/SearchForm';
import SelectForm from "./components/select-form/SelectForm";
import NewsList from './components/news-list/NewsList';
import Row from "./components/row/Row";

import calculateLastPage from './functions/calculateLastPage';

const BASE_PATH = 'https://newsapi.org/v2';
const ALL_NEWS = '/everything?';
const TOP_NEWS = '/top-headlines?';
const QUERY = 'q=';
const COUNTRY = 'country=';
const CATEGORY = 'category=';
const PAGE = 'page=';
const PAGESIZE = 'pageSize=';
const KEY = '47387a80918944f6baaa6e32fc95233d';


class App extends Component {
    state = {
        searchQuery: '',
        totalResults: 0,
        news: [],
        country: 'us',
        category: 'general',
        pageSize: 10,
        page: 1
    };

    componentDidMount() {
        const {searchQuery, pageSize, page} = this.state;
        this.fetchData(searchQuery, pageSize, page).catch(err => {
            alert(err);
        });
    }

    fetchData = async (searchQuery, pageSize, page) => {
        let news;
        let countryURL = '';
        let categoryURL = '';

        let pageURL = `&${PAGE}${page}`;
        let pageSizeURL = `&${PAGESIZE}${pageSize}`;

        if (!searchQuery) {
            news = TOP_NEWS;
            const {country, category,} = this.state;
            countryURL = `&${COUNTRY}${country}`;
            categoryURL = `&${CATEGORY}${category}`;
        } else {
            news = ALL_NEWS;
        }

        let url = `${BASE_PATH}${news}${QUERY}${searchQuery}${countryURL}${categoryURL}${pageSizeURL}&${pageURL}`;

        let res = await fetch(url, {
            headers: {
                Authorization: KEY
            }
        });
        let resJson = await res.json();

        console.log(resJson.totalResults);

        if (resJson.status === 'ok') {
            this.setState({
                totalResults: resJson.totalResults,
                news: resJson.articles
            });
        } else {
            alert(resJson.message);
        }
    };

    handleInputChange = ({target: {value}}) => {
        this.setState({
            searchQuery: value,
            page: 1
        });
    };

    handleSelectChange = ({target}) => {
        const name = target.name;
        const {value} = target;

        let {searchQuery} = this.state;
        if (name !== 'pageSize') {
            searchQuery = '';
        }

        this.setState({
            [name]: value,
            page: 1,
            searchQuery: searchQuery
        }, () => {
            const {pageSize} = this.state;
            this.fetchData(searchQuery, pageSize, 1).catch(err => {
                alert(err)
            });
        });
    };

    handleSearchBtnClick = (e) => {
        e.preventDefault();
        const {searchQuery, pageSize} = this.state;

        this.fetchData(searchQuery, pageSize, 1).catch(err => {
            alert(err)
        });
    };


    handlePageChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const {page} = this.state;
        switch (name) {
            case 'prev':
                this.updatePage(page - 1);
                break;
            case 'next':
                this.updatePage(page + 1);
                break;
            default:
                return null;
        }
    };

    updatePage = (number) => {
        const {searchQuery, pageSize} = this.state;
        this.setState({
            page: number
        }, () => {
            const {page} = this.state;
            this.fetchData(searchQuery, pageSize, page);
        });
    };

    render() {
        const {searchQuery, totalResults, news, country, category, pageSize, page} = this.state;
        return (
            <div className="container">
                <Row>
                    <Title header="News"
                           className="col-12"/>
                </Row>

                <Row>
                    <PaginationForm className="col-12"
                                    handleSelectChange={this.handleSelectChange}
                                    selectedPageSize={pageSize}
                                    handlePageChange={this.handlePageChange}
                                    page={page}
                                    lastPage={calculateLastPage(totalResults, pageSize)}/>
                </Row>

                <Row>
                    <SelectForm className="col-12 col-lg-4 col-xl-3"
                                handleSelectChange={this.handleSelectChange}
                                selectedCountry={country}
                                selectedCategory={category}/>

                    <SearchForm className="col-12 col-lg-8 col-xl-9"
                                value={searchQuery}
                                handleInputChange={this.handleInputChange}
                                handleSearchBtnClick={this.handleSearchBtnClick}/>
                </Row>

                <NewsList className="row"
                          news={news}/>

                <Row>
                    <PaginationForm className="col-12"
                                    handleSelectChange={this.handleSelectChange}
                                    selectedPageSize={pageSize}
                                    handlePageChange={this.handlePageChange}
                                    page={page}
                                    lastPage={calculateLastPage(totalResults, pageSize)}/>
                </Row>

                <Row>
                    <i className="footer col-12">© nikita2090, 2019</i>
                </Row>

            </div>
        )
    }
}

export default App;
