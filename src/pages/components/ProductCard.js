// components/ProductCard.js
import PropTypes from 'prop-types';
export default function ProductCard({ title }) {
    return <div className="productcard">ProductCard Component {title}</div>;
}
ProductCard.propTypes = {
    // Add prop-types here
    title: PropTypes.string.isRequired,
};