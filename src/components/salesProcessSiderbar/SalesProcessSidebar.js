import React, { useState } from "react";

// Import the content components
import SalesStages from "./salesStages/SalesStages";
import Accounts from "./accounts/Accounts";
import { Tabs } from "antd";
// import Contacts from './Contacts';
// import Opportunities from './Opportunities';
// import SalesQuotes from './SalesQuotes';
// import SalesOrders from './SalesOrders';
// import Product from './Product';
// import DeliveryNote from './DeliveryNote';
// import Invoice from './Invoice';
// import Receipt from './Receipt';
// import RecurringInvoice from './RecurringInvoice';

const SalesProcessSidebar = () => {
  const data = [
    {
      label: "Sales Stages",
      compo: <SalesStages />,
    },
    {
      label: "Account",
      compo: <Accounts />,
    },
    {
      label: "Contacts",
      compo: <Accounts />,
    },
    {
      label: "Opportunities",
      compo: <Accounts />,
    },
    {
      label: "Sales Quotes",
      compo: <Accounts />,
    },
    {
      label: "Sales Orders",
      compo: <Accounts />,
    },
    {
      label: "Product",
      compo: <Accounts />,
    },
    {
      label: "Delivery Note",
      compo: <Accounts />,
    },
    {
      label: "Invoice",
      compo: <Accounts />,
    },
    {
      label: "Receipt",
      compo: <Accounts />,
    },
    {
      label: "Recurring Invoice",
      compo: <Accounts />,
    },
  ];
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}

      {/* Content Area */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h4 className="fs-4">Sales Process</h4>
        <Tabs
          defaultActiveKey="1"
          tabPosition={"left"}
          style={{
            height: 220,
          }}
          items={data.map((item, i) => {
            const id = String(i);
            return {
              label: `${item.label}`,
              key: id,
              disabled: i === 28,
              children: item.compo,
            };
          })}
        />
      </div>
    </div>
  );
};

export default SalesProcessSidebar;
