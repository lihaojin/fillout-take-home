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
  const isMouseDown = useMouseHold();

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
      {(menuOpen || isHovered) && (
        <NewFormOptions
          isOpen={menuOpen}
          onOpenChange={(newState) => setMenuOpen(newState)}
          onClick={(key: FormOptionTypes) => {
            onClick(key);
            setMenuOpen(false);
          }}
        >
          <button className="separator-btn">
            <PlusCircle className="[&>circle]:stroke-[#E1E1E1] [&>circle]:fill-white w-6 h-6" />
          </button>
        </NewFormOptions>
      )}
    </div>
  );
};

export default Separator;
