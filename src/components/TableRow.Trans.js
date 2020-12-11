import React, { Component } from 'react';

class TableRowTrans extends Component {

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.emisor}
          </td>
          <td>
            {this.props.obj.receptor}
          </td>
          <td>
            {this.props.obj.tipo}
          </td>
          <td>
            {this.props.obj.estado}
          </td>
          <td>
            {this.props.obj.correo}
          </td>
          <td>
            {this.props.obj.monto}
          </td>
        </tr>
    );
  }
}

export default TableRowTrans;