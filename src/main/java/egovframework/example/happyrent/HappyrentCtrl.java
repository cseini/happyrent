/*
 * Copyright 2008-2009 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package egovframework.example.happyrent;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.List;

import egovframework.example.sample.service.EgovSampleService;
import egovframework.example.sample.service.SampleDefaultVO;
import egovframework.example.sample.service.SampleVO;

import egovframework.rte.fdl.property.EgovPropertyService;
import egovframework.rte.ptl.mvc.tags.ui.pagination.PaginationInfo;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.support.SessionStatus;
import org.springmodules.validation.commons.DefaultBeanValidator;

/**
 * @Class Name : EgovSampleController.java
 * @Description : EgovSample Controller Class
 * @Modification Information
 * @
 * @  수정일      수정자              수정내용
 * @ ---------   ---------   -------------------------------
 * @ 2009.03.16           최초생성
 *
 * @author 개발프레임웍크 실행환경 개발팀
 * @since 2009. 03.16
 * @version 1.0
 * @see
 *
 *  Copyright (C) by MOPAS All right reserved.
 */

@Controller
@RequestMapping(value = "/happyrent")
public class HappyrentCtrl {
	@Resource(name="happyrentDAO")
	private HappyrentDAO dao;
	
	@RequestMapping(value = "/main.do")
	public String main(ModelMap model) throws Exception {

		return "happyrent/main";
	}

	@RequestMapping(value = "/sub.do")
	public String sub(HttpServletRequest request, ModelMap model) throws Exception {
		HashMap<String, Object> params = getParams(request);
		model.addAttribute("list", dao.selectList(params));
		return "happyrent/sub";
	}

	public static HashMap<String, Object> getParams(HttpServletRequest request) {
		Enumeration enumber = request.getParameterNames();
		HashMap<String, Object> params = new HashMap<String, Object>();

		while (enumber.hasMoreElements()) {
			String key = enumber.nextElement().toString();
			String value = request.getParameter(key);

			System.out.println("log.enumber.hasMoreElements key :"  +  key + " : " + value);

			params.put(key, value);  
		}
		return params;
	}

	
}
