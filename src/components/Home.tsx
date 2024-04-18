import featImg from "../assets/img-main.jpg";
import FirmName from "./FirmName";

export default function Home() {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Red30 Tech conference attendees on a laptop"
      />

      <h1>
        Welcome to <FirmName />
      </h1>
      <h4>Wider Choice, Seamless Delivery.</h4>
      <p>
        In this disruptive, highly regulated, complex, and global business
        environment, <FirmName />, is committed to provide expert outsourcing
        services and solutions which are continually benchmarked with global
        standards.
      </p>
      <p>
        With change in all industries, that disrupts the old and introduces new
        ways of working, we offer our clients various Outsourcing Services. Our
        service model is designed to adapt to the clients' industry changes, and
        provide them with solutions that consistently meet their overall
        objectives. Keeping the client’s goals in mind, we aim not only to
        achieve their goals, but also to refine them and ensure that the
        solutions we provide them will carry their organisations towards a
        sustainable future.
      </p>
    </div>
  );
}
