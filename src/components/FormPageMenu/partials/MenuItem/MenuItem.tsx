import { useRef, useState } from "react";
import { FormPagesConfig } from "../../FormPageMenuTypes";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Settings from "../Settings";

import "./MenuItem.css";

interface MenuItemProps {
  pageConfig: FormPagesConfig;
}

const MenuItem = ({ pageConfig }: MenuItemProps) => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { id, icon, label } = pageConfig;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const pointerDownPos = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerDownPos.current = { x: e.clientX, y: e.clientY };
    listeners?.onPointerDown?.(e); // manually trigger dnd-kit listener
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (pointerDownPos.current) {
      const dx = Math.abs(e.clientX - pointerDownPos.current.x);
      const dy = Math.abs(e.clientY - pointerDownPos.current.y);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 5) {
        setSettingsOpen((prev) => !prev); // Treat as click
      }

      pointerDownPos.current = null;
    }
  };

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleOpenChange = (newOpen: boolean) => {
    setSettingsOpen(newOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setSettingsOpen(!settingsOpen);
    } else if (event.key === "Escape") {
      setSettingsOpen(false);
    }

    listeners?.onKeyDown?.(event);
  };

  return (
    <button
      className="menuitem-container"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Settings isOpen={settingsOpen} handleOpenChange={handleOpenChange}>
        <div className={`menuitem${settingsOpen ? " menuitem-active" : ""}`}>
          {icon}
          <span>{label}</span>
        </div>
      </Settings>
    </button>
  );
};

export default MenuItem;
