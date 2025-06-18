"use client";

import { Dispatch, SetStateAction } from "react";
import {
  DndContext,
  DragEndEvent,
  UniqueIdentifier,
  closestCorners,
  useSensor,
  useSensors,
  KeyboardSensor,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { FormPagesConfig } from "./FormPageMenuTypes";
import MenuItem from "./partials/MenuItem/MenuItem";
import Separator from "./partials/Separator/Separator";
import { formOptionsMap, FormOptionTypes } from "./FormPageMenuTypes";
import AddButton from "./partials/AddButton";

import "./FormPageMenu.css";

export interface FormPagesMenuProps {
  formPages: FormPagesConfig[];
  setFormPages: Dispatch<SetStateAction<FormPagesConfig[]>>;
}

const FormPageMenu = ({ formPages, setFormPages }: FormPagesMenuProps) => {
  const sensors = useSensors(
    useSensor(PointerSensor), // mouse / touch support
    useSensor(KeyboardSensor) // ⌨️ keyboard support
  );

  const getPageIndex = (id: UniqueIdentifier) =>
    formPages.findIndex((page) => page.id === id);

  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;

    if (active.id === over?.id) return;

    setFormPages((prevFormPages) => {
      if (active?.id && over?.id) {
        const originalIndex = getPageIndex(active.id);
        const newIndex = getPageIndex(over.id);

        return arrayMove(prevFormPages, originalIndex, newIndex);
      }

      return prevFormPages;
    });
  };

  const handleInsert = (key: FormOptionTypes, index: number) => {
    const newPageList = [...formPages];
    const item = formOptionsMap[key];

    newPageList.splice(index, 0, {
      id: Date.now(),
      icon: item.icon,
      label: item.title,
    });

    setFormPages(newPageList);
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <SortableContext
          items={formPages}
          strategy={horizontalListSortingStrategy}
        >
          <div className="formpagemenu">
            {formPages.map((formPage, index) => {
              return (
                <div key={formPage.id} className="formpagemenu-container">
                  <MenuItem pageConfig={formPage} />
                  <Separator
                    onClick={(key: FormOptionTypes) =>
                      handleInsert(key, index + 1)
                    }
                  />
                </div>
              );
            })}
            <AddButton
              onClick={(key: FormOptionTypes) =>
                handleInsert(key, formPages.length)
              }
            />
          </div>
        </SortableContext>
      </DndContext>
    </>
  );
};

export default FormPageMenu;
