package sample;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;
import tool.Page;
import jakarta.servlet.annotation.WebServlet;

@WebServlet(urlPatterns = { "/transitionsample" })
public class TransitionSample extends HttpServlet {

    public void doGet(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {

        // 返却するレスポンスのタイプをセット(「text/html」を「text/plain」にしてHTML出力が上手くいかないパターンが多いので注意)
        response.setContentType("text/html; charset=UTF-8");

        PrintWriter out = response.getWriter();
        
        // htmlのヘッダ出力
        Page.header(out);

        System.out.println(request.getMethod());

        // 遷移前の画面表示
        out.println("<h1>");
        out.println("  Chapter09 SAMPLE");
        out.println("</h1>");
        out.println("<p>↓ボタンを押下すると画面遷移します。↓</p>");
        // 送信ボタンを押下すると「POST」メソッドでリクエストを送信
        out.println("<form method='POST' action='" + request.getRequestURL() + "'>");
        out.println("  ");
        out.println("　　<input type='radio' value='forward' name='transition_method' checked>");
        out.println("   forward");
        out.println("  </input>");
        out.println("　　<input type='radio' value='include' name='transition_method' />");
        out.println("    include");
        out.println("  </input>");
        out.println("　　<input type='radio' value='redirect' name='transition_method' />");
        out.println("    redirect");
        out.println("  </input>");
        out.println("  ");
        out.println("  <p/>");
        out.println("  ");
        out.println("　　<input type='submit' style='width: 15rem; height: 3rem' />");
        out.println("  ");
        out.println("</form>");

     // htmlのフッタ出力
        Page.footer(out);

    }

    public void doPost(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {

        PrintWriter out = response.getWriter();
        
        // 返却するレスポンスのタイプをセット(「text/html」を「text/plain」にしてHTML出力が上手くいかないパターンが多いので注意)
        response.setContentType("text/html; charset=UTF-8");

        // doGetで表示した画面のname属性が「transition_method」であるラジオボタンの値を取得
        String method = request.getParameter("transition_method");

        // TransitionPage.javaのアノテーション「transitionpage」を格納
        String transitionPage = "transitionpage";

        // 本クラス(TransitionPage)がレスポンスを返却する場合、下記文章が画面に表示される
        out.println("<p>※TransitionPage.javaがレスポンスを返却する場合、この文章が表示されます。</p>");

        // リクエスト情報に「info」というキーで「"JSP/サーブレット講義"」という値を格納する
        request.setAttribute("info", "JSP/サーブレット講義");

        // htmlのヘッダ出力
        Page.header(out);

        if (method.equals("forward")) {

            // forward実行
            request.getRequestDispatcher(transitionPage).forward(request,
                    response);

        } else if (method.equals("include")) {

            // include実行
            request.getRequestDispatcher(transitionPage).include(request,
                    response);

        } else if (method.equals("redirect")) {

            // redirect実行
            response.sendRedirect(
                    "http://localhost:8081/SampleJspServlet/transitionpage");

        } else {

            // ラジオボタンを選択せずに「送信」ボタンを押下した場合（基本的に実行されることは無い）
            System.out.println("メソッドが選択されていません。");

        }

        // htmlのフッタ出力
        Page.footer(out);

    }

}
