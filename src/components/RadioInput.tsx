import React from 'react'

export default function RadioInput({fieldName, fieldLabel}) {
    return (
        <div>
            <input type="radio" name={fieldName} id={fieldName} />
            <label htmlFor={fieldName}>{fieldLabel}</label>
        </div>
    )
}
