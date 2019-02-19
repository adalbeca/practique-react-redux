import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { handleAdd, handleLess,handleInput } from './store/reducers/operator';
import Header from './layout/Header';
import ContValue from './components/ContValue';
class App extends Component {
    constructor(props){
        super();
        this.state={
            productos:[]
        }
    }
    componentDidMount() {
        const productos = [
            { producto: 'Libro', precio: 200 },
            { producto: 'Disco Musica', precio: 250 },
            { producto: 'Instrumento Musical', precio: 800 },
            { producto: 'Album Musical', precio: 100 },
        ];
        this.setState({
            productos:productos
        })
    }

    agregarTarea = e =>{
      if(e.which===13) {
          console.log(e.target.value);
          this.props.actions.handleInput(e.target.value);
          e.target.value='';
      }
    };
    render() {
        let contador=0;
        const tareas = this.props.input.map((tar)=>{
            contador=contador+1;
            return (<li key={ contador }>{ tar }</li>);
        });
        return (
            <div className="container-fluid pt-4 ">
                <Header/>
                <ContValue
                    value={ this.props.value }
                    productos = { this.state.productos }
                />

                <div className="row">
                    <div className="d-flex col-12 pb-2  justify-content-center">
                        <div className="pr-2">
                            <button
                                className="btn btn-primary" onClick={ this.props.actions.handleAdd }
                                id="aumentar">Aumentar
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
                    <div className="d-flex justify-content-center col-12 pb-2" >
                        <input type="text" onKeyPress={ this.agregarTarea } />
                    </div>
                    <ul className="card card-body col-4 offset-4 pt-2 list-group-item-dark list-unstyled white">
                        { tareas }
                    </ul>
                </div>
            </div>
        );
    }
}

// this is a function, this make a subscription and get state, and this function always check any change in the State
// and update / runner again
const mapStateToProps = state => {
    // return object js
    return {
        value: state.operator.cantidad,
        input : state.operator.input
    }
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({
            handleLess,
            handleAdd,
            handleInput
        }, dispatch),
    }
};

//below use connect to access the state and dispatch actions & action creator.
//connect use 2 params. the first is mapStateToProps, mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);
