import React from 'react'

export default function TextInput({fieldName, fieldLabel}) {
    return (
        <div>
            <label htmlFor={fieldName}>{fieldLabel}</label>
            <input type="text" name={fieldName} id={fieldName} />
        </div>
    )
}
