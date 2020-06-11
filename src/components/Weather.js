import React from 'react'

const Weather = ({ description, city, country, error, temperature }) => {

    function findMatch() {
        if (description) {
            const weatherDescription = description.split(' ')
            const keyWords = ['cloudy', 'clouds', 'sun', 'clear', 'cloud', 'overcast']
            for (let i = 0; i < weatherDescription.length; i++) {
                if (keyWords.includes(weatherDescription[i])) {
                    console.log('hi')
                    // return <img src=' https://www.flickr.com/photos/blueminds/27741917480' />
                    return <img src='https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg' />

                }
            }
            console.log(keyWords)
            console.log(weatherDescription)

        }
    }
    return (
        <div>
            {city && country && <p>City:{city}, Country:{country}</p>}
            {temperature && <p>Temperature:{temperature} °F</p>}
            {description && <p>Condition:{description}</p>}
            {error && <p>{error}</p>}
            {description && findMatch()}
        </div>
    )
}

export default Weather; 