import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { handleAdd, handleLess } from './store/reducers/operator';

class App extends Component {
    render() {
        return (
            <div className="container-fluid pt-4 ">
                <div className="row d-flex ">
                    <div className="d-flex col-12 pb-2 justify-content-center"> Test Redux simple</div>
                </div>
                <div className="row">
                    <div className="d-flex col-12 pb-2 justify-content-center">
                        <div>
                            <div>Valor: <span id="valor"> {this.props.value} </span></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex col-12 pb-2  justify-content-center">
                        <div className="pr-2">
                            <button className="btn btn-primary" onClick={ this.props.actions.handleAdd } id="aumentar">Aumentar
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-secondary" onClick={ this.props.actions.handleLess }
                                    id="disminuir">Disminuir
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="d-flex justify-content-center col-12"><input/></div>
                </div>
            </div>
        );
    }
}

// this is a function, this make a subscription and get state, and this function always check any change in the State
// and update / runner again
const mapStateToProps = (state) => {
    // return object js
    return { value: state.operator.cantidad }
};
// 1er metodo de Dispatch.
// const mapDispatchToProps = {
//     aumentar: ()=>{ return { type: "AUM" } },
//     disminuir: ()=>{ return { type: "DIS" } }
// };

const mapDispatchToProps = (dispatch) => {
   return {
       actions: bindActionCreators({
          handleLess,
           handleAdd
       }, dispatch),
   }
};

//below use connect to acces the state and dispatch actions & action creator.
//connect use 2 params. the first is mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
