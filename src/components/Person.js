import React from 'react'

class Person extends React.Component {
    render() {
        const person = this.props.person;
        return (<div key={person.id.value}>
            <h1>Profile Info</h1>
            <img src={person.picture.medium} />
            <p>
                Gender: {person.gender}
            </p>
            <p>
                Name: {person.name.first} {person.name.last}
            </p>
        </div>);
    }
}

export default Person;
