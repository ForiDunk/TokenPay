import React from 'react';
import './Report.css';
import Card from '../../ui/Card/Card';
import Divider from '../../ui/Divider/Divider';

const Report = ({ index }) => (
  <Card>
    <div className={index % 2 !== 0 ? 'report r2' : 'report'}>
      <div className="card__row">
        <span className="card__title">Hash</span>
        <span className="card__text--blue pointer">
          7d0bb6103667731c8de2f903…58sd
        </span>
      </div>
      <Divider />
      <div className="card__row">
        <span className="card__title">Timestamp</span>
        <span className="card__text--small">Tue, 13 Nov 2018 13:24:48 GMT</span>
      </div>
    </div>
  </Card>
);

export default Report;
