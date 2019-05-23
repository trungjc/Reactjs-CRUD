import React, {Component}  from 'react';
class ProductActionPage extends Component{
    render() {
        return (
            <div className="content pt-5 pb-5">
                <h1 >Product Action  page</h1>
                <form>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control" id="name"
                               placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input type="text" className="form-control" id="price"
                               placeholder="Enter Price" />
                    </div>
                    <div className="form-group">
                        <label >Status:</label>

                        <div>
                            <input type="checkbox" name="status"  />
                            &nbsp; Out stock
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

}
export default ProductActionPage;
