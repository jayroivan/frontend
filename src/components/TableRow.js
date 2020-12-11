import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
          account: "",
          trans: ""
        }
    }
    delete() {
        axios.delete('https://saturno2020.herokuapp.com/user/delete/'+this.props.obj.id)
            .then(res => {
              alert("Usuario Eliminado");
              this.props.history.push("/index");
            })
            .catch(err => console.log(err))
    }

    componentDidMount(){
      axios.get('https://saturno2020.herokuapp.com/user/cuenta/?user='+this.props.obj.id).then(res => {
        axios.get('https://saturno2020.herokuapp.com/trans/alls/?cuenta='+res.data.id).then(res2 => {
          console.log(res.data.numero)
          console.log(res2.data.length)
          this.setState({account: res.data.numero, trans: res2.data.length})
      })
      })
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.nombre}
          </td>
          <td>
            {this.props.obj.apellido}
          </td>
          <td>
            {this.props.obj.direccion}
          </td>
          <td>
            {this.props.obj.correo}
          </td>
          <td>
            {this.state.account}
          </td>
          <td>
            {this.state.trans}
          </td>
          {/*<td>
            <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          */}
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;