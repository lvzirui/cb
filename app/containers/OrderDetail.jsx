import React from 'react';

export default class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          token:"25688D801DDADDB05DB13C5A7E73E3F4",
          list:[{
            id:1,
            name:"dd",
            age :"ss"
          },{
            id:2,
            name:"11",
            age :"22"
          }]
        }
    }
    render() {
        return (
          <div>sss</div>
        );
    }
}
