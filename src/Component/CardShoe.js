import React, { Component } from 'react';
import './CardShoe.css';
class CardShoe extends Component {

    render() {
        return (
            <div className="w-full sm:w-1/2 md:w-1/3 flex flex-col effect ml-1" onClick={this.props.clickShoe}>
                <div className="bg-white rounded-lg shadow ">
                    <div className="bg-cover" >
                        <img src={this.props.img} className="img-shoe" />

                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                        <h4 className="mb-1 company">{this.props.company}
                        </h4>
                       
                        <div className="mb-1 ">
                            <span className="text">{this.props.name}</span>
                        </div>
                        <p className="mb-1">{this.props.gender}</p>
                        <a className="border-t border-grey-light pt-2 text-xs price">{this.props.money}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardShoe;