import React, { useEffect, useState } from 'react';

import unitOfMeasures from './../core/utils/unit_of_measure/Unit_Of_Measures.json'
import { Card } from './Card';

export const Main = () => {

    const [measure, setMeasure] = useState()

    const [fromInput, setFromInput] = useState()
    const [toInput, setToInput] = useState()

    const [fromUnit, setFromUnit] = useState()
    const [toUnit, setToUnit] = useState()

    useEffect(() => {
        const initialmeasure = Object.keys(unitOfMeasures)[0]
        setMeasure(initialmeasure)
        setFromUnit(Object.keys(unitOfMeasures[initialmeasure])[0])
        setToUnit(Object.keys(unitOfMeasures[initialmeasure])[0])
    }, [])


    const measureHandler = (e) => {
        setMeasure(e.target.value)
    }

    return (
        <div className='main'>
            <div className='container'>
                <div>
                    <select onChange={measureHandler} className='measure-selector' value={measure}>
                        {
                            Object.keys(unitOfMeasures).map(item => {
                                return (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>

                <div className='card-container'>
                    {
                        measure && (
                            <>
                                <Card
                                    measure={measure}
                                    value={fromInput}
                                    setValue={setFromInput}
                                    oppValue={toInput}
                                    unit={fromUnit}
                                    setUnit={setFromUnit}
                                    oppUnit={toUnit}
                                />
                                <span >=</span>
                                <Card measure={measure}
                                    value={toInput}
                                    setValue={setToInput}
                                    oppValue={fromInput}
                                    unit={toUnit}
                                    setUnit={setToUnit}
                                    oppUnit={fromUnit}
                                />
                            </>
                        )
                    }

                </div>


            </div>
        </div>
    )
}