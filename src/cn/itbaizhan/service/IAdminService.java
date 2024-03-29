package cn.itbaizhan.service;

import java.util.List;
import java.util.Map;

import cn.itbaizhan.common.bean.Conch;
import cn.itbaizhan.common.bean.User;
import cn.itbaizhan.common.bean.Weibo;
import cn.itbaizhan.common.exception.UserServiceException;
import cn.itbaizhan.common.util.PageBean;

public interface IAdminService {
	
	User adminlogin(String name,String password) throws UserServiceException;
	
	Map<String, Object> indexDate() throws UserServiceException;
	
	List<User> userManage(PageBean page) throws UserServiceException; 
	
	List<User> userManageByKey(PageBean page,String key) throws UserServiceException; 
	
	void FJUser(long uId,int day) throws UserServiceException;

	void JFUser(long uId) throws UserServiceException;
	
	int findUserNum() throws UserServiceException;
	
	int findUserNum(String key) throws UserServiceException;
	
	int findWeiboNum(String key) throws UserServiceException;
	
	int findConchNum(String key) throws UserServiceException;
	
	List<Weibo> findWeibo(PageBean pageBean,String key) throws UserServiceException;
	
	List<Conch> findConch(PageBean pageBean,String key) throws UserServiceException;
	
	void UpWeibo(long wId,String ac) throws UserServiceException;
	
	void UpConch(long cId,String ac) throws UserServiceException;
}
