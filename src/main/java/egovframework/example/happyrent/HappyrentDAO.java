package egovframework.example.happyrent;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import egovframework.rte.psl.dataaccess.EgovAbstractDAO;

@Repository("happyrentDAO")
public class HappyrentDAO extends EgovAbstractDAO{
	public List<?> selectList(HashMap<String, Object> param) throws Exception {
		return list("happyrentDAO.selectList",param);
	}
}
