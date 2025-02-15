import React, { useRef } from 'react';
import { useTheme } from 'styled-components';

import Icon from '@atoms/Icon';
import { $ImageInputLabel, $ImageInputCount, $ImageInput } from './ImageInput.style';

const MAX_IMAGE_COUNT = 10;

interface ImageInputProps {
  count: number;
  imgRef?: React.MutableRefObject<HTMLInputElement | null>;
  onChange: () => void;
}

const ImageInput = ({ count = 0, imgRef, onChange }: ImageInputProps) => {
  const theme = useTheme();

  return (
    <>
      <$ImageInputLabel htmlFor="image_input" count={count}>
        <Icon
          name="camera"
          width={35}
          height={29}
          fill={count >= MAX_IMAGE_COUNT ? theme.COLORS.ACCENT.BACKGROUND.PRIMARY : theme.COLORS.NEUTRAL.TEXT.STRONG}
        />
        <$ImageInputCount>
          {count}/{MAX_IMAGE_COUNT}
        </$ImageInputCount>
      </$ImageInputLabel>
      <$ImageInput
        id="image_input"
        type="file"
        accept="image/jpg, image/jpeg, image/png"
        disabled={count >= MAX_IMAGE_COUNT}
        onChange={onChange}
        multiple
        ref={imgRef}
      />
    </>
  );
};

export default ImageInput;
