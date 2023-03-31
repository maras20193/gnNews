import {
  AppstoreOutlined,
  SwitcherOutlined,
  RobotFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { logo } from "../../../../assets";
import { config } from "../../../../config";
import {
  changeLanguage,
  changeView,
} from "../../../../store/features/viewSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { routes } from "../../../../utils/routes";
import * as S from "./Header.styled";
import { useModal } from "../../../../hooks";
import { ThoughtsModalBody } from "./ThoughtsModalBody/ThoughtsModalBody";

export const Header = () => {
  const dispatch = useAppDispatch();

  const { displayStyle, language } = useAppSelector((state) => state?.view);

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <S.Wrapper>
      <Link to={routes.dashboard}>
        <S.LogoWrapper>
          <img src={logo} alt="gnNews logo" />
        </S.LogoWrapper>
      </Link>
      <S.IconsWrapper>
        {displayStyle === config.VIEW_VARIANTS.LINES ? (
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
      <button
        type="button"
        onClick={() => dispatch(changeLanguage(config.LANGUAGE.ENGLISH))}
      >
        ENGLISH
      </button>
      <button
        type="button"
        onClick={() => dispatch(changeLanguage(config.LANGUAGE.GERMAN))}
      >
        GERMAN
      </button>
      <button
        type="button"
        onClick={() => dispatch(changeLanguage(config.LANGUAGE.FRENCH))}
      >
        FRENCH
      </button>
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
