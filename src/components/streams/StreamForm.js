import React from 'react'
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component {
    renderInput = ({ input, label, meta }) => {
        const errorClass = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={errorClass}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError({ error, touched }) {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    //This function will always pull out form values upon submit and passed them out of component
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    //thus.props.handleSubmit will pass the input values to this.onSubmit
    render() {
        return (
            <form 
                className="ui form error"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}
//Checking if Inputs are valid, and its making a check onInput
const validate = (formValues) => {
    const errors = {}
    if(!formValues.title) {
        errors.title = 'You must enter a title'
    }
    if(!formValues.description) {
        errors.description = 'You must enter a description'
    }
    return errors;
}

//'streamForm' will be name of the state in redux store
export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);