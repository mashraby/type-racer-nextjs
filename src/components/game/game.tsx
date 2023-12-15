export const Game = () => {
    
      
  return (
    <>
      <div style={{ textAlign: "center" }}>
        Hey, monkey type is now live and available with even more awesome
        features! Check out the{" "}
        <a href="https://www.reddit.com/r/MechanicalKeyboards/comments/gk9pp8/monkeytypecom_is_now_available_the_new/?">
          reddit post
        </a>{" "}
        for more details.
        <br />
        <br />
        <a href="https://monkeytype.com/">www.monkeytype.com</a>
      </div>
      <div id="commandLineWrapper" className="hidden">
        <div id="commandLine">
          <input type="text" className="input" placeholder="Command" />
          <div className="separator hidden" />
          <div className="listTitle">Title</div>
          <div className="suggestions"></div>
        </div>
      </div>
      <div id="timerWrapper">
        <div id="timer" />
      </div>
      <div id="resultScreenshot" className="">
        <div className="stats">
          <div className="group">
            <div className="top">wpm</div>
            <div className="bottom">100</div>
          </div>
          <div className="group">
            <div className="top">key</div>
            <div className="bottom">100/2</div>
          </div>
          <div className="group">
            <div className="top">acc</div>
            <div className="bottom">100%</div>
          </div>
        </div>
        <div className="logo">
          {/*     <div class="top">monkey-see</div> */}
          <div className="bottom">monkey-type.com</div>
        </div>
      </div>
      <div id="centerContent" className="hidden">
        <div id="middle">
          <div id="top">
            <div className="logo">
              <div className="top">monkey-see</div>
              <div className="bottom">monkey-type</div>
            </div>
            <div id="menu">
              <div className="button" tabIndex={2}>
                <div className="icon">
                  <i className="fas fa-fw fa-keyboard" />
                </div>
                <div className="text">Test</div>
              </div>
              <div className="button" tabIndex={2}>
                <div className="icon">
                  <i className="fas fa-fw fa-info" />
                </div>
                <div className="text">About</div>
              </div>
              <div className="button" tabIndex={2}>
                <div className="icon">
                  <i className="fas fa-fw fa-cog" />
                </div>
                <div className="text">Settings</div>
              </div>
              <div className="button" tabIndex={2}>
                <div className="icon">
                  <i className="fas fa-fw fa-user" />
                </div>
                <div className="text">Login</div>
              </div>
            </div>
            <div className="result hidden">
              <div className="group testmode" style={{ alignSelf: "center" }}>
                <div className="title mode1">words</div>
                <div className="title mode2">100</div>
                <div className="title mode3">100</div>
              </div>
              <div className="group key">
                <div className="title">key</div>
                <div className="val">100/1</div>
              </div>
              <div className="group acc">
                <div className="title">acc</div>
                <div className="val">95%</div>
              </div>
              <div className="group wpm">
                <div className="title">wpm</div>
                <div className="val">100</div>
              </div>
            </div>
            <div className="config">
              <div className="group punctuationMode">
                <div className="buttons">
                  <div className="button toggleButton active" tabIndex={2}>
                    punctuation
                  </div>
                </div>
              </div>
              <div className="group mode">
                <div className="buttons">
                  <div className="button">time</div>
                  <div className="button active">words</div>
                  <div className="button">custom</div>
                </div>
              </div>
              <div className="group wordCount">
                <div className="buttons">
                  <div className="button">10</div>
                  <div className="button">25</div>
                  <div className="button active">50</div>
                  <div className="button">100</div>
                  <div className="button">200</div>
                </div>
              </div>
              <div className="group time hidden">
                <div className="buttons">
                  <div className="button">15</div>
                  <div className="button active">30</div>
                  <div className="button">60</div>
                  <div className="button">120</div>
                </div>
              </div>
              <div className="group customText hidden">
                <div className="buttons">
                  <div className="button">change</div>
                </div>
              </div>
            </div>
          </div>
          <div id="caret" className="hidden" />
          <div id="words" className="" />
          <input id="wordsInput" className="" tabIndex={0} />
          <div id="restartTestButton" tabIndex={0}>
            <i className="fas fa-redo-alt" />
          </div>
          <div id="liveWpm" className="">
            -
          </div>
        </div>
        <div id="bottom">
          {/*     Hey, im optimising the website for keyboard only use, so from now to restart the test press <key>tab</key> and then <key>enter</key> / <key>space</key> (also so its simmilar to other typing tests). If some of you really like this quick test restart I guess I could add a setting for it :P
      <br><br> */}
          Created by{" "}
          <a href="https://www.reddit.com/message/compose?to=Miodec">Miodec</a>
        </div>
      </div>
    </>
  );
};
