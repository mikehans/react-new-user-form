import React, { ReactElement } from 'react'
import NewUserForm from "./NewUserForm";
import { styles } from "./App.module.css";

export default function App() : ReactElement {
    return (
        <div>
            <h2>Create a new user here</h2>
            <NewUserForm />
        </div>
    )
}
