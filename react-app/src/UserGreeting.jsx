import PropTypes from 'prop-types';

function UserGreeting(props) {
    return props.isLoggedIn ? (
        <h1 className="welcome-message">Welcome back, {props.username}!</h1>
    ) : (
        <h1 className="login-prompt">Please sign up.</h1>
    );
}
UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting