import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StandardFields from './standardFields/StandardFields';
import CustomRules from './customRules/CustomRules';

function CustomField() {
  return (
    <Tabs
      defaultActiveKey="Field"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Field" title="Field">
        <StandardFields />
      </Tab>
      <Tab eventKey="Rules" title="Rules">
        <CustomRules />
      </Tab>
    </Tabs>
  );
}

export default CustomField;