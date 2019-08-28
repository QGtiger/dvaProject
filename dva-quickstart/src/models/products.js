import clonedeep from 'lodash.clonedeep'

export default {
    namespace: 'products',
    state: {
        products: [
            {name: 'dva', id:1},
            {name: 'antd', id:2},
            {name: 'test', id:3}
        ]
    },
    reducers: {
        delete(state, {payload: id}){
            // console.log(state.products.filter(item => item.id !== id))
            // return state.filter(item => item.id !== id);
            return (function deleteProduct(state, newState){
                let stateChange = state;
                console.log(state.products,newState)
                stateChange.products = stateChange.products.filter(item => item.id !== newState);
                console.log(stateChange)
                return stateChange;
            })(clonedeep(state),id)
        },
    },
};