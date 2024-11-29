
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PropertiesApction from '../propertiesApction/PropertiesApction';
import MassageAction from '../massageAction/MassageAction';
import AlertsAction from '../alertsAction/AlertsAction';
import FormatAction from '../formatAction/FormatAction';

function ActionsRules() {
  return (
    <Tabs
      defaultActiveKey="Properties"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Properties" title="Properties">
        <PropertiesApction />
      </Tab>
      <Tab eventKey="Messaging" title="Messaging">
        <MassageAction />
      </Tab>
      <Tab eventKey="Alerts" title="Alerts">
        <AlertsAction />
      </Tab>
      <Tab eventKey="Formatting" title="Formatting">
        <FormatAction />
      </Tab>
    </Tabs>
  );
}

export default ActionsRules;