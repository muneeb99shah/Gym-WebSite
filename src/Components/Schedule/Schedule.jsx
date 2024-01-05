import React, { useState, useEffect } from "react";
import ScheduleButton from "./ScheduleButton";
import "./schedule.css";
import TimeTable from "./TimeTable";
import DataSchedule from "./DataSchedule";
export default function Schedule() {
  //
  const [activeTab, setActiveTab] = useState(null);
  //
  const [filterItems, setFilterItems] = useState(DataSchedule);

  // useEffect
  useEffect(() => {
    if (btnContent.length > 0) {
      handleTabClick(btnContent[0].onClick);
    }
  }, []);
  //  end

  function handleTabClick(e) {
    const updatedFilter = DataSchedule.filter((currentItem) => {
      return currentItem.Day === e;
    });
    setFilterItems(updatedFilter);
    setActiveTab(e);
  }

  const btnContent = [
    {
      id: 1,
      weekName: "Monday",

      onClick: "monday",
    },
    {
      id: 2,
      weekName: "Tuesday",

      onClick: "tuesday",
    },
    {
      id: 3,
      weekName: "Wednesday",

      onClick: "wednesday",
    },
    {
      id: 4,
      weekName: "Thursday",

      onClick: "thursday",
    },
    {
      id: 5,
      weekName: "Friday",

      onClick: "friday",
    },
    {
      id: 6,
      weekName: "Saturday",

      onClick: "saturday",
    },
    {
      id: 7,
      weekName: "Sunday",

      onClick: "sunday",
    },
  ];
  return (
    <>
      <section className="schedule-section" id="schedule">
        <div className="schedule-container">
          <div className=" title-container">
            <div className="heading-title schedule-heading">
              <div className="subtitle">TIME & TABLE</div>
              <h2>Weekly Class Schedule</h2>
              <p>
                Gymat an unknown printer took a galley of type and scrambled
                make a type specimen book.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="class-schedule-tab">
            <ul className="nav-tab">
              {btnContent.map((items) => (
                <ScheduleButton
                  key={items.id}
                  weekName={items.weekName}
                  links={items.links}
                  onClick={() => handleTabClick(items.onClick)}
                  isActive={items.onClick === activeTab}
                />
              ))}
            </ul>
            <div className="tab-content-container">
              <div className="tab-content">
                {filterItems.map((tabItems) => (
                  <TimeTable
                    key={tabItems.id}
                    lable={tabItems.lable}
                    className={tabItems.className}
                    Timelable={tabItems.Timelable}
                    timeInfo={tabItems.timeInfo}
                    TrainerLable={tabItems.TrainerLable}
                    trainerName={tabItems.trainerName}
                  />
                ))}
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
    </>
  );
}
