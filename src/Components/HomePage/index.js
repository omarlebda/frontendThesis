import { useState } from 'react'
import { useHistory } from 'react-router';
import '../../../src/home.css';
export default function HomePage() {

    const [search, setSearch] = useState('')
    const history = useHistory()

    return (

        <>
            <div class="s004">
                <form>
                    <fieldset>
                        <legend>WHO ARE YOU LOOKING FOR?</legend>
                        <div class="inner-form">
                            <div class="input-field">
                                <input
                                    class="form-control"
                                    id="choices-text-preset-values"
                                    type="text"
                                    placeholder="Type to search..."
                                    value={search} onChange={(e) => setSearch(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && history.push(`/search/${search}`)}
                                />

                                <button class="btn-search" type="button" onClick={() => { history.push(`/search/${search}`) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </>

    )
}
