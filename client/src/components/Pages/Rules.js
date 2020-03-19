import React from "react";
import { Container } from "reactstrap";
import croquetset from "../images/croquetset.jpg";

const Rules = () => {
  return (
    <div>
      <Container>
        <div class="row">
          <div class="col-sm-8">
            <h1 className="rulesTitle">Miller Classic Rules</h1>
            <div className="rules-content">
              <h3>Course construction</h3>
              <p>
                The Miller Classic uses the traditional Nine-Wicket rules native
                to North America but with a twist. Rather than a traditional
                diamond on diamond shape we allow members of the tour to create
                interesting and unique courses that are played once in forward
                motion, once in reverse and a third determined by a coin toss to
                round out the set of 3.
              </p>
              <h3>Score tallying </h3>
              <p>
                Victory in a match is worth 3 points, two points are awarded to
                the second place finish and 1 point is awarded to the 3rd place
                finish. Three complete sets totalling Nine different matches
                conclude a single days games. The Miller Classic Tournament last
                two days with the trophy being awarded to the participant with
                the most points at the end.{" "}
              </p>
              <h3>Course Etiquette</h3>
              <p>
                Members of the tour are to at all times be representing our
                sponsors. That includes drinking a Miller Highlife the Champagin
                of Beers at all times during course of play. It includes giving
                shout-outs to our sponsor during all media availabilities.{" "}
              </p>
            </div>
          </div>
          <div class="col-sm-4">
            <img className="rulesImage" src={croquetset} alt="croquetset" />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Rules;
