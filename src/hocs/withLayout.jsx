import { Header } from "../layout/Header/Header.jsx"
import { Footer } from "../layout/Footer/Footer.jsx"


export default function withLayout(WrappedComponent) {
    function LayoutComponent({...props}) {
        return (
            <>
                <Header/>
                <WrappedComponent {...props} />
                <Footer/>
            </>
        );
    }

    return LayoutComponent;
}