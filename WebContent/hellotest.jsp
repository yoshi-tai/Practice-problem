<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>JSP</title>
</head>
<body>
<%@ include file="index.jsp"%><br>
<%--file=jspのソースファイル名にしたら呼び出せる。(1行目と2行目が同じ奴だけ呼び出せる) --%>
<%@ include file="newProduct.jsp"%><br>
<%@ include file="update.jsp"%><br>
<%for(int i=1;i<=10;i++){out.print(i+"<br>");}%>

<% 
    int number = 5;
    if (number > 3) {
%>
    <p>数字は3より大きいです。</p>
<%
    } else {
%>
    <p>数字は3以下です。</p>
<%
    }
%>

</body>
</html>

