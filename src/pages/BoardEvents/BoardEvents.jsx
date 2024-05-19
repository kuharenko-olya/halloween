import withLayout from "../../hocs/withLayout.jsx";
import {Event} from "./components/Event.jsx"
import styles from "../BoardEvents/sass/BoardEvents.module.scss";
import common from "../../styles/common.module.scss";
import axios from "axios";
import {useEffect, useState} from "react";
import toast, {Toaster} from "react-hot-toast";


function BoardEvents() {
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [events, setEvents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPerPage, setCurrentPerPage] = useState(12);
    const [totalItems, setTotalItems] = useState(0);
    let numbersPages = [];

    const getEvents = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/events?page=${currentPage}&limit=${currentPerPage}`);
            const data = response.data.events;
            setDataIsLoaded(true)
            setEvents(data)
            setTotalItems(response.data.total)
        } catch (err) {
            toast.error('Error getting events');
        }
    };

    useEffect(() => {
        getEvents();
    }, [currentPage]);

    const handleNavigatePage = (page) => {
        setCurrentPage(page)
    };

    function renderPages() {
        for (let i = 1; i <= Math.ceil(totalItems / currentPerPage); i++) {
            numbersPages.push(i)
        }
    }

    renderPages()

    return (
        <section className={styles.events}>
            <div className={common.container}>
                <h2 className={`${styles['title']} ${common['title']}`}>Events</h2>
                {dataIsLoaded && <div className={styles['events-container']}>
                    {events.map((event) => (
                        <Event event={event} key={event.id}/>
                    ))}
                </div>
                }

                <div className={styles.pagination}>
                    {numbersPages.map((numberPage, index) => (
                        <button className={currentPage === numberPage ? styles.active : ""}
                                onClick={() => handleNavigatePage(numberPage)}
                                key={index}>{numberPage}
                        </button>
                    ))}
                </div>

                <Toaster position='top-right'/>
            </div>
        </section>
    )
}

export default withLayout(BoardEvents);