import React, { useEffect } from 'react';
import unitOfMeasures from './../core/utils/unit_of_measure/Unit_Of_Measures.json'



export const Card = ({ measure, value, setValue, oppValue, unit, setUnit, oppUnit }) => {



    useEffect(() => {

    }, [measure])

    useEffect(() => {
        if (oppValue && oppUnit && unit) {
            const ownConversion = unitOfMeasures[measure][unit]['ofBaseConversion']; 
            const oppConversion = unitOfMeasures[measure][oppUnit]['toBaseConversion']; 

            const oppToBase = Math.round((Number(oppValue) * oppConversion) * 1000) / 1000;
            const result = Math.round((Number(oppToBase) * ownConversion) * 1000) / 1000;

            setValue(result)
        }

    }, [oppValue, oppUnit])

    const onUnitChangeHandler = (e) => {
        setUnit(e.target.value)
    }

    const onValueChangeHandler = (e) => {
        setValue(e.target.value)
    }


    return (
        <div className='unitInputCard' >
            <input
                className='valueInput'
                type='number'
                onChange={onValueChangeHandler}
                value={value}
            />
            <select className='selector' onChange={onUnitChangeHandler} value={unit}>
                {
                    Object.keys(unitOfMeasures[measure]).map(item => {
                        return (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}