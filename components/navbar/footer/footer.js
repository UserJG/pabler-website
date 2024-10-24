import Link from "next/link";
import styles from "./footer.module.css";
import items from "@/config/footer.socials.json";
import Image from "next/image";

export default function Footer() {
    return (
        <main className={styles.main}>
            {items.map((item) => (
                <Social key={item.name} href={item.url} name={item.name}/>
            ))}
        </main>
    );
}

function Social({href, name}) {
    return (
        <Link className={styles.socialIconContainer} href={href}>
            <Image className={styles.socialIcon} src={`/images/logos/${name.toLowerCase()}-logo.svg`} alt={name}
                   width={200} height={200}/>
        </Link>
    );
}
