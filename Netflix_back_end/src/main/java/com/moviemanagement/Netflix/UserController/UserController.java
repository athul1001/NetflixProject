package com.moviemanagement.Netflix.UserController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.moviemanagement.Netflix.Dto.Delete_user;
import com.moviemanagement.Netflix.Dto.LoginDTO;
import com.moviemanagement.Netflix.Dto.ResetPassDTO;
import com.moviemanagement.Netflix.Dto.UserDTO;
import com.moviemanagement.Netflix.Entity.User;
import com.moviemanagement.Netflix.Service.UserService;
import com.moviemanagement.Netflix.response.LoginResponse;


@RestController
@CrossOrigin
@RequestMapping("api/v1/user")

public class UserController {
	
	@Autowired
    private UserService userService;


	
	@PostMapping(path = "/save")
	 public String saveUser(@RequestBody UserDTO userDTO)
    {
        String id = userService.addUser(userDTO);
        return id;
    }
	
	@PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
		LoginResponse loginResponse = userService.loginUser(loginDTO);
	        return ResponseEntity.ok(loginResponse);
    }
	
	@PutMapping("/update-password")
	public ResponseEntity<?> updatepass(@RequestBody ResetPassDTO RPD){
		
		userService.updateUserPass(RPD.getEmail(),RPD.getNewPassword(),RPD.getNewPassword_2());
		return ResponseEntity.ok("password updated");
		
	}
	
	
	//last commented
	 @PutMapping("/update-email/{userId}")
	 public ResponseEntity<?> updateUser(@PathVariable int userId, @RequestBody String email) {
		    // Implement the logic to update the user with the given ID using the UserService.
		    userService.updateUserEmail(userId, email);
		    return ResponseEntity.ok("User updated successfully");
		}
	 
	 //end last commented
	 
	 
	 
//		 System.out.println("checking the user : "+updatedUser);
//
//	        if (updatedUser != null) {
//	            return ResponseEntity.ok(updatedUser);
//	            
//	        } else {
//	            return ResponseEntity.notFound().build(); // Handle the case where the user is not found
//	        }
	        // Implement logic to update user's email using userId and newEmail
	        // Return an appropriate response, e.g., success message or error
	    
	 @PutMapping("/update-password/{userId}")
	    public ResponseEntity<?> updatePassword(@PathVariable int userId, @RequestBody String newPassword) {
	        User updatedUser = userService.updateUserPassword(userId, newPassword);

	        if (updatedUser != null) {
	            return ResponseEntity.ok(updatedUser);
	        } else {
	            return ResponseEntity.notFound().build(); // Handle the case where the user is not found
	        }
	 }
	 
//	        @GetMapping("/new/{userId}")
//	        public String delete_user(@PathVariable String userId) {
//	        	userService.delete_user(Integer.parseInt(userId));
//				return "deleted";
//	        }
//	        
	  //last commented      
//	 @DeleteMapping("/delete")
//	 public ResponseEntity<?> deleteUser(@RequestBody Delete_user use) {
//	     // Implement the logic to delete the user with the given ID using the UserService.
//	     boolean deleted = userService.deleteUserByEmail(use);
//	     
//	     if (deleted) {
//	         return ResponseEntity.ok("User deleted successfully");
//	     } else {
//	         return ResponseEntity.notFound().build(); // Handle the case where the user is not found
//	     }
//	 }
	 //last commented
	 
//	 @DeleteMapping("/delete/{userId}")
//	 public ResponseEntity<?> deleteUserById(@PathVariable int userId) {
//	     boolean deleted = userService.deleteUserById(userId);
//
//	     if (deleted) {
//	         return ResponseEntity.ok("User deleted successfully");
//	     } else {
//	         return ResponseEntity.notFound().build(); // Handle the case where the user is not found
//	     }
//	 }
	//before submit
//	 @DeleteMapping("/delete")
//	 public ResponseEntity<?> deleteUserByEmail(@RequestParam("email") String email) {
//	     boolean deleted = userService.deleteUserByEmail(email);
//
//	     if (deleted) {
//	         return ResponseEntity.ok("User deleted successfully");
//	     } else {
//	         return ResponseEntity.notFound().build(); 
//	     }
//	 }
	 //before submit
	 
	 //before submit 2
	 @DeleteMapping("/delete")
	 public ResponseEntity<?> deleteUserByEmail(@RequestBody Delete_user deleteUser) {
	     boolean deleted = userService.deleteUserByEmail(deleteUser.getEmail());

	     if (deleted) {
	         return ResponseEntity.ok("User deleted successfully");
	     } else {
	         return ResponseEntity.notFound().build(); 
	     }
	 }
	 //before submit 2
}
 