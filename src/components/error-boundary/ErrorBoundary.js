import React, {Component} from 'react';

import styles from './ErrorBoundary.module.css';

import Title from '../title/Title';


class ErrorBoundary extends Component{
    state = {
        hasError: false
    };

    static getDerivedStateFromError() {
        return {hasError: true}
    }

    render() {
        const {hasError} = this.state;
        const {children} = this.props;

        let content;
        if (hasError) {
            content =
                <>
                    <Title header="News"/>
                    <div className={styles.warning}>
                        <h2>Something went wrong</h2>
                        <p>Please refresh the page</p>
                    </div>
                </>
        } else {
            content = children;
        }

        return content;
    }
}

export default ErrorBoundary;