let datalist = []
const datareducer = (state=datalist,action)=>{
    switch(action.type){
        case 'GETDATA':
            state = action.datalist;
            return state;
        default:
            return state;
    }
}

export default datareducer;