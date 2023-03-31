import React from "react";
import { FlagFilled } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import * as S from "./DropdownI18n.styled";
import { config } from "../../../../../../config";
import { DropdownButton } from "../DropdownButton/DropdownButton";
import { DE, EN, FR } from "../../../../../../assets";

const items: MenuProps["items"] = [
  {
    label: (
      <DropdownButton
        title="ENGLISH"
        lang={config.LANGUAGE.ENGLISH}
        icon={EN}
      />
    ),
    key: "0",
  },
  {
    label: (
      <DropdownButton title="GERMAN" lang={config.LANGUAGE.GERMAN} icon={DE} />
    ),
    key: "1",
  },
  {
    label: (
      <DropdownButton title="FRENCH" lang={config.LANGUAGE.FRENCH} icon={FR} />
    ),
    key: "2",
  },
];

export const DropdownI18n = () => (
  <Dropdown
    menu={{ items }}
    trigger={["click"]}
    placement="bottomRight"
    overlayClassName="myDropdown"
  >
    <Space>
      <S.IconButton>
        <FlagFilled />
      </S.IconButton>
    </Space>
  </Dropdown>
);
