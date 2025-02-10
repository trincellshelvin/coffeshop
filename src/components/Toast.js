// components/Toast.js
import PropTypes from 'prop-types';
const Toast = ({ title }) => {
    return <div className="toast">Toast Component {title}</div>;
}
Toast.propTypes = {
    // Add prop-types here
    title: PropTypes.string.isRequired,
};

export default Toast;