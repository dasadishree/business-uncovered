import Image from 'next/image'

export default function About() {
    return(
        <section className="about">
            <div className="about-left">
                <span className="about-label">about</span>
                <Image
                    src="/heart.png"
                    alt="heart image with text box"
                    width={480}
                    height={480}
                    className="about-illustration-img"
                />
            </div>

            <div className="about-right">
                <h2 className="about-heading">
                    WELCOME TO<br/>@BUSINESS_UUNCOVERED
                </h2>

                <p className="about-paragraph">
                    UNCOVERING THE BUSINESS GAME, ONE REAL INSIGHT AT A TIME. LET&apos;S MAKE STRATEGY MAKE SENSE.
                </p>
                <p className="about-paragraph">
                    WE PRIORITIZE GIVING YOU OPPORTUNITIES YOU DIDN&apos;T KNOW YOU HAD! WE POST ABOUT BUSINESS INSIGHT, SCHOLARSHIP OPPORTUNITIES, CAREER ADVICE, SUCCESS OPPORTUNITIES, CAREER ADVICE, SUCCESS STRATEGIES, ETC.
                </p>
                <p className="about-paragraph">
                    THE EXTRA &quot;U&quot; REPRESENTS THAT BUSINESS ALL STARTS WITH YOU, LEARNING AND GROWING.
                </p>
                <p className="about-paragraph">
                    OUR MISSION IS TO GIVE INSIGHT TO SCHOLARS ON BUSINESS, MARKETING TRENDS, CAREER GOALS, GROWTH, AND TIPS.
                </p>

                <Image
                    src="/textdecor.png"
                    alt="text decor arrows"
                    width={120}
                    height={100}
                    className="text-deco"
                />
            </div>
        </section>
    )
}