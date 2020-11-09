let shoucang = [];
const screducer = (state=shoucang,action)=>{
    if(action.type === 'SHOUCANG'){
        return [...state,action.shoucang]
    }
    if(action.type === 'DELETE'){
        state.splice(action.index,1);
        return [...state];
    }
    return state;
}

export default screducer;