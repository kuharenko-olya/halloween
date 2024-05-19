import styles from '../../BoardEvents/sass/BoardEvents.module.scss';
import PropTypes from "prop-types";


export function Event({event}) {
    return (
        <div className={styles.event}>
            <div className={styles.info}>
                <div className="title">{event.title}</div>
                <div className="description">{event.description}</div>
                <div className="event-date">{event.event_date}</div>
                <div className="organizer">{event.organizer}</div>
            </div>
            <div className={styles.row}>
                <a className="register" href={'/register'}>Register</a>
                <a className="view" href={'/view'}>View</a>
            </div>
        </div>
    )
}

Event.propTypes = {
    event: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        event_date: PropTypes.string,
        organizer: PropTypes.string
    })
};