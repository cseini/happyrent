<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix = "c" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head>
<title>해피렌트카 [제주 프리미엄 SERVICE 렌트카]</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, user-scalable=no" />
<link rel="stylesheet" type="text/css" href="/css/layout.css" />
<link rel="stylesheet" type="text/css" href="/css/mStyle.css" />
<link rel="stylesheet" type="text/css" href="/css/rent.css" />
<link rel="stylesheet" type="text/css" href="/css/jquery.tools.dateinput.css" />
<script type="text/javascript" src="/js/jquery.min.1.7.2.js"></script>
<script type="text/javascript" src="/js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="/js/mobile_js.js"></script>
<script type="text/javascript" src="/js/borwerDpi.js"></script>
<script type="text/javascript" src="/js/lib.js"></script>
<script type="text/javascript" src="/js/jquery.tools.js"></script>
<script type="text/javascript" src="/js/front_js.js"></script>
<script type="text/javascript" src="/js/jquery.eleformat.js"></script>
<script type="text/javascript">
var is_login = "";
</script>
</head>

<body style="opacity:0;">

<!-- contents S -->
<div id="contentsWrap" style="display: block;">

<!-- dBody S -->
<div id="dBody" class="smartS_none ">

<div id="contents">
<h2><img src="/images/title/titH2_rent.png" alt="차량대여"></h2>
<p class="rent_titComent">
	고객님께서 선택하신 기간은 <strong>실시간예약</strong>이 가능한 구간 입니다. <br>실시간 예약을 원하지 않으시거나 예약 가능한 차량이 없을 경우 <strong>예약상담</strong>으로 접수 하시기 바랍니다.</p>

<ul class="rent_listShort">
	<li><span>보기방식</span>
		<a href="#" class="btn_short " data-type="view_type" data-val="1"><span>이미지</span></a>
		<a href="#" class="btn_short on" data-type="view_type" data-val="2"><span>텍스트</span></a>
	</li>
	<li><span>실시간예약</span>		
		<a href="#" class="btn_short on" data-type="canUse" data-val="0"><span>전체차량</span></a>		
		<a href="#" class="btn_short " data-type="canUse" data-val="1"><span>가능차량</span></a>
	</li>
	<li id="view_type_charge" style="display:none;"><span>요금제</span>
		<a href="#" class="btn_short " data-type="car_charge" data-val="1"><span>전체요금</span></a>
		<a href="#" class="btn_short on" data-type="car_charge" data-val="2"><span>현재요금</span></a>
	</li>
</ul>

<table class="data_tableW" id="view_type_text" cellpadding="0" cellspacing="0" style="display:;">
	<caption></caption>
	<colgroup>
		<col width="">
		<col width="">
	</colgroup>
	<thead>
	<tr>
		<th scope="col">차종</th>
		<th scope="col">차량명</th>
		<th scope="col">요금</th>
		<th scope="col">연료</th>
		<th scope="col">연비</th>
	</tr>
	</thead>
	<tbody>
	<c:forEach var="item" items="${list}" step="1">
		<tr class="type03">
			<td>${item.type_name}</td>
			<td class="cell_type01 viewBtn">
				<a href="#text" class="">${item.name}</a>
				<span class="toltip">
					<em>
						- 완전자차요금 무료 <br>
						- 완전자차요금 무료 <br>
						- 편의장비대여료 50% 환불
					</em>
				</span>
			</td>
			<td>${item.price}원</td>
			<td>${item.fuel_name}</td>
			<td>${item.mi_name}</td>
		</tr>
		<tr style="display:none;" class="viewBtn">
			<td colspan="9">
				<p class="tbl_rentBtn" data-car="1">
					<a href="#reservPage" class="btn_reserv reservActive">실시간 예약</a><a href="#advicePage" class="btn_reserv btn_triger adviceActive">예약상담</a>
					<a href="#itemPage" class="btn_rentView btn_triger detailActive">상세 정보 보기</a>
				</p>
			</td>
		</tr>
	</c:forEach>
	</tbody>
</table>
</div>

<!-- layerNavi_con S -->
<div id="layerNavi">
	<div class="layer_con page_conEl" id="itemPage"> <!-- 상세 정보 보기 -->				
	</div>

	<div class="layer_con page_conEl" id="reservPage"> <!-- 실시간 예약 -->				
	</div>

	<div class="layer_con page_conEl" id="advicePage"> <!-- 예약상담신청 -->
	</div>
</div>
<!-- layerNavi_con E -->

</div>
<!-- dBody E -->

</div>
<!-- contents E -->
	
</body>
</html>
