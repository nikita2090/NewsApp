import React, {Component} from 'react';
import styled from 'styled-components';

import Title from '../title/Title';


const Warning = styled.div`
    margin: 30px 0;

    text-align: center;
    color: darkred;
`;


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
                    <Warning>
                        <h2>Something went wrong</h2>
                        <p>Please refresh the page</p>
                    </Warning>
                </>
        } else {
            content = children;
        }

        return content;
    }
}

export default ErrorBoundary;