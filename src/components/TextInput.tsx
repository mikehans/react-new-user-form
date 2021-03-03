import React from 'react'

export default function TextInput({fieldName, fieldLabel}) {
    return (
        <div className="fieldControl">
            <label htmlFor={fieldName} className="fieldControl--label">{fieldLabel}</label>
            <input type="text" name={fieldName} id={fieldName} className="fieldControl--textInput" />
        </div>
    )
}
