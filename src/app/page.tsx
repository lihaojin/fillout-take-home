"use client";

import { useState } from "react";
import { Typography } from "antd";
import FormPageMenu from "@/components/FormPageMenu/FormPageMenu";
import {
  formOptionsMap,
  FormPagesConfig,
} from "@/components/FormPageMenu/FormPageMenuTypes";

const { Title } = Typography;

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

  return (
    <div className="p-10">
      <Title>Phil&apos;s fillout take-home submission</Title>
      <FormPageMenu formPages={formPages} setFormPages={setFormPages} />
      <p className="my-6">
        <strong>Note:</strong> To test keyboard accessibility, hit tab to focus
        on a menu item. Then hit space to pick up and use left/right arrow keys
        to move it. Hit space again to put it down where you want it to be
        placed. You can also hit enter when a menu item is focused to toggle the
        settings menu.
      </p>
    </div>
  );
}
