import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './MovieInfoBar.css';
import {calcTime, convertMoney} from '../../../helpers.js';

const MovieInfoBar = (props) => {
  return (
    <div className="rmdb-movieinfobar">
      <div className="rmdb-movieinfobar-content">
        <div className="rmdb-movieinfobar-content-col">
          <i className="fa fa-time" name="clock-o" size="2x"></i>
          <span className="rmdb-movieinfobar-info">Running Time: {calcTime(props.time)}</span>
        </div>
        <div className="rmdb-movieinfobar-content-col">
          <i className="fa fa-budget" name="money" size="2x"></i>
          <span className="rmdb-movieinfobar-info">Budget: {convertMoney(props.budget)}</span>
        </div>
        <div className="rmdb-movieinfobar-content-col">
          <i className="fa fa-revenue" name="ticket" size="2x"></i>
          <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
        </div>
      </div>
    </div>
  );
}
export default MovieInfoBar;
