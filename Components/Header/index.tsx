import "./styles.css"
import Image from "next/image"

const Header = () => {
    return (
        <>
        <header>
            <Image 
                src="/rinnegan.webp"
                width={150}
                height={150}
                alt="rinnegan" />
            <p>ANIME SPACE</p>
        </header>
        </>
    );
}

export default Header;