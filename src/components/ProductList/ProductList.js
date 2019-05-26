import React, {Component}  from 'react';

class ProductList extends Component{
    super(prop) {

    }
    render() {
        return (
            <div className="list-product">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        {/*<th scope="col">Image</th>*/}
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
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
        );
    }
}
export default ProductList;
