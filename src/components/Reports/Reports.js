import React from 'react';
import Card from '../ui/Card/Card';
import Divider from '../ui/Divider/Divider';
import Report from './Report/Report';
import ReportsNav from './ReportsNav/ReportsNav';

const Reports = () => {
  let reportsList = [];
  for (let i = 0; i < 10; i++) {
    reportsList.push(<Report key={i} index={i} />);
  }
  return (
    <Card>
      <ReportsNav />
      <Divider />
      {reportsList}
    </Card>
  );
};

export default Reports;
