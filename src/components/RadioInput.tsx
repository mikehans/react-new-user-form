import React from 'react'

export default function RadioInput({ fieldName, fieldId, fieldLabel }) {
    return (
        <div className="fieldControl">
            <div>
                <input type="radio" name={fieldName} id={fieldId} className="fieldControl--radio" />
                <label htmlFor={fieldId} className="fieldControl--radio-label">{fieldLabel}</label>
            </div>
        </div>
    )
}
