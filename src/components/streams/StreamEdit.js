import React from 'react'
import StreamForm from './StreamForm';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions'
import _ from 'lodash';

class StreamEdit extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, 'title', 'description')} />
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    const id = ownProps.match.params.id;
    return {
        stream: state.streams[id]
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
