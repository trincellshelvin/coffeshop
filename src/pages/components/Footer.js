// components/Footer.js
import PropTypes from 'prop-types';
export default function Footer({ title }) {
    return <div className="footer"><p className="text-center">© 2025 Coffee Shop. All rights reserved.</p> {title}</div>;
}
Footer.propTypes = {
    // Add prop-types here
    title: PropTypes.string.isRequired,
};