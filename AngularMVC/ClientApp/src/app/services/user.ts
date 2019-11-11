//будем ли хранить заказы в лк? каким должен быть класс пользователя?
//надо ли хранить пользовательские данные или черт с ним будем перезаказывать?
interface UserData {
  email:string;
  phoneNumber:string;
  deliveryAddresses:string[];
  birthDate:Date;
  orders:UsersOrders[];
}

interface UsersOrders {
  orderDetails:string;
}
interface Request {
  user:UserData;
  token:string;
}
