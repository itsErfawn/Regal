import React from 'react'
import Image from 'next/image'
import { ArrowLeft2, Box1, Truck, Wallet2 } from 'iconsax-react'
import Link from 'next/link'

function AboutPage() {
  return (
    <main>
    {/* About Section */}
    <section className="container">
      <div className="col-span-12 flex flex-col gap-8 py-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-neutral-8 caption-1">صفحه اصلی</Link>
          <ArrowLeft2 className="w-4 h-4 stroke-neutral-8" />
          <span className="text-neutral-11 caption-1">درباره ما</span>
        </div>
        <div className="flex items-start gap-16 max-tablet:flex-col">
            
          <div className="w-7/12 flex flex-col gap-6 max-tablet:w-full">
            <h1 className="flex items-center gap-2">
              درباره <span className="text-primary">رگال</span>
            </h1>
            <p className="text-neutral-11 body-3 leading-8">
              همه‌چیز از یک ایده ساده شروع شد. ایده ایجاد فروشگاه پوشاک آنلاین و سفارشی‌سازی با رویکرد تجربه مشتری به کار گرفته شد. در سال ۱۳۹۶ تیمی از طراحان مد و برنامه‌نویسان گرد هم آمدند تا همین ایده را عملی سازند. با همین دیدگاه، سایت رگال راه‌اندازی شد و با استقبال از آن توانستیم در اولین سال فعالیت خود محصولات خود را به دست مشتریان برسانیم. هر روز تلاش می‌کنیم تا با همکاری بهتر و کامل‌تر با همکاران خود، خدمات بهتری به شما مشتریان عزیز ارائه دهیم.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <p className="text-neutral-11 body-3">طراحی لباس‌های سفارشی با انتخاب پارچه‌ها و جزئیات متنوع به طور مستقیم و دلخواه شما</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <p className="text-neutral-11 body-3">تجربه آنلاین خرید و سفارشی‌سازی لباس با استفاده از فرم‌های نوین اندازه‌گیری</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <p className="text-neutral-11 body-3">ارسال سریع و فوق‌العاده مطمئن تمامی و تحویل حضوری سفارشات به طور موقعیت شما</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <p className="text-neutral-11 body-3">دسترسی به جدیدترین مدل‌ها و برند‌های سفارشی‌ساز - همه در رگال</p>
              </div>
            </div>
          </div>
          <div className="w-5/12 grid  gap-4 max-tablet:w-full max-tablet:hidden">
          <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <Image src="/assets/images/about-1.png" width={280} height={500} alt="about" className="rounded-sm" />
            <Image src="/assets/images/about-2.png" width={280} height={500} alt="about" className="rounded-sm" />
          </div>
          <div className="">
            <Image src="/assets/images/about-3.png" width={280} height={500} alt="about" className="rounded-sm col-span-2" />
          </div>
          </div>
          </div>

          {/* Mobile Image */}
          <div className="hidden max-tablet:block max-tablet:w-full">
            <Image src="/assets/images/about-1.png" width={400} height={500} alt="about" className="rounded-sm w-full" />
          </div>

        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="container">
      <div className="col-span-12 grid grid-cols-3 gap-8 py-16 max-tablet:grid-cols-1 max-tablet:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Box1 className="w-12 h-12 stroke-primary" variant="Bold" />
          <h5>طراحی سفارشات اختصاصی کالا</h5>
          <p className="text-neutral-11 body-3">با اطمینان خرید کنید. تمام سفارشات با فعالیت اصالت و کیفیت عالی همراه شما تا شما با خیال راحت خرید کنید</p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <Truck className="w-12 h-12 stroke-primary" variant="Bold" />
          <h5>ارسال به سراسر کشور</h5>
          <p className="text-neutral-11 body-3">با کمک تیم حمل و نقل حرفه‌ای خود در سراسر کشور به شما خدمت می‌کنیم و با دقت تمام سفارشات شما را در محل تحویل خواهیم داد</p>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <Wallet2 className="w-12 h-12 stroke-primary" variant="Bold" />
          <h5>پرداخت امن</h5>
          <p className="text-neutral-11 body-3">با سیستم پرداخت مطمئن و رمزنگاری‌شده گیت‌وی کارت و درگاه‌های شتاب اولویت شما اولویت ماست</p>
        </div>
      </div>
    </section>

    {/* Timeline Section */}
    <section className="container">
      <div className="col-span-12 flex flex-col items-center gap-8 py-16">
        <h2 className="flex items-center gap-2">
          سفر <span className="text-primary">ما</span> تا به امروز
        </h2>
        <p className="text-neutral-11 body-3 text-center max-w-4xl max-tablet:px-4">
          از آغاز تا به امروز 5 سال پر از تجربه را پشت سر گذاشته‌ایم. طراحی لباس‌های سفارشی مبتنی بر نیاز مشتریان و با کیفیت بالا برای ارائه لباس‌های متمایز‌تر و خاص. مشتری‌مداری همواره در اولویت ما بوده است و با تکیه بر همین موضوع خود را متمایز کرده‌ایم و سعی کرده‌ایم و سعی کرده‌ایم بدانیم چگونه نیازهای مشتریان را برآورده کنیم.
        </p>

        <div className="relative w-full py-16">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-neutral-4 max-tablet:hidden" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-neutral-4" />
          
          <div className="grid grid-cols-4 gap-8 relative z-10 max-tablet:grid-cols-1">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-tint-2 flex items-center justify-center text-primary">۱۴۰۰</div>
              <h6>آغاز کار ما</h6>
              <p className="text-neutral-11 body-4 text-center">
                همچنین با یک برند کوچک شروع شد که حالا تبدیل به یکی از بزرگ‌ترین سایت‌ها شده است. همان اینده اولیه باعث شد تا همه چیز‌های قرار در خرید شما باشد.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-tint-2 flex items-center justify-center text-primary">۱۴۰۱</div>
              <h6>اولین طراحی‌ها</h6>
              <p className="text-neutral-11 body-4 text-center">
                اولین مجموعه لباس‌های سفارشی ما با طراحی متفاوت و شیک و برساخته برنامه طراحی شد. بعد از آن مجموعه‌ها یکی پس از دیگری به سیستم اضافه شدند.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-tint-2 flex items-center justify-center text-primary">۱۴۰۲</div>
              <h6>گسترش کسب‌وکار</h6>
              <p className="text-neutral-11 body-4 text-center">
                با استقبال مشتریان و افزایش تقاضا، به زودی مجبور شدیم تیم را گسترش داده و به سراغ مزیت‌های کاری بزرگ‌تر برویم تا بتوانیم شبکه بزرگ‌تری را به وجود آوریم.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-tint-2 flex items-center justify-center text-primary">۱۴۰۳</div>
              <h6>ورود به دنیای دیجیتال</h6>
              <p className="text-neutral-11 body-4 text-center">
                آخرین تحول در کار ما ورود به دنیای دیجیتال بود که سایت مامی توانست به سادگی مورد استفاده قرار بگیرد و سفارش دهی راحت‌تر شود.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="container">
      <div className="col-span-12 flex flex-col gap-8 py-16">
        <div className="flex items-center justify-between max-tablet:flex-col max-tablet:items-start max-tablet:gap-4">
          <div>
            <h2>سوالات متداول، پاسخ سوالات خود را</h2>
            <h2 className="text-primary">اینجا پیدا کنید</h2>
          </div>
          <p className="text-neutral-11 body-3">سوالات مختلف کاربران</p>
        </div>

        <div className="flex flex-col gap-4">
          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden border border-neutral-4 rounded-sm">
            <summary className="flex items-center justify-between cursor-pointer">
              <h6>چگونه می‌توانم لباس سفارشی‌سازی شده سفارش دهم؟</h6>
              <ArrowLeft2 className="w-5 h-5 stroke-neutral-11 transition-transform group-open:rotate-90" />
            </summary>
            <p className="text-neutral-11 body-3 mt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </details>

          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden border border-neutral-4 rounded-sm">
            <summary className="flex items-center justify-between cursor-pointer">
              <h6>مدت زمان تحویل لباس‌های سفارشی چقدر است؟</h6>
              <ArrowLeft2 className="w-5 h-5 stroke-neutral-11 transition-transform group-open:rotate-90" />
            </summary>
            <p className="text-neutral-11 body-3 mt-4">
              تحویل لباس‌های سفارشی معمولا بین 10 تا 15 روز کاری زمان می‌برد. البته زمان دقیق به نوع لباس و میزان سفارشی‌سازی بستگی دارد. برای اطلاع از زمان دقیق تحویل سفارش خود با ما تماس بگیرید.
            </p>
          </details>

          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden border border-neutral-4 rounded-sm">
            <summary className="flex items-center justify-between cursor-pointer">
              <h6>آیا امکان بازگشت و تعویض لباس‌های سفارشی وجود دارد؟</h6>
              <ArrowLeft2 className="w-5 h-5 stroke-neutral-11 transition-transform group-open:rotate-90" />
            </summary>
            <p className="text-neutral-11 body-3 mt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
          </details>

          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden border border-neutral-4 rounded-sm">
            <summary className="flex items-center justify-between cursor-pointer">
              <h6>چگونه می‌توانم سایز دقیق خود را برای سفارش وارد کنم؟</h6>
              <ArrowLeft2 className="w-5 h-5 stroke-neutral-11 transition-transform group-open:rotate-90" />
            </summary>
            <p className="text-neutral-11 body-3 mt-4">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
          </details>
        </div>
      </div>
    </section>
  </main>
  )
}

export default AboutPage