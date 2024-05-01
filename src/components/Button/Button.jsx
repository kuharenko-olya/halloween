import styles from './sass/Button.module.scss';
import PropTypes from 'prop-types';

export function Button({
                           optionalString,
                           variant,
                           className
                       }) {
    return (
        <button
            type="button"
            className={`${styles.button} ${styles[variant]}
            ${className ? styles[className] : ''}`}
        >
            {optionalString}
        </button>
    )
}


Button.propTypes = {
    optionalString: PropTypes.string,
    variant: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Button.defaultProps = {
    className: '',
};