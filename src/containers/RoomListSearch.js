import React from 'react'
import { connect } from 'react-redux'
import { changeFocus, changeFilter } from  '../actions/index'

const RoomListSearch = ({ filter,
    focusRoomSearch, onFilterText
}) => {
    let input
    return ( <div>
        <b>SearchBox</b>
        <input
            type="text"
            placeholder="search room..."
            ref={ ref => { input = ref } }
            onFocus={ focusRoomSearch }
            onChange={ () => {
                onFilterText({ string: input.value })
            }}
        />
    </div> )
}

export default connect(
    state => ({
        filter: state.chatUI.roomFilter
    }), dispatch => ({
        focusRoomSearch: () => dispatch( changeFocus('ROOM_SEARCH') ),
        onFilterText: (filter) => dispatch( changeFilter(filter) )
    })
)( RoomListSearch )
