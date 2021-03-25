import React from 'react';



export function Modal({
    message = "",
}){


    return (
        <React.Fragment>
            <div className="modal-wrapper">
                {message}
            </div>
        </React.Fragment>
    )
}