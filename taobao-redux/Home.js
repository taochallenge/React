import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import './css/Home.css'
import Slide from './Slide'
import Mytaobao from './Mytaobao'
import {getdata} from './actionCreators'

const Home = (props) => {
    useEffect(() => {
        props.dispatch(getdata());
    }, []);
    return (
        <div className='wrap'>
            <div className='top'></div>
            <div className='header-top'>
                <div className='header'>
                    <div className='header-bd'>
                        <a className='header-search' onClick={() => props.history.push('/search')}>
                            <span className='text iconfont icon-search1'></span>
                            寻找宝贝店铺
                        </a>
                    </div>
                </div>
            </div>

            <Slide />
            <div className='recommend-container'>
                <div className='recommend-hd'>
                    <img src='https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png' className='recommend-hd-bg' />
                </div>
                {
                    props.datalist.map((item, index) => (
                        <a  key={index}
                            onClick={() => props.history.push({
                                pathname: '/detail', 
                                good: item,
                                id: index,
                            })
                        }>
                            <img className="recommend-img" src={item.img} />
                            <div className='recommend-info'>
                                <div className='recommend-title'>
                                    <span className='recommend-title-p'>{item.title}</span>
                                </div>
                                <div className='recommend-price-box'>
                                    <span className="recommend-sign">￥</span>
                                    <span className="recommend-price">{item.price}</span>
                                </div>
                            </div>
                        </a>
                    ))
                }
                <div className='bottom'></div>
            </div>
            <Mytaobao />
        </div>
    )
}

const mapStateToProps = (state) => ({ 
    datalist: state.datalist
})

export default connect(mapStateToProps)(Home)