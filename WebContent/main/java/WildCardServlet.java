
// パッケージをインポート
import jakarta.servlet.ServletException;

import jakarta.servlet.annotation.WebServlet;

import jakarta.servlet.http.HttpServlet;

import jakarta.servlet.http.HttpServletRequest;

import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

import java.io.PrintWriter;

//ワイルドカードでマッピング名を指定
@WebServlet("/wild/*")
public class WildCardServlet extends HttpServlet { 
    public void doGet(HttpServletRequest req,  HttpServletResponse res) throws IOException, ServletException { 
        res.setContentType("text/html;charset=utf-8");
        PrintWriter out = res.getWriter(); 
        out.println("<html>");
        
        out.println("<head>");
        
        out.println("<title>ワイルドカードでマッピングのサーブレット</title>");
        
        out.println("</head>");
        
        out.println("<body>");
        
        out.println("<h1>ワイルドカードでマッピングのサーブレット</h1>");
        
        out.println("</body>");
        
        out.println("</html>");
    }
}
