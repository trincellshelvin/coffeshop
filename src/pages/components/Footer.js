// components/Footer.js
import PropTypes from 'prop-types';
export default function Footer({ title }) {
    return <div className="footer">Footer Component {title}</div>;
}
Footer.propTypes = {
    // Add prop-types here
    title: PropTypes.string.isRequired,
};