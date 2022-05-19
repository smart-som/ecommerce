import { GridContainer, GridItem } from "@material-ui/core";

const Footer = () => {
  return (
    <GridContainer>
      <GridItem xs={12} sm={4} md={4}>
        <h5>About Us</h5>
        <p>
          Creative Tim is a startup that creates design tools that make the web
          development process faster and easier.{" "}
        </p>
        <p>
          We love the web and care deeply for how users interact with a digital
          product. We power businesses and individuals to create better looking
          web projects around the world.{" "}
        </p>
      </GridItem>
      <GridItem xs={12} sm={4} md={4}>
        <h5>Social Feed</h5>
        <div>
          <div>
            {/* <i className="fab fa-twitter" /> */}
            <p>How to handle ethical disagreements with your clients.</p>
          </div>
          <div>
            {/* <i className="fab fa-twitter" /> */}
            <p>The tangible benefits of designing at 1x pixel density.</p>
          </div>
          <div>
            {/* <i className="fab fa-facebook-square" /> */}
            <p>
              A collection of 25 stunning sites that you can use for
              inspiration.
            </p>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
};
export default Footer;