app.factory('OrderFactory', function($http){
  var OrderFactory = {};

  OrderFactory.getAllUserOrders = function() {
    return $http.get('/api/orders/')
    .then(orders => orders.data)
  }

  OrderFactory.findAllForOrderId = function(args) {
    return $http.get('/api/orders/' + args)
    .then(order => order.data);
  }

  OrderFactory.checkout = function (credentials) {
    return $http.post('/api/orders', credentials)
    .then(res => res.data)
  }


  //admin methods
  OrderFactory.getAllAdminOrders = function(args) {
    return $http.get('/api/orders/admin', {params: args})
      .then(res => res.data);
  }

  OrderFactory.updateOrderStatus = function(orderId, orderStatus) {
    return $http.put('/api/orders/admin/status/' + orderId, {orderStatus: orderStatus})
      .then(res => res.data);
  }

  return OrderFactory;
})
