import React, { Component } from 'react';
import axios from 'axios';

export default class EditTarjeta extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: '',
      name: '',
      Number: '',
      Month:'',
      Year:'',
      Code:''
    }
  }

  componentDidMount() {
      axios.get('https://saturno2020.herokuapp.com/tarjeta/one/'+this.props.match.params.id)
          .then(response => {
              this.setState({
                  id: response.data.id,
                  name: response.data.nombre,
                  Number: response.data.numero,
                  Month: response.data.mes,
                  Year: response.data.year,
                  Code: response.data.codigo
                });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

    onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
      onChangeNumber(e) {
        this.setState({
          Number: e.target.value
        })  
      }
      onChangeMonth(e) {
        this.setState({
          Month: e.target.value
        })
      }
      onChangeYear(e) {
        this.setState({
          Year: e.target.value
        })
      }
      onChangeCode(e) {
        this.setState({
          Code: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
        const obj = {
          nombre: this.state.name,
          numero: this.state.Number,
          mes: this.state.Month,
          year: this.state.Year,
          codigo: this.state.Code,
        };
        axios.put('https://saturno2020.herokuapp.com/tarjeta/update/'+this.state.id, obj)
        .then(res => console.log(res.data));
    
    this.props.history.push('/profile');
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }} className="col-md-4 mx-auto">
            <h3 align="center">Actualizar Tarjeta</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Nombre:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangeName}
                      />
                </div>
                <div className="form-group">
                    <label>Numero: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Number}
                      onChange={this.onChangeNumber}
                      />
                </div>
                <div className="row">
                <div className="form-group col-sm">
                    <label>Mes: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Month}
                      onChange={this.onChangeMonth}
                      />
                </div>
                <div className="form-group col-sm">
                    <label>Año: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Year}
                      onChange={this.onChangeYear}
                      />
                </div>
                <div className="form-group col-sm">
                    <label>Codigo: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Code}
                      onChange={this.onChangeCode}
                      />
                </div>
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Actualizar Tarjeta" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}