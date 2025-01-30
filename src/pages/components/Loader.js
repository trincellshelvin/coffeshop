import PropTypes from 'prop-types';
import { FaCog } from 'react-icons/fa'; // Import Font Awesome Gear Icon
import styles from './Loader.module.css'; // Import the CSS module

const Loading = ({ isLoading }) => {
    return (
        <div className={isLoading ? styles.loadingContainer : 'hidden'}>
            <FaCog className={styles.loadingGearIcon} />
        </div>
    );
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};

export default Loading;