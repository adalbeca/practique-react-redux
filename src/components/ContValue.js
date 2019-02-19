import React from 'react';

const ContValue = (props)=>{
        return(
            <div className="row">
                <div className="d-flex col-12 pb-2 justify-content-center">
                    <div>
                        <div>Valor: <span id="valor"> { props.value } </span></div>
                    </div>
                </div>
            </div>
        )};
export default ContValue;