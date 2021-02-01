import css from './homeContent.module.css'

export default function HomeContent() {
    return (
        <div className={css.homePage}>
            <main className={css.main}>
                <img className={css.familyTruck} src="patterson-family-truck.jpg"/>
                <div className={css.missionStatement}>
                    <h2 className={css.missionStatement__title}>We are the Pattersons!</h2>
                    <p className={css.missionStatement__blurb}>Here at Patterson Snow Services, we offer plowing to residential
                        and commercial customers. We are a family owned and operated business
                        that is growing fast. We are currently taking new customers so please click the button to get a free quote!
                    </p>
                </div>
                <div className={css.services}>
                    <button className={css.services__button}>Get a Quote!</button>
                </div>
            </main>
            <section className={css.serviceArea}><img className={css.serviceArea__map} src="map.png"/></section>
        </div>
    )
}

