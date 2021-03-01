import React from 'react'
import SelectInputOption from "./SelectInputOption";


export default function SelectInput({fieldLabel, selectFieldName, optionsList}) {
    return (
        <select name={selectFieldName} id={selectFieldName}>
            <option value="">-- Select --</option>
            {
                optionsList.map(opt => <SelectInputOption key={opt.value} fieldLabel={opt.label} fieldValue={opt.value} />)
            }


        </select>
    )
}
