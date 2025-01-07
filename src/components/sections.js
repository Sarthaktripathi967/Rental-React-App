import React, { useState } from "react";
import clearFields from "../utils/clearFields";
import searchItems from "../utils/searchItems";

const LeftSection = () => {

    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
      setShowMore(!showMore);
    };

  return (
    <div className="left-section">
      <div className="box-section">
        <h3>Sales Order Details</h3>
        <div className="field-container">
          <div className="field">
            <label><b>Transaction Type:</b></label>
            <select id="type">
              <option>Rental Agreement</option>
              <option>Rental Order</option>
              <option>Sales Order</option>
            </select>
          </div>
          <div className="field">
            <label><b>Customer:</b></label>
            <select id="customer">
              <option>Customer A</option>
              <option>Customer B</option>
              <option>Customer C</option>
            </select>
          </div>
          <div className="field">
            <label><b>Date:</b></label>
            <input type="date" id="date" defaultValue={new Date().toISOString().substring(0, 10)} />
          </div>
          <div className="field">
            <label><b>Duration:</b></label>
            <input type="number" id="duration" min="1" step="1" />
          </div>
          {showMore && (
            <>
              <div className="field">
                <label><b>Discount:</b></label>
                <input type="text" id="discount" />
              </div>
              <div className="field">
                <label><b>Shipping Method:</b></label>
                <input type="text" id="shippingMethod" />
              </div>
              <div className="field">
                <label><b>Special Instructions:</b></label>
                <input type="text" id="specialInstructions" />
              </div>
            </>
          )}
        </div>
        <span
            className="show-more-link"
            onClick={handleShowMore}
            style={{ cursor: 'pointer', color: '#3399ff', textDecoration: 'none' }}
          >
            {showMore ? "^ Show Less" : "> Show More"}
          </span>
        <p className="clear-fields">
          <a href="#" onClick={clearFields}>Clear Data</a>
        </p>
      </div>
      <div className="box-section">
        <h3>Order Status</h3>
        <div class="table-wrapper">
        <table className="order-status">
          <tbody>
            <tr>
              <td>Land</td>
              <td>Trimble</td>
              <td>12 Gauge</td>
              <td>Pet Bottle</td>
              <td>Land</td>
              <td>Trimble</td>
              <td>12 Gauge</td>
              <td>Pet Bottle</td>
              <td>Land</td>
              <td>Trimble</td>
              <td>12 Gauge</td>
              <td>Pet Bottle</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      <div className="box-section">
        <h3>Items</h3>
        <div className="item-search-bar">
          <input type="text" id="itemSearch" placeholder="Type to add an item" />
          <select id="categoryFilter">
            <option value="">Select Collection</option>
            <option value="Category 1">Collection 1</option>
            <option value="Category 2">Collection 2</option>
          </select>
          <button onClick={searchItems}>Search</button>
        </div>
        <table className="sublist">
          <thead>
            <tr>
              <th>ITEM</th>
              <th>QUANTITY</th>
              <th>RATE</th>
              <th>DISCOUNT</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td><input type="number" defaultValue="1" /></td>
              <td><input type="number" defaultValue="100" /></td>
              <td><input type="number" defaultValue="10" /></td>
              <td>$90.00</td>
            </tr>
            <tr>
              <td>Item 2</td>
              <td><input type="number" defaultValue="1" /></td>
              <td><input type="number" defaultValue="100" /></td>
              <td><input type="number" defaultValue="20" /></td>
              <td>$80.00</td>
            </tr>
            <tr>
              <td>Item 3</td>
              <td><input type="number" defaultValue="1" /></td>
              <td><input type="number" defaultValue="100" /></td>
              <td><input type="number" defaultValue="30" /></td>
              <td>$70.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="right-section">
      <div>
        <h3>Item Search</h3>
        <div className="filter-section">
          <label>Search:</label>
          <input type="text" id="itemSearch" placeholder="Enter item name" />
        </div>
        <div className="filter-section">
          <label>Category Filter:</label>
          <select id="categoryFilter">
            <option value="">All</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
          </select>
        </div>
        <div className="filter-section">
          <label>Location Filter:</label>
          <select id="locationFilter">
            <option value="">All</option>
            <option value="Location 1">Location 1</option>
            <option value="Location 2">Location 2</option>
          </select>
        </div>
        <div class="vertical-table-wrapper">
        <table className="item-search">
          <tbody>
            <tr>
              <td>Land</td>
              <td>Trimble</td>
            </tr>
            <tr>
              <td>12 Gauge</td>
              <td>Pet Bottle</td>
            </tr>
            <tr>
              <td>Land</td>
              <td>Trimble</td>
            </tr>
            <tr>
              <td>12 Gauge</td>
              <td>Pet Bottle</td>
            </tr>
            <tr>
              <td>Land</td>
              <td>Trimble</td>
            </tr>
            <tr>
              <td>12 Gauge</td>
              <td>Pet Bottle</td>
            </tr>
          </tbody>
        </table>
        </div>
        <button onClick={searchItems}>Search</button>
      </div>
    </div>
  );
};

const Sections = () => {
  return (
    <div className="container">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Sections;
