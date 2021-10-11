import React from "react";
import Card from "../Card/Card";
import "./Home.css";
import pictures from "../../pictures";
import pictures2 from "../../pictures2";

const Home = () => {
  return (
    <div className="home">
      <div className="jojo">
        <img alt="..." src="./jojo.jpeg" />
      </div>
      <Card
        title="BACKGROUND:"
        content="The Jojo Productions is an organization that has been established to train and develop youth skills in the performing arts industry. The organization has members from different kind’s performing arts specialist who their skills has been developed and trained by the Department of Arts and Culture, Twist Development Theatre and KCAP (Ekhaya Multi Arts Centre) aim is to give training, develop and expose talents based on the performing arts industry."
      />

      <h2 className="workshop">Workshop</h2>
      <div className="row">
        {pictures.map((picture) => (
          <div className="col-sm-12 col-md-6 pic">
            <img alt="..." src={picture} />
          </div>
        ))}
        {pictures2.map((picture) => (
          <div className="col-sm-12 col-md-6 pic2">
            <img alt="..." src={picture} />
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-ms-12 col-md-6">
          <Card
            title="The Mission and Vision Jojo Productions "
            content={
              <ul>
                <li>
                  To develop a dedicated platform that would support local
                  artist in creative artist through education, training
                  ,mentorship ,workshops, festivals, business linkage in
                  creating sustainable employment Mission
                </li>
                <li>
                  To enhance social cohesion through Arts, Heritage and Cultural
                  development and thereby: Identify the talent
                </li>
                <li>To discover ,develop and expose the talent</li>
                <li>To promote the excellent in Arts</li>
              </ul>
            }
          />
        </div>
        <div className="col-ms-12 col-md-6">
          <Card
            title="The Main objective "
            content={
              <ul>
                <li>
                  To provide the main community with Educational leadership and
                  development skills regarding community development and other
                  social needs.
                </li>
                <li>Promote Ubuntu through Arts ,Heritage and Culture</li>
                <li>
                  Create platforms to showcase talents and develop audience
                </li>
                <li>
                  Identification and development of raw artistic local talent
                  through Competitions and Festivals
                </li>
                <li>
                  To increase the participation of the people in the area from
                  different background thus promoting social cohesion within the
                  communities
                </li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
