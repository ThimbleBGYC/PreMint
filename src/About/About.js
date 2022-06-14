import Faq from "react-faq-component";

export default function About() {
    const data = {
        title: false,
        rows: [
            {
                title: "Murder Mystery Game (Online)",
                content: `The Murder Mystery Game will commence once all NFTs have been minted. At which point a suspect will be eliminated each week until the winning suspect, murder weapon, and room are identified. Hodlers of the winning game pieces will be awarded special 1/1 handrawn pieces of Mr. Boddy (the victim).`,
            },
            {
                title: "Board Game",
                content: `Hodlers who own all 6 Suspects (in the same wallet) at the time Mr. Boddy is revealed will receive a custom made version of the game.`,
            },
            {
                title: "Murder Mystery Game (IRL)",
                content: `The top 5 hodlers of our NFTs (by wallet) at the reveal of Mr. Boddy will be invited to an in-person, murder mystery gaming party hosted in an English mansion.`,
            },
        ],
    };

    const styles = {
        bgColor: 'transparent',
        titleTextColor: "white",
        rowTitleColor: "white",
        rowContentColor: 'white',
        arrowColor: "white",
    };


    return (
        <>
            <section className="red">
                <div className="container">
                    <div className="text-center">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 my-3">
                                <h2 className={"fw-light my-3"}>Welcome to the Board Game Yawn Club</h2>
                                <p>BGYC is a NFT collection of board game related art - unique digital collectibles on
                                    the
                                    Ethereum blockchain. Each layer of our NFTs has a distinct meaning and connection to
                                    the
                                    base character it is paired with. These NFTs are also your ticket to the Yawn Club,
                                    a
                                    platform for those who are tired of the status quo. We are actively working on
                                    exclusive,
                                    member-only benefits in hopes of building a community of gaming, art, and fun. We
                                    hope you
                                    enjoy collecting the different game pieces.</p>
                            </div>

                            <div className="col-md-8 offset-md-2 my-3">
                                <h2 className={"fw-light my-3"}>Who We Are</h2>
                                <p>We are a married couple with two young children, and full-time jobs in international
                                    health and public service. We are passionate about board games, art, culture, and
                                    crypto, but the strength and depth of the NFT community amazes us each and every
                                    day. We’ve joined forces with an amazing artist passionate about anime and comic
                                    books to create our first series of NFTs based on the classic board game Clue
                                    (Cluedo).
                                    <br/>
                                    <br/>
                                    Our vision is to bridge the social experience of board games with the
                                    interconnectedness of virtual worlds.
                                    <br/>
                                    <br/>
                                    Together, we can escape the limitations of proximity.</p>
                            </div>

                            <div className="col-md-8 offset-md-2 my-3">
                                <h2 className={"fw-light my-3 border-bottom border-1 border-white pb-3"}>Utility</h2>
                                <div className={"text-start"}>
                                    <Faq data={data} styles={styles}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
