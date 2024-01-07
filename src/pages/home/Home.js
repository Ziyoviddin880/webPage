import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";

function Home({ login }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="homePage">
      <h1>Websaytga muvaffaqiyatli kirdingiz!</h1>
    </div>
  );
}

export default Home;
