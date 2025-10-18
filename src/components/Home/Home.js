import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home_landing_page">
      <section className="landing">
        <header>
          <div id="logo">
            {/* <img src="./src/images/chess_logo.png" alt="Chess King Logo" /> */}
          </div>
        </header>
        <div className="text">
          <article>
            <h3>THE ULTIMATE CHESS ARENA</h3>
            <h1>Chess King</h1>
            <h1>Face Grandmasters & Legends</h1>
            <p>
              Welcome to Chess King—the home for passionate chess players of all
              skill levels! Challenge friends, compete in exciting tournaments,
              and improve your strategy through curated lessons and puzzles.
              Whether you're a beginner learning the moves or a grandmaster
              seeking stiff competition, your next chess adventure starts here.
            </p>
          </article>
          <aside>
            <img
              src={require("../../assets/images/hero.jpg")}
              alt="A dramatic chess board"
            />
          </aside>
        </div>
        <div className="low">
          <button>scroll down</button>
        </div>
      </section>
      <section className="what_we_do">
        <header>
          <h2>Elevate Your Chess Game</h2>
        </header>
        <div>
          <article className="wcards">
            {/* <img src="./src/images/play_icon.png" alt="" /> */}
            <h2>Play Online</h2>
            <p>
              Play chess against friends, rivals, or computer opponents in
              real-time or at your pace. Choose from casual games or join rated
              tournaments to hone your skills.
            </p>
          </article>
          <article className="wcards">
            {/* <img src="./src/images/lessons_icon.png" alt="" /> */}
            <h2>Lessons & Puzzles</h2>
            <p>
              Unlock interactive lessons from masters and a huge library of
              tactical puzzles curated for every skill level. Learn openings,
              master tactics, and crush your opponents!
            </p>
          </article>
          <article className="wcards">
            {/* <img src="./src/images/community_icon.png" alt="" /> */}
            <h2>Community Events</h2>
            <p>
              Participate in weekly tournaments, join exciting challenge
              ladders, and connect with fellow chess enthusiasts through forums
              and clubs.
            </p>
          </article>
          <article className="wcards">
            {/* <img src="./src/images/analysis_icon.png" alt="" /> */}
            <h2>Game Analysis</h2>
            <p>
              Analyze your games with powerful engines and detailed move-by-move
              commentary. Detect blunders, and learn how to improve after every
              match!
            </p>
          </article>
        </div>
      </section>
      <section className="let_us">
        <article>
          <h3>Ready to Make Your Move?</h3>
          <h1>Join the Chess King Community</h1>
          <p>
            Sign up today to start playing, learning, and competing. Connect
            with players around the world, track your progress, and ascend the
            leaderboards!
          </p>
          <a href="#signup" className="cta-btn">
            Get Started
          </a>
        </article>
        <aside>
          <img
            src={require("../../assets/images/sub.jpg")}
            alt="Chess match in progress"
          />
        </aside>
      </section>
      <footer>
        <div className="top">
          <ul id="our_offices">
            <li>Chess King HQ</li>
            <li>Knight's Row 15</li>
            <li>London, UK 10234</li>
            <li>Queens Plaza, 4th Floor</li>
            <li>New York, NY 10001</li>
            <li>contact@chessking.com</li>
          </ul>
          <ul>
            <li>+1-800-CHESS-KG</li>
            <li>Support & Inquiries</li>
          </ul>
          <ul id="new_bussiness">
            <li>Chess Sponsorships</li>
            <li>
              <a href="mailto:sponsor@chessking.com">Become a Sponsor</a>
            </li>
          </ul>
          {/* <img src="./src/images/chess_footer.png" alt="" /> */}
        </div>

        <div className="bottom">
          <ul>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
          <ul>
            <li>2024, Chess King. All Rights Reserved</li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Home;
