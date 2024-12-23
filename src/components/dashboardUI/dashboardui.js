import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";

const KeyValuePair = ({ label, value }) => (
  <div className="d-flex justify-content-between mb-2">
    <strong>{label}</strong>
    <span>{value}</span>
  </div>
);

function Dashboarduser() {
  const deviceInfo = {
    "Device Name": "Mi 11 Ultra",
    "Device Model": "Mi 11 Ultra",
    "OS Version": "11",
    "Version": "7.2.5",
  };

  const subscriptionInfo = {
    Product: "Android",
    "Subscription type": "Premium",
    "Expiration date": "Sep 30, 2024",
  };

  const deviceStatus = {
    battery: {
      icon: "fa-battery-full",
      value: "90%",
      color: "text-success",
    },
    wifi: {
      icon: "fa-wifi",
      value: "On",
      color: "text-primary",
    },
    network: {
      icon: "fa-signal",
      value: "Off",
      color: "text-danger",
    },
  };

  const topCallingContacts = [
    {
      name: "Chris Monet",
      phone: "567-891-786",
      times: 4,
      progress: 60,
      variant: "success",
    },
    {
      name: "Klaus Football",
      phone: "234-567-890",
      times: 4,
      progress: 45,
      variant: "info",
    },
    {
      name: "Dad",
      phone: "789-012-345",
      times: 4,
      progress: 75,
      variant: "warning",
    },
  ];

  const topMessagingContacts = [
    {
      name: "Metty",
      phone: "345-678-901",
      times: 6,
      progress: 85,
      variant: "success",
    },
    {
      name: "Kate",
      phone: "456-789-012",
      times: 10,
      progress: 65,
      variant: "info",
    },
    {
      name: "Harry",
      phone: "567-890-123",
      times: 14,
      progress: 95,
      variant: "warning",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="mb-4 fw-bold">Dashboard</h1>

      <div className="row d-flex justify-content-between align-items-center mb-4">
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-lg">
            <ListGroup className="h-100">
              <ListGroup.Item variant="dark" className="bg-dark p-1">
                <h4 className="text-light">Android</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="card-body" style={{ height: "220px" }}>
                  {Object.entries(subscriptionInfo).map(([key, value]) => (
                    <KeyValuePair key={key} label={key} value={value} />
                  ))}
                  <div className="mt-5 pt-3 border-top d-flex justify-content-center">
                    <button className="btn btn-success w-100 px-5 py-2">
                      EXTEND SUBSCRIPTION
                    </button>
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-lg">
            <ListGroup className="h-100">
              <ListGroup.Item variant="dark" className="bg-dark p-1">
                <h4 className="text-light">Target device info</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                {Object.entries(deviceInfo).map(([key, value]) => (
                  <KeyValuePair key={key} label={key} value={value} />
                ))}
                <div className="row mt-3 text-center">
                  {Object.entries(deviceStatus).map(
                    ([key, { icon, value, color }]) => (
                      <div key={key} className="col-4">
                        <div
                          className="p-3 border rounded shadow-sm bg-light"
                          style={{ minHeight: "100px" }}
                        >
                          <i className={`fas ${icon} ${color} fa-2x mb-2`}></i>
                          <div className="fw-bold">{value}</div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <ListGroup className="card shadow-lg">
            <ListGroup.Item variant="dark" className="bg-dark p-1">
              <h4 className="text-light">Location</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="row">
                <div className="col-md-5">
                  <p>
                    New York, Manhattan, New York, United States, New York
                    County, 1, 10009, First Avenue Loop, New York, NY
                  </p>
                  <p>
                    Chicago, Chicago, United States, Cook County, Lake View
                    Township, 60613, North Southport Avenue, Illinois, IL, Lake
                    View
                  </p>
                  <p>
                    Chicago, Chicago, United States, Cook County, 2018, Lake
                    View Township, 60618, West Addison Street, Illinois, IL,
                    North Center
                  </p>
                </div>
                <div className="col-md-7">
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ height: "300px" }}
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.97381132898!2d77.2637732812674!3d28.57054911303927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3975705942f%3A0xd1e623ab9c79ee2f!2sNamberdar%20estate%2C%2098-B%2C%20Navjivan%20Buddh%20Vihar%2C%20Taimoor%20Nagar%2C%20New%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi%20110064!5e0!3m2!1sen!2sin!4v1734528428042!5m2!1sen!2sin"
                      width={1500}
                      height={300}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-4">
          <ListGroup className="card shadow-lg h-100">
            <ListGroup.Item variant="dark" className="bg-dark p-1">
              <h4 className="text-light">Top visited websites</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <p className="mb-2">
                <strong>NY Times</strong> <br />
                <span className="text-muted">www.nytimes.com</span>
                <span className="float-end">45 times</span>
                <ProgressBar
                  now={75}
                  variant="success"
                  className="mt-1"
                  style={{ height: "4px" }}
                />
              </p>
              <p>
                <strong>YouTube</strong> <br />
                <span className="text-muted">www.youtube.com</span>
                <span className="float-end">32 times</span>
                <ProgressBar
                  now={60}
                  variant="info"
                  className="mt-1"
                  style={{ height: "4px" }}
                />
              </p>
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="col-md-4 mb-4">
          <ListGroup className="card shadow-lg h-100">
            <ListGroup.Item variant="dark" className="bg-dark p-1">
              <h4 className="text-light">Top calling contacts</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              {topCallingContacts.map((contact, index) => (
                <p key={index} className="mb-2">
                  {contact.name}{" "}
                  <span className="float-end">{contact.times} times</span>
                  <small className="d-block text-muted">{contact.phone}</small>
                  <ProgressBar
                    now={contact.progress}
                    variant={contact.variant}
                    className="mt-1"
                    style={{ height: "4px" }}
                  />
                </p>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </div>

        <div className="col-md-4 mb-4">
          <ListGroup className="card shadow-lg h-100">
            <ListGroup.Item variant="dark" className="bg-dark p-1">
              <h4 className="text-light">Top messaging contacts</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              {topMessagingContacts.map((contact, index) => (
                <p key={index} className="mb-2">
                  {contact.name}{" "}
                  <span className="float-end">{contact.times} times</span>
                  <small className="d-block text-muted">{contact.phone}</small>
                  <ProgressBar
                    now={contact.progress}
                    variant={contact.variant}
                    className="mt-1"
                    style={{ height: "4px" }}
                  />
                </p>
              ))}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default Dashboarduser;
