package com.moviemanagement.Netflix.Service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.moviemanagement.Netflix.Dto.Delete_user;
import com.moviemanagement.Netflix.Dto.LoginDTO;
import com.moviemanagement.Netflix.Dto.UserDTO;
import com.moviemanagement.Netflix.Entity.User;
import com.moviemanagement.Netflix.Entity.User_up;
import com.moviemanagement.Netflix.Repo.UserRepo;

import com.moviemanagement.Netflix.Service.UserService;
import com.moviemanagement.Netflix.response.LoginResponse;

@Service
public class UserIMPL implements UserService {
	
	@Autowired
    private UserRepo userRepo;
	
	@Autowired
    private PasswordEncoder passwordEncoder;

	@Override
	public String addUser(UserDTO userDTO) {
		// TODO Auto-generated method stub
		 User user = new User(

	                userDTO.getUserid(),
	                userDTO.getUsername(),
	                userDTO.getEmail(),

	               this.passwordEncoder.encode(userDTO.getPassword())
	        );

	        userRepo.save(user);

	        return user.getUsername();
		
		
	}

	@Override
	public LoginResponse loginUser(LoginDTO loginDTO) {
		// TODO Auto-generated method stub
		
		 String msg = "";
	        User user1 = userRepo.findByEmail(loginDTO.getEmail());
	        if (user1 != null) {
	            String password = loginDTO.getPassword();
	            String encodedPassword = user1.getPassword();
	            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
	            if (isPwdRight) {
	                Optional<User> user = userRepo.findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
	                if (user.isPresent()) {
	                    return new LoginResponse("Login Success", true);
	                } else {
	                    return new LoginResponse("Login Failed", false);
	                }
	            } else {
	                return new LoginResponse("password Not Match", false);
	            }
	        }else {
	            return new LoginResponse("Email not exits", false);
	        }
	}
	 @Override
	    public User findById(int userId) {

	       
	        User user = User.find(User.class, userId);

	      
	        return user;
	    }

	@Override
	public User updateUserEmail(int userId,String s) {
		// TODO Auto-generated method stub
		Optional<User> userOptional = userRepo.findById(userId);

	    if (userOptional.isPresent()) {
	        User user = userOptional.get();
	        user.setEmail(s);
	        return userRepo.save(user);
	        
	    }

	    return null;
	}

	@Override
	public User updateUserPassword(int userId, String newPassword) {
		// TODO Auto-generated method stub
		Optional<User> userOptional = userRepo.findById(userId);

	    if (userOptional.isPresent()) {
	        User user = userOptional.get();
	        user.setPassword(passwordEncoder.encode(newPassword)); // Encrypt and set the new password
	        return userRepo.save(user);
	    }

	    return null;
	}
//	@Override
//	public void delete_user(int userId) {
//		userRepo.deleteUserById(userId);
//	}
	//last commented
//	public boolean deleteUserByEmail(Delete_user user) {
//	    try {
//	        // Use your repository (e.g., userRepo) to delete the user by userId
////	        userRepo.deleteById(userId);
//	    	userRepo.deleteByEmail(user.getEmail());
//	        return true; // Deletion succeeded
//	    } catch (EmptyResultDataAccessException ex) {
//	        return false; // User with the given ID not found
//	    }
//	}
	//last commented
	
//	@Override
//	public boolean deleteUserById(int userId) {
//	    try {
//	        // Use your repository (e.g., userRepo) to delete the user by userId
//	        userRepo.deleteByUserId(userId);
//	        return true; // Deletion succeeded
//	    } catch (EmptyResultDataAccessException ex) {
//	        return false; // User with the given userId not found
//	    }
//	}
	
	@Override
	public void updateUserPass(String email, String pass1, String pass2) {
	    User useropt = userRepo.findByEmail(email);
	    
	    // Use .equals() to compare strings
	    if (pass1.equals(pass2)) {
	        useropt.setPassword(passwordEncoder.encode(pass1));
	        userRepo.save(useropt);
	        
	    }
	}
	//before submit
//
//	@Override
//	public boolean deleteUserByEmail(String email) {
//		// TODO Auto-generated method stub
//		return false;
//	}
//before submit
	
	//before submit 2

	@Override
	public boolean deleteUserByEmail(String email) {
	    // First, check if a user with the given email exists
	    User user = userRepo.findByEmail(email);

	    if (user != null) {
	        // If the user exists, delete it
	        userRepo.delete(user);
	        return true; // User deleted successfully
	    } else {
	        return false; // User not found
	    }
	}
	//before submit 2

	@Override
	public boolean deleteUserByEmail(Object email) {
		// TODO Auto-generated method stub
		return false;
	}

}
