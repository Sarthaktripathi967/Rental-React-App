import React from 'react';
// import RentCalendar from './rentCalendar';
// import { DownOutlined } from '@ant-design/icons';
// import { Dropdown, Space } from 'antd';
import WeeklyCalendar from './weeklyCalendar';


const RentCalendarPortal = () => {
    return (
        <div className="rent-calendar-portal">
            <header className="header">
                <h3>Available to Rent Calendar</h3>
            </header>
            <div className="main-filter" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <select>
                    <option value="itemCategory">Item Category</option>
                    <option value="rentableItem">Rentable Itme</option>
                    <option value="location">Location</option>
                    <option value="status">Status</option>
                    <option value="subsidiary">Subsidiary</option>
                </select>
                {/* <Filter /> */}

                <input type="text" placeholder="Search..." />
            </div>
            <div>
                <WeeklyCalendar />
            </div>
        </div>
    );
};


export default RentCalendarPortal;