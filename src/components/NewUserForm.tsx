import React, { useState } from 'react'
import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";
import RadioInput from "./RadioInput";
import SelectInput from "./SelectInput";

export default function NewUserForm() {
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        console.log("submitted form");

        setTimeout(() => {
            setSubmitting(false);
        }, 3000);
    }

    const list = [
        { label: "100 High St", value: "100HighSt" },
        { label: "300 Main St", value: "300MainSt" }
    ];

    const floors = [
        { label: "2", value: "2" },
        { label: "12", value: "12" }
    ];

    return (
        <>
            {submitting && <div>Submitting...</div>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <TextInput fieldLabel='First Name' fieldName='firstName' />
                    <TextInput fieldLabel='Last Name' fieldName='lastName' />
                    <TextInput fieldLabel='UserName' fieldName='userName'  />
                    <TextInput fieldLabel='Email Address' fieldName='emailAddress'  />
                    <TextInput fieldLabel='Website' fieldName='website' />

                    <h2>Location</h2>
                    <RadioInput fieldLabel="City 1" fieldName="cities" fieldId="city1" />
                    <RadioInput fieldLabel="City 2" fieldName="cities" fieldId="city2" />

                    <SelectInput fieldLabel="Locations" selectFieldName="city2Locations" optionsList={list} />

                    <SelectInput fieldLabel="Floors" selectFieldName="city2LocationsFloors" optionsList={floors} />

                    <h2>Groups</h2>
                    <CheckboxInput fieldLabel="Group A" fieldName="groupA" />
                    <CheckboxInput fieldLabel="Group B" fieldName="groupB" />
                    <CheckboxInput fieldLabel="Group C" fieldName="groupC" />
                    <CheckboxInput fieldLabel="Group D" fieldName="groupD" />

                    <CheckboxInput fieldLabel="Group E City 1" fieldName="groupE-City1" />
                    <CheckboxInput fieldLabel="Group F City 1" fieldName="groupF-City1" />

                    <input type="submit" value="Submit" />
                </fieldset>
            </form>
        </>
    )
}
