const networkInit = {
    socket: {
        connected: false
    }
}
export default ( state = networkInit, action ) => {
    switch ( action.type ) {
        case 'INIT':
            return Object.assign( {}, state, {
                socket: { connnected: true }
            })
        default:
            return state
    }
}
