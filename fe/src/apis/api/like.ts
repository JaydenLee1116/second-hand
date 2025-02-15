import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { PRODUCTS } from '@constants/API';
import { LikeProductsType, APIDefaultResponseType } from '@type/productsType';
// TODO(hoonding) : axiosFetch로 변경해야함
import axiosFetch from '@apis/instances/axiosFetch';

const getLikeProducts = async (pageNum?: number, categoryId?: number) => {
  const response = await axiosFetch.get(PRODUCTS.GET_LIKE_PRODUCTS, {
    params: {
      pageNum: pageNum,
      categoryId: categoryId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

const useLikeProductsData = (pageNum?: number, categoryId?: number) => {
  if (categoryId === 0) categoryId = undefined;
  return useQuery<APIDefaultResponseType<LikeProductsType>, AxiosError, LikeProductsType>(
    ['likeProducts', pageNum, categoryId],
    () => getLikeProducts(pageNum, categoryId),
    { select: data => data.data }
  );
};

export default useLikeProductsData;
