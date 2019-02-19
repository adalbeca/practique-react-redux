import React from 'react';

class Productos extends React.Component{
    render(){
        const { producto ,precio } = this.props.article;
        return(
            <React.Fragment>
                <li className="list-group-item">
                    { producto }
                </li>
            </React.Fragment>
        )}
}

export default Productos;