import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

export default function BasePage({children}) {
    return (
        <>
            <Header />
            <Main children={children} />
            <Footer />
        </>
    );
}
