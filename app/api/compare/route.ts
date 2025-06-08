import CookieStore from "@/lib/cookies/CookieStore"
import { tokenVerifier } from "@/lib/token/Token"
import CompareModel from "@/models/compare/CompareModel"
import CustomerModel from "@/models/customer/CustomerModel"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json();
  if (!data) {
    return NextResponse.json({
      success: false,
      message: 'اطلاعات ارسالی نامعتبر است',
      heading: 'خطای درخواست'
    }, { status: 400 });
  }

  const userToken = await CookieStore.get("user_token");
  if(!userToken){
    return NextResponse.json({
      success:false,
      message:"برای اضافه کردن محصول به لیست علاقه مندی لطفا ابتدا ثبت نام کنید",
      heading:"نیاز به ورود"
    },{status:401})
  }
  const tokenVal = userToken?.value ? tokenVerifier(userToken.value) as { id: string } : null;

  if (!userToken || !tokenVal) {
    return NextResponse.json({
      success: false,
      message: 'شما احراز هویت نشده‌اید',
      heading: 'احراز هویت'
    }, { status: 401 });
  }

  const validateCustomer = await CustomerModel.validateCustomer(tokenVal.id);
  if (!validateCustomer) {
    return NextResponse.json({
      success: false,
      message: 'شما به این بخش دسترسی ندارید',
      heading: 'دسترسی غیرمجاز'
    }, { status: 403 });
  }

  await CompareModel.add(tokenVal.id, data);
  return NextResponse.json({
    success: true,
    message: 'محصول با موفقیت به لیست مقایسه اضافه شد',
    heading: 'مقایسه'
  }, { status: 200 });
}
