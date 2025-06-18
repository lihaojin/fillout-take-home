"use client";

import { useState } from "react";
import FormPageMenu from "@/components/FormPageMenu/FormPageMenu";
import {
  formOptionsMap,
  FormPagesConfig,
} from "@/components/FormPageMenu/FormPageMenuTypes";

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
      <FormPageMenu formPages={formPages} setFormPages={setFormPages} />
    </div>
  );
}
