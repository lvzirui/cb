import React from 'react';
import $ from 'webpack-zepto';

$.config = {
    autoInit: false,
    showPageLoadingIndicator: false, // ajax加载页面关闭加载指示器
    router: false

};
import "../lib/sm.min.js";
import "../lib/sm-extend.min.js";

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                  { this.props.children }
            </div>
        );
    }
}
