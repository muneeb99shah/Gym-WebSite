import React from "react";
import "./classesFeatured.css";
import card1img from "../../assets/images/1card-img.jpg";
import classIconImg1 from "../../assets/images/7-icons-Cy.png";
import classIconImg2 from "../../assets/images/2-icon-p-W.png";
import classIconImg3 from "../../assets/images/3-icon-w.png";
import classIconImg4 from "../../assets/images/6-icon-G.png";
import classIconImg5 from "../../assets/images/5-icon-WB.png";
import classIconImg6 from "../../assets/images/6-icon-G.png";
import FeaturedClassCard from "./FeaturedClassCard";

export default function ClassesFeatured() {
  const cardData = [
    {
      id: 1,
      classIcon: classIconImg1,
      classThumbnail: card1img,
      classTitle: "Cycling",
      classDiscription:
        "The Best Body Fitness in Town Authoritatively disseminate multimedia based",
    },
    {
      id: 2,
      classIcon: classIconImg2,
      classThumbnail: card1img,
      classTitle: "Meditation",
      classDiscription:
        "The Best Body Fitness in Town Authoritatively disseminate multimedia based",
    },
    {
      id: 3,
      classIcon: classIconImg6,
      classThumbnail: card1img,
      classTitle: "Martial Arts",
      classDiscription:
        "The Best Body Fitness in Town Authoritatively disseminate multimedia based",
    },
    {
      id: 4,
      classIcon: classIconImg4,
      classThumbnail: card1img,
      classTitle: "Karate",
      classDiscription:
        "The Best Body Fitness in Town Authoritatively disseminate multimedia based",
    },
    {
      id: 5,

      classIcon: classIconImg3,
      classThumbnail: card1img,
      classTitle: "Power Lifting",
      classDiscription:
        "The Best Body Fitness in Town Authoritatively disseminate multimedia based",
    },
    {
      id: 6,

      classIcon: classIconImg5,
      classThumbnail: card1img,
      classTitle: "Workout",
      classDiscription:
        "The Best Body Fitness in Town Authoritatively disseminate multimedia based",
    },
  ];
  return (
    <>
      <section className="ClassesFeatured-section" id="classes">
        <div className="ClassesFeatured-container">
          <div className=" title-container">
            <div className="heading-title schedule-heading">
              <div className="subtitle">GYMAT SERVICES</div>
              <h2>Our Featured Classes</h2>
              <p>
                Gymat an unknown printer took a galley of type and scrambled
                make a type specimen book.
              </p>
            </div>
          </div>

          <div className="classesCardFeatured">
            <div className="card-container">
              {cardData.map((items) => (
                <FeaturedClassCard
                  key={items.id}
                  classIcon={items.classIcon}
                  classThumbnail={items.classThumbnail}
                  classTitle={items.classTitle}
                  classDiscription={items.classDiscription}
                />
              ))}

              {/*  */}
            </div>
            {/*  */}
          </div>
        </div>
      </section>
    </>
  );
}
