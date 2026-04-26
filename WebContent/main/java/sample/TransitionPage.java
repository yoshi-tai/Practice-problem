package sample;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import tool.Page;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(urlPatterns = {"/transitionpage"})
public class TransitionPage extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	        
	    // redirectでの画面遷移の場合、当メソッド実行
	    createPage(request, response);
	        
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
        // formard、includeでの画面遷移の場合、当メソッド実行
        createPage(request, response);
		
	}
	
	private void createPage(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    
	    PrintWriter out = response.getWriter();
	    
        // 返却するレスポンスのタイプをセット(「text/html」を「text/plain」にしてHTML出力が上手くいかないパターンが多いので注意)
        response.setContentType("text/html; charset=UTF-8");	    
	    
        // htmlのヘッダ出力
        Page.header(out);
        
        out.println("<h1>遷移先のページです。</h1>");
        
        // HTTPリクエストメソッドの表示
        out.println("<p>リクエストのメソッド：" + request.getMethod() + "</p>");
        
        // リクエスト情報に格納した「info」キーの値を表示(リダイレクトの場合は値がnullになる)
        out.println("<p>「info」キーの値：" + request.getAttribute("info") + "</p>");
        
        // htmlのフッタ出力
        Page.footer(out);
	    
	}

}
