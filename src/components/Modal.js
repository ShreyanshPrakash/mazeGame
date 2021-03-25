import React from 'react';



export function Modal({
    title = "",
    message = "",
    actions = [],
}) {


    return (
        <React.Fragment>
            <div className="modal-wrapper">

                <div className="modal-body">
                    <div className="modal-title">
                        {title}
                    </div>

                    <div className="modal-content">
                        {message}
                    </div>

                    <div className="modal-action">
                        {
                            actions.map((item, index) => {

                                const {
                                    buttonText,
                                    handler
                                } = item;

                                return (
                                    <React.Fragment>
                                        <button onClick={handler}>{buttonText}</button>
                                    </React.Fragment>
                                )

                            })
                        }
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}