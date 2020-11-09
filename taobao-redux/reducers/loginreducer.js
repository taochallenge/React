let username = '';
const loginreducer = (state=username,action)=>{
    switch(action.type){
        case 'LOGIN':
            state = action.username
            return state;
        default:
            return state; 
        
    }
}

export default loginreducer;