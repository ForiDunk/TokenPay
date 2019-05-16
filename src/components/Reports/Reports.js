import React from 'react';
import Card from '../ui/Card/Card';
import Report from './Report/Report';

const Reports = () => {
  let reportsList = [];
  for (let i = 0; i < 10; i++) {
    reportsList.push(<Report key={i} index={i} />);
  }
  return (
    <Card>
      <div>trans categories</div>
      {reportsList}
    </Card>
  );
};

export default Reports;
