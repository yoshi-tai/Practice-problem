package chapter5;

import tool.Page_chapter5;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * p.71 Chapter5：リクエストパラメータを取得するサーブレット
 *  テキストだとクラス名は「Greeting.java」
 *  ①GET通信を受け取ったら、doGetメソッドが動く 
 *  ②POST通信を受け取ったら、doPostメソッドが動く
 * 
 *  ①②の処理は同じ。 
 *  下記の処理を実装している。 
 *  
 *  ・Chapter5の内容：リクエストを取得する処理 
 *  ・Chapter4の内容：レスポンスを生成する処理
 */
@WebServlet("/chapter5/greeting")
public class Greeting_chapter5 extends HttpServlet {

    /**
     * GET通信が送信された場合、doGetメソッドが動く ★処理自体はPOSTと同じ！
     */
    public void doGet(HttpServletRequest req,
            HttpServletResponse res) throws IOException, ServletException {

        // ------------Chapter4の内容---------------------------------------------------------
        // p.55： レスポンスの文字エンコーディングの指定
        res.setContentType("text/html;charset=utf-8");
        // p.53： レスポンスの生成（PrintWriterオブジェクトの取得）
        PrintWriter out = res.getWriter();
        // -------------------------------------------------------------------------------

        // ------------Chapter5の内容---------------------------------------------------------
        // p.70： リクエストの文字エンコーディングの指定
        req.setCharacterEncoding("utf-8");
        // p.69～70： リクエストパラメータを取得する
        // greeting.htmlのテキストボックス（氏名）の入力値を取得（getParameterメソッド） → name属性（name）に対し1つの入力値
        String user = req.getParameter("user");
        // greeting.htmlのチェックボックス（開発経験）の入力値を取得（getParameterValuesメソッド） → name属性（lang）に対し複数の入力値
        String[] langs = req.getParameterValues("lang");
        // -------------------------------------------------------------------------------

        // ------------Chapter4の内容---------------------------------------------------------
        // p.62 HTMLを出力する処理の整理（HTMLの先頭部分をPageクラスからのheaderメソッドで出力）
        Page_chapter5.header(out);

        // p.53： レスポンスの生成（printlnメソッドで文字列を出力する）
        // 氏名を出力（user）
        out.println("<p>こんにちは、" + user + "さん!</p>");
        // 開発経験を出力（langs）
        out.println("<p>貴方の開発経験は下記になりますね！</p>");
        for (int i = 0; i < langs.length; i++) {
            out.println("▶" + langs[i]);
        }

        // p.62 HTMLを出力する処理の整理（HTMLの末尾部分をPageクラスからのfooterメソッドで出力）
        Page_chapter5.footer(out);
        // -------------------------------------------------------------------------------
    }

    /**
     * POST通信が送信された場合、doPostメソッドが動く
     */
    public void doPost(HttpServletRequest req,
            HttpServletResponse res) throws IOException, ServletException {
      // doGetメソッドと同じ処理を実施。
        doGet(req, res);
    }

}
