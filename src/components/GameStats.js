import React from 'react';


export function GameStats({
    stats = [],
}){


    return(
        <React.Fragment>
            <div className="gameStats">
                {
                    stats.map( (item,index) => {

                        const {
                            title,
                            value,
                        } = item;

                        return (
                            <React.Fragment>
                                <div className="stat-item">
                                    <span>{title} : </span>
                                    <span>{value}</span>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}