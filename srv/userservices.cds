using app.user from '../db/user';
 
service UserService {
    entity User as projection on user.User;
};