/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Filters.css'

export function Filters ({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState, 
            minPrice: event.target.value
        }) )
    }

    const handleChangeCategory = (event) => [
        onChange(prevState => ({
            ...prevState, 
            category: event.target.value
        }))
    ]
    return (
        <section className='filters'>
            <div>
                <label htmlFor='price'>Precio a partir de</label>
                <input type='range' id='price' min='0' max='2000' onChange={handleChangeMinPrice}></input>
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor='category'>Categoría</label>
                <select id='category' onChange={handleChangeCategory}>
                    <option value='all'>
                        All
                    </option>
                    <option value='laptops'>
                        Laptops
                    </option>
                    <option value='smartphones'>
                        Celulares
                    </option>
                </select>
            </div>
        </section>
    )
}