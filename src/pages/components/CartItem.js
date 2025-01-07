// components/CartItem.js
import PropTypes from 'prop-types';
export default function CartItem({ title }) {
    return <div className="cartitem">CartItem Component {title}</div>;
}
CartItem.propTypes = {
    // Add prop-types here
    title: PropTypes.string.isRequired,
};