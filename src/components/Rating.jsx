import { useState } from "react";
import star from "../assets/icon-star.svg";
import ThankYou from "./ThankYou";

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(0);
  const [isSelected, setSelected] = useState(false);

  const handleSelectedRating = (rating) => {
    
   setSelectedRating(rating)
    
  }

  const submitForm = (e) => {
    e.preventDefault();
    setSelected(true)
  }

  return (
    <>
      {isSelected ? (
        <ThankYou selectedRating={selectedRating} />
      ) : (
        <main>
          <form onSubmit={submitForm} className="rating">
            <div className="star-icon">
              <img src={star} alt="star icon" />
            </div>
            <div className="content">
              <h1 className="title">How did we do? </h1>
              <p className="desc">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
            </div>
            <div className="ratings">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleSelectedRating(rating)}
                  type="button"
                >
                  {rating}
                </button>
              ))}
            </div>
            <button className="submit-btn">Submit</button>
          </form>
        </main>
      )}

      {/* <footer>
                <div class="attribution">
                      Challenge by{" "}
                      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                        Frontend Mentor
                      </a>
                      . Coded by <a href="#">Your Name Here</a>.
                    </div>
            </footer> */}
    </>
  );
};

export default Rating;
