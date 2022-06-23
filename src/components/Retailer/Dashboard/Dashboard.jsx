import React, { useEffect, useState } from 'react'
import './dashboard.css'
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryLine, VictoryTheme } from "victory";
import { API_URL } from '../../API/Constant';
import axios from 'axios';
import { useAuth } from '../../Context/AuthContext';
import { Profile } from '../Profile/Profile';

export const Dashboard = ({ updateSelected }) => {

    const { auth, user } = useAuth();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orderData, setOrderData] = useState([]);
    const [sales, setSales] = useState([]);

    const [chartData, setChartData] = useState([
        { x: "Jan", y: 0 },
    ]);

    const updateData = (newData) => {
        setData(newData);
    }

    const updateChartData = (newChartData) => {
        setChartData(newChartData);
    }

    useEffect(() => {
        if (auth) {

            axios.post(`${API_URL}/vendor/getProducts`, {
                id: user.id
            }).then(res => {
                updateData(res.data);
                console.log(res.data);
                let chartData = res.data.slice(0, 10).map(item => {
                    return {
                        products: item.id,
                        sale: item.numberOfProducts,
                        label: item.numberOfProducts
                    }
                })

                updateChartData(chartData);
                setLoading(false);
            }
            ).catch(err => {
                console.log(err)
            }
            )


            axios.post(`${API_URL}/vendor/getProducts/ordered`, {
                id: user.id
            }).then(res => {
                setOrderData(res.data)

                const ammoutArray = res.data.map(item => {
                    return item.amount;
                })

                const totalAmount = ammoutArray.reduce((a, b) => a + b, 0);

                setSales(totalAmount);


            }
            ).catch(err => {
                console.log(err)
            }
            )
        }

        return () => {
            setLoading(true);
        }


    }, [auth, user])

    if (loading) {
        return null;
    }

    return (
        <div className='retailer_dashboard'>
            <div className='count_card'>
                <p className='card_content'>{orderData.length}</p>
                <p className='card_label'>Orders Placed</p>
            </div>
            <div className='count_card'>
                <p className='card_content'>{data.length}</p>
                <p className='card_label'>Number of Products</p>
            </div>
            <div className='count_card'>
                <p className='card_content'>{sales}</p>
                <p className='card_label'>Sales</p>
            </div>
            <div className='graph_card'>
                {/* <p className='card_label'>Sale</p> */}

                <div className='card_graph'>
                    <VictoryChart
                        domainPadding={60}
                        theme={VictoryTheme.material}
                        width={800}
                        height={500}
                    >
                        <VictoryAxis

                            tickFormat={(x) => `${x}`}

                        />
                        <VictoryAxis

                            dependentAxis
                            tickFormat={(x) => `${x}`}
                        />
                        <VictoryBar
                            style={{ data: { fill: "#7877cc" } }}
                            alignment="center"
                            data={chartData}
                            x="products"
                            y="sale"
                        />
                    </VictoryChart>
                </div>
            </div>

            <div className='user_card'>
                <Profile updateSelected={updateSelected} />
            </div>
        </div>
    )
}
