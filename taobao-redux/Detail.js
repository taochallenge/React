import React from 'react'
import { connect } from 'react-redux'
import './css/detail.css'

const Detail = (props) => {
    return (
        <div>
            <img
                src={props.location.img}
                style={{ width: '100%' }}
            />
            <div className='detail-price'>
                <span className='sign'>￥</span>
                <span className='price'>{props.location.price}</span>
            </div>
            <div className='title'>
                {props.location.title}
            </div>
            <div className='navi-bar'>
                <button
                    className='btn-back'
                    onClick={() => props.history.push('/')}>
                    <span className='back'> {'<'} </span>
                </button>
            </div>
            <div className='bottom-bar'>
                <div className='btn-shop'>
                    <span className='iconfont icon-dianpu' style={{ color: 'rgb(255,80,0)' }}></span>
                    <span className='btn-text'>店铺</span>
                </div>
                <div className='btn-service'>
                    <span className='iconfont icon-taobaokefu-01'></span>
                    <span className='btn-text'>客服</span>
                </div>
                <div
                    className='btn-collect'
                    onClick={() => {
                        props.dispatch({
                            type : 'SHOUCANG',
                            shoucang : props.datalist[props.location.id]
                        })
                    }}
                >
                    <span className='img'>
                        {
                            props.shoucang.some((data) => {
                                return data.id == props.datalist[props.location.id].id
                            })
                            ? <img src={require('./images/shoucang1.png')}></img>
                            : <img src={require('./images/shoucang.png')}></img>
                        }
                    </span>
                    <span className='btn-text'>
                        {
                            props.shoucang.some((data) => {
                                return data.id == props.datalist[props.location.id].id
                            })
                            ? '已收藏' 
                            : '收藏'
                        }
                    </span>
                </div>
                <div className='btn-addcart bar-btn'>
                    <span className='btn-title'>加入购物车</span>
                </div>
                <div className='btn-buynow bar-btn'>
                    <span className='btn-title'>立即购买</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    datalist: state.datalist,
    shoucang: state.shoucang,
})

export default connect(mapStateToProps)(Detail)
