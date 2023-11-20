package com.example.Percel.Express.repository;

import com.example.Percel.Express.model.OrderModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Integer> {

    @Query("from orders where approved = ?1")
    List<OrderModel> findPendingOrder(boolean approved);

    List<OrderModel> findByUserNumber(String userNumber);

}
