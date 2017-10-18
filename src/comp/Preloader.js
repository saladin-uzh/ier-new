import React, { Component } from 'react';

export class Preloader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibility: 'flex'
        };
    }

    render() {
        return (
            <div id="preloader" style={
                {
                    display: this.props.state ? "none" : "flex",

                }
            }>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 64 64">
                    <path d="M64 32c-0.080-4.179-0.986-8.345-2.661-12.154-1.669-3.813-4.091-7.266-7.065-10.12-2.972-2.856-6.496-5.114-10.312-6.603-3.813-1.495-7.912-2.209-11.962-2.123-4.051 0.080-8.083 0.961-11.771 2.585-3.691 1.619-7.034 3.967-9.796 6.848-2.764 2.88-4.947 6.294-6.387 9.987-1.445 3.691-2.133 7.657-2.047 11.579 0.080 3.922 0.935 7.822 2.508 11.388 1.568 3.569 3.842 6.802 6.632 9.472 2.788 2.672 6.092 4.782 9.663 6.17 3.57 1.394 7.403 2.056 11.196 1.97 3.794-0.081 7.56-0.91 11.005-2.432 3.447-1.518 6.57-3.718 9.148-6.415 2.58-2.696 4.615-5.89 5.953-9.339 0.815-2.091 1.367-4.275 1.659-6.487 0.078 0.005 0.156 0.008 0.235 0.008 2.209 0 4-1.791 4-4 0-0.112-0.006-0.223-0.015-0.333h0.015zM57.644 42.622c-1.467 3.325-3.593 6.337-6.199 8.824-2.604 2.488-5.688 4.449-9.015 5.737-3.327 1.292-6.893 1.903-10.43 1.818-3.538-0.081-7.037-0.858-10.239-2.28-3.203-1.417-6.105-3.468-8.5-5.982-2.396-2.512-4.283-5.485-5.52-8.691-1.242-3.205-1.827-6.638-1.742-10.047 0.081-3.41 0.833-6.776 2.203-9.856 1.366-3.081 3.344-5.873 5.765-8.176 2.421-2.304 5.283-4.117 8.367-5.303 3.084-1.191 6.383-1.75 9.664-1.665 3.281 0.082 6.514 0.807 9.473 2.127 2.959 1.316 5.641 3.219 7.852 5.549 2.212 2.329 3.951 5.081 5.087 8.043 1.141 2.962 1.674 6.129 1.589 9.281h0.015c-0.009 0.11-0.015 0.221-0.015 0.333 0 2.063 1.562 3.761 3.568 3.977-0.389 2.176-1.033 4.301-1.924 6.312z"></path>
                </svg>
            </div>
        );
    }
}