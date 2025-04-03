import Model from "../Model";
const moment =require('moment')
class LoginModel extends Model {
    async setOTP(number:string){
        const connection = await this.getConnection(); 
        const serial=Math.floor(Math.random() * 900000) + 100000

        const futureTimestamp = moment().add(2, 'minutes').format("YYYY-MM-DD HH:mm:ss");
        console.log(futureTimestamp);
        
        await connection.execute("DELETE FROM otp WHERE number="+number);
        const [affectedRows]=await connection.execute("INSERT INTO `otp`(`number`, `Serial`,`expired_at`) VALUES ('"+number+"','"+serial+"','"+futureTimestamp+"')");
        return serial
        
    }
    async submiOTP(otp:string) {
        const connection = await this.getConnection();
        
        const [row] = await connection.execute(
            "SELECT * FROM otp WHERE Serial = ?",
            [otp]
        );
        if(row.length ===0){
            return {
                success:'',
                error:'کد وارد شده اشتباه میباشد'
            }
        }
        const currentTime = moment().format("YYYY-MM-DD HH:mm:ss");
        const expire=moment(row[0].expired_at,"YYYY-MM-DD HH:mm:ss");
        if (expire.isBefore(currentTime)) {
            return {
                success:'',
                error:'کد تایید منقضی شده'
            }
        } 
        return {
            success:row[0].number,
            error:''
        };
    }      
}

export default new LoginModel();