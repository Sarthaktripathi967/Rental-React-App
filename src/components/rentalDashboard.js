import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import ProfitGraphIcon from "../resources/profit-graph.png";
import LossGraphIcon from "../resources/loss-graph.png";
import ExchangeIcon from "../resources/exchange.png";

const rentalRevenueData = [
    { name: "April", Income: 10000, Expense: 20000 },
    { name: "May", Income: 15000, Expense: 22000 },
    { name: "June", Income: 16000, Expense: 25000 },
    { name: "July", Income: 10000, Expense: 20000 },
    { name: "August", Income: 12000, Expense: 21000 },
    { name: "September", Income: 18000, Expense: 34000 },
    { name: "October", Income: 16000, Expense: 23000 },
    { name: "November", Income: 10000, Expense: 25000 },
    { name: "December", Income: 12000, Expense: 26000 },
    { name: "January", Income: 15000, Expense: 28000 },
    { name: "February", Income: 14000, Expense: 37000 },
    { name: "March", Income: 20000, Expense: 36000 },
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
                                <h4 className="panel-title">Rental Revenue</h4>
                                <p className="panel-subtitle">Overview of April 2024-March 2025</p>
                                <h2>
                                    <p className="numbers-statistics">$567,980 USD<img src={ExchangeIcon} alt="exchange-icon" style={{ marginLeft: '8pt', width: '25px', height: '25px' }} /></p> 
                                </h2>
                                <p className="positive-change numbers-statistics-footer">↑ 7.9%</p>
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
                                <h4 className="panel-title">Rental Orders</h4>
                                <p className="panel-subtitle">Overview of April 2024-March 2025</p>
                                <h2>
                                    <p className="numbers-statistics">1579</p>
                                </h2>
                                <p className="negative-change numbers-statistics-footer">↓ 14.5%</p>
                            </td>
                            <td align="right"><img src={LossGraphIcon} alt="graph-icon" style={{ width: '80px', height: '80px' }} /></td>
                        </tr>
                    </table>
                </div>

                {/* Invoice Status */}
                <div className="card">
                    <h4 className="panel-title">Invoice Status</h4>
                    <p className="panel-subtitle">Last 30 Days</p>
                    <br />
                    <table style={{ width: '100%' }}>
                        <tr>
                            <td className="numbers-statistics">$25,876 USD <img src={ExchangeIcon} alt="exchange-icon" style={{ width: '25px', height: '25px' }} /></td>
                            <td className="numbers-statistics">$5,876 USD <img src={ExchangeIcon} alt="exchange-icon" style={{ width: '25px', height: '25px' }} /></td>
                        </tr>
                        <tr>
                            <td className="numbers-statistics-footer">Paid invoice</td>
                            <td className="numbers-statistics-footer">Open invoice</td>
                        </tr>
                    </table>
                </div>

                {/* Rental Orders (Week) */}
                <div className="card">
                    <h4 className="panel-title">Rental Orders (Week)</h4>
                    <p className="panel-subtitle">Work of Mar 15, 2025</p>
                    <br />
                    <table style={{ width: '45%' }}>
                        <tr>
                            <td className="numbers-statistics">14</td>
                            <td className="numbers-statistics">3</td>
                        </tr>
                        <tr>
                            <td className="numbers-statistics-footer">Delivery</td>
                            <td className="numbers-statistics-footer">Pickup</td>
                        </tr>
                    </table>
                </div>

                {/* Reservations */}
                <div className="card-short">
                    <h4 className="panel-title">Reservations</h4>
                    <p className="panel-subtitle">Week of Mar 17, 2025</p>
                    <h2 className="numbers-statistics">$0 USD <img src={ExchangeIcon} alt="exchange-icon" style={{ width: '25px', height: '25px' }} /></h2>
                </div>

                {/* Orders to Ship */}
                <div className="card-short">
                    <h4 className="panel-title">Orders to Ship</h4>
                    <p className="panel-subtitle">Week of Mar 17, 2025</p>
                    <h2 className="numbers-statistics">$12,685 USD <img src={ExchangeIcon} alt="exchange-icon" style={{ width: '25px', height: '25px' }} /></h2>
                </div>

                {/* Overdue Items */}
                <div className="card-short">
                    <h4 className="panel-title">Overdue Items</h4>
                    <p className="panel-subtitle">
                        Count: <strong>3</strong>
                    </p>
                    <div className="action-button">Reach Out to Customers</div>
                    {/* <button className="action-button">Reach Out to Customers</button> */}
                </div>

                {/* Orders to Invoice */}
                <div className="card-short">
                    <h4 className="panel-title">Orders to Invoice</h4>
                    <p className="panel-subtitle">
                        Count: <strong>24</strong>
                    </p>
                    <div className="action-button">Invoicing Dashboard</div>
                </div>


                <div className="card">
                    <h4 className="panel-title">Calendar Events</h4>
                    <table style={{ width: '100%' }}>
                        <tr>
                            <td>
                                <table>
                                    <tr>
                                        <th className="numbers-statistics-footer">Mar 17</th>
                                    </tr>
                                    <tr style={{ height: '100px', verticalAlign: 'top' }}>
                                        <td className="numbers-statistics-footer">Invoice Due - M234</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <th className="numbers-statistics-footer">Mar 17</th>
                                    </tr>
                                    <tr style={{ height: '100px', verticalAlign: 'top' }}>
                                        <td className="numbers-statistics-footer">Invoice Due - M223</td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table>
                                    <tr>
                                        <th className="numbers-statistics-footer">Mar 17</th>
                                    </tr>
                                    <tr style={{ height: '100px', verticalAlign: 'top' }}>
                                        <td className="numbers-statistics-footer">Invoice Due - M232</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>

                {/* Rental Revenue Chart */}

                <div className="card-revenue-chart">
                    <h4 className="panel-title">Rental Revenue</h4>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={rentalRevenueData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="Income" fill="#03346E" />
                            <Bar dataKey="Expense" fill="#3DC2EC" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default RentalDashboard;
