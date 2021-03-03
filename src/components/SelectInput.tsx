import React from 'react'
import SelectInputOption from "./SelectInputOption";
import styles from './SelectInput.module.css';

export default function SelectInput({ fieldLabel, selectFieldName, optionsList }) {
    return (
        <div className="fieldControl">
            <label htmlFor={selectFieldName} className={styles.fieldLabel}>{fieldLabel}</label>
            <select name={selectFieldName} id={selectFieldName} className={styles.selectElement}>
                <option value="">-- Select --</option>
                {
                    optionsList.map(opt => <SelectInputOption key={opt.value} fieldLabel={opt.label} fieldValue={opt.value} />)
                }
            </select>
        </div>
    )
}
