import styles from "./sass/Participants.module.scss";
import {Participant} from "./components/Participant/Participant.jsx";
import axios from "axios";
import {useEffect, useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import withLayout from "../../hocs/withLayout.jsx";
import common from "../../styles/common.module.scss";

function Participants() {


    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    const [participants, setParticipants] = useState([]);


    const getParticipants = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/participants');
            const data = response.data;
            setDataIsLoaded(true)
            setParticipants(data)
        } catch (err) {
            toast.error('Error getting participants');
        }
    };


    useEffect(() => {
        getParticipants();
    }, []);


    return (
        <>
            <section className={styles.participants}>
                <div className={common.container}>
                    <h2 className={`${styles['title']} ${common['title']}`}>"Awesome Event" participants</h2>
                    {dataIsLoaded && <div className={styles['participants-container']}>
                        {participants.map((participant) => (
                            <Participant participant={participant} key={participant.id}/>
                        ))}
                    </div>
                    }
                    <Toaster position='top-right'/>
                </div>
            </section>
        </>
    )
}

export default withLayout(Participants);