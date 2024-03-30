import { Steps } from 'antd';
import '../assets/css/steps.css'


const Step = ({curentpage}) => (
  <Steps
    direction="vertical"
    current={curentpage}
    items={[
      {
        title: 'Creation of mission',
      },
      {
        title: 'Creation of project ',
      },
      {
        title: 'well done ',
      },
    ]}
  />
);
export default Step;