import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { FormOptionTypes } from "../../FormPageMenuTypes";
import useMouseHold from "@/hooks/useMouseHold";
import NewFormOptions from "../NewFormOptions";

import "./Separator.css";

const Separator = ({
  onClick,
}: {
  onClick: (key: FormOptionTypes) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const isMouseDown = useMouseHold();
  const buttonVisible = menuOpen || isHovered || isFocused;

  return (
    <div
      className="separator-container"
      onMouseEnter={() => {
        if (!isMouseDown) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="separator-dashedline"></div>
      <NewFormOptions
        isOpen={menuOpen}
        onOpenChange={(newState) => setMenuOpen(newState)}
        onClick={(key: FormOptionTypes) => {
          onClick(key);
          setMenuOpen(false);
        }}
      >
        <button
          className={`separator-btn ${
            buttonVisible ? "opacity-100" : "opacity-0"
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <PlusCircle className="[&>circle]:stroke-[#E1E1E1] [&>circle]:fill-white w-6 h-6" />
        </button>
      </NewFormOptions>
    </div>
  );
};

export default Separator;
