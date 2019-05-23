import React, {Component}  from 'react';

class ProductList extends Component{
    super(prop) {

    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Product List
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Code</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">status</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default ProductList;
