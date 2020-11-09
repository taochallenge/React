
const login = (username) => {
    return (dispatch) => {
        let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login';
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch({
                    type: 'LOGIN',
                    username: res.data.name
                })
            });
    }
}

const getdata = (data) => {
    return (dispatch) => {
        let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist'
        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: 'GETDATA',
                    datalist: res.data
                })
            });
    }
}

export { login }
export { getdata }