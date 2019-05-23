var initialState = [
    {
        id:1,
        sku:'dt_01',
        name:'iphone 6',
        price: 1000,
        status: true,

    },
    {
        id:2,
        sku:'dt_02',
        name:'iphone 6s',
        price: 2000,
        status: false,

    },
    {
        id:3,
        sku:'dt_03',
        name:'iphone 7',
        price: 2500,
        status: false,

    },
];
const  products = (state=initialState,action) => {
    switch (action.type) {
        default: return [...state];
    }
};

export default products;
