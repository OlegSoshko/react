import React from 'react';
import './ViewLot.css'

class ViewLot extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            numberLot: 345643756,
            bet: '400 000'
        }
    }
    render(){
        const numberLot = 'Перевозка №' + this.state.numberLot;
        return(
            <div className="viewbox">
                <div className="viewbox-head">
                    <div className="numberlot">
                        <label>{numberLot}</label>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6667 10.6666V15.9999H4V5.33325H9.33333" stroke="#2BC744" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.3335 4H16.0002M16.0002 4V8.66667M16.0002 4L9.3335 10.6667" stroke="#2BC744" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="bet">
                        <div className="bet-button">
                            <div className="bet-button-text">Поставить {this.state.bet} ₽</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewLot
