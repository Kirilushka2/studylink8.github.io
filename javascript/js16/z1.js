function addOrder(){
    let order = {
        client_name: "",
        client_phone: "",
        order_name: "",
        order_price: "",
        order_status: "",
    }
    order.client_name = document.getElementById (`client_name`);
    order.client_phone = document.getElementById (`client_phone`);
    order.client_name = document.getElementById (`order_name`);
    order.client_price = document.getElementById (`order_price`);
    order.client_status = document.getElementById (`order_status`);
    console.log(order)
}