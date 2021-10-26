import React, { useState } from 'react'
import '../../assets/styles/form.css'

const Search = () => {
  const [shown, setShown] = useState(true)
  const [classN, setClassN] = useState('')
  const [classLabel, setClassLabel] = useState('iconLabel')

  const handleClick = () => {
    shown ? setClassN('show') : setClassN('unshow')
    shown ? setClassLabel('iconLabelActive') : setClassLabel('iconLabel')
    setShown(!shown)
  }

  return (
    <form style={{ marginBottom: '20px' }}>
      <div className="search">
        <label
          htmlFor="search"
          onClick={handleClick}
          className={`${classLabel}`}
        >
          <i className="fa fa-search icon" aria-hidden="true"></i>
        </label>
        <div className="hidden">
          <div className={`trans ${classN}`}>
            <input
              className="input"
              type="search"
              name="search"
              id="search"
              placeholder="Find Something"
            />

            <button className="searchBtn">Search</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Search
