import css from './page.module.css'

export default function Page({children}) {

    return (
        <div className={css.content}>
            <div className={css.contentWrapper}>
            {children}
            </div>
        </div>
        
    )
}