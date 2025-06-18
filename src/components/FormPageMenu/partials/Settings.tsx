import { Popover } from "antd";
import { Flag, PenLine, Clipboard, Copy, Trash2 } from "lucide-react";

interface SettingsProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleOpenChange: (newOpen: boolean) => void;
}

const Options = () => (
  <div className="p-2">
    <div
      className="flex items-center gap-2 px-2 py-1.5 [:hover]:bg-gray-200 rounded cursor-pointer"
      tabIndex={0}
    >
      <Flag size={16} stroke="#2563eb" fill="#2563eb" />
      <span>Set as first page</span>
    </div>
    <div
      className="flex items-center gap-2 px-2 py-1.5 [:hover]:bg-gray-200 rounded cursor-pointer"
      tabIndex={0}
    >
      <PenLine size={16} stroke="#6b7280" />
      <span>Rename</span>
    </div>
    <div
      className="flex items-center gap-2 px-2 py-1.5 [:hover]:bg-gray-200 rounded cursor-pointer"
      tabIndex={0}
    >
      <Clipboard size={16} stroke="#6b7280" />
      <span>Copy</span>
    </div>
    <div
      className="flex items-center gap-2 px-2 py-1.5 [:hover]:bg-gray-200 rounded cursor-pointer"
      tabIndex={0}
    >
      <Copy size={16} stroke="#6b7280" />
      <span>Duplicate</span>
    </div>
    <div className="border-t border-t-gray-200"></div>
    <div
      className="flex items-center gap-2 px-2 py-1.5 [:hover]:bg-gray-200 rounded cursor-pointer"
      tabIndex={0}
    >
      <Trash2 size={16} stroke="#dc2626" />
      <span className="text-red-600">Delete</span>
    </div>
  </div>
);

const Settings = ({ children, isOpen, handleOpenChange }: SettingsProps) => {
  return (
    <Popover
      placement="bottomLeft"
      title={
        <div className="bg-gray-50 px-3 py-2 border-b border-b-gray-200">
          Settings
        </div>
      }
      content={<Options />}
      trigger="click"
      open={isOpen}
      onOpenChange={handleOpenChange}
      arrow={false}
    >
      {children}
    </Popover>
  );
};

export default Settings;
