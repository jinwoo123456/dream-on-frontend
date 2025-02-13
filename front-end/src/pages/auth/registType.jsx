import { Link } from "react-router-dom";
import applicant from "../../assets/img/applicant.png";
import donor from "../../assets/img/donor.png";
import "../../style/scss/style.scss";

function RegistType() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <h1 className="regist-type-title">회원가입 유형을 선택해주세요.</h1>
      <div className="regist-type-container">
        <Link to="/registType/signup/donor" className="regist-type-link">
          <button className="regist-type">
            기부자
            <img src={donor} alt="" />
          </button>
        </Link>
        <Link to="/registType/signup/applicant" className="regist-type-link">
          <button className="regist-type">
            수혜자
            <img src={applicant} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RegistType;
