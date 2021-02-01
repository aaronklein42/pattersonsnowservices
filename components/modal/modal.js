import css from './modal.module.css'
import {useRef} from 'react'

export default function Modal({active, setActive}){
    const containerRef = useRef(null)
    const activeClass = active ? css.active : ""
    const closeModal = () => setActive(false)
    const closeOnExternalClick = (event) => {
        if (containerRef.current.contains(event.target)) return 
        closeModal();
    }
    return (
        <div onClick={closeOnExternalClick} className={`${css.modal} ${activeClass}`}>
            <div ref={containerRef} className={css.modalBody}>
                <header className={css.modalHeader}>
                    <h2 className={css.modalTitle}>Get a Quote</h2>
                    <button className={css.closeButton} onClick={closeModal}>&times;</button>
                </header>
                <a className={css.button} href="tel:+12673098216">Call Travis Patterson</a>
                <a className={css.button} href="tel:+12673098229">Call Jessica Patterson</a>
                <a className={css.button} href="mailto:pattersonsnowservices@gmail.com">Email Us!</a>
            </div>
        </div>
    )
}
