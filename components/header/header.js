import css from './header.module.css'

export default function HomeHeader() {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <img src="./patterson-snow-services-logo.png"/>
            </div>
            <h1 className={css.companyName}>Patterson Snow <br/>Services</h1>
            <div className={css.contactInfo}>
                <a className={css.phoneNumber} href="tel:+2673098216">267-309-8216</a>
                <a className={css.phoneNumber} href="tel:+2673098229">267-309-8229</a>
                <a className={css.emailAddress} href="mailto:pattersonsnowservices@gmail.com">pattersonsnowservices@gmail.com</a> 
            </div>
        </header>
    )
}