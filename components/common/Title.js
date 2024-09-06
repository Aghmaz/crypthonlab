import { Typewriter } from "react-simple-typewriter";
export const TitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
      <span>{caption}</span>
      {title}
    </h1>
  );
};

export const TitleForHeader = ({ title, caption, className }) => {
  return (
    <h1 className={`${className}  title-logo`}>
      <span className="forheader">{caption}</span>
      {title}
    </h1>
  );
};

export const TitleSm = ({ title }) => {
  return <h1 className="titleSm">{title}</h1>;
};
export const Title = ({ title, className }) => {
  return <h1 className={`${className} title`}>{title}</h1>;
};

export const AnimatedTitleLogo = ({ title, caption, className }) => {
  return (
    <h1 className={`${className} title-logo`}>
      <span className="forheader">{caption}</span>
      {title}
      <Typewriter
        words={title}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={160}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
};
