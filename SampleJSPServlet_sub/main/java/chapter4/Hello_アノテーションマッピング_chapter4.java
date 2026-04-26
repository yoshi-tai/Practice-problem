package chapter4;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * p.46 Chapter4：基本的なサーブレットのクラス。テキストだとクラス名は「Hello.java」
 *  URLマッピングを@WebServletアノテーションで実施。
 * ・Chapter4の内容：レスポンスを生成する処理
 *
 * WebServletアノテーションでマッピング名を指定→@WebServlet("/hello")
 * publicクラスで、 HttpServletクラスを継承
 */
@WebServlet("/hello")
public class Hello_アノテーションマッピング_chapter4 extends HttpServlet {
    /**
     * ブラウザで「http://localhost:8081/SampleJspServlet/hello」にアクセス
     * ブラウザに直接URLを入力する際はGET通信→doGetメソッドが動く
     * doGet()をオーバーライド
     */
    public void doGet(HttpServletRequest req,
            HttpServletResponse res) throws IOException, ServletException {

        // ------------Chapter4の内容---------------------------------------------------------
        // p.55： レスポンスの文字エンコーディングの指定
        res.setContentType("text/html;charset=utf-8");
       
        // p.53： レスポンスの生成（PrintWriterオブジェクトの取得）
        PrintWriter out = res.getWriter();
        
        // p.53： レスポンスの生成（printlnメソッドで文字列を出力する）
        out.println("Hello_chapter4");
        out.println("@WebServlet()にてマッピング");
        // --------------------------------------------------------------------------------------
    }

}
