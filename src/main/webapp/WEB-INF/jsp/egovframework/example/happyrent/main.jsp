<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
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
<div id="mask" onclick="Pclose();"></div>
<div id="docContainer">	

   <!-- BODY -->
   <script type="text/javascript" src="/js/ui.datepicker.js"></script>
<link rel="stylesheet" type="text/css" href="/css/jquery-ui-1.7.2.custom.css" />

<div class="smart_search" id="smartSlip">
	<p class="btn_smartOpen"><a href="#열기" onclick="javascript: SmartView();">검색 열기</a></p>
	<h2><img src="/images/contents/txt_smart.png" alt="스마트 서치" /></h2>
	<p class="smart_coment">원하시는 차량을 조건으로 찾아보세요!</p>
	<form name="carForm" id="carForm" method="post">
	<input type="hidden" name="car_type" />
	<input type="hidden" name="car_mileage" />
	<input type="hidden" name="car_fuel" />
	<input type="hidden" name="view_type" value="1" />
	<input type="hidden" name="canUse" value="0" />
	<input type="hidden" name="car_charge" value="2" />	
	<ul class="smart_list">
		<li><span>대여장소</span> 
			<span class="white">제주공항</span>
		</li>
		<li class="mDpi_el"><span>차종</span> 
			<select class="input_size02" onchange="mTypeChg(this.value);">
				<option value="">전체</option><option value="2" >경차</option><option value="4" >소형</option><option value="3" >중형</option><option value="5" >쿠페</option><option value="6" >고급</option><option value="7" >SUV</option><option value="8" >승합</option><option value="9" >수입</option>			</select>
		</li>
		<li><span>대여일</span> 
			<span>
				<input type="text" title="" name="sdate" class="input_text input_size02" id="datepicker_reserv1" readonly="readonly" value="2016-03-18" onchange="reserv_check();" size="16" />
				<a href="#date" class="reserv1_img"><img src="/images/btn/btn_cha.png" alt="달력보기" /></a><br />
				<select class="sel_size01" name="stime" id="stime" onchange="ChangDateA('hour');">
					<option value="8">08시</option>
					<option value="9">09시</option>
					<option value="10">10시</option>
					<option value="11">11시</option>
					<option value="12">12시</option>
					<option value="13">13시</option>
					<option value="14">14시</option>
					<option value="15">15시</option>
					<option value="16">16시</option>
					<option value="17">17시</option>
					<option value="18">18시</option>
					<option value="19">19시</option>
					<option value="20">20시</option>
					<option value="21">21시</option>
                    <option value="22">22시</option>
				</select>
				<select class="sel_size01" name="sminute" id="sminute" onchange="ChangDateA('minute');">
					<option value="00">00분</option>
					<option value="30" selected="selected">30분</option>
				</select>
			</span>
		</li>
		<li><span>반납일</span> 
			<span>
				<input type="text" title="" name="edate" class="input_text input_size02" id="datepicker_reserv2" readonly="readonly" value="2016-03-19" size="16" />
				<a href="#date" class="reserv2_img"><img src="/images/btn/btn_cha.png" alt="달력보기" /></a><br />
				<select class="sel_size01" name="etime" id="etime" onchange="ChangDateA();">
					<option value="7" selected>07시</option>
					<option value="8">08시</option>
					<option value="9">09시</option>
					<option value="10">10시</option>
					<option value="11">11시</option>
					<option value="12">12시</option>
					<option value="13">13시</option>
					<option value="14">14시</option>
					<option value="15">15시</option>
					<option value="16">16시</option>
					<option value="17">17시</option>
					<option value="18">18시</option>
					<option value="19">19시</option>
				</select>
				<select class="sel_size01" name="eminute" id="eminute" onchange="ChangDateA();">
					<option value="00" selected="selected">00분</option>
					<option value="30">30분</option>
				</select>
			</span>
		</li>
		<li><span>대여시간</span> 
			<span class="rental_time"><strong>24</strong>시간</span>
		</li>
	</ul>
	</form>
	<p class="btn_smart"><a href="#search" onclick="carSearch();">검색하기</a></p>
	<h3>차종선택</h3>
	<div class="smart_list02 car_type">
		<span class="bin01"><img src="/images/contents/bg_roundLt.png" alt="" /></span>
		<span class="bin02"><img src="/images/contents/bg_roundLr.png" alt="" /></span>
		<ul>
			<li class="item01"><a href="#" class="on">전체</a></li>
			<li><a href='#' data-car='2'>경차</a></li><li><a href='#' data-car='4'>소형</a></li><li class='item01'><a href='#' data-car='3'>중형</a></li><li><a href='#' data-car='5'>쿠페</a></li><li><a href='#' data-car='6'>고급</a></li><li class='item01'><a href='#' data-car='7'>SUV</a></li><li><a href='#' data-car='8'>승합</a></li><li><a href='#' data-car='9'>수입</a></li>			
		</ul>
	</div>
	<h3>연비</h3>
	<div class="smart_list02 car_mileage">
		<span class="bin01"><img src="/images/contents/bg_roundLt.png" alt="" /></span>
		<span class="bin02"><img src="/images/contents/bg_roundLr.png" alt="" /></span>
		<ul class="type01">
			<li class="item01"><a href="#" class="on">전체</a></li>
			<li><a href="#" data-car="A">A</a></li>
			<li><a href="#" data-car="B">B</a></li>
			<li><a href="#" data-car="C">C</a></li>
			<li><a href="#" data-car="D">D</a></li>
			<li><a href="#" data-car="E">E</a></li>
		</ul>
	</div>
	<h3>연료</h3>
	<div class="smart_list02 car_fuel">
		<span class="bin01"><img src="/images/contents/bg_roundLt.png" alt="" /></span>
		<span class="bin02"><img src="/images/contents/bg_roundLr.png" alt="" /></span>
		<ul>
			<li class="item01"><a href="#" class="on">전체</a></li>
			<li><a href='#' data-car='10'>휘발유</a></li><li><a href='#' data-car='11'>경유</a></li><li class='item01'><a href='#' data-car='12'>LPG</a></li><li><a href='#' data-car='70'>경유/LPG</a></li><li><a href='#' data-car='71'>휘발유/LPG</a></li>		
		</ul>
	</div>	
	<div class="smart_mbTxt">
		<p>제주에서의 행복한 여행과 추억! <br />쉽고 빠른 온라인예약으로 즐겁고 편안한 여행 되세요!</p>
		<ul>
			<li>01 차량대여 조건 : 운전경력 만 1년 이상 운전자만 가능</li>
			<li>02 차량 인수 및 반납 장소 : 제주공항 렌터카 하우스</li>
			<!--<li>03 실시간 예약은 현재일 기준 30일 이후 출발건만 예약이 가능합니다.</li>-->
		</ul>
	</div>
