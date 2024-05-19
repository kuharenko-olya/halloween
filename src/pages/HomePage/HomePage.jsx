import {Hero} from "../../components/Hero/Hero.jsx"
import {Gallery} from "../../components/Gallery/Gallery.jsx"
import {About} from "../../components/About/About.jsx"
import withLayout from '../../hocs/withLayout.jsx';

function HomePage() {
    return (
        <>
            <Hero/>
            <Gallery/>
            <About/>
        </>
    )
}

export default withLayout(HomePage)