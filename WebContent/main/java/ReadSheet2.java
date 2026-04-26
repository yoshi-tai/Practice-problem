


import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * サーブレットクラスは「HttpServlet」を継承する。
 */
public class ReadSheet2 extends HttpServlet {

    // デフォルト・シリアル・バージョンID
    private static final long serialVersionUID = 1L;

    public void doGet(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {
        // 文字コードの設定
        response.setContentType("text/plain; charset-UTF-8");

        // 文字列出力のために、PrintWriterクラスを使用する。
        PrintWriter out = response.getWriter();

        // PrintWriterクラスのprintlnメソッドを使用し、html上で文字列を出力する。
        out.println("好きな文字を入力する。doGetメソッド");

    }

}
