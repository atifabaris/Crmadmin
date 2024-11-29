import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ConditionsRule from '../conditionsRules/ConditionsRule';
import ActionsRules from '../actionsRules/ActionsRules';

function NewRulesTab() {
  return (
    <Tabs
      defaultActiveKey="If"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="If" title="If">
      <ConditionsRule />
      </Tab>
      <Tab eventKey="Else" title="Else">
        <ActionsRules />
      </Tab>
    </Tabs>
  );
}

export default NewRulesTab;