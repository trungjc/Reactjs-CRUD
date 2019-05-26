import React, {Component}  from 'react';
import {Link} from "react-router-dom";
import {actAddProductRequest,actGetProductRequest,actUpdateProductRequest} from "./../../actions/index";
import {connect} from "react-redux";

class ProductActionPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            id: '',
            txtName: '',
            txtDesc:'',
            txtPrice: '',
            chkbStatus:false
        };
    }

    componentDidMount() {
        var {match} = this.props;
        if(match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps) {
       if(nextProps && nextProps.itemEditing) {

           var { itemEditing } = nextProps;
           this.setState({
               id:itemEditing.id,
               txtName: itemEditing.name,
               txtDesc: itemEditing.description,
               txtPrice: itemEditing.price,
               chkbStatus: itemEditing.status
           })
       }
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var {history} = this.props;
        var {id,txtName,txtPrice,chkbStatus,txtDesc} = this.state;
        var product = {
            id:id,
            name:txtName,
            price:txtPrice,
            description:txtDesc,
            status: chkbStatus
        };
        if(id){
            this.props.onUpdateProduct(product);
            history.goBack();
        } else {
            this.props.onAddProduct(product);
            history.goBack();
        }

    }

    render() {
        var {txtName,txtPrice,chkbStatus,txtDesc} = this.state;
        return (
            <div className="content pt-5 pb-5">
                <h1 >Product Action Page</h1>
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text"
                               className="form-control"
                               name="txtName"
                               placeholder="Enter Name"
                               value={txtName}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <textarea

                                className="form-control"
                                name="txtDesc"
                                placeholder="Enter Description"
                                value={txtDesc}
                                onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input type="text"
                               className="form-control"
                               name="txtPrice"
                               placeholder="Enter Price"
                               value={txtPrice}
                               onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Status:</label>

                        <div>
                            <input type="checkbox"
                                   id="chkbStatus"
                                   name="chkbStatus"
                                   value={chkbStatus}
                                   checked={chkbStatus}
                                   onChange={this.onChange}
                            />
                           <label htmlFor="chkbStatus"> &nbsp; In stock</label>
                        </div>
                    </div>
                    <div className="d-flex">
                        <button type="submit" className="btn btn-info  mr-2 "><i className="fa fa-save"></i> Submit</button>
                        <Link to="/products" className="btn btn-dark " ><i className="fa fa-arrow-left"></i> Go Back</Link>
                    </div>
                </form>
            </div>
        );
    }

}
//
const mapStateToProps = (state) => {
    return{
        itemEditing: state.itemEditing
    }
}
const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddProduct: (product) =>  {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct: (id) => {
            dispatch(actGetProductRequest(id))
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }

}
export default connect(mapStateToProps,mapDispatchToProps) (ProductActionPage);

