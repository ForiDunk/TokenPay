import React from 'react';
import Card from '../ui/Card/Card';
import Divider from '../ui/Divider/Divider';

const InfoCards = () => (
  <div>
    <Card>
      <div className="card__row">
        <span className="card__title">24h Avg Transaction Value</span>
        <span className="card__text--blue pointer">See more</span>
      </div>
      <Divider />
      <div className="card__row">
        <span className="card__text--bold">
          249.38 TPAY <span className="card__text--green">(+2.50%)</span>
        </span>
      </div>
    </Card>

    <Card>
      <div className="card__row">
        <span className="card__title">Coin Supply (TPAY)</span>
        <span className="card__text--blue pointer">See more</span>
      </div>
      <Divider />
      <div className="card__row">
        <span className="card__text--bold">19,833,751 TPAY</span>
      </div>
    </Card>

    <Card>
      <div className="card__row">
        <span className="card__title">24h Transactions</span>
        <span className="card__text--blue pointer">See more</span>
      </div>
      <Divider />
      <div className="card__row">
        <div>
          <span className="card__text--bold">128 </span>
          <span className="card__text--small">Normal</span>
        </div>
        <div>
          <span className="card__text--bold">68 </span>
          <span className="card__text--small">Staked</span>
        </div>
      </div>
    </Card>

    <Card>
      <div className="card__row">
        <span className="card__title">Difficulty</span>
        <span className="card__text--blue pointer">See more</span>
      </div>
      <Divider />
      <div className="card__row">
        <div>
          <span className="card__text--bold">0.00076363 </span>
          <span className="card__text--green">POW</span>
        </div>
        <div>
          <span className="card__text--bold">599597.34673829 </span>
          <span className="card__text--green">POS</span>
        </div>
      </div>
    </Card>
  </div>
);

export default InfoCards;
