function createDatabase(){
    var sql10="CREATE DATABASE hello";
    con.query(mysql,function(err,result){
        if(err) throw err;
       return "Database created";

})}
function createTable(){
var sql11="CREATE TABLE employees(name VARCHAR (255),department VARCHAR(100),salary DECIMAL(10))";
    con.query(sql11,function(err,result){
        if(err) throw err;
        console.log("Table created");
        var sql3="ALTER TABLE employees ADD COLUMN id INT AUTO_INCREMENT PRIMARY"
    })}