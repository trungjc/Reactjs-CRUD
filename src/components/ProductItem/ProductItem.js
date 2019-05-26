import React, {Component}  from 'react';
import {Link} from "react-router-dom";

class ProductItem extends Component{

    onDelete = (id) => {
       if(confirm("Are you sure ?")) { //eslint-disable-line
           this.props.onDelete(id);
       }
    }

    render() {
        var {product,index} = this.props;
        var statusName  = product.status ? "In stock" : "Out stock";
        var statusClass = product.status ? "warning" : "danger";

        return (
            <tr>
                <td>{index+ 1}</td>
                {/*<td>{product.sku}</td>*/}
                <td width="20%">{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>

                <td>
                    <span className={`badge badge-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td width="20%" >
                    <Link className="btn btn-info" to={`/product/${product.id}/edit`}><i className="fa fa-edit"></i> Edit</Link>
                    <button className="btn btn-danger ml-2" onClick={() => {this.onDelete(product.id)}}><i className="fa fa-trash"></i> Delete</button>
                </td>
            </tr>
        );
    }
}
export default ProductItem;
