import { useEffect } from "react";
import FirmName from "./FirmName";

export const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <h1>Disclaimer</h1>
      <p>
        <FirmName /> is a Company operating in Qatar.
      </p>
      <p>
        The www.vca.co.qa web pages have been carefully prepared, but it has
        been written in general terms and should be seen as broad guidance only.
        The web pages cannot be relied upon to cover specific situations and you
        should not act, or refrain from acting, upon the information contained
        therein without obtaining specific professional advice. Although we
        endeavour to provide accurate and timely information, there can be no
        guarantee that such information is accurate as of the date it is
        received or that it will continue to be accurate in the future. Please
        contact <FirmName /> to discuss these matters in the context of your
        particular circumstances. <FirmName />, its partners, employees and
        agents do not accept or assume any liability or duty of care for any
        loss arising from any action taken or not taken by anyone in reliance on
        the information in these web pages or for any decision based on it.
      </p>
      <p>
        By using this Website, you are agreeing to this disclaimer. If you do
        not agree to this, then you are not allowed to use this Website and
        should immediately terminate such usage.
      </p>
      <p>
        By accessing this website, www.vca.co.qa, you acknowledge and confirm
        that you are seeking information relating to <FirmName />, of your own
        accord and that there has been no form of solicitation, advertisement,
        or inducement by <FirmName />, or its members. The content of this
        website is for informational purposes only and should not be interpreted
        as soliciting or advertisement. No material/ information provided on
        this website should be construed as legal advice.
      </p>
    </div>
  );
};
