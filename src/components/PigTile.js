import React from 'react'

class PigTile extends React.Component {

    state = {
        isClicked: false
    }

    toggleDetails = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    renderPigImage = (name) => {
        let pigUrl = name.toLowerCase().split(' ').join('_')
        let pigImage = require(`../hog-imgs/${pigUrl}.jpg`) 
        return <img src={pigImage} alt={this.props.name} />
    };

    renderPigDetails = () => {
         return (
            <div>
                <p>Specialty: {this.props.pig.specialty}</p>
                <p>Greased? {this.props.pig.greased ? 'Yes' : 'No'}</p>
                <p>Weight: {this.props.pig.weight}</p>
                <p>Highest Medal Achieved: {this.props.pig['highest medal achieved']}</p>
            </div>
         )
    }
    
    render() { 

        const {name} = this.props.pig

        return (
            <div className={'ui eight wide column'}>
                <h3>Name: {name}</h3>
                {this.renderPigImage(name)}
                <div className="ui bottom attached button" onClick={this.toggleDetails}>More Details</div> 
                { this.state.isClicked ? this.renderPigDetails() : ''}
            </div>
         );
    }
}
 
export default PigTile;