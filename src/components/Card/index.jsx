/* eslint-disable react/prop-types */
import AwardIcon from "../../assets/award-icon.svg";
import MovieIcon from "../../assets/movie-icon.svg";
import { ContainerC } from "../Card/styles";

function Card({ movieData }) {
  return (
    <ContainerC>
      <div className="wrapper-image-logo">
        <img src={MovieIcon} />
      </div>

      <div className="container-items">
        <div className="wrapper-items">
          <h3>{movieData.name}</h3>
          <p>{movieData.runtimeInMinutes} Min</p>
        </div>

        <div className="wrapper-award">
          <img src={AwardIcon} />
          <p>
            {movieData.academyAwardWins} Wins &{" "}
            {movieData.academyAwardNominations} Nominations
          </p>
        </div>

        <div className="wrapper-budget">
          <h4>Budget</h4>
          <p>${movieData.budgetInMillions}M</p>
        </div>

        <div className="wrapper-budget">
          <h4>Revenue</h4>
          <p>${movieData.boxOfficeRevenueInMillions}M</p>
        </div>
      </div>
    </ContainerC>
  );
}

export default Card;
