<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
    <%@taglib prefix="c" uri="jakarta.tags.core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>商品検索一覧</title>
<style>
	.serchResult{
	width: 100%;
	text-align:center;
	}
</style>
</head>
<body>

	<form action="newProduct" method="post">
		<h1>商品検索一覧</h1>
		<h2>検索条件</h2>
		<table>
			<tr>
				<td>商品ID <input type="text" name="ID" value=""></td>

				<td>商品コード <input type="text" name="CODE" value=""></td>

				<td>商品名 <input type="text" name="NAME" value=""></td>

				<td>価格 <input type="text" name="PRICE" value=""></td>

				<td>カテゴリー <select name="CATEGORYID">
						<c:forEach var="list" items="${productList}">
							<option value="${list.categoryId}">${list.categoryName}</option>
						</c:forEach>
				</select></td>
			</tr>
		</table>
		<br />
		<table>
			<tr>
				<td>登録日時<input type="date" name="date"></td>
				<td></td>
				<td></td>
				<td></td>
				<td>更新日時<input type="date" name="date"></td>
				<td></td>
				<td></td>
			</tr>
		</table>

		<h2>検索方式</h2>
		<table>
			<tr>
				<td><input type="radio" name="radio">完全一致</td>
				<td><input type="radio" name="radio">前方一致</td>
				<td><input type="radio" name="radio">後方一致</td>
				<td><input type="radio" name="radio">値を含む</td>
				<td><input type="radio" name="radio">値を含まない</td>
			</tr>
		</table>
		<br />
		<input type="submit" name="bo" value="検索">
		<input type="submit" name="bo" value="登録">
		<input type="submit" name="bo" value="削除" disabled>
		<br />
		<h3>検索結果</h3>
		<table border="1" class="serchResult">
			<tr>
				<th></th>
				<th>商品ID</th>
				<th>商品コード</th>
				<th>商品名</th>
				<th>価格</th>
				<th>カテゴリー</th>
				<th>登録日時</th>
				<th>更新日時</th>
				<th></th>
			</tr>
			<tr>
				<td><input type="checkbox" type="hidden" name="center"></td>
				<td>${IDKEY}</td>
				<td>${CODEKEY}</td>
				<td>${NAMEKEY}</td>
				<td>${PRICEKEY}</td>
				<td>${CATEGORYNAMEKEY}</td>
				<td></td>
				<td></td>
				<td><input type="submit" name="botan" value="更新" class="center"></td>
			</tr>
		</table>
	</form>
</body>
</html>






















