// this component turns the id into a country
import React from 'react'

const ClientCountry = ({ id, userId }) => {
    // console.log("id:",id,"userId",userId)

    const turnIntoCountry = (foo) => {
        console.log(foo)
        switch (foo) {
            case 1:
                return 'Argentina';
            case 2:
                return 'Peru';
            case 3:
                return 'Brasil';
            case 4:
                return 'Colombia'
            case 5:
                return 'Chile'
            case 6:
                return 'Venezuela'
            case 7:
                return 'Honduras'
            default:
                return 'Unknown';
        }

    }

    return (
        <li key={id}>
            {turnIntoCountry(userId)}
        </li>
    )
}

export default ClientCountry
