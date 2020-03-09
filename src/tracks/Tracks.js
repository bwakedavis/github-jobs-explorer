import React, { Component } from 'react'
import { Consumer } from '../Context'
import Spinner from '../components/layout/Spinner'

class Tracks extends Component {
    render() {
        return (
            <Consumer>
                {value=>{
                    const {track_list} = value
                    console.log(value)
                    if(track_list ===undefined|| track_list.length ===0){
                        return <Spinner/>
                    }else{
                        return <h1>Tracks loaded</h1>
                    }
                }}
               
            </Consumer>
        )
    }
}

export default Tracks

