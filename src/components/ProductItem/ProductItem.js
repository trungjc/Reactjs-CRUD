import React, {Component}  from 'react';


class ProductItem extends Component{
    render() {
        var {product,index} = this.props;
        console.log(product);
        var statusName  = product.status ? "In stock" : "Out stock";
        var statusClass = product.status ? "success" : "danger";
        return (
            <tr>
                <td>{index+ 1}</td>
                <td>{product.sku}</td>
                <td width="20%">{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td width="20%" >
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger ml-2">Delete</button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;
