export default function TextComponent(){
    return (
        <section className="text">
            <img src="/images/logo.svg" alt="" />
            <div>
                <h1>We are launching <span>soon!</span></h1>
                <p>Subscribe and get notified</p>
            </div>
            <form>
                <input type="text" placeholder="Your email address..." />
                <button>Notify Me</button>
            </form>
        </section>
    )
}