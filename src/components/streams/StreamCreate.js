import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
//../ means up one directory from components directory i.e api then ../ means up second directory means actions from where we are importing

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
       //console.log(formValues);
       this.props.createStream(formValues);
    };
    render() {
        //console.log(this.props);
        return (
            <div><h3>Create a Stream</h3>
            <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null,{ createStream })(StreamCreate);

