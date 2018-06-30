import React from 'react';
import Modal from 'react-responsive-modal';
import {openCloseModalRendimentos} from "./actions";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import {setRendimentos} from './../Month/actions';

class ModalRendimentos extends React.Component {

  handleModal = () => {
    this.props.openCloseModalRendimentos();
  };

  onSubmit = (values) => {
    console.log(this.props);
    const {params} = this.props.match;
    values.value = parseInt(values.value);
    console.log("values: ",values);
    this.props.setRendimentos(this.props.modal_rendimentos.month, {...values});
    this.handleModal();
  };

  onValidate = (values) => {
    const errors = {};
    if (!values.description) {
      errors.description = "Required";
    }
    if (!values.value) {
      errors.value = "Required";
    }
    return errors;
  };

  render() {
    console.log("Ta abertp ?: ", this.props.modal_rendimentos.modal_rendimentos_is_open);

    return (
      <Modal open={this.props.modal_rendimentos.modal_rendimentos_is_open} onClose={this.handleModal} center>
        <Form
          onSubmit={this.onSubmit}
          validate={this.onValidate}
          initialValues={{}}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Description</label>
                <Field
                  name="description"
                  component="input"
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label>Value</label>
                <Field
                  name="value"
                  component="input"
                  className="form-control"
                  type="text"
                />
              </div>
              <div>
                <button className="btn btn-primary">Save</button>
              </div>
            </form>)}/>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {modal_rendimentos: state.get('modal_rendimentos')}
};

export default withRouter(connect(mapStateToProps, {openCloseModalRendimentos,setRendimentos})(ModalRendimentos));
