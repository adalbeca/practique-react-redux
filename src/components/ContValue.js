import React from 'react';
import Productos from './Productos';

const ContValue = (props)=>{
        return(
            <div className="row">
                <div className="d-flex">

                    { Object.keys(props.productos).map(key => (
                        <Productos
                            key={ key }
                            article={ props.productos[ key ] }
                        />
                        )
                    )}

                </div>
                <div className="d-flex col-12 pb-2 justify-content-center">
                    <div>
                        <div>Valor: <span id="valor"> { props.value } </span></div>
                    </div>
                </div>
            </div>
        )};
export default ContValue;