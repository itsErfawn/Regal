import Model from "../Model";
class CustomerModel extends Model{
     async addGeust(){
        const now = new Date()
        const id = this.CreateId()
        const created_at_fa = new Intl.DateTimeFormat('fa-IR', {
          dateStyle: 'full',
          timeStyle: 'short',
        }).format(now).toString()
        
        const data = {
          id,
          created_at: now,
          created_at_fa,
          geust:true
        }
        
        return await this.db.customer.create({ data })
    }
    async validateCustomer(id:string){
      const data=await this.db.customer.findFirst({where:{id}})
      if(!data){return false};return true
    }
}
export default new CustomerModel();