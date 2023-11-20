package com.example.Percel.Express.coltroller;


import com.example.Percel.Express.model.NotifyModel;
import com.example.Percel.Express.model.OrderModel;
import com.example.Percel.Express.model.UserModel;
import com.example.Percel.Express.repository.OrderRepository;
import com.example.Percel.Express.repository.UserRepository;
import jakarta.persistence.criteria.Order;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class MainController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    OrderRepository orderRepository;


    //.......................auth start............................//

    @PostMapping("/registration")
    public Object registration(@ModelAttribute UserModel userModel) {
        userModel.setRole("user");
        try {
            userRepository.save(userModel);
            return new NotifyModel("registration success");
        } catch (Error e) {
            return new NotifyModel("something went wrong. try again later");
        }
    }

    @GetMapping("/login")
    public Object login(@RequestParam String email, @RequestParam String password) {
        try {
            UserModel userModel = userRepository.findByEmail(email);
            if (userModel == null) {
                return new NotifyModel("no user found");
            } else {
                if (userModel.password.equalsIgnoreCase(password)) {

                    return userModel;
                } else return new NotifyModel("invalid credential");
            }

        } catch (Error e) {
            return new NotifyModel("something went wrong. try again later");
        }
    }

    //.......................auth end............................//


    //.......................user start..........................//


    @PostMapping("/submitOrder")
    public Object submitOrder(@ModelAttribute OrderModel orderModel) {
        try {
            orderRepository.save(orderModel);
            return new NotifyModel("order submitted successfully");
        } catch (Error e) {
            return new NotifyModel("something went wrong");
        }
    }


    @GetMapping("/trackOrder")
    public Object trackOrder(@RequestParam int id) {
        try {
            Optional<OrderModel> order = orderRepository.findById(id);
            if (order.isPresent()) {
                OrderModel orderModel = order.get();
                return new NotifyModel(orderModel.currentLocation+"+" + orderModel.status+"+"+orderModel.deliveryMan);
            } else {
                return new NotifyModel("no order found");
            }
        } catch (Error e) {
            return new NotifyModel("something went wrong");
        }
    }
    @GetMapping("/order_single_user")
    public Object getSingleUserOrders(@RequestParam String userNumber){
        try{
            List<OrderModel> orderModels=orderRepository.findByUserNumber(userNumber);
            return  orderModels;
        }catch (Error e){
            return new NotifyModel("Something went wrong !");
        }
    }

    //.......................user end..........................//


    //.......................admin start..........................//


    @GetMapping("/getPendingOrder")
    public Object getPendingOrder() {
        try {
            List<OrderModel> pendingOrderList = orderRepository.findPendingOrder(false);
            return pendingOrderList;
        } catch (Error e) {
            return new NotifyModel("fail to get order");
        }
    }
    @GetMapping("/getApprovedOrder")
    public Object getApprovedOrder() {
        try {
            List<OrderModel> approvedOrderList = orderRepository.findPendingOrder(true);
            return approvedOrderList;
        } catch (Error e) {
            return new NotifyModel("fail to get order");
        }
    }

    @PostMapping("/approveOrder")
    public Object approveOrder(@RequestParam(name = "id") int id) {
        try {
            Optional<OrderModel> order = orderRepository.findById(id);
            if (order.isPresent()) {
                OrderModel orderModel = order.get();
                orderModel.setApproved(true);
                orderModel.setStatus("Approved");
                orderRepository.save(orderModel);
                return new NotifyModel("order approved");
            } else {
                return new NotifyModel("no order found");
            }
        } catch (Error e) {
            return new NotifyModel("fail to approve order");
        }
    }

    @DeleteMapping("/deleteOrder")
    public Object deleteOrder(@RequestParam(name = "id") int id) {
        try {
            Optional<OrderModel> order = orderRepository.findById(id);
            if (order.isPresent()) {
                OrderModel orderModel = order.get();
                orderRepository.deleteById(id);
                return new NotifyModel("order deleted");
            } else {
                return new NotifyModel("no order found");
            }
        } catch (Error e) {
            return new NotifyModel("fail to delete order");
        }
    }

    @PutMapping("/updateOrder")
    public Object updateOrder(@RequestParam(name = "id") int id, @RequestParam String currentLocation, @RequestParam String status, @RequestParam String deliveryMan) {
        try {
            Optional<OrderModel> order = orderRepository.findById(id);
            if (order.isPresent()) {
                OrderModel orderModel = order.get();
                if (orderModel.isApproved()) {
                    orderModel.setCurrentLocation(currentLocation.isEmpty() ? orderModel.getCurrentLocation() : currentLocation);
                    orderModel.setDeliveryMan(deliveryMan.isEmpty() ? orderModel.getDeliveryMan() : deliveryMan);
                    orderModel.setStatus(status.isEmpty() ? orderModel.getStatus() : status);
                    orderRepository.save(orderModel);
                    return new NotifyModel("order updated");
                } else {
                    return new NotifyModel("order is not approved");
                }
            } else {
                return new NotifyModel("no order found");
            }
        } catch (Error e) {
            return new NotifyModel("fail to update order");
        }
    }
    @GetMapping("/getAllUsers")
    public Object getAllUsers() {
        try {
            List<UserModel> users = userRepository.findAll();
            return users;
        } catch (Error e) {
            return new NotifyModel("something went wrong");
        }
    }
    @PostMapping("/makeAdmin")
    public Object makeAdmin(@ModelAttribute UserModel userModel, @RequestParam String adminEmail) {
        try {
            UserModel adminModel = userRepository.findByEmail(adminEmail);
            if (adminModel == null) {
                return new NotifyModel("invalid user");
            } else {
                if (adminModel.role.equalsIgnoreCase("admin")) {
                    userModel.setRole("admin");
                    userRepository.save(userModel);
                    return new NotifyModel("admin created");
                } else {
                    return new NotifyModel("only admin can make an admin");
                }
            }
        } catch (Error e) {
            return new NotifyModel("something went wrong. try again later");
        }
    }


    @DeleteMapping("/removeUser")
    public Object removeUser(@RequestParam int userId, @RequestParam String adminEmail) {
        try {
            UserModel adminModel = userRepository.findByEmail(adminEmail);
            if (adminModel == null) {
                return new NotifyModel("invalid user");
            } else {
                if (adminModel.role.equalsIgnoreCase("admin")) {
                    userRepository.deleteById(userId);
                    return new NotifyModel("user deleted");
                } else {
                    return new NotifyModel("only admin can delete user");
                }
            }
        } catch (Error e) {
            return new NotifyModel("something went wrong. try again later");
        }
    }


    //.......................admin end..........................//
}
