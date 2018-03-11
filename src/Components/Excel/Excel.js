import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class Excel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: props.headers,
            data: props.data,
            sortBy: null,
            descending: false,
            edit: null
        };
    }
    _sort = event => {
        let column = event.target.cellIndex,
            data = this.state.data.slice(),
            descending = this.state.sortBy === column && !this.state.descending;

        data.sort((a, b) => {
            return descending ? ((a[column] > b[column]) ? 1 : -1) : ((a[column] < b[column]) ? 1 : -1);
        });

        this.setState({
            data: data,
            sortBy: column,
            descending: descending
        });
    }
    _showEditor = event => {
        this.setState({
            edit: {
                row: parseInt(event.target.dataset.row, 10),
                cell: event.target.cellIndex
            }
        });
    }
    _save = event => {
        event.preventDefault();
        let input = event.target.firstChild;
        let data = this.state.data.slice();
        data[this.state.edit.row][this.state.edit.cell] = input.value;
        this.setState({
            edit: null, // редактирование выполнено
            data: data,
            });
        console.log(input);
    }
    render() {
        return (
            <div className="Excel">
                <table>
                    <thead onClick={this._sort}>
                        <tr>
                            {this.state.headers.map((title, idx) => {
                                if (this.state.sortBy === idx) {
                                    title += this.state.descending ? ' \u2191' : ' \u2193'

                                }
                                return <th key={idx}>{title}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody onDoubleClick={this._showEditor}>
                        {this.state.data.map((row, rowIdx) => {
                            return (
                                <tr key={rowIdx}>
                                    {row.map((cell, i) => {
                                        let content = cell;
                                        let edit = this.state.edit;
                                        if(edit && edit.row === rowIdx && edit.cell === i) {
                                            content = <form onSubmit={this._save} >
                                                <input type="text" defaultValue={content}/>
                                            </form>
                                        }
                                        return <td key={i}  data-row={rowIdx}>{content}</td>
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

Excel.propTypes = {
    headers: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

// Excel.defaultProps = {
//     name: 'Stranger'
// }

export default Excel;