import React from 'react'

export default function CheckboxInput({ fieldLabel, fieldName }) {
    return (
        <div className="fieldControl">
            <div>
                <input type="checkbox" name={fieldName} id={fieldName} className="fieldControl--checkbox" />
                <label htmlFor={fieldName} className="fieldControl--checkbox-label">{fieldLabel}</label>
            </div>
        </div>
    )
}
