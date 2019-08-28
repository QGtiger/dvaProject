import React from 'react'
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({dispatch, products}) => {
    function handleDelete(id){
        dispatch({
            type: 'products/delete',
            payload: id,
        });
    }
    //console.log(products)
    return (
        <div>
            <h2>List of ProductList</h2>
            <ProductList onDelete={handleDelete} products={products}/>
        </div>
    )
};

export default connect(state => {
    console.log(state.products.products)
    return {products: state.products.products}
})(Products);
