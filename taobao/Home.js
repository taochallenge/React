import React from 'react'
import './Home.css'
import Slide from './Slide'
import Mytaobao from './Mytaobao'
const Home = (props) => {
    const lists = [
        {src:"//gw.alicdn.com/bao/uploaded/i1/1663735410/O1CN01xbwtbC1pppBx5Ozzl_!!1663735410.jpg_500x500q90.jpg_.webp",title:"婚庆甜品台木头房子摆件 木质蛋糕架 森林系甜品展示架 拍照道具",price:36,buy:"193人已购买"},
        {src:"//gw.alicdn.com/bao/uploaded/i1/870331348/O1CN01QAINh01LpQT3U4FxM_!!870331348.jpg_500x500q90.jpg_.webp",title:"陶瓷早餐餐盘餐具杯子套装带柄牛奶谷物燕麦片锅分格托盘创意汤碗",price:39.8,buy:"237人已购买"},
        {src:"//gw.alicdn.com/bao/uploaded/i2/754568063/O1CN01B3iIYe29Qu6JS8upd_!!754568063-0-lubanu-s.jpg_500x500q90.jpg_.webp",title:"双面珊瑚绒四件套网红冬季加厚牛奶法莱绒被套床上水晶法兰绒床裙",price:129,buy:"1727人已购买"},
        {src:"//gw.alicdn.com/bao/uploaded/i3/300362386/O1CN011TUpUKL7uR3y2AM_!!300362386.jpg_500x500q90.jpg_.webp",title:"威士忌硅胶冰格模具 冰块制冰 冻冰球 企鹅北极熊冰球",price:18,buy:"110人已购买"},
        {src:"//gw.alicdn.com/bao/uploaded/i2/120976213/TB2mBSRwr4npuFjSZFmXXXl4FXa_!!120976213.jpg_500x500q90.jpg_.webp",title:"川岛屋日式陶瓷砂锅煲汤炖锅家用燃气煤气灶沙锅小号煲仔饭专用锅",price:88,buy:"206人已购买"},
        {src:"//gw.alicdn.com/bao/uploaded/i3/2962423480/O1CN018beusc1bZssc5XL2Y_!!2962423480.jpg_500x500q90.jpg_.webp",title:"创意珐琅彩水杯耐热玻璃杯ins风花茶杯带盖家用泡茶杯子女套装大",price:19,buy:"4054人已购买"},
        {src:"//gw.alicdn.com/bao/uploaded/i2/2421428257/O1CN01krWnDC2ArkpZqyVJB_!!2421428257.jpg_500x500q90.jpg_.webp",title:"加厚北欧门帘布艺挡风帘家用卧室隔断帘日式ins装饰厨房半帘四季",price:49,buy:"704人已购买"},
        {src:"//gw.alicdn.com/bao/uploaded/i2/2454910677/O1CN01RrOovq1Gs6d4dzp58_!!0-item_pic.jpg_500x500q90.jpg_.webp",title:"碗家用儿童碗保温饭碗宝宝碗防摔卡通可爱防烫塑料碗创意个性带盖",price:19.9,buy:"827"},
        {src:"//gw.alicdn.com/bao/uploaded/i3/3102943581/O1CN01UjypZ31cK8t5wfyPq_!!0-item_pic.jpg_500x500q90.jpg_.webp",title:"cec黑色卫衣女加绒2020秋冬韩版潮宽松圆领无帽ins外套中长款港风",price:99,buy:"216人已购买"},
        {src:"//gw.alicdn.com/bao/uploaded/i3/679645567/O1CN01Jdq94r1qzjNs69iSI_!!0-item_pic.jpg_500x500q90.jpg_.webp",title:"创意陶瓷杯大容量水杯马克杯简约情侣杯子带盖勺咖啡杯牛奶杯茶杯",price:13.9,buy:"3599人已购买"}
    ]
    return (
        <div className='wrap'>
            <div className='top'></div>
            <div className='header-top'>
                <div className='header'>
                    <div className='header-bd'>
                        <a className='header-search' onClick={()=>props.history.push('/search')}>
                            <span className='text iconfont icon-search1'></span>
                            寻找宝贝店铺
                        </a>
                    </div>
                </div>
            </div>
            
            <Slide />
            <div className='recommend-container'>
                <div className='recommend-hd'>
                    <img src='https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png' className='recommend-hd-bg'/>
                </div>
                {
                    lists.map((item,index) => (
                        <a key={index} onClick={()=>props.history.push({pathname:'/detail',src:item.src})}>
                            <img className="recommend-img" src={item.src}/>
                            <div className='recommend-info'>
                                <div className='recommend-title'>
                                    <span className='recommend-title-p'>{item.title}</span>
                                </div>
                                <div className='recommend-price-box'>
                                    <span className="recommend-sign">￥</span>
                                    <span className="recommend-price">{item.price}</span>
                                    <span className="recommend-payed">{item.buy}</span>
                                </div>
                            </div>
                        </a>
                    ))
                }
                <div className='bottom'></div>
            </div>
            <Mytaobao/>
        </div>
        
    )
}

export default Home;