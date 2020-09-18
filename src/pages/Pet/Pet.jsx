import React from 'react'
import PetCard from '../../components/PetCard/PetCard'

class Pet extends React.Component {
    state = { 
        //pets: [] - this information will be obtained after the componentdidmount setstate
        pets: [{
            alias: 'OllieTheD',
            type: 'Dog',
            name: 'Ollie',
            avatar: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-dog-breeds-yorkshire-terrier-1583349591.jpg?crop=0.801xw:1.00xh;0.158xw,0&resize=480:*',
            breed: 'Daschound',
            gender: 'Male',
            age: '2',
            illnesses: ['a', 'b'],
            posts: [],
            symptoms: [],
            ownerId: this.props.user._id,
            followers: [], 
        }]
     }

     componentDidMount(user) {
        //APIcall to get user with populated pet information
        // this.setState(state => ({
        //     pets: [...state.pets, user.pets]
        //   })
     }

    render() { 
        return (
        <>
        {this.state.pets.map(pet=><PetCard pet={pet}/>)}
        </> );
    }
}
 
export default Pet;