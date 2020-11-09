import React from 'react';
import { connect } from 'react-redux'
import {TabBar} from 'antd-mobile'
import { withRouter } from 'react-router-dom';
class Mytaobao extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		selectedTab: 'blueTab',
	  };
	}

	render() {
	    const { pathname } = this.props.location;
	  	return (
		<div style={{
            position: 'fixed', 
            width: '100%', 
            bottom: 0 
        }}>
		  <TabBar
			unselectedTintColor="#949494"
			tintColor="red"
			barTintColor="white"
		  >
			<TabBar.Item
			  title="首页"
			  key="home"
			  icon={<i className='iconfont icon-shouye'></i>
			  }
			  selectedIcon={<i className='iconfont icon-icon_home'></i>
			  }
			  selected={pathname === '/'}
			  onPress={() => {
				  this.props.history.push('/');
			  }}
			  data-seed="logId"
			>
			  
			</TabBar.Item>
			<TabBar.Item
			  icon={
				<i className='iconfont icon-gouwuche'></i>
			  }
			  selectedIcon={
				<i className='iconfont icon-gouwuche'></i>
			  }
			  title="收藏"
			  key="cart"
			  badge={'new'}
			  selected={pathname === '/cart'}
			  onPress={() => {
				if(this.props.username){
					this.props.history.push('/cart')
				}else{
					this.props.history.push('/login')
				}
				
			  }}
			  data-seed="logId1"
			>
			  
			</TabBar.Item>
			<TabBar.Item
			  icon={
				<i className='iconfont icon-biaodanliebiao-03'></i>
			  }
			  selectedIcon={
				<i className='iconfont icon-liebiao'></i>
			  }
			  title="订单列表"
			  key="list"
			  dot
			  selected={pathname === '/list'}
			  onPress={() => {
				this.props.history.push('/list')
			  }}
			>
			  
			</TabBar.Item>
			<TabBar.Item
			  icon={
                  <i className='iconfont icon-wode'></i>
              }
			  selectedIcon={
                  <i className='iconfont icon-wodedangxuan'></i>
              }
			  title="我的淘宝"
			  key="my"
			  selected={pathname === '/my'}
			  onPress={() => {
				this.props.history.push('/my')
			  }}
			>
			  
			</TabBar.Item>
		  </TabBar>
		</div>
	  );
	}
  }

const mapStateToProps = (state) => ({
    username: state.userinfo
})

export default connect(mapStateToProps)(withRouter(Mytaobao));