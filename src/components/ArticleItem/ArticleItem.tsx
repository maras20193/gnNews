import { Modal } from "antd";
import { noNews } from "../../assets";
import { truncateText } from "../../utils";
import { ArticleItemModalBody } from "./ArticleItemModalBody/ArticleItemModalBody";
import * as S from "./ArticleItem.styled";
import { useModal } from "../../hooks";

type ArticleItemProps = {
  data: Article;
  advanced?: boolean;
};

export const ArticleItem = ({ data, advanced }: ArticleItemProps) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleOpen = () => {
    openModal();
  };

  return (
    <>
      <S.Wrapper
        advanced={advanced}
        onClick={handleOpen}
        data-testid="articleItem"
      >
        {advanced ? (
          <div>
            <S.ImageWrapper>
              <img
                src={data.urlToImage ? data.urlToImage : noNews}
                alt={data.title}
              />
            </S.ImageWrapper>
            <S.Title>{data.title}</S.Title>
            <S.Content>{data.description}</S.Content>
          </div>
        ) : (
          <S.Title>{data.title}</S.Title>
        )}
        <S.InfoWrapper>
          <S.Info>{data.source.name}</S.Info>
          <S.Info>{data.publishedAt}</S.Info>
        </S.InfoWrapper>
      </S.Wrapper>
      <Modal
        title={data.title}
        open={isModalOpen}
        onCancel={closeModal}
        className="modal"
      >
        <ArticleItemModalBody data={data} />
      </Modal>
    </>
  );
};
