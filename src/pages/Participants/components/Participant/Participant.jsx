import styles from "../../sass/Participants.module.scss";
import PropTypes from "prop-types";


export function Participant({participant}) {
    return (
        <div className={styles.participant}>
            <div className={styles.info}>
                <div className="name">{participant.fullName}</div>
                <div className="email">{participant.email}</div>
            </div>
        </div>
    )
}

Participant.propTypes = {
    participant: PropTypes.shape({
        fullName: PropTypes.string,
        email: PropTypes.string,
    })
};