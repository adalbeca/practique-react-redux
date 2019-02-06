import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container-fluid d-flex row pt-4">
        <div className="d-flex col-12 pb-2 justify-content-center"> Test Redux simple </div>
        <div className="d-flex col-12 pb-2 justify-content-center">
            <div >
                <div>Valor: <span id="valor"> { this.props.informacion } </span> </div>
            </div>
        </div>
          <div className="d-flex col-12 justify-content-center">
              <div className="pr-2">
                  <button className="btn btn-primary" onClick={this.props.aumentar} id="aumentar">Aumentar</button>
              </div>
              <div>
                  <button className="btn btn-secondary" onClick={this.props.disminuir} id="disminuir">Disminuir</button>
              </div>

        </div>
      </div>
    );
  }
}

// this is a function, this make a subscription and get state, and this function always check any change in the State
// and update / runner again
const mapStateToProps =  (state) => {
    // return object js
  return { informacion: state.cantidad }
};
// 1er metodo de Dispatch.
// const mapDispatchToProps = {
//     aumentar: ()=>{ return { type: "AUM" } },
//     disminuir: ()=>{ return { type: "DIS" } }
// };

// otro
const mapDispatchToProps = (dispatch)=>{
    return {
    aumentar: ()=>{ dispatch({ type: "AUM" }); },
    disminuir: ()=>{ dispatch ({ type: "DIS" }); }
    };
};

//below use connect to acces the state and dispatch actions & action creator.
//connect use 2 params. the first is mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps,mapDispatchToProps)(App);
