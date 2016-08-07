import React from 'react';
export default class OrderItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {status_info,insurance_company,status,money,company_logo,create_time,car_plate,order_code} = this.props;
        return (
            <div className="orderitem">
              <div className="item_top">
                <span>车险订单号</span>
                <span>{order_code}</span>
              </div>
              <div className="item_mid">
                <div className="item_logo"><img src={company_logo}/></div>
                <div className="item_car">
                  <div className="item_car_lic">
                    <span>投保车辆</span>
                    <span>车牌  {car_plate}</span>
                  </div>
                  <span>{create_time}</span>
                </div>
                <div className="item_more">>>>></div>
              </div>
              <div className="item_foot">
                  <span>{status_info}</span>
                  <span>{money}--{status}</span>
              </div>
            </div>
        );
    }
}
