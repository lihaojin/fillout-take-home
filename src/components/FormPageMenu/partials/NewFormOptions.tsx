import { Popover } from "antd";
import { formOptionsMap, FormOptionTypes } from "../FormPageMenuTypes";

interface NewFormOptionsProps {
  children: React.ReactNode;
  onClick: (key: FormOptionTypes) => void;
  isOpen: boolean;
  onOpenChange: (newOpenState: boolean) => void;
}

const Menu = ({ onClick }: { onClick: (key: FormOptionTypes) => void }) => {
  return (
    <div className="flex flex-col gap-2 p-2">
      {Object.keys(formOptionsMap).map((key) => {
        const option = formOptionsMap[key as FormOptionTypes];

        return (
          <button
            className="flex items-center gap-1.5 py-1.5 px-1 [:hover]:bg-gray-200 rounded"
            onClick={() => onClick(key as FormOptionTypes)}
            key={option.id}
          >
            <span className="[&>svg]:h-[16px]">{option.icon}</span>
            <span>{option.title}</span>
          </button>
        );
      })}
    </div>
  );
};

const NewFormOptions = ({
  children,
  onClick,
  isOpen,
  onOpenChange,
}: NewFormOptionsProps) => {
  return (
    <Popover
      content={<Menu onClick={onClick} />}
      trigger="click"
      open={isOpen}
      onOpenChange={onOpenChange}
      arrow={false}
    >
      {children}
    </Popover>
  );
};

export default NewFormOptions;
