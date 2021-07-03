import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'
import { Link } from 'react-router-dom';
import history from '../../history';
import Modal from '../Modal';

class StreamDelete extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchStream(id);
    }

    renderActions() {
        return (
            <React.Fragment>
                <button 
                    onClick={() => this.props.deleteStream(this.props.match.params.id)}
                    className="ui button negative"
                    >Delete</button>
                    <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent() {
        if(!this.props.stream) {
            return 'Are you sure you want to delete this Stream?'
        }
        return `Are you sure you want to delete the Stream with title: ${this.props.stream.title}`
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    return {
        stream: state.streams[id]
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
