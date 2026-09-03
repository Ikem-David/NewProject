import { ArrowRight } from "lucide-react";
import "./buttondesign1.css";

function FlowButton({ text = "Modern Button" }) {
  return (
    <button onClick={() => {document.querySelector(".HomeSection2")?.scrollIntoView({behavior: "smooth"})}} className="flow-button">
      {/* Left arrow */}
      <ArrowRight className="flow-arrow flow-arrow-left" />

      {/* Text */}
      <span className="flow-button-text">{text}</span>

      {/* Animated circle */}
      <span className="flow-circle"></span>

      {/* Right arrow */}
      <ArrowRight className="flow-arrow flow-arrow-right" />
    </button>
  );
}

export default FlowButton;