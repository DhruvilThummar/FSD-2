import "./Myprofile.css";
import img1 from "../../../assets/vite.svg";

function Myprofile() {
  const name = "D R Thummar";
  const enroll = 24002170110188;
  const course = "BE Compuenter Eng.";
  const skill = ["Java", "Python", "MERN", "Plsql", "Mysql"];
  return (
    <>
      <h1 style={{ color: "royalblue", fontSize: "30px" }}>
        <img src={img1} alt="Profilepic" width={35} /> {name}
      </h1>
      <p className="box">
        <p>Enrollment no.: {enroll}</p>
        <p>Course.: {course}</p>
        <ol>
          {skill.map((value) => {
            return <li>{value}</li>;
          })}
        </ol>
      </p>
    </>
  );
}

export default Myprofile;
