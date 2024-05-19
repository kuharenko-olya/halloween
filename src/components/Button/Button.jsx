import styles from './sass/Button.module.scss';
import PropTypes from 'prop-types';

export function Button({
                           optionalString,
                           variant,
                           className,
                           onClick
                       }) {
    return (
        <button
            onClick={onClick}
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
    variant: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

Button.defaultProps = {
    className: '',
};