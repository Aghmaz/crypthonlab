import { Input } from "antd";

export default function BasicDetailsStep({ formik }) {
  return (
    <div>
      <h2>Enter Basic Details</h2>
      <form>
        <div className="grid-2">
          <div className="inputs">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <span className="error">{formik.errors.name}</span>
            ) : null}
          </div>
          <div className="inputs">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="grid-2">
          <div className="inputs">
            <span>Your budget</span>
            <input
              type="number"
              name="budget"
              value={formik.values.budget}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.budget && formik.errors.budget ? (
              <div className="error">{formik.errors.budget}</div>
            ) : null}
          </div>
          <div className="inputs">
            <span>Phone Number</span>
            <input
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
          </div>
        </div>
        <div className="inputs">
          <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
          <textarea
            cols="30"
            rows="10"
            name="note"
            value={formik.values.note}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          {formik.touched.note && formik.errors.note ? (
            <div className="error">{formik.errors.note}</div>
          ) : null}
        </div>
        {/* <button className="button-primary" type="submit">
          Submit
        </button> */}
      </form>
    </div>
  );
}
