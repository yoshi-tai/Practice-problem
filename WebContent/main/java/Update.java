import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.util.List;

import javax.naming.InitialContext;
import javax.sql.DataSource;

import bean.EmployeeBean;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

public class Update extends HttpServlet {

    /** デフォルト・シリアル・バージョンID */
    //private static final long serialVersionUID = 1L;
    
    /**
     * doPostメソッドについてはテキスト74P,doGetメソッドのオーバーライドについてはテキスト51Pを参照
     */
    public void doGet(HttpServletRequest request,
            HttpServletResponse response) throws ServletException,IOException{
        // 文字コードを設定(UTF-8)
        response.setContentType("text/plain; Charset=UTF-8");
        
        // 文字列出力のためにPrintWriterクラスを使用する
        PrintWriter out = response.getWriter();
        
        // printWriterクラスのprintlnクラスを使用し、html上で文字列を出力する
        out.println("文字出力確認");
    }
    /**
     * Postメソッドでフォーム送信されたときに呼び出される.
     */
    // ボタンが押されたとき（POSTされたとき）に動くメソッド（命令のかたまり）を始めるよ！
    public void doPost(HttpServletRequest request,
            HttpServletResponse response) throws ServletException,IOException{
        // 文字コードを設定(UTF-8)
        // 文字が変にならないように、文字のルール（UTF-8）を使うよ、って決めているよ
        response.setContentType("text/plain; Charset=UTF-8");
        
        // JSP上にhiddenで持っているmodeの値を取得
        // 画面の裏にかくれている 'mode' っていう名前のデータを取り出すよ！
        String mode = request.getParameter("mode");
        
        // doupdateのとき
        // もし 'mode' が 'doupdate'（ドゥ・アップデート）っていう値だったら…
        if("doupdate".equals(mode)) {
            // 更新（アップデート）のための特別な命令を実行するよ！
            update(request, response);
        // それ以外のときは…
        } else {
        // リクエストデータからemployeeIDを取得
        // 「画面から送られてきた 'employeeID'（社員の番号）を数字にして取り出すよ！    
        int employeeId = Integer.parseInt(request.getParameter(
                "employeeID"));
        
        // セッションデータからreadページで詰めた社員リストを取得
        // さっきどこかで保存しておいた社員のリスト（readList）を、もう一度使うために取り出すよ！
        HttpSession session = request.getSession();
        List<EmployeeBean> readList = (List<EmployeeBean>) session
                .getAttribute("readList");
        
        // 更新画面で表示する社員情報クラスを作成
        // これから使う、1人分の社員の情報を入れる新しい箱（employeeBean）をつくるよ！
        EmployeeBean employeeBean = new EmployeeBean();
        
        // セッションデータの社員リストから、更新画面でボタンが押下された社員データを取得
        // 社員のリストの中を、1人ずつ順番に見ていくよという文(拡張for文)
        for(EmployeeBean items : readList) {
            // その社員のID（番号）が、ボタンが押された人のIDと同じかどうかをチェックするよ！」という文
            if (items.getEmployeeId() == employeeId) {
                // 同じ人が見つかったら、その人の番号・名前・入社した年・メールアドレスを新しい箱（employeeBean）に入れるよ！
                employeeBean.setEmployeeId(items.getEmployeeId());
                employeeBean.setEmployeeName(items.getEmployeeName());
                employeeBean.setHireFiscalYear(items.getHireFiscalYear());
                employeeBean.setEmail(items.getEmail());
            }// ここまでが、同じ人だったときにやることの終わりだよ！って意味
        }
        
        // リクエストスコープに、employeeBeanを設定、呼び出しキーは"updateKey"
        // さっきの箱（employeeBean）を 'updateKey' という名前で画面に送る準備をするよ！
        request.setAttribute("updateKey", employeeBean);
        
        // 画面遷移処理
        // update.jsp” という名前の画面に行く準備をしているよ
        RequestDispatcher rd = request.getRequestDispatcher("update.jsp");
        // さっきの画面（update.jsp）に、箱（employeeBean）を持って移動するよ！
        rd.forward(request, response);
        }
    }
    void update(HttpServletRequest request,
            HttpServletResponse response) throws ServletException, IOException {
        try {
            // コネクションの取得
            InitialContext ic = new InitialContext();
            DataSource ds = (DataSource) ic.lookup("java:/comp/env/jdbc");
            Connection con = ds.getConnection();
            
            // フォームの値(画面の値)を取得する
            int employeeId = Integer.parseInt(request.getParameter("employeeID"));
            String email = request.getParameter("email");
            
            // SQL発行
            String sql = "UPDATE Employees "
                    + "SET email ='" + email + "' "
                    + "WHERE employeeID = " + employeeId;
            PreparedStatement st = con.prepareStatement(sql);
            
            // SQLの実行
            st.executeQuery();
            
            // DBの切断
            st.close();
            con.close();
            
        } catch (Exception e) {
            //エラー処理
            e.printStackTrace();
        }
        
        // 画面転移処理(readページに遷移)
        response.sendRedirect("read");
    }
}