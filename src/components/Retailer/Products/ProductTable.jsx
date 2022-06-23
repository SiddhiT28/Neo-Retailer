import axios from 'axios'
import React, { useEffect } from 'react'
import { useTable, useFilters, useSortBy } from 'react-table'
import { API_URL } from '../../API/Constant'
import { useAuth } from '../../Context/AuthContext'
import { Modal } from '../../Modal/Modal'
import "./productTable.css";
import { UpdateProduct } from './UpdateProduct'

const Category = ({ values }) => {
    return (
        <>
            {JSON.parse(values).map((category, idx) => {
                return (
                    <span key={idx} className="badge">
                        {category}
                    </span>
                );
            })}
        </>
    );
}


const Description = ({ values }) => {
    return (
        <>
            <span >
                {values.split(" ").slice(0, 30).join(" ")}...
            </span>

        </>
    );
}

const EditProduct = ({ row, setSelectedProductId, setShowUpdateModal }) => {

    const onClick = () => {
        // alert(row.original.id);
        setSelectedProductId(row.original.id);
        setShowUpdateModal(true);
    }

    return (
        <>
            <button onClick={onClick} title="Update product" className="edit-btn">Update</button>
        </>
    );
}






export const ProductTable = () => {

    const { user } = useAuth();

    const [showUpdateModal, setShowUpdateModal] = React.useState(false);
    const [selectedProductId, setSelectedProductId] = React.useState(null);

    const [data, setData] = React.useState([]);
    const [filterInput, setFilterInput] = React.useState('');

    const columns = React.useMemo(() => [
        {
            Header: 'Id',
            accessor: 'id'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'Amount',
            accessor: 'price'
        },
        {
            Header: 'Stock',
            accessor: 'numberOfProducts'
        },
        {
            Header: 'Discount',
            accessor: 'discounts'
        },
        {
            Header: 'Category',
            accessor: 'category',
            Cell: ({ cell: { value } }) => <Category values={value} />
        },
        {
            Header: 'Description',
            accessor: 'description',
            Cell: ({ cell: { value } }) => <Description values={value} />
        },
        {
            Header: 'Action',
            accessor: 'action',
            Cell: ({ row }) => <EditProduct setSelectedProductId={setSelectedProductId} setShowUpdateModal={setShowUpdateModal} row={row} />

        }
    ], [])

    useEffect(() => {
        updateProduct();
    }, [])


    const updateProduct = () => {
        axios.post(`${API_URL}/vendor/getProducts`, {
            id: user.id
        }).then(res => {
            setData(res.data)
        }
        ).catch(err => {
            console.log(err)
        }
        )
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
        setFilter("name", value);
        setFilterInput(value);
    }

    const toggleModal = () => {
        setShowUpdateModal(prev => !prev);
    }


    return (
        <>

            {showUpdateModal && <Modal title={"Update Product"} setShow={toggleModal}>
                <UpdateProduct refresh={updateProduct} id={selectedProductId} toggleModal={toggleModal} />
            </Modal>}
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
