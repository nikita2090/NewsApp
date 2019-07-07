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
        this.fetchData(searchQuery, pageSize, page);
    }

    _calculateURL = (searchQuery, pageSize, page) => {
        let url = new URL(`${BASE_PATH}${ALL_NEWS}`);

        if (!searchQuery) {
            url = new URL(`${BASE_PATH}${TOP_NEWS}`);

            const {country, category} = this.state;
            url.searchParams.set('country', country);
            url.searchParams.set('category', category);
        }
        url.searchParams.set('q', searchQuery);
        url.searchParams.set('pageSize', pageSize);
        url.searchParams.set('page', page);

        return url;
    };

    fetchData = async (searchQuery, pageSize, page) => {
        try {
            let url = this._calculateURL(searchQuery, pageSize, page);

            let res = await fetch(url, {
                headers: {
                    Authorization: KEY
                }
            });

            if (!res.ok) alert("HTTP-Error: " + res.status);

            let resJson = await res.json();

            if (resJson.status === 'ok') {
                this.setState({
                    totalResults: resJson.totalResults,
                    news: resJson.articles
                });
            } else {
                alert(resJson.message);
            }
        } catch (err) {
            alert(err);
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
        let {value} = target;

        let searchQuery = '';
        if (name === 'pageSize') {
            searchQuery = this.state.searchQuery;
            value = +value;
        }

        this.setState({
            [name]: value,
            page: 1,
            searchQuery: searchQuery
        }, () => {
            const {pageSize} = this.state;
            this.fetchData(searchQuery, pageSize, 1);
        });
    };

    handleSearchBtnClick = (e) => {
        e.preventDefault();
        const {searchQuery, pageSize} = this.state;

        this.fetchData(searchQuery, pageSize, 1);
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
