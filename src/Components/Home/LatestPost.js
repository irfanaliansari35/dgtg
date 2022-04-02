import React from 'react'
import liveImg from '../../images/dgtgLive.png'
import news1 from '../../images/news1.png'
import news2 from '../../images/news2.png'
import news3 from '../../images/news3.png'
import Card from '../Card'
export default function LatestPost() {

    return (


        <div id="latest-post">
            <div className="upper-box">
                <img src={liveImg} alt="liveIcon" />
                <h4>Latest Post</h4>
                <p>
                    Watch this space to get top insights from our team. We talk about startups, marketing,
                    growth, AI, VR, IOT, Tech, COVID, Lockdowns,
                    Parties, Travels and anything that our team feeds on
                </p>
            </div>
            <div className="card-tray row">
                <Card className="col-lg-4 "
                    img={news1}
                    title={"4 Crucial Financial Metrics That Every Startup Must Address"}
                />
                <Card className="col-lg-4"
                    img={news2}
                    title={"Top 10 Android Apps You Must Download In 2019"}
                />
                <Card className="col-lg-4"
                    img={news3}
                    title={"8 Best Practices for Email Marketing in 2019"}
                />
            </div>
        </div>
    )
}
