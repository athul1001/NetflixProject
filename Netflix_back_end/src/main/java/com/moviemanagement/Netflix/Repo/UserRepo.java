package com.moviemanagement.Netflix.Repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.moviemanagement.Netflix.Entity.User;

@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<User,Integer> {

	
	 Optional<User> findOneByEmailAndPassword(String email, String password);
	 
	 User findByEmail(String email);
	 
	 void deleteByEmail(String email);

//	void deleteUserById(int userId);
	 
//	 @Query("DELETE FROM User as u WHERE u.userId = :user_id")
//	 void deleteUserById(int user_id);
//	@Query("DELETE FROM user where user.user_id= :id")
//	void deleteByUserId(int id);
	
}
