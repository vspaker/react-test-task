import React from 'react';
import PropTypes from 'prop-types'
import ArrowUp from '../Arrows/ArrowUp'
import ArrowDown from '../Arrows/ArrowDown'

function Table (props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={props.onSort.bind(null, 'id')}>
                        ID {props.sortField === 'id' ? <span>{props.sort === 'asc' ? <ArrowUp /> : <ArrowDown />}</span> : null}
                    </th>
                    <th onClick={props.onSort.bind(null, 'firstName')}>
                        First Name {props.sortField === 'firstName' ? <span>{props.sort === 'asc' ? <ArrowUp /> : <ArrowDown />}</span> : null}
                    </th>
                    <th onClick={props.onSort.bind(null, 'lastName')}>
                        Last Name {props.sortField === 'lastName' ? <span>{props.sort === 'asc' ? <ArrowUp /> : <ArrowDown />}</span> : null}
                    </th>
                    <th onClick={props.onSort.bind(null, 'email')}>
                        E-mail {props.sortField === 'email' ? <span>{props.sort === 'asc' ? <ArrowUp /> : <ArrowDown />}</span> : null}
                    </th>
                    <th onClick={props.onSort.bind(null, 'phone')}>
                        Phone {props.sortField === 'phone' ? <span>{props.sort === 'asc' ? <ArrowUp /> : <ArrowDown />}</span> : null}
                    </th>
                </tr>
            </thead>
            <tbody>
                { props.data ? props.data.map(item => (
                    <tr key={item.id + item.phone}  onClick={props.onRowSelect.bind(null, item)}>
                        <td>{item.id}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                )) : null}
            </tbody>
        </table>
    )
} 

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    onSort: PropTypes.func.isRequired,
    sort: PropTypes.string.isRequired,
    sortField: PropTypes.string.isRequired
}

export default Table