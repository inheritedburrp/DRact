import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(previousProps) {
        const { error, alert, message } = this.props;
        if (error !== previousProps.error) {
            if (error.msg.name) {

                alert.error(`Name: ${error.msg.name.join()}`);
            }
            if (error.msg.email) {

                alert.error(`Email: ${error.msg.email.join()}`);
            }
            debugger;
            if (error.msg.message) {

                alert.error(`Message: ${error.msg.message.join()}`);
            }
        }
        if (message !== previousProps.message) {
            if (message.deleteUser) {
                alert.success(message.deleteUser);
            }
            if (message.addUser) {
                alert.success(message.addUser);
            }
        }
    }

    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
