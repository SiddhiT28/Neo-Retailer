import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTable, useFilters, useSortBy } from 'react-table'
import { API_URL } from '../../API/Constant'
import { useAuth } from '../../Context/AuthContext'
import { RefreshIcon } from '../../Icons'
import "./orderTable.css";

const ProductName = ({ values }) => {

    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
        axios.get(`${API_URL}/product/getOne`, {
            params: {
                id: values
            }
        }).then(res => {
            setProductDetails(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])

    return (
        <span>
            {productDetails.name}
        </span>
    )
}

const User = ({ values }) => {

    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        axios.post(`${API_URL}/user/update`, {
            id: values
        }).then(res => {
            setUserDetails(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <span>
            {userDetails.name}
        </span>
    )
}


export const OrderTable = () => {

    const { user } = useAuth();

    const [data, setData] = React.useState([]);
    const [filterInput, setFilterInput] = React.useState('');

    const columns = React.useMemo(() => [
        {
            Header: 'Product',
            accessor: 'products',
            Cell: ({ cell: { value } }) => <ProductName values={value} />
        },
        {
            Header: 'User',
            accessor: 'user',
            Cell: ({ cell: { value } }) => <User values={value} />

        },
        {
            Header: 'Amount',
            accessor: 'amount'
        },
        {
            Header: 'Payment Status',
            accessor: 'status'
        },
        {
            Header: 'Oder date',
            accessor: 'created_at'
        }
    ], [])

    useEffect(() => {
        getVendorOrders();

        return () => {
            setData([]);
        }
    }, [])

    const getVendorOrders = () => {
        axios.post(`${API_URL}/vendor/getProducts/ordered`, {
            id: user.id
        }).then(res => {
            setData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }



    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setFilter } = useTable(
        {
            columns,
            data
        },
        useFilters,
        useSortBy
    )

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter("products", value);
        setFilterInput(value);
    }


    return (
        <>
            <button className='refreshButton' onClick={getVendorOrders}>
                Refresh <RefreshIcon color={"#7877cc"} width={28} />
            </button>
            <input
                value={filterInput}
                onChange={handleFilter}
                type="text"
                placeholder="Search"
                className="search" />
            <table>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className={
                                        column.isSorted
                                            ? column.isSortedDesc
                                                ? "sort-desc"
                                                : "sort-asc"
                                            : ""
                                    }
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row)

                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    }
                    )}
                </tbody>

            </table>
        </>
    )
}
