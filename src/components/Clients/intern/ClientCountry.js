// this component turns the id into a country
import React from 'react'

const ClientCountry = ({ id, userId }) => {
    // console.log("id:",id,"userId",userId)

    const turnIntoCountry = (foo) => {
        console.log(foo)
        switch (foo) {
            case 1:
                return 'https://cdn-icons-png.flaticon.com/512/197/197573.png';
            case 2:
                return 'https://cdn-icons-png.flaticon.com/512/197/197563.png';
            case 3:
                return 'https://cdn-icons-png.flaticon.com/512/197/197386.png';
            case 4:
                return 'https://cdn-icons-png.flaticon.com/512/197/197622.png'
            case 5:
                return 'https://cdn-icons-png.flaticon.com/512/197/197504.png'
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
