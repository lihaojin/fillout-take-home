"use client";

import { useState } from "react";
import { Typography } from "antd";
import FormPageMenu from "@/components/FormPageMenu/FormPageMenu";
import {
  formOptionsMap,
  FormPagesConfig,
} from "@/components/FormPageMenu/FormPageMenuTypes";
import useIsMobile from "@/hooks/useIsMobile";
import { List } from "antd";
const { Title, Paragraph } = Typography;

const formPagesInitialState = Object.values(formOptionsMap)
  .slice(0, 4)
  .map((option) => ({
    id: option.id,
    icon: option.icon,
    label: option.title,
  }));

export default function Home() {
  const [formPages, setFormPages] = useState<FormPagesConfig[]>(
    formPagesInitialState
  );
  const isMobile = useIsMobile();

  return (
    <div className="p-10">
      <Title>Phil&apos;s fillout take-home submission</Title>
      <div className={`${isMobile ? "h-[500px]" : "h-[100px] mt-[50px]"}`}>
        <FormPageMenu formPages={formPages} setFormPages={setFormPages} />
      </div>
      <Paragraph className="my-6">
        <strong>Note:</strong> To test keyboard accessibility, hit tab to focus
        on a menu item. Then hit space to pick up and use left/right arrow keys
        to move it when in horizontal orientation. Use up/down arrows on smaller
        screen sizes where it is in vertical orientation. Hit space again to put
        it down where you want it to be placed. You can also hit enter when a
        menu item is focused to toggle the settings menu. It works on mobile
        devices/screen sizes as well!
      </Paragraph>
      <Paragraph>
        Tap and hold menu item on touch screens, then you will be able to drag
        and re-order
      </Paragraph>
      <Paragraph>
        I did not get the chance to implement focus trap but that is one thing I
        would focus on next. I would add a focus trap for all the menus so the
        user can tab through the options and also exit the focus trap when they
        want to move to the next menu item.
      </Paragraph>
      <Title level={5}>List of things to improve if given more time</Title>
      <List>
        <List.Item>• Add focus trap for menus</List.Item>
        <List.Item>
          • Handle scenario where overflow takes place and too many menu items
          are rendered
        </List.Item>
        <List.Item>
          • Edge case: dnd-kit seems to interfere with the listeners for menu
          item, causing a strange bug in mobile devices where you need to tap
          twice outside to close a menu.
        </List.Item>
        <List.Item>
          • Allow developer to control orientation (vertical/horizontal) through
          a prop if they wish
        </List.Item>
        <List.Item>
          • Allow developer to inject their own components/buttons to render in
          a menu item
        </List.Item>
        <List.Item>• Add unit tests</List.Item>
      </List>
    </div>
  );
}
