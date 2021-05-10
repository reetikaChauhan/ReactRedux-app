//import { ReactComponent } from '*.svg';
//import { render } from '@testing-library/react';
import React from 'react';
import { Field, formValues, reduxForm } from 'redux-form';

//../ means up one directory from components directory i.e api then ../ means up second directory means actions from where we are importing

class StreamForm extends React.Component {

    renderError({ error,touched }){
        if(touched && error ){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    // renderInput(formProps){
        renderInput = ({input,label,meta})=> {
            const className = `field ${meta.error && meta.touched ? 'error': ''}`;
            //console.log(meta);
            return (
                <div className={className}>
                    <label>{label}</label>
                        <input {...input} autoComplete="off"/>
                    {this.renderError(meta)}
                    </div>
            );
    //    return <input {...formProps.input}/>;
    //    return <input 
    //    onChange={formProps.input.onChange} 
    //    value={formProps.input.value}
    //    />;
    }

    onSubmit = (formValues) => {
       //console.log(formValues);
       this.props.onSubmit(formValues);
    }
    render() {
        //console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate =  (formValues) => {
    const errorrs = {};

    if(!formValues.title){
        errorrs.title = "You must enter a title";
    }
    if(!formValues.description){
        errorrs.description = "You must enter a description"
    }
    return errorrs;

};
// export default connect()(reduxForm({
//     form:'streamCreate',
//     validate
// })(StreamCreate));

export default reduxForm({
    form:'streamForm',
    validate
})(StreamForm);



