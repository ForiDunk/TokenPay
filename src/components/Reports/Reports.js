import React from 'react';
import Card from '../ui/Card/Card';
import Divider from '../ui/Divider/Divider';
import Report from './Report/Report';
import ReportsNav from './ReportsNav/ReportsNav';
import { isBrowser } from 'react-device-detect';
import './Reports.css';

// normally this is a table with css grid or similar
// was running out of time and chosen to finnish it like this

const Reports = () => {
  let reportsList = [];
  for (let i = 0; i < 10; i++) {
    reportsList.push(<Report key={i} index={i} />);
  }
  return (
    <div className="reports">
      <Card>
        <ReportsNav />
        <Divider />
        {isBrowser ? (
          <div className="reports__header">
            <span className="reports__hash">Hash</span>
            <span className="reports__height">Height</span>
            <span className="reports__recipients">Recipients</span>
            <span className="reports__status">Status</span>
            <span className="reports__value">Value (TPAY)</span>
            <span className="reports__time">Timestamp</span>
          </div>
        ) : null}
        {reportsList}
      </Card>
    </div>
  );
};

export default Reports;
