import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import ProfitGraphIcon from "../resources/profit-graph.png";
import LossGraphIcon from "../resources/loss-graph.png";
import ExchangeIcon from "../resources/exchange.png";

const rentalRevenueData = [
    { name: "April", Income: 20000, Expense: 10000 },
    { name: "May", Income: 25000, Expense: 12000 },
    { name: "June", Income: 30000, Expense: 15000 },
    { name: "July", Income: 20000, Expense: 10000 },
    { name: "August", Income: 22000, Expense: 11000 },
    { name: "September", Income: 28000, Expense: 14000 },
    { name: "October", Income: 26000, Expense: 13000 },
    { name: "November", Income: 30000, Expense: 15000 },
    { name: "December", Income: 32000, Expense: 16000 },
    { name: "January", Income: 25000, Expense: 18000 },
    { name: "February", Income: 24000, Expense: 17000 },
    { name: "March", Income: 30000, Expense: 16000 },
];

const RentalDashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Rental Dashboard</h1>
            <h2>Customer: Los Angeles Construction Co.</h2>

            <div className="cards">
                {/* Rental Revenue */}
                <div className="card">
                    <table style={{ width: '100%' }}>
                        <tr>
                            <td>
                                <h4>Rental Revenue</h4>
                                <p>Overview of April 2024-March 2025</p>
                                <h2>
                                    <strong>$567,980 USD</strong> <img src={ExchangeIcon} alt="exchange-icon" style={{ width: '25px', height: '25px' }} />
                                </h2>
                                <p className="positive-change">↑ 7.9%</p>
                            </td>
                            <td align="right"><img src={ProfitGraphIcon} alt="graph-icon" style={{ width: '80px', height: '80px' }} /></td>
                        </tr>
                    </table>
                </div>

                {/* Rental Orders */}
                <div className="card">
                    <table style={{ width: '100%' }}>
                        <tr>
                            <td>
                                <h4>Rental Orders</h4>
                                <p>Overview of April 2024-March 2025</p>
                                <h2>
                                    <strong>1579</strong>
                                </h2>
                                <p className="negative-change">↓ 14.5%</p>
                            </td>
                            <td align="right"><img src={LossGraphIcon} alt="graph-icon" style={{ width: '80px', height: '80px' }} /></td>
                        </tr>
                    </table>
                </div>

                {/* Invoice Status */}
                <div className="card">
                    <h4>Invoice Status</h4>
                    <p>Last 30 Days</p>
                    <br />
                    <table style={{ width: '100%' }}>
                        <tr>
                            <td style={{fontSize: '26px', fontWeight: 'bold' }}>$25,876 USD <img src={ExchangeIcon} alt="exchange-icon" style={{ width: '25px', height: '25px' }} /></td>
                            <td style={{fontSize: '26px', fontWeight: 'bold' }}>$5,876 USD <img src={ExchangeIcon} alt="exchange-icon" style={{ width: '25px', height: '25px' }} /></td>
                        </tr>
                        <tr>
                            <td>Paid invoice</td>
                            <td>Open invoice</td>
                        </tr>
                    </table>
                </div>

                {/* Rental Orders (Week) */}
                <div className="card">
                    <h4>Rental Orders (Week)</h4>
                    <p>Work of Mar 15, 2025</p>
                    <br />
                    <table style={{ width: '45%' }}>
                        <tr>
                            <td style={{fontSize: '26px', fontWeight: 'bold' }}>14</td>
                            <td style={{fontSize: '26px', fontWeight: 'bold' }}>3</td>
                        </tr>
                        <tr>
                            <td>Delivery</td>
                            <td>Pickup</td>
                        </tr>
                    </table>
                </div>

                {/* Reservations */}
                <div className="card-short">
                    <h4>Reservations</h4>
                    <p>Week of Mar 17, 2025</p>
                    <h2>$0 USD <img src={ExchangeIcon} alt="exchange-icon" style={{ width: '25px', height: '25px' }} /></h2>
                </div>

                {/* Orders to Ship */}
                <div className="card-short">
                    <h4>Orders to Ship</h4>
                    <p>Week of Mar 17, 2025</p>
                    <h2>$12,685 USD <img src={ExchangeIcon} alt="exchange-icon" style={{ width: '25px', height: '25px' }} /></h2>
                </div>

                {/* Overdue Items */}
                <div className="card-short">
                    <h4>Overdue Items</h4>
                    <p>
                        Count: <strong>3</strong>
                    </p>
                    <div className="action-button">Reach Out to Customers</div>
                    {/* <button className="action-button">Reach Out to Customers</button> */}
                </div>

                {/* Orders to Invoice */}
                <div className="card-short">
                    <h4>Orders to Invoice</h4>
                    <p>
                        Count: <strong>24</strong>
                    </p>
                    <div className="action-button">Invoicing Dashboard</div>
                </div>


                <div className="card">
                    <h4>Calendar Events</h4>
                    <table style={{ width: '100%' }}>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <th>Mar 17</th>
                                    </tr>
                                    <tr style={{ height: '100px', verticalAlign: 'top' }}>
                                        <td>Invoice Due - M234</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <th>Mar 17</th>
                                    </tr>
                                    <tr style={{ height: '100px', verticalAlign: 'top' }}>
                                        <td>Invoice Due - M223</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <th>Mar 17</th>
                                    </tr>
                                    <tr style={{ height: '100px', verticalAlign: 'top' }}>
                                        <td>Invoice Due - M232</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>

                {/* Rental Revenue Chart */}

                <div className="card-revenue-chart">
                    <h4>Rental Revenue</h4>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={rentalRevenueData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Income" fill="#8884d8" />
                            <Bar dataKey="Expense" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default RentalDashboard;
