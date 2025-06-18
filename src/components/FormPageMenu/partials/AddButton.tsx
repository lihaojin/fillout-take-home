import { PlusIcon } from "lucide-react";
import NewFormOptions from "./NewFormOptions";
import Settings from "./Settings";
import { useState } from "react";
import { FormOptionTypes } from "../FormPageMenuTypes";

const AddButton = ({
  onClick,
}: {
  onClick: (key: FormOptionTypes) => void;
}) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setSettingsOpen(newOpen);
  };

  return (
    <NewFormOptions
      onClick={(key: FormOptionTypes) => {
        onClick(key);
        setSettingsOpen(false);
      }}
      isOpen={settingsOpen}
      onOpenChange={handleOpenChange}
    >
      <button className="formpagemenu-add">
        <PlusIcon size={16} />
        <span>Add Page</span>
      </button>
    </NewFormOptions>
  );
};

export default AddButton;
