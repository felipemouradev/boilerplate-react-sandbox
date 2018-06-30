import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import moment from 'moment';
import _ from 'lodash';
// import './style.scss';
import {setContasAPagar,setRendimentos} from './actions';
import {openCloseModalRendimentos} from './../ModalRendimentos/actions';

class Month extends React.Component {

  render() {
    const {params} = this.props.match;
    console.log("params: ",params);
    console.log("this.props: ",this.props);

    return (
      <div>
        <Link to="/">Voltar</Link><br/>
        CURRENT MONTH <br />
        <a onClick={()=>this.props.openCloseModalRendimentos(params.month)}>Inserir Novo Rendimento </a>
        <div>
          Contas a Pagar:
          <ul>
          {_.map(this.props.list_months.months[params.month].contas_a_pagar,(conta)=> {
            return <li key={conta.description}>{conta.description} - R$ {conta.value}</li>
          })}
          </ul>
          Rendimentos:
          <ul>
            {_.map(this.props.list_months.months[params.month].rendimentos,(conta)=> {
              return <li key={conta.description}>{conta.description} - R$ {conta.value}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {list_months: state.get('list_months')}
};

export default connect(mapStateToProps, {setContasAPagar, setRendimentos, openCloseModalRendimentos})(Month);


