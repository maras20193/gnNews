import {
  AppstoreOutlined,
  SwitcherOutlined,
  RobotFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { logo } from "../../../../assets";
import { config } from "../../../../config";
import { changeView } from "../../../../store/features/viewSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { routes } from "../../../../utils/routes";
import * as S from "./Header.styled";
import { useModal } from "../../../../hooks";
import { ThoughtsModalBody } from "./components/ThoughtsModalBody/ThoughtsModalBody";
import { DropdownI18n } from "./components/DropdownI18n/DropdownI18n";

export const Header = () => {
  const dispatch = useAppDispatch();

  const view = useAppSelector((state) => state?.view?.displayStyle);

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <S.Wrapper>
      <Link to={routes.dashboard}>
        <S.LogoWrapper>
          <img src={logo} alt="gnNews logo" />
        </S.LogoWrapper>
      </Link>
      <S.IconsWrapper>
        <DropdownI18n />
        {view === config.VIEW_VARIANTS.LINES ? (
          <S.IconButton
            onClick={() => dispatch(changeView(config.VIEW_VARIANTS.TILES))}
          >
            <SwitcherOutlined />
          </S.IconButton>
        ) : (
          <S.IconButton
            onClick={() => dispatch(changeView(config.VIEW_VARIANTS.LINES))}
          >
            <AppstoreOutlined />
          </S.IconButton>
        )}
        <S.IconButton onClick={openModal}>
          <RobotFilled />
        </S.IconButton>
      </S.IconsWrapper>
      <Modal
        title="THE COOLEST AND HARDEST THING"
        open={isModalOpen}
        onCancel={closeModal}
        className="modal"
      >
        <ThoughtsModalBody />
      </Modal>
    </S.Wrapper>
  );
};
