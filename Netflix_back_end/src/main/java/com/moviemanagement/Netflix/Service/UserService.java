package com.moviemanagement.Netflix.Service;



import com.moviemanagement.Netflix.Dto.Delete_user;
import com.moviemanagement.Netflix.Dto.LoginDTO;
import com.moviemanagement.Netflix.Dto.UserDTO;
import com.moviemanagement.Netflix.Entity.User;
import com.moviemanagement.Netflix.Entity.User_up;
import com.moviemanagement.Netflix.response.LoginResponse;






public interface UserService {

	String addUser(UserDTO userDTO);

	LoginResponse loginUser(LoginDTO loginDTO);
// new added
	User updateUserEmail(int userId, String s);

	User updateUserPassword(int userId, String newPassword);

	User findById(int userId);

	//boolean deleteUserByEmail(Delete_user use);

	void updateUserPass(String email, String pass1, String pass2);
//before submit 2
	boolean deleteUserByEmail(Object email);
	//before submit 2

	boolean deleteUserByEmail(String email);
	
	//before submit
//	boolean deleteUserByEmail(String email);
// before submit
	
//	void delete_user(int userId);
//	boolean deleteUserById(int userId);

	
	

	

	

	

	

	
	
	
	
	

}
