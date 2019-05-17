import React from 'react';
import './Report.css';
import Card from '../../ui/Card/Card';
import Divider from '../../ui/Divider/Divider';
import { isBrowser } from 'react-device-detect';

const Report = ({ index }) => {
  if (isBrowser) {
    return (
      <div className={`pointer report ${index % 2 !== 0 ? 'r2' : ''}`}>
        <div className="hash">
          c460174ed0b4b036cfa1f203b5729266f55d92ffb91d38a7432835481ed40f12
        </div>
        <div className="height">408044</div>
        <div className="recipients">1</div>
        <div>Pending</div>
        <div>1.99947957</div>
        <div>Tue, 13 Nov 2018 13:24:48 GMT</div>
      </div>
    );
  }

  return (
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
          <span className="card__text--small">
            Tue, 13 Nov 2018 13:24:48 GMT
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Report;
