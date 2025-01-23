// components/CartSummary.js
import PropTypes from 'prop-types';
export default function CartSummary({ title }) {
    return <div className="cartsummary">CartSummary Component {title}</div>;
}
CartSummary.proptypes = {
    // Add prop-types here
    title: PropTypes.string.isRequired,
};