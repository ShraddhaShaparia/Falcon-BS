import { useEffect } from "react";
import Constants from "./common/Constants";
import FirmName from "./FirmName";

export const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <LifeAtVC />
      <ApplyNow />
    </div>
  );
};

export function LifeAtVC() {
  return (
    <>
      <h1>Life At </h1>
      <p>
        <FirmName />, choosing a career is not just about seeking employment, it
        is about building your self-confidence, developing your entrepreneurial
        skills and fulfilling growth aspirations. We have a rigorous selection,
        training, mentoring and counselling process to bring out the best in you
        and make you a different person. We provide a clear roadmap for career
        progression and for deserving and aspiring team members, there is no
        limit to growth.
      </p>
    </>
  );
}

export function ApplyNow() {
  return (
    <>
      <h1>Apply Now</h1>
      <p>
        We appreciate and welcome your interest in joining us. We set high
        professional standards. We choose people who live up to them.
      </p>
      <p>
        We strive to, attract and retain the brightest, most flexible employees
        – employees who not only understand the importance of work but also
        recognise its place in the balance of an overall lifestyle.
      </p>
      <p>
        create an environment which strongly facilitates an ethos of innovation,
        collaboration and implementation. The performance management system
        ensures that people are constantly strengthening their learning curve
        and sharing it with their peers. We reconcile an uncompromising focus on
        excellence with genuine care and guidance.
      </p>
      <p>We believe in challenging and exciting young minds.</p>
      <p>
        If accepting the status-quo is not your style and you want to stand out
        from the crowd, then email your resume to us at{" "}
        <strong>{Constants.VIVEK_EMAIL}</strong>
      </p>
    </>
  );
}
