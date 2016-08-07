import React from 'react';
import OrderItem from '../components/OrderItem';
export default class OrderDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          token:"501EBE645365FED748344CECB9AD92F7",
          list:[
             {
                order_id:1,
                car_plate:"苏A002101",
                order_code:"S10090898437321218",
                create_time:"2016-08-02 12:00:34",
                money:"2200",
                compony_logo:"https://img.alicdn.com/tps/i2/TB1bNE7LFXXXXaOXFXXwFSA1XXX-292-116.png_145x145.jpg",
                pay_status:1
             }
          ]
        }
    }
    isEmptyObject(o){
        for(var n in o){

            return false;
        }
        return true;
    }

    componentDidMount() {
      var self=this;
      $.ajax({
            type: "post",
            url: 'http://test1app.chebao.com.cn:8080/CheBao/v3/insurance/listInsuranceOrder?json={"token":"'+self.state.token+'"}',
            dataType: "json",
            success: function(data) {
              if(!self.isEmptyObject(data.result)){
                console.log(data.result.listCompany)
                self.setState({list:data.result.listCompany})
              }

            },
            error: function(error) {
                console.log(error)
            },
            timeout: 8000
        });
    }

    render() {
        var orderlist=this.state.list;
        if(!Array.isArray(orderlist)) throw new Error("orderlist必须是数组");
        var OrderList=orderlist.map(function(qst,i){
             return <OrderItem
               key={i}
               status_info={qst.status_info}
               insurance_company={qst.insurance_company}
               status={qst.status}
               company_logo={qst.company_logo}
               create_time={qst.create_time}
               money={qst.money}
               car_plate={qst.car_plate}
               order_code={qst.order_code}/>
           }.bind(this));

        return (
          <div id="questions" className="">
               {OrderList}
	        </div>
        );
    }
}
