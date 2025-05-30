import { PrismaClient } from "@/lib/generated/prisma"
import { v4 as uuid } from "uuid"

class Model {
    protected db = new PrismaClient()
    protected CreateId() {
        return uuid()
    }
}
export default Model