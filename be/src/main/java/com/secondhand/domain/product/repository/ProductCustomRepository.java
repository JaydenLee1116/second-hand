package com.secondhand.domain.product.repository;

import com.secondhand.domain.product.Product;
import com.secondhand.service.ProductSalesSearchCondition;
import com.secondhand.web.dto.filtercondition.ProductCategorySearchCondition;
import com.secondhand.web.dto.filtercondition.ProductSearchCondition;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;

public interface ProductCustomRepository {
    Slice<Product> findAllByTowns(ProductSearchCondition condition, Pageable pageable, long userId);

    Slice<Product> findAllByCategory(ProductCategorySearchCondition productSearchCondition, Pageable pageable, long userId);

    Slice<Product> findAllByStatus(ProductSalesSearchCondition productSearchCondition, Pageable pageable, long userId);
}
