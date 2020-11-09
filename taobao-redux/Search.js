import { SearchBar } from 'antd-mobile';
import React from 'react'
class Search extends React.Component {
    state = {
        value: '',
    };
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    onChange = (value) => {
        this.setState({ value });
    };
    render() {
        return (<div>   
            <SearchBar
                placeholder="宝贝"
                ref={ref => this.autoFocusInst = ref}                
                onCancel={() => this.props.history.push('/')}
                showCancelButton
                onChange={this.onChange}
            />
        </div>);
    }
}

export default Search;
