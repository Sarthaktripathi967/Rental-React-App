import React, { useState } from "react";

const WeeklyCalendar = () => {
  // Sample event data with types
  const allEventsData = [
    { name: "Control Items", type: "Business", occurrences: [0, 98, 99, 99, 98, 98, 98] },
    { name: "Decon Systems", type: "Public", occurrences: [0, 361, 361, 361, 361, 361, 361] },
    { name: "Drone Software", type: "Private", occurrences: [0, 100, 100, 100, 100, 100, 100] },
    { name: "Drones", type: "Business", occurrences: [0, 36, 36, 36, 36, 36, 36] },
  ];

  // State for current week and date range
  const [currentDate, setCurrentDate] = useState(new Date()); // Current date
  const [filterType, setFilterType] = useState("All"); // State for event filter

  // Filtered events based on selected type
  const filteredEventsData =
    filterType === "All"
      ? allEventsData
      : allEventsData.filter((event) => event.type === filterType);

  // Calculate start and end of the current week
  const getWeekDates = (date) => {
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay()); // Move to Sunday
    const weekDates = Array(7)
      .fill(0)
      .map((_, i) => {
        const day = new Date(startOfWeek);
        day.setDate(startOfWeek.getDate() + i); // Add days to get the full week
        return day;
      });
    return weekDates;
  };

  const weekDates = getWeekDates(currentDate);

  // Handlers for navigation
  const handlePreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  // Handler for selecting a specific month
  const handleMonthChange = (e) => {
    const [year, month] = e.target.value.split("-");
    const newDate = new Date(year, month - 1, 1); // Set to the first day of the selected month
    setCurrentDate(newDate);
  };

  // Handler for event type filter
  const handleFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <div className="weekly-calendar">
      {/* Navigation */}
      <div className="navigation">
        <button onClick={handlePreviousWeek}>&lt;</button>
        <span>
          Week of {weekDates[0].toLocaleDateString()} -{" "}
          {weekDates[6].toLocaleDateString()}
        </span>
        <button onClick={handleNextWeek}>&gt;</button>
      </div>

      {/* Month Selector */}
      <div className="month-selector">
        <label htmlFor="month">Select Month: </label>
        <input
          type="month"
          id="month"
          onChange={handleMonthChange}
          value={`${currentDate.getFullYear()}-${String(
            currentDate.getMonth() + 1
          ).padStart(2, "0")}`}
        />
      </div>

      {/* Event Type Filter */}
      <div className="filter">
        <label htmlFor="filter">Filter by Type: </label>
        <select id="filter" onChange={handleFilterChange} value={filterType}>
          <option value="All">All</option>
          <option value="Private">Private</option>
          <option value="Public">Public</option>
          <option value="Business">Business</option>
        </select>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th></th>
            {weekDates.map((date, index) => (
              <th key={index}>
                {date.toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "numeric" })}
                <br />
                {date.toLocaleDateString("en-US", { weekday: "long" })}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredEventsData.map((event, eventIndex) => (
            <tr key={eventIndex}>
              <td>{event.name}</td>
              {event.occurrences.map((occurrence, dayIndex) => (
                <td
                  key={dayIndex}
                  className={occurrence === 0 ? "empty" : "available"}
                >
                  {occurrence || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Styles */}
      <style jsx>{`
        .weekly-calendar {
          font-family: Arial, sans-serif;
          width: 100%;
          margin: 20px 0;
        }
        .navigation {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .month-selector,
        .filter {
          margin-bottom: 10px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #ccc;
        }
        th,
        td {
          text-align: center;
          padding: 8px;
          border: 1px solid #ccc;
        }
        th {
          background: #f5f5f5;
        }
        .available {
          background: #d4edda;
        }
        .empty {
          background: #f5f5f5;
        }
      `}</style>
    </div>
  );
};

export default WeeklyCalendar;
