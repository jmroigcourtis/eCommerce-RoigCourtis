import {useState} from 'react'
import { collection, getFirestore } from 'firebase/firestore'


const SearchProduct = () => {
    const [search, setSearch] = useState('')
    const db = getFirestore()

    const queryCollection = collection(db, 'productos')
    setSearch(queryCollection)
    console.log(search)
    search.filter((val) => {
        if (search == '') {
            return val;
        } else if (val.collectionId.toLowerCase().includes(search.toLowerCase())) {
            return search;
        }
    })
    .map((val, key) => {
        return (
            <div key={key}>{val}</div>
        )
    })
    return <input type={'text'} placeholder={'search...'} onChange={(event) => setSearch(event.target.value)}></input>
}

export default SearchProduct