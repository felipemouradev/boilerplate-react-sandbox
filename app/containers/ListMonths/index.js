import React from 'react';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {setContasAPagar, setRendimentos} from "../Month/actions";
import {connect} from "react-redux";
// import './style.scss';

class ListMonths extends React.Component {

  getSummaryMonth = (month)=> {
    const currentMonth = this.props.list_months.months[month];
    const totalRendimentosMes = _.reduce(currentMonth.rendimentos, (r,item)=> r+_.get(item,'value'), 0);
    const totalContasAPagar = _.reduce(currentMonth.contas_a_pagar, (r,item)=> r+_.get(item,'value'), 0);
    return totalRendimentosMes - totalContasAPagar;
  };

  itemList = (nMonth, month) => {
    const path = `/month/${nMonth}`;
    return <li key={nMonth}><Link to={path}>{month} - R$ {this.getSummaryMonth(nMonth)}</Link></li>
  };

  render() {

    return (
      <div>
        <ul>
          {_.times(12, (n)=> this.itemList(n, moment().startOf("year").add(n,'month').format("MMMM")))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {list_months: state.get('list_months')}
};

export default connect(mapStateToProps, {})(ListMonths);

