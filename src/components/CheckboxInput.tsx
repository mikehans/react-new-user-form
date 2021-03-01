import React from 'react'

export default function CheckboxInput({ fieldLabel, fieldName }) {
    return (
        <div>
            <input type="checkbox" name={fieldName} id={fieldName} />
            <label htmlFor={fieldName}>{fieldLabel}</label>
        </div>
    )
}
