import React, {useEffect, useState} from 'react'
import './App.css'

function App() {
    const [phrase, setPhrase] = useState('');
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState('joke')
    const [error, setError] = useState('')

    /**
     * @returns {Promise<void>}
     */
    const getJoke = async () => {
        setType('joke')
        setLoading(true)
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {headers: {'Accept': 'application/json'}});
            const data = await response.json();

            setPhrase(data.joke);
        } catch (e) {
            setError('There is a problem fetching the joke. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    /**
     * @returns {Promise<void>}
     */
    const getQuote = async () => {
        setType('quote')
        setLoading(true)
        try {
            const response = await fetch('https://quote-garden.onrender.com/api/v3/quotes/random')
            const data = await response.json();

            setPhrase(data.data[0].quoteText)
        } catch (e) {
            setError('There is a problem fetching the quote. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getJoke()
    }, []);

    return (
        <React.Fragment>
            <div className="card">
                <button type="button" className="btn" onClick={() => getJoke()}>Get Joke</button>
                <button type="button" className="btn" onClick={() => getQuote()}>Get Quote</button>
            </div>

            <h4>{'New ' + type.toString().toLocaleUpperCase()}</h4>

            <hr/>

            <div style={{width: '700px'}}>
                {loading
                    ? (<span className="loading">Loading...</span>)
                    : (<textarea className="phraase" readOnly={true} rows={10}>{phrase}</textarea>)
                }

                {error 
                    ? (<span className='error'>{error}</span>)
                    : ('')
                }
            </div>

        </React.Fragment>
    )
}

export default App