</div>
<!--  //smart search e -->

<!-- contents S -->
<div id="contentsWrap">

<!-- dBody S -->
<div id="dBody" class="smartS_none ">

<div id="contents" class="img_rent01">
	<h2><img src="/images/title/titH2_rent.png" alt="차량대여" /></h2>
	<p class="txtPara_coment"><img src="/images/contents/txt_rent01_01.png" alt="좌측의 해피 SMART search에서 대여일과 반납일을 선택하신 후 검색버튼을 클릭하세요." /></p>
	<p class="txtPara_tit"><img src="/images/contents/txt_rent01_02.png" alt="쉽고 빠른 온라인예약으로 즐겁고 편안한 여행 되세요!" /></p>
	<ol class="olList_type01">
		<li><img src="/images/icon/num01.png" alt="01" />차량대여 조건 : 만 21세 이상, 운전경력 만1년 이상 운전자만 가능하며<BR>도로교통법상 유효한 운전면허증 소지자 분만 예약이 가능합니다.</li>
		<li><img src="/images/icon/num02.png" alt="02" />차량 인수 및 반납 장소 : 제주공항 렌터카 하우스</li>
		<!--<li><img src="/images/icon/num03.png" alt="03" />실시간 예약은 현재일 기준 30일 이후 출발건만 예약이 가능합니다.</li>-->
	</ol>

	<ul class="imgPara_rent01">
		<li><img src="/images/contents/img_rent01_01.png" alt="" /> <br /><span>차량 검색</span></li>
		<li><img src="/images/contents/img_rent01_02.png" alt="" /> <br /> <span>예약정보 입력</span></li>
		<li><img src="/images/contents/img_rent01_03.png" alt="" /> <br /> <span>예약정보 확인</span></li>
		<li><img src="/images/contents/img_rent01_04.png" alt="" />  <br /><span>예약완료</span></li>
	</ul>
</div>

</div>
<!-- dBody E -->

</div>
<!-- contents E -->

   <hr />

</div>

<!--
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

	HashMap<String, Object> params = getParams(request);
-->

<script>
	function carSearch() {
		var params = $("#carForm").serialize();
		console.log("params: ", params);

		var contents = "<div id='dBody' class='smartS_none'>search: <br>&nbsp;*&nbsp;" + params.split("&").join("<br>&nbsp;*&nbsp;") + "</div>";
		
		/* $('#contentsWrap').empty().hide();
		$('#contentsWrap').append(contents).fadeIn(1000); */
		$.ajax({
			url : "/happyrent/sub.do",
			data : params,
			success:function(d){
				$('#contentsWrap').empty().hide();
				$('#contentsWrap').append(d).fadeIn(1000);
			},
			error:function(m1,m2,m3){
				alert(m3)
			}
		})
	}

	$(function() {
		$(".car_type a").click(function() {
			$("[name='car_type']").val($(this).attr("data-car"));
			$(this).parent().parent().find("a").removeClass("on");
			$(this).addClass("on");
			carSearch();
		});

		$(".car_mileage a").click(function() {
			$("[name='car_mileage']").val($(this).attr("data-car"));
			$(this).parent().parent().find("a").removeClass("on");
			$(this).addClass("on");
			carSearch();
		});

		$(".car_fuel a").click(function() {
			$("[name='car_fuel']").val($(this).attr("data-car"));
			$(this).parent().parent().find("a").removeClass("on");
			$(this).addClass("on");
			carSearch();
		});
	});
</script>

</body>
</html>
