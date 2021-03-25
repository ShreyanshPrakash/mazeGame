import React from 'react';


export function GameStats({
    stats = [],
    actions = [],
}) {


    return (
        <React.Fragment>
            <div className="gameStats">
                <div className="stats-info">
                    {
                        stats.map((item, index) => {

                            const {
                                title,
                                value,
                            } = item;

                            return (
                                <React.Fragment>
                                    <div className="stats-item">
                                        <div>{title}</div>
                                        <div>{value}</div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <div className="stats-action">
                    {
                        actions.map((item, index) => {

                            const {
                                buttonIconPath,
                                handler
                            } = item;

                            return (
                                <React.Fragment>
                                    <button onClick={handler}>
                                        <img src={`${process.env.PUBLIC_URL}${buttonIconPath}`} width="40" height="40" alt="restart"></img>;
                                    </button>
                                </React.Fragment>
                            )

                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}