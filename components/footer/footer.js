import css from './footer.module.css'

export default function Footer() {
    return (
        <footer className={css.footer}>
            <p className={css.copyright}>(c) Patterson Snow Services 2020. All Rights Reserved</p>
        </footer>
    )
}