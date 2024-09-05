import { DatePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";

export default function DateTimeStep({ formik }) {
  const [selectedDate, setSelectedDate] = useState(formik.values.date);
  const disabledDate = (current) => {
    let now = moment();
    let cutOffHour = 9;
    if (now.hour() >= cutOffHour) {
      return current && current < now.endOf("day");
    } else {
      return current && current < now.startOf("day");
    }
  };
  const [dateFlag, setDateFlag] = useState(false);
  const [mobileFlag, setMobileFlag] = useState(false);

  useEffect(() => {
    setDateFlag(true);
    const handleResize = () => {
      setMobileFlag(window.innerWidth <= 786);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDateChange = (date) => {
    setSelectedDate(date);
    formik.setFieldValue("date", date ? date : "");
    formik.setFieldTouched("date", false);
  };

  const handleSlotClick = (section, time) => {
    formik.setFieldValue("timeSlot", { section, time });
    formik.setFieldTouched("timeSlot", false);
  };

  const timeSlots = {
    Morning: [
      "09:00 - 09:30 AM",
      "09:30 - 10:00 AM",
      "10:00 - 10:30 AM",
      "10:30 - 11:00 AM",
      "11:00 - 11:30 AM",
      "11:30 - 12:00 AM",
    ],
    Afternoon: [
      "12:00 - 12:30 PM",
      "12:30 - 01:00 PM",
      "01:00 - 01:30 PM",
      "01:30 - 02:00 PM",
      "02:00 - 02:30 PM",
      "02:30 - 03:00 PM",
      "03:00 - 03:30 PM",
      "03:30 - 04:00 PM",
    ],
    Evening: ["04:00 - 04:30 PM", "04:30 - 05:00 PM"],
  };

  return (
    <div className="date-time-step">
      <div className="date-picker-wrapper">
        <h3 className="dateTime">Date</h3>
        <DatePicker
          open={dateFlag}
          disabledDate={disabledDate}
          onChange={onDateChange}
          value={selectedDate}
          dropdownClassName="custom-datepicker-dropdown"
          popupStyle={
            mobileFlag
              ? { position: "absolute", left: "60px", top: "73rem" }
              : { position: "absolute", left: "465px", top: "520px" }
          }
          inputReadOnly={true}
          format="YYYY-MM-DD"
          style={{ display: "none" }}
        />
      </div>
      <div className="time-slots-wrapper">
        {Object.keys(timeSlots).map((section) => (
          <div key={section}>
            <h4>{section}</h4>
            <div className="time-slots">
              {timeSlots[section].map((time) => (
                <div
                  key={time}
                  onClick={() => handleSlotClick(section, time)}
                  className={`time-slot ${
                    formik.values.timeSlot.section === section &&
                    formik.values.timeSlot.time === time
                      ? "selected"
                      : ""
                  }`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
        {formik.touched.timeSlot && formik.errors.timeSlot ? (
          <div className="error-message">{formik.errors.timeSlot.section}</div>
        ) : null}

        {formik.touched.date && formik.errors.date ? (
          <div className="error-message">{formik.errors.date}</div>
        ) : null}
      </div>
    </div>
  );
}
