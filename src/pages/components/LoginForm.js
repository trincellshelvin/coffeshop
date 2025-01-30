import PropTypes from 'prop-types';
import Button from './Button';

const LoginForm = ({ buttonLabel, handleLogin }) => {
    return (
        <form className="form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <Button label={buttonLabel} handleClick={handleLogin} />
        </form>
    );
};

LoginForm.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
