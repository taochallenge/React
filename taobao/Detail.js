import React from 'react'
import './detail.css'

const Detail = (props) => {
    return (
        <div>
            <img 
                src={props.location.src}
                style={{width:'100%'}}
            />
            <div className='navi-bar'>
                <button 
                    className='btn-back'
                    onClick={()=>props.history.push('/')}>
                    <span className='back'> {'<'} </span>
                </button>
            </div>
            <div className='bottom-bar'>
                <div className='btn-shop'>
                    <span className='iconfont icon-dianpu' style={{color:'rgb(255,80,0)'}}></span>
                    <span className='btn-text'>店铺</span>
                </div>
                <div className='btn-service'>
                    <span className='iconfont icon-taobaokefu-01'></span>
                    <span className='btn-text'>客服</span>
                </div>
                <div className='btn-collect'>
                    <span className='iconfont icon-shoucang'></span>
                    <span className='btn-text'>收藏</span>
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

export default Detail
