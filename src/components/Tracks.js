import React from "react";
import teleporter from '../assets/teleporter_active.gif';
import crystal1 from '../assets/crystal2.png';
import crystal2 from '../assets/crystal11.png';
import crystal3 from '../assets/crystal3.png';
import crystal4 from '../assets/crystal4.png';
import './styles/tracks.css'


export default function Tracks() {
    return <section className="tracks-section" id="tracks">
        <h2>Tracks</h2>
        <div className="tracks">
            <div className="track1 themes">
                <img src={crystal1} className="crystal" alt="prop" />
                <h1>Health & Wellness</h1>
                <p>Unlock  the potential for transformation in health and wellness within the society,
                    as we  aim to innovate and enhance in one concerted effort.</p>
            </div>
            <div className="track2 themes">
                <img src={crystal2} className="crystal" alt="prop" />
                <h1>Social<br /> Good</h1>
                <p>Dedicated to the greater good, creating a positive impact on society while addressing pressing social issues.</p>
            </div>
            <div className="track3 themes">
                <img src={crystal3} className="crystal" alt="prop" />
                <h1>Web<br /> 3.0</h1>
                <p>Web 3.0 is the new digital realm. The decentralized, inter-connected, user-centric, and secure evolution of the internet.</p>
            </div>
            <div className="track4 themes">
                <img src={crystal4} className="crystal" alt="prop" />
                <h1>Open Innovation</h1>
                <p>We embrace the idea that innovation can originate from anywhere and actively tap into diverse minds for great ideas.
                </p>
            </div>
        </div>
        <img src={teleporter} className="teleporter" alt="prop" />
    </section>;
}
