import React, {Component} from 'react';

export default class Product extends Component {
    render() {
        return (
            <div className="wz-col wz-thirds wz-product">
                <img src={this.props.itemData.data.mainimage.url} alt={this.props.itemData.data.mainimage.alt} />
                <h4 className="wz-center">{this.props.itemData.data.name}</h4>
                <p className="wz-center">{this.props.itemData.data.category.slug}</p>
                <p className="wz-center">$ {this.props.itemData.data.price}</p>
            </div>
        );
    };
}