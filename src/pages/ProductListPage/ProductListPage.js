import React, {Component}  from 'react';
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { actDeleteProductsRequest, actFetchProductsRequest} from "./../../actions/index";
class ProductListPage extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
      this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.deleteProduct(id)
    }


    render() {
        var {products} = this.props;
        return (
            <div className="content pt-5 pb-5">
                <Link to="product/add" className="btn btn-info mb-4" ><i className="fa fa-plus"></i> Create new product</Link>
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
                        onDelete={this.onDelete}
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
const mapDispatchToProps = (dispatch,props) => {
    return {
        fetchAllProducts: () =>  {
            dispatch(actFetchProductsRequest());
        },
        deleteProduct: (id) => {
            dispatch(actDeleteProductsRequest(id))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps) (ProductListPage);
