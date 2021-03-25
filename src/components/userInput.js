import React, { useEffect, useState } from 'react';

import {
    UserInputModel,
} from '../models';

export function UserInput({
    userInputSubmit = () => { },
}) {


    const [formState, setFormState] = useState(new UserInputModel());

    const handleFormSubmit = (e) => {
        e.preventDefault();
        userInputSubmit(formState);
        setFormState(new UserInputModel());
    }

    const handleInputChange = (e) => {

        setFormState({
            ...formState,
            [e.target.name]: Number(e.target.value),
        })

    }

    useEffect(() => {
        console.log(formState);
    }, [formState])

    return (
        <React.Fragment>
            <div className="user-input-wrapper">
                <form
                    autoComplete="off"
                    onSubmit={handleFormSubmit}
                >
                    <label>
                        Maze Height* :
                    <input name="height" placeholder="Enter maze height"
                            value={formState.height} onChange={handleInputChange}
                            type="number" min="0" max="20">
                        </input>
                    </label>
                    <label>
                        Maze Width* :
                    <input name="width" placeholder="Enter maze width"
                            value={formState.width} onChange={handleInputChange}
                            type="number" min="0" max="20">
                        </input>
                    </label>
                    <button type="submit" disabled={!(formState.height && formState.width)}>
                        Start
                </button>
                </form>
            </div>
        </React.Fragment>
    )
}