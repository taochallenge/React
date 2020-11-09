import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import Mytaobao from './Mytaobao'
import './css/cart.css'

const Cart = (props) => {
    return (
        <div>
            <div className='shou'>收藏列表</div>
            {
                props.shoucang.map((item,id) => (
                    <div key={id} className='shou-lists'>
                        <div className='shou-img'>
                            <img src={item.img} className='list'></img>
                        </div>
                        <div className='shou-word'>
                            <div className='shou-title'>{item.title}</div>
                            <span className='shou-sign'>￥</span>
                            <span className='shou-price'>{item.price}</span>
                        </div>
                        <button
                            className='btn'
                            onClick = {() => {
                                props.dispatch({
                                    type : 'DELETE',
                                    index : id
                                })
                            }}
                        >取消收藏</button>
                    </div>  
                ))
            }
            <div className='bottom'></div>
            <Mytaobao/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    shoucang : state.shoucang
})

export default connect(mapStateToProps)(Cart);