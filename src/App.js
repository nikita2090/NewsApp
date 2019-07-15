import React, {Component} from 'react';
import './App.css';

import Header from './components/header/Header';
import PaginationForm from "./components/pagination-form/PaginationForm";
import Form from "./components/form/Form";
import Preloader from "./components/preloader/Preloader";
import NewsList from './components/news-list/NewsList';
import Footer from './components/footer/Footer';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

import calculateLastPage from './functions/calculateLastPage';


const BASE_PATH = 'https://newsapi.org/v2';
const ALL_NEWS = '/everything?';
const TOP_NEWS = '/top-headlines?';
const KEY = '47387a80918944f6baaa6e32fc95233d';


class App extends Component {
    constructor(props) {
        super(props);

        let country, category, pageSize;
        if (localStorage.options) {
            ({country, category, pageSize} = this._loadUserOptions());
        }

        this.state = {
            searchQuery: '',
            totalResults: 0,
            news: [],
            country: country || 'us',
            category: category || 'general',
            pageSize: pageSize || 10,
            page: 1,
            isLoaded: false
        };

        this.touchStart = null;
        this.SENSITIVITY = 55;
    }

    componentDidMount() {
        this.fetchData();
    }

    _loadUserOptions() {
        return JSON.parse(localStorage.getItem('options'))
    }

    _saveUserOptions(name, value) {
        let savedOptions = {};
        if (localStorage.options) {
            savedOptions = this._loadUserOptions();
        }
        savedOptions[name] = value;
        localStorage.setItem('options', JSON.stringify(savedOptions));
    }

    _calculateURL = () => {
        let url = new URL(`${BASE_PATH}${ALL_NEWS}`);
        const {searchQuery, pageSize, page} = this.state;

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

    fetchData = () => {
        this.setState({
            isLoaded: false
        }, async () => {
            try {
                let url = this._calculateURL();

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
                        news: resJson.articles,
                        isLoaded: true
                    });
                } else {
                    alert(resJson.message);
                }
            } catch (err) {
                alert(err);
            }
        });
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

        this._saveUserOptions(name, value);

        this.setState({
            [name]: value,
            page: 1,
            searchQuery: searchQuery
        }, this.fetchData);
    };

    handleSearchBtnClick = (e) => {
        e.preventDefault();
        const {searchQuery} = this.state;
        if (searchQuery === '') return;

        this.setState({
            page: 1
        }, this.fetchData);
    };


    handlePageChange = (e) => {
        e.preventDefault();
        const name = e.target.name;
        const {page} = this.state;

        if (!isNaN(name)) {
            if (page === +name) return;
            this.updatePage(+name);
        } else {
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
        }
    };

    updatePage = (number) => {
        this.setState({
            page: number
        }, this.fetchData);
    };

    onTouchStart = (e) => {
        this.touchStart = e.changedTouches[0].clientX;
    };

    onTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientX;
        let dif = touchEnd - this.touchStart;

        const {page, totalResults, pageSize} = this.state;
        const lastPage = calculateLastPage(totalResults, pageSize);

        if (dif < -this.SENSITIVITY && lastPage !== page) {
            this.updatePage(page + 1);
        } else if (dif > this.SENSITIVITY && page !== 1) {
            this.updatePage(page - 1);
        }
    };

    render() {
        const {searchQuery, totalResults, news, country, category, pageSize, page, isLoaded} = this.state;

        let changingContent;
        if (!isLoaded) {
            changingContent = <Preloader/>;
        } else {
            changingContent =
                <>
                <NewsList className="col-12"
                          news={news}/>

                <PaginationForm className="col-12"
                                handleSelectChange={this.handleSelectChange}
                                selectedPageSize={pageSize}
                                handlePageChange={this.handlePageChange}
                                page={page}
                                lastPage={calculateLastPage(totalResults, pageSize)}
                                totalResults={totalResults}
                />

                <Footer className="col-12"/>
                </>;
        }

        return (
            <ErrorBoundary>
                <div className="container app"
                     onTouchStart={this.onTouchStart}
                     onTouchEnd={this.onTouchEnd}>

                    <Header title="News"
                            selectedPageSize={pageSize}
                            handleSelectChange={this.handleSelectChange}/>

                    <PaginationForm className="col-12"
                                    handleSelectChange={this.handleSelectChange}
                                    selectedPageSize={pageSize}
                                    handlePageChange={this.handlePageChange}
                                    page={page}
                                    lastPage={calculateLastPage(totalResults, pageSize)}
                                    totalResults={totalResults}/>

                    <Form selectedCountry={country}
                          selectedCategory={category}
                          handleSelectChange={this.handleSelectChange}

                          value={searchQuery}
                          handleInputChange={this.handleInputChange}
                          handleSearchBtnClick={this.handleSearchBtnClick}/>

                    {changingContent}
                </div>
            </ErrorBoundary>
        )
    }
}

export default App;
