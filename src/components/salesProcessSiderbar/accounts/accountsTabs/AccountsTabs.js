// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
// import CustomField from './customField/CustomField';

// function AccountsTabs() {
//   return (
//     <Tabs
//       defaultActiveKey="profile"
//       id="fill-tab-example"
//       className="mb-3"
//       fill
//     >
//       <Tab eventKey="custom-field" title="Custom Field">
//         <CustomField />
//       </Tab>
//       <Tab eventKey="page-layouts" title="Page Layouts">
//         Tab content for Profile
//       </Tab>
//       <Tab eventKey="search-layouts" title="Search Layouts">
//         Tab content for Loooonger Tab
//       </Tab>
//       <Tab eventKey="print-template" title="Print Template">
//         Tab content for Contact
//       </Tab>
//       <Tab eventKey="authorization" title="Authorization">
//         Tab content for Contact
//       </Tab>
//       <Tab eventKey="workflow" title="Workflow">
//         Tab content for Contact
//       </Tab>
//     </Tabs>
//   );
// }

// export default AccountsTabs;


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CustomField from './customField/CustomField';
import PageLayout from './pageLayout/PageLayout';
import SearchLayout from './searchLayout/SearchLayout';
import Authorization from './athorization/Authorization';
import WorkFlow from './workFlow/WorkFlow';

function AccountsTabs() {
  return (
    <Tabs
      defaultActiveKey="custom-field" // Set to "custom-field" to make it active initially
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="custom-field" title="Custom Field">
        <CustomField />
      </Tab>
      <Tab eventKey="page-layouts" title="Page Layouts">
        <PageLayout />
      </Tab>
      <Tab eventKey="search-layouts" title="Search Layouts">
        <SearchLayout />
      </Tab>
      <Tab eventKey="print-template" title="Print Template">
        Tab content for Contact
      </Tab>
      <Tab eventKey="authorization" title="Authorization">
        <Authorization />
      </Tab>
      <Tab eventKey="workflow" title="Workflow">
        <WorkFlow />
      </Tab>
    </Tabs>
  );
}

export default AccountsTabs;
