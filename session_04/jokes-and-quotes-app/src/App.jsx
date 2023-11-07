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
        setError('')
        setPhrase('')
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
        setError('')
        setPhrase('')
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
        (async () => await getJoke())();
    }, []);

    return (
        <React.Fragment>
            <h1 style={{fontWeight: 'bolder'}}>Jokes & Quotes</h1>

            <div className="card">
                <button type="button" className="btn" onClick={() => getJoke()} disabled={loading}>Get Joke</button>
                <button type="button" className="btn" onClick={() => getQuote()} disabled={loading}>Get Quote</button>
            </div>

            <hr/>

            {loading
                ? (<h4 className="loading">Loading...</h4>)
                : (<h4 className="title">The {type} is...</h4>)
            }

            <div style={{width: '700px'}}>
                <textarea className="phrase" readOnly={true} value={(loading ? ('...') : phrase)} disabled={loading} />

                {error 
                    ? (<span className='error'>{error}</span>)
                    : null
                }
            </div>

        </React.Fragment>
    )
}

export default App
