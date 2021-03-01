import React from 'react'

export default function SelectInputOption({fieldLabel, fieldValue}) {
    return (
        <option value={fieldValue}>{fieldLabel}</option>
    )
}
