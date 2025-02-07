import thankyou from "../assets/illustration-thank-you.svg";
import {motion} from "framer-motion";
const ThankYou = ({ selectedRating }) => {
  return (
    <>
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 1 }}
        className="thankyou"
      >
        <img src={thankyou} alt="thankyou img" />
        <h4 className="selection">You selected {selectedRating} out of 5</h4>

        <h1 className="thankyou-title">Thank you!</h1>

        <p className="desc2">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </motion.div>
    </>
  );
};

export default ThankYou;
