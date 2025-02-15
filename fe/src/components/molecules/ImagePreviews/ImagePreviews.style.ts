import { theme } from '@styles/theme';
import styled, { css } from 'styled-components';

interface $ImageProps {
  imgUrl: string;
}
const imageStyles = css`
  position: relative;

  width: 80px;
  min-width: 80px;
  height: 80px;

  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL.BORDER.DEFAULT};
  border-radius: 12px;
  background-repeat: no-repeat;
  background-size: 80px 80px;
`;

const $ImagePreviews = styled.ul`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  width: 100%;
  height: 130px;
  margin-top: 10px;
  padding-bottom: 15px;
  overflow-x: auto;
  white-space: nowrap;
`;

const $FirstImage = styled.li<$ImageProps>`
  background: url(${({ imgUrl }) => imgUrl});
  ${imageStyles}
`;

const $ImageLabel = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  background: rgba(0, 0, 0, 0.4);
  color: ${({ theme }) => theme.COLORS.NEUTRAL.BACKGROUND.DEFAULT};
  border-bottom-left-radius: 11px;
  border-bottom-right-radius: 11px;
  font-size: 11px;
`;

const $Image = styled.li<$ImageProps>`
  background: url(${({ imgUrl }) => imgUrl});
  ${imageStyles}
`;

const $CancelButton = styled.button`
  position: absolute;
  right: 0;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: black;
`;

export { $ImagePreviews, $FirstImage, $Image, $CancelButton, $ImageLabel };
