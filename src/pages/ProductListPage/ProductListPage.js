import React, {Component}  from 'react';
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {connect} from "react-redux";

class ProductListPage extends Component{
    render() {
        var {products} = this.props;
        return (
            <div className="content pt-5 pb-5">
                <h1 >Product List page</h1>
                <ProductList>
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }


    showProducts(products) {
        var result = null;
        if(products.length > 0) {
          result =  products.map((product,index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index = {index}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}
export default connect(mapStateToProps,null) (ProductListPage);
