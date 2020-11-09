import React, { Component } from 'react';
import { Carousel } from 'antd-mobile';

export default class Slide extends Component {
  state = {
    data: ['1', '2', '3', '4', '5', '6', '7', '8'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['https://gw.alicdn.com/imgextra/i3/88/O1CN0171jdFE1CWLU8YCnZE_!!88-0-lubanu.jpg', 
               'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg', 
               'https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg',
               'https://img.alicdn.com/imgextra/i4/189/O1CN01uR5GXn1DGbUKs9u9P_!!189-0-luban.jpg',
               'https://gw.alicdn.com/imgextra/i4/142/O1CN01M48JUr1Cv4ryuwmom_!!142-0-lubanu.jpg',
               'https://gw.alicdn.com/imgextra/i3/102/O1CN01aaZQwK1Ccl1vp5BU6_!!102-0-lubanu.jpg',
               'https://img.alicdn.com/tps/i4/https://img.alicdn.com/imgextra/i2/6000000008142/O1CN01g1Xtr42A15OhUOwGd_!!6000000008142-0-octopus.jpg',
               'https://gw.alicdn.com/imgextra/i4/83/O1CN01caZtMi1CU3VN0vWni_!!83-0-lubanu.jpg'
              ],
      });
    }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay
          infinite
          style={{touchAction:'pan-y'}}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top', height:170}}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}