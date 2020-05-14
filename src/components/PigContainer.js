import React from 'react'
import PigTile from './PigTile'

const PigContainer = props => {

        // console.log(props.pigs)
        return (  
            <div className='ui grid container'>
             {props.pigs.map((pig, index) => <PigTile pig={pig} key={index}/>)}
            </div>
        );
    
}
 
export default PigContainer;