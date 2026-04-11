package tool;

import java.io.PrintWriter;
import java.io.IOException;

public class Page_chapter5 {

    // headerメソッド: PrintWriterを使用して<!DOCTYPE html>から<body>まで出力
    public static void header(PrintWriter writer) {
        writer.println("<!DOCTYPE html>");
        writer.println("<html>");
        writer.println("<head>");
        writer.println("    <meta charset='UTF-8'>");
        writer.println("    <title>Servlet/JSP Samples（サーブレット講義#2）</title>");
        writer.println("</head>");
        writer.println("<body>");
    }

    // footerメソッド: PrintWriterを使用して</body>と</html>を出力
    public static void footer(PrintWriter writer) {
        writer.println("</body>");
        writer.println("</html>");
    }

}
