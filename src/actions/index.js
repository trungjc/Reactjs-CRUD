import * as Types from "./../constants/ActionType";
import apiCaller from "./..//utils/apiCaller";

//==========================FETCH PRODUCT=======================================//

export const actGetProductRequest = (id) => {
    return (dispatch) =>{
        return apiCaller(`products/${id}`,"GET",null).then(res => {
            dispatch(actGetProduct(res.data));
        })
    }
}

export const actGetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product //payload: product
    }
}

//==========================FETCH PRODUCTS=======================================//


export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products //payload: products
    }
}

export const actFetchProductsRequest = () => {
    return (dispatch) =>{
        return apiCaller("products","GET",null).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}


//==========================DELETE PRODUCT=======================================//

export const actDeleteProducts = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id //payload: id
    }
}

export const actDeleteProductsRequest = (id) => {
    return (dispatch) =>{
        return apiCaller(`products/${id}`,"DELETE",null).then(res => {
            dispatch(actDeleteProducts(id));
        })
    }
}

//==========================ADD PRODUCT=======================================//

export const actAddProductRequest = (product) => {
    return (dispatch) =>{
        return apiCaller("products","POST",product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product //payload: id
    }
}



//==========================UPDATE PRODUCT=======================================//

export const actUpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product //payload: product
    }
}

export const actUpdateProductRequest = (product) => {
    return (dispatch) =>{
        return apiCaller(`products/${product.id}`,"PUT",product).then(res => {
            dispatch(actUpdateProduct(res.data));
        })
    }
}
