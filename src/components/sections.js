import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import clearFields from "../utils/clearFields";
import searchItems from "../utils/searchItems";
import { Sidenav, Nav, Toggle } from "rsuite";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import CalendarIcon from '@rsuite/icons/Calendar';
import AdminIcon from '@rsuite/icons/Admin';
import GridIcon from '@rsuite/icons/Grid';
import PieChartIcon from '@rsuite/icons/PieChart';
import PageIcon from '@rsuite/icons/Page';
import "../style/sections.css";
import {
  Button,
  Modal,
  Grid,
  Col,
  Row,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Space,
} from "antd";


const { TextArea } = Input;
const LeftSection = () => {

    const [showMore, setShowMore] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };
    const handleShowMore = () => {
      setShowMore(!showMore);
    };
    const editRow = (rowId) => {
    };
    

  return (
    <div className="left-section">
      <Modal
        title="Edit Item"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="inside-modal">
          <Row gutter={[16, 16]}>
            <Col span={18}>
              <Row>
                <Col span={24}>
                  <label className="field-label">
                    Item Name <span className="required">*</span>
                  </label>
                  <Input
                    className="custom-input"
                    disabled={true}
                    placeholder="Basic usage"
                  />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <label className="field-label">
                    Label <span className="required">*</span>
                  </label>
                  <Input className="custom-input" placeholder="Basic usage" />
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <label className="field-label">
                    Location <span className="required">*</span>
                  </label>
                  <Select
                    defaultValue="lucy"
                    className="custom-select"
                    allowClear
                    options={[{ value: "lucy", label: "Lucy" }]}
                    placeholder="Select it"
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col span={8}>
                  <label className="field-label">
                    Rental Start Date <span className="required">*</span>
                  </label>
                  <Input type="date" className="custom-input" />
                </Col>
                <Col span={8}>
                  <label className="field-label">
                    Rental End Date <span className="required">*</span>
                  </label>
                  <Input type="date" className="custom-input" />
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <label className="field-label">
                    Price Level <span className="required">*</span>
                  </label>
                  <Select
                    defaultValue="daily"
                    className="custom-select"
                    allowClear
                    options={[
                      { value: "daily", label: "daily" },
                      { value: "monthly", label: "Monthly" },
                      { value: "Weekly", label: "weekly" },
                    ]}
                    placeholder="Select it"
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col span={12}>
                  <label className="field-label">Duration</label>
                  <Input
                    disabled="true"
                    className="custom-input"
                    placeholder="0"
                  />
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <label className="field-label">Planned Ship Date </label>
                  <Input type="date" className="custom-input" />
                </Col>
                <Col span={12}>
                  <label className="field-label">Planned Return Date </label>
                  <Input type="date" className="custom-input" />
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <label className="field-label">Installation Start </label>
                  <Input type="date" className="custom-input" />
                </Col>
                <Col span={12}>
                  <label className="field-label">Pickup/Removal End </label>
                  <Input type="date" className="custom-input" />
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <label className="field-label">Pre-discount Rate </label>
                  <Input type="number" className="custom-input" />
                </Col>
                <Col span={6}>
                  <label className="field-label">Quantity</label>
                  <InputNumber
                    className="custom-input"
                    min={1}
                    defaultValue={1}
                    style={{ width: "100%" }}
                    controls
                  />
                </Col>
                <Col span={6}>
                  <label className="field-label">Discount</label>
                  <InputNumber
                    className="custom-input"
                    min={0}
                    defaultValue={1}
                    style={{ width: "100%" }}
                    controls
                  />
                </Col>
              </Row>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <label className="field-label">Amount</label>
                  <InputNumber
                    className="custom-input"
                    min={1}
                    defaultValue={1}
                    style={{ width: "100%" }}
                    controls
                  />
                </Col>
                <Col span={6}>
                  <label className="field-label">Custom Logistics</label>
                  <Switch defaultChecked />
                </Col>
              </Row>
            </Col>
            <Col span={6}>
              <Row>
                <Col span={24}>
                  <label className="field-label">Invoice Notes</label>
                  <TextArea rows={4} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <label className="field-label">Pull Sheet Notes</label>
                  <TextArea rows={4} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <label className="field-label">Work Order Notes</label>
                  <TextArea rows={4} />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Modal>
      <h2 className="heading-section">Rental Entry</h2>
      <br/><br/>
      <div className="box-section" style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
  {/* Left Side */}
  <div className="field-container" style={{ flex: 4 }}>
    <div className="field2">
      <label><b>Transaction Type:</b></label>
      <select id="type">
        <option>Rental Agreement</option>
        <option>Rental Order</option>
        <option>Sales Order</option>
      </select>
    </div>
    <div className="field0">
      <label><b>Customer:</b></label>
      <select id="customer">
        <option>Customer A</option>
        <option>Customer B</option>
        <option>Customer C</option>
      </select>
    </div>
    <div className="field1">
      <label><b>Project:</b></label>
      <input type="text" id="project" />
    </div>
    <div className="field1">
      <label><b>Category:</b></label>
      <input type="text" id="category" />
    </div>
    <div className="field1">
      <label><b>Transaction Date:</b></label>
      <input type="date" id="transactionDate" defaultValue={new Date().toISOString().substring(0, 10)} />
    </div>
    {showMore && (
      <>
        <div className="field1">
      <label><b></b></label>
    </div>
    <div className="field1">
      <label><b>Subsidiary:</b></label>
      <input type="text" id="subsidiary" />
    </div>
    <div className="field1">
      <label><b>Location:</b></label>
      <input type="text" id="location" />
    </div>
    <div className="field_full_width">
      <label><b>Primary Contact:</b></label>
      <input type="text" id="primaryContact" />
    </div>
    <div className="field_full_width">
      <label><b>Shipping Address:</b></label>
      <select id="shipaddress">
        <option>Address1</option>
        <option>Address2</option>
        <option>Address3</option>
      </select>
    </div>
      </>
    )}
  </div>
  

  {/* Vertical Divider */}
  <div style={{ borderLeft: '1px solid black', margin: '0 10px' }}></div>

  {/* Right Side */}
  <div className="field-container" style={{ flex: 5 }}>
    <div className="field2">
      <label><b>Start Date:</b></label>
      <input type="date" id="startDate" />
    </div>
    <div className="field2">
      <label><b>End Date:</b></label>
      <input type="date" id="endDate" />
    </div>
    <div className="field_small_bar">
      <label><b>Duration:</b></label>
      <input type="number" id="duration" min="1" step="1" />
    </div>
    <div className="field2">
      <label><b>Planned Ship Date:</b></label>
      <input type="date" id="plannedShipDate" />
    </div>
    <div className="field2">
      <label><b>Planned Return Date:</b></label>
      <input type="date" id="plannedReturnDate" />
    </div>
    <div className="field2">
      <label><b>Installation Start:</b></label>
      <input type="date" id="installationStart" />
    </div>
    <div className="field2">
      <label><b>Installation End:</b></label>
      <input type="date" id="installationEnd" />
    </div>
    {showMore && (
      <>
        <div className="field2">
      <label><b>Event Start:</b></label>
      <input type="date" id="eventStart" />
    </div>
    <div className="field2">
      <label><b>Event End:</b></label>
      <input type="date" id="eventEnd" />
    </div>
    <div className="field2">
      <label><b>Pickup/Removal Start:</b></label>
      <input type="date" id="pickupremovalStart" />
    </div>
    <div className="field2">
      <label><b>Pickup/Removal End:</b></label>
      <input type="date" id="pickupremovalEnd" />
    </div>
    <div className="field_full_width_wider">
      <label><b>Billing Address:</b></label>
      <select id="billaddress">
        <option>Address1</option>
        <option>Address2</option>
        <option>Address3</option>
      </select>
    </div>
      </>
    )}
  </div>
</div>

{/* Show More / Clear Data Links */}
<span
  className="show-more-link"
  onClick={handleShowMore}
  style={{ cursor: 'pointer', color: '#3399ff', textDecoration: 'none' }}
>
  {showMore ? "^ Show Less" : "> Show More"}
</span>
<p className="clear-fields">
  <a href="#">Clear Data</a>
  {/* <a href="#" onClick={clearFields}>Clear Data</a> */}
</p>

      <div className="box-section">
        <h3>Order Shortcuts</h3>
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
      <td>Item 1 <Button color="default" variant="text" onClick={showModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </Button></td>
      <td><input type="number" defaultValue="1" /></td>
      <td><input type="number" defaultValue="100" /></td>
      <td><input type="number" defaultValue="10" /></td>
      <td>$90.00</td>
    </tr>
    <tr>
      <td>Item 2 <Button color="default" variant="text" onClick={showModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </Button></td>
      <td><input type="number" defaultValue="1" /></td>
      <td><input type="number" defaultValue="100" /></td>
      <td><input type="number" defaultValue="20" /></td>
      <td>$80.00</td>
    </tr>
    <tr>
      <td>Item 3 <Button color="default" variant="text" onClick={showModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </Button></td>
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
        <h3>Rental Catalogue</h3>
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

const SideNavigationBar = () => {
  const [activeKey, setActiveKey] = useState("1");

  const navigate = useNavigate();
  const navigateToWeeklyCalendar = () => {
    navigate("/calendar");
  };
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };


  return (
    <div className="side_navigation_bar">
      <Sidenav>
        <Sidenav.Body>
          <Nav activeKey={activeKey} onSelect={setActiveKey} className="custom-nav" >
            <Nav.Item eventKey="1" icon={<GridIcon />} />
            <Nav.Item eventKey="2" icon={<PieChartIcon />} onClick={navigateToDashboard} />
            <Nav.Item icon={<CalendarIcon />} onClick={navigateToWeeklyCalendar} />
            <Nav.Item eventKey="4" icon={<PageIcon />} />
            <Nav.Item eventKey="5" icon={<AdminIcon />} />
            <Nav.Item eventKey="6" icon={<GearCircleIcon />} />
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};


const Sections = () => {
  return (
      <div className="container" style={{ flex: 1, padding: "2px" }}>
        <SideNavigationBar />
        <LeftSection />
        <RightSection />
      </div>
  );
};

export default Sections;
