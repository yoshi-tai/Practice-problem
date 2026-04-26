package bean;

import java.util.Date;

/**
 * 社員情報bean.
 * 
 */
public class EmployeeBean {
    // 社員コード
    private int employeeId;
    // 社員名
    private String employeeName;
    // 身長
    private double height;
    // eメール
    private String email;
    // 体重
    private double weight;
    // 入社年
    private int hireFiscalYear;
    // 誕生日
    private Date birthday;
    // 血液型
    private String bloodType;
    
    // (売上金額)price*quantityの値
    private int salesSum;
    
    
    public int getEmployeeId() {
        return employeeId;
    }
    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }
    public String getEmployeeName() {
        return employeeName;
    }
    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }
    public double getHeight() {
        return height;
    }
    public void setHeight(double height) {
        this.height = height;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public double getWeight() {
        return weight;
    }
    public void setWeight(double weight) {
        this.weight = weight;
    }
    public int getHireFiscalYear() {
        return hireFiscalYear;
    }
    public void setHireFiscalYear(int hireFiscalYear) {
        this.hireFiscalYear = hireFiscalYear;
    }
    public Date getBirthday() {
        return birthday;
    }
    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }
    public String getBloodType() {
        return bloodType;
    }
    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }
    public int getSalesSum() {
        return salesSum;
    }
    public void setSalesSum(int SalesSum) {
        this.salesSum = SalesSum;
    }
  
    
}
