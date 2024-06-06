import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";

const CookiesWebsite = () => {
  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          color: "#fff",
          backgroundColor: "#F76C24",
          fontSize: "13px",
        }}
        expires={150}
        enableDeclineButton
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("Accept was triggered by user scrolling");
          } else {
            alert("Accept was triggered by clicking the Accept button");
          }
        }}
        onDecline={() => {
          alert("nay!");
        }}
      >
        <span style={{ textDecoration:"none", color: "white" }}>
          {" "}
          This website uses cookies to enhance the user experience.{" "}
        </span>
        <span style={{ textDecoration:"none"}}>
          <a href="/" style={{ textDecoration:"none",  color: "#F76C24" }}>
            {" "}
            Privacy Policy{" "}
          </a>
          and{" "}
          <a href="/" style={{textDecoration:"none",  color: "#F76C24" }}>
            {" "}
            Terms and Conditions{" "}
          </a>
        </span>
      </CookieConsent>

      {console.log(getCookieConsentValue("myAwesomeCookieName2"))}
    </div>
  );
};

export default CookiesWebsite;
