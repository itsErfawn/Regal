import { PrismaClient } from "@/lib/generated/prisma"
import { NextResponse } from "next/server"

export async function GET() {
    const prisma=new PrismaClient()
    // blogData.forEach(async blog=>{
    //     await prisma.blog.create({
    //         data:{
    //             title:blog.title,
    //             content:blog.content,
    //             summery:blog.summary,
    //             read_time:( 2 + Math.floor(Math.random() * 6)).toString(),
    //             date_added:blog.published_date,
    //             author:blog.author,
    //             tags:blog.tags.toString()
    //         }
    //     })

    // })
    return NextResponse.json(blogData)
}
var blogData=[
    {
      "id": 1,
      "title": "چطور مانتو اورسایز را استایل کنیم؟",
      "author": "سارا رضایی",
      "summary": "در این راهنما بررسی می‌کنیم که چگونه می‌توان مانتوهای اورسایز را با آیتم‌های دیگر ترکیب کرد تا استایلی مدرن، راحت و هماهنگ به‌وجود آورد.",
      "content": "<article>\n    <p>مانتوهای اورسایز یکی از مهم‌ترین ترندهای سال‌های اخیر در دنیای مد ایران هستند. این سبک با راحتی بالا و قابلیت تطبیق با انواع استایل‌ها، توجه بسیاری را جلب کرده است.</p>\n    <p>می‌توانید مانتو اورسایز را با شلوار جذب، شال ساده و کفش اسپرت یا بوت ترکیب کنید. این ترکیب استایلی شیک و مدرن خلق می‌کند.</p>\n    <ul>\n      <li>جنس مانتو: کتان، کرپ، پنبه‌ای</li>\n      <li>رنگ‌های توصیه‌شده: خاکستری، کرم، آبی نفتی</li>\n    </ul>\n    <p>فراموش نکنید که اکسسوری‌های ساده مثل ساعت چرمی یا کیف رودوشی کوچک می‌توانند استایل شما را کامل کنند.</p>\n  </article>",
      "tags": [
        "مانتو",
        "استایل",
        "زنانه"
      ],
      "published_date": "1404-03-08"
    },
    {
      "id": 2,
      "title": "پارچه‌های پایدار؛ آینده صنعت پوشاک",
      "author": "سارا رضایی",
      "summary": "با افزایش توجه جهانی به محیط زیست، مفهوم مد پایدار بیش از گذشته اهمیت یافته است. در این مقاله به بررسی نقش پارچه‌های پایدار در آینده پوشاک می‌پردازیم.",
      "content": "<article>\n    <p>مد پایدار مفهومی جدید اما حیاتی در صنعت پوشاک است. این نوع مد بر پایه حفظ محیط زیست و کاهش آسیب‌های زیست‌محیطی ایجاد شده است.</p>\n    <p>برندهای مسئولیت‌پذیر با استفاده از پارچه‌های بازیافتی، رنگ‌های طبیعی و حذف بسته‌بندی‌های پلاستیکی به این مسیر قدم گذاشته‌اند.</p>\n    <blockquote>مصرف هوشمندانه پوشاک، اولین قدم برای حفاظت از آینده زمین است.</blockquote>\n    <p>با خرید آگاهانه و استفاده بلندمدت از لباس‌ها، می‌توان گامی مثبت در مسیر پایداری برداشت.</p>\n  </article>",
      "tags": [
        "پوشاک پایدار",
        "محیط زیست"
      ],
      "published_date": "1404-03-24"
    },
    {
      "id": 3,
      "title": "راهنمای انتخاب کفش مناسب برای فصل پاییز",
      "author": "مریم توسلی",
      "summary": "در این مقاله به شما کمک می‌کنیم تا بر اساس شرایط آب‌وهوایی و سبک زندگی خود، کفش مناسبی برای روزهای پاییزی انتخاب کنید که هم کاربردی باشد و هم زیبا.",
      "content": "<article>\n    <p>فصل پاییز، زمان تغییر استایل و آماده شدن برای روزهای سردتر است. یکی از مهم‌ترین اجزای پوشش در این فصل، کفش مناسب است.</p>\n    <p>کفش‌های چرم، نیم‌بوت‌های کلاسیک و کفش‌های ضدآب بهترین انتخاب‌ها برای پاییز هستند.</p>\n    <ul>\n      <li>کفش چرم طبیعی: مقاوم و شیک</li>\n      <li>کفش جیر: سبک و مناسب هوای خنک</li>\n      <li>کفش ورزشی گرم: برای استایل روزمره</li>\n    </ul>\n    <p>ترکیب این کفش‌ها با پالتو بلند یا بارانی ساده، یک استایل پاییزی کامل به شما می‌دهد.</p>\n  </article>",
      "tags": [
        "کفش",
        "پاییز",
        "سبک زندگی"
      ],
      "published_date": "1404-03-19"
    },
    {
      "id": 4,
      "title": "لباس مجلسی یا رسمی؟ چه زمانی کدام را بپوشیم؟",
      "author": "علی قاسمی",
      "summary": "گاهی انتخاب بین لباس رسمی و مجلسی کار ساده‌ای نیست. در این مقاله به بررسی تفاوت‌ها و زمان مناسب برای پوشیدن هرکدام از این سبک‌ها پرداخته‌ایم.",
      "content": "<article>\n    <p>انتخاب بین لباس مجلسی و رسمی بسته به موقعیت اجتماعی و فرهنگی مراسم اهمیت دارد. لباس مجلسی معمولاً رنگارنگ‌تر و طراحی‌محورتر است، در حالی که لباس رسمی تمرکز بر سادگی و وقار دارد.</p>\n    <p>برای مجالس شب، پیراهن‌های بلند با پارچه‌های براق مانند ساتن و ابریشم انتخاب مناسبی هستند. در مقابل، کت‌وشلوار زنانه یا مانتوهای فرم‌دار برای محیط‌های رسمی کاربرد بیشتری دارند.</p>\n    <ul>\n      <li>لباس شب: طرح‌دار، دارای اکسسوری</li>\n      <li>لباس رسمی: ساده، رنگ‌های خنثی</li>\n    </ul>\n    <p>هماهنگی رنگ کیف، کفش و زیورآلات می‌تواند استایل شما را به سطح بالاتری ببرد.</p>\n  </article>",
      "tags": [
        "لباس مجلسی",
        "راهنما",
        "رسمی"
      ],
      "published_date": "1404-03-21"
    },
    {
      "id": 5,
      "title": "۵ ترند برتر لباس تابستانی در سال ۱۴۰۴",
      "author": "علی قاسمی",
      "summary": "در این مقاله نگاهی داریم به جدیدترین ترندهای لباس تابستانی که در سال ۱۴۰۴ محبوبیت زیادی پیدا کرده‌اند و مورد توجه طراحان داخلی و خارجی قرار گرفته‌اند.",
      "content": "<article>\n    <p>در دنیای امروز، <strong>صنعت مد و پوشاک</strong> یکی از پویاترین و پرتحول‌ترین صنایع به‌شمار می‌آید. انتخاب لباس مناسب نه‌تنها از نظر زیبایی بلکه از نظر فرهنگی نیز اهمیت دارد. این صنعت، بازتابی از ارزش‌های اجتماعی است.</p>\n    <p>لباس‌های تابستانی با تمرکز بر راحتی و سبکی طراحی می‌شوند. در سال‌های اخیر، استفاده از رنگ‌های پاستلی و پارچه‌های طبیعی مانند لینن و نخ افزایش یافته است.</p>\n    <ul>\n      <li>رنگ‌های محبوب: سفید، سبز نعنایی، صورتی کم‌رنگ</li>\n      <li>پارچه‌ها: نخ، لینن، پنبه سبک</li>\n    </ul>\n    <p>در نهایت، <strong>سادگی در طراحی</strong> و هماهنگی رنگ‌ها مهم‌ترین اصل در استایل تابستانی به شمار می‌روند.</p>\n  </article>",
      "tags": [
        "مد",
        "لباس",
        "تابستان"
      ],
      "published_date": "1404-03-10"
    },
    {
      "id": 6,
      "title": "چطور مانتو اورسایز را استایل کنیم؟",
      "author": "علی قاسمی",
      "summary": "در این راهنما بررسی می‌کنیم که چگونه می‌توان مانتوهای اورسایز را با آیتم‌های دیگر ترکیب کرد تا استایلی مدرن، راحت و هماهنگ به‌وجود آورد.",
      "content": "<article>\n    <p>مانتوهای اورسایز یکی از مهم‌ترین ترندهای سال‌های اخیر در دنیای مد ایران هستند. این سبک با راحتی بالا و قابلیت تطبیق با انواع استایل‌ها، توجه بسیاری را جلب کرده است.</p>\n    <p>می‌توانید مانتو اورسایز را با شلوار جذب، شال ساده و کفش اسپرت یا بوت ترکیب کنید. این ترکیب استایلی شیک و مدرن خلق می‌کند.</p>\n    <ul>\n      <li>جنس مانتو: کتان، کرپ، پنبه‌ای</li>\n      <li>رنگ‌های توصیه‌شده: خاکستری، کرم، آبی نفتی</li>\n    </ul>\n    <p>فراموش نکنید که اکسسوری‌های ساده مثل ساعت چرمی یا کیف رودوشی کوچک می‌توانند استایل شما را کامل کنند.</p>\n  </article>",
      "tags": [
        "مانتو",
        "استایل",
        "زنانه"
      ],
      "published_date": "1404-03-27"
    },
    {
      "id": 7,
      "title": "پارچه‌های پایدار؛ آینده صنعت پوشاک",
      "author": "سارا رضایی",
      "summary": "با افزایش توجه جهانی به محیط زیست، مفهوم مد پایدار بیش از گذشته اهمیت یافته است. در این مقاله به بررسی نقش پارچه‌های پایدار در آینده پوشاک می‌پردازیم.",
      "content": "<article>\n    <p>مد پایدار مفهومی جدید اما حیاتی در صنعت پوشاک است. این نوع مد بر پایه حفظ محیط زیست و کاهش آسیب‌های زیست‌محیطی ایجاد شده است.</p>\n    <p>برندهای مسئولیت‌پذیر با استفاده از پارچه‌های بازیافتی، رنگ‌های طبیعی و حذف بسته‌بندی‌های پلاستیکی به این مسیر قدم گذاشته‌اند.</p>\n    <blockquote>مصرف هوشمندانه پوشاک، اولین قدم برای حفاظت از آینده زمین است.</blockquote>\n    <p>با خرید آگاهانه و استفاده بلندمدت از لباس‌ها، می‌توان گامی مثبت در مسیر پایداری برداشت.</p>\n  </article>",
      "tags": [
        "پوشاک پایدار",
        "محیط زیست"
      ],
      "published_date": "1404-03-16"
    },
    {
      "id": 8,
      "title": "راهنمای انتخاب کفش مناسب برای فصل پاییز",
      "author": "علی قاسمی",
      "summary": "در این مقاله به شما کمک می‌کنیم تا بر اساس شرایط آب‌وهوایی و سبک زندگی خود، کفش مناسبی برای روزهای پاییزی انتخاب کنید که هم کاربردی باشد و هم زیبا.",
      "content": "<article>\n    <p>فصل پاییز، زمان تغییر استایل و آماده شدن برای روزهای سردتر است. یکی از مهم‌ترین اجزای پوشش در این فصل، کفش مناسب است.</p>\n    <p>کفش‌های چرم، نیم‌بوت‌های کلاسیک و کفش‌های ضدآب بهترین انتخاب‌ها برای پاییز هستند.</p>\n    <ul>\n      <li>کفش چرم طبیعی: مقاوم و شیک</li>\n      <li>کفش جیر: سبک و مناسب هوای خنک</li>\n      <li>کفش ورزشی گرم: برای استایل روزمره</li>\n    </ul>\n    <p>ترکیب این کفش‌ها با پالتو بلند یا بارانی ساده، یک استایل پاییزی کامل به شما می‌دهد.</p>\n  </article>",
      "tags": [
        "کفش",
        "پاییز",
        "سبک زندگی"
      ],
      "published_date": "1404-03-07"
    },
    {
      "id": 9,
      "title": "لباس مجلسی یا رسمی؟ چه زمانی کدام را بپوشیم؟",
      "author": "سارا رضایی",
      "summary": "گاهی انتخاب بین لباس رسمی و مجلسی کار ساده‌ای نیست. در این مقاله به بررسی تفاوت‌ها و زمان مناسب برای پوشیدن هرکدام از این سبک‌ها پرداخته‌ایم.",
      "content": "<article>\n    <p>انتخاب بین لباس مجلسی و رسمی بسته به موقعیت اجتماعی و فرهنگی مراسم اهمیت دارد. لباس مجلسی معمولاً رنگارنگ‌تر و طراحی‌محورتر است، در حالی که لباس رسمی تمرکز بر سادگی و وقار دارد.</p>\n    <p>برای مجالس شب، پیراهن‌های بلند با پارچه‌های براق مانند ساتن و ابریشم انتخاب مناسبی هستند. در مقابل، کت‌وشلوار زنانه یا مانتوهای فرم‌دار برای محیط‌های رسمی کاربرد بیشتری دارند.</p>\n    <ul>\n      <li>لباس شب: طرح‌دار، دارای اکسسوری</li>\n      <li>لباس رسمی: ساده، رنگ‌های خنثی</li>\n    </ul>\n    <p>هماهنگی رنگ کیف، کفش و زیورآلات می‌تواند استایل شما را به سطح بالاتری ببرد.</p>\n  </article>",
      "tags": [
        "لباس مجلسی",
        "راهنما",
        "رسمی"
      ],
      "published_date": "1404-03-06"
    },
    {
      "id": 10,
      "title": "۵ ترند برتر لباس تابستانی در سال ۱۴۰۴",
      "author": "حسین نادری",
      "summary": "در این مقاله نگاهی داریم به جدیدترین ترندهای لباس تابستانی که در سال ۱۴۰۴ محبوبیت زیادی پیدا کرده‌اند و مورد توجه طراحان داخلی و خارجی قرار گرفته‌اند.",
      "content": "<article>\n    <p>در دنیای امروز، <strong>صنعت مد و پوشاک</strong> یکی از پویاترین و پرتحول‌ترین صنایع به‌شمار می‌آید. انتخاب لباس مناسب نه‌تنها از نظر زیبایی بلکه از نظر فرهنگی نیز اهمیت دارد. این صنعت، بازتابی از ارزش‌های اجتماعی است.</p>\n    <p>لباس‌های تابستانی با تمرکز بر راحتی و سبکی طراحی می‌شوند. در سال‌های اخیر، استفاده از رنگ‌های پاستلی و پارچه‌های طبیعی مانند لینن و نخ افزایش یافته است.</p>\n    <ul>\n      <li>رنگ‌های محبوب: سفید، سبز نعنایی، صورتی کم‌رنگ</li>\n      <li>پارچه‌ها: نخ، لینن، پنبه سبک</li>\n    </ul>\n    <p>در نهایت، <strong>سادگی در طراحی</strong> و هماهنگی رنگ‌ها مهم‌ترین اصل در استایل تابستانی به شمار می‌روند.</p>\n  </article>",
      "tags": [
        "مد",
        "لباس",
        "تابستان"
      ],
      "published_date": "1404-03-26"
    },
    {
      "id": 11,
      "title": "چطور مانتو اورسایز را استایل کنیم؟",
      "author": "سارا رضایی",
      "summary": "در این راهنما بررسی می‌کنیم که چگونه می‌توان مانتوهای اورسایز را با آیتم‌های دیگر ترکیب کرد تا استایلی مدرن، راحت و هماهنگ به‌وجود آورد.",
      "content": "<article>\n    <p>مانتوهای اورسایز یکی از مهم‌ترین ترندهای سال‌های اخیر در دنیای مد ایران هستند. این سبک با راحتی بالا و قابلیت تطبیق با انواع استایل‌ها، توجه بسیاری را جلب کرده است.</p>\n    <p>می‌توانید مانتو اورسایز را با شلوار جذب، شال ساده و کفش اسپرت یا بوت ترکیب کنید. این ترکیب استایلی شیک و مدرن خلق می‌کند.</p>\n    <ul>\n      <li>جنس مانتو: کتان، کرپ، پنبه‌ای</li>\n      <li>رنگ‌های توصیه‌شده: خاکستری، کرم، آبی نفتی</li>\n    </ul>\n    <p>فراموش نکنید که اکسسوری‌های ساده مثل ساعت چرمی یا کیف رودوشی کوچک می‌توانند استایل شما را کامل کنند.</p>\n  </article>",
      "tags": [
        "مانتو",
        "استایل",
        "زنانه"
      ],
      "published_date": "1404-03-24"
    },
    {
      "id": 12,
      "title": "پارچه‌های پایدار؛ آینده صنعت پوشاک",
      "author": "حسین نادری",
      "summary": "با افزایش توجه جهانی به محیط زیست، مفهوم مد پایدار بیش از گذشته اهمیت یافته است. در این مقاله به بررسی نقش پارچه‌های پایدار در آینده پوشاک می‌پردازیم.",
      "content": "<article>\n    <p>مد پایدار مفهومی جدید اما حیاتی در صنعت پوشاک است. این نوع مد بر پایه حفظ محیط زیست و کاهش آسیب‌های زیست‌محیطی ایجاد شده است.</p>\n    <p>برندهای مسئولیت‌پذیر با استفاده از پارچه‌های بازیافتی، رنگ‌های طبیعی و حذف بسته‌بندی‌های پلاستیکی به این مسیر قدم گذاشته‌اند.</p>\n    <blockquote>مصرف هوشمندانه پوشاک، اولین قدم برای حفاظت از آینده زمین است.</blockquote>\n    <p>با خرید آگاهانه و استفاده بلندمدت از لباس‌ها، می‌توان گامی مثبت در مسیر پایداری برداشت.</p>\n  </article>",
      "tags": [
        "پوشاک پایدار",
        "محیط زیست"
      ],
      "published_date": "1404-03-05"
    },
    {
      "id": 13,
      "title": "راهنمای انتخاب کفش مناسب برای فصل پاییز",
      "author": "علی قاسمی",
      "summary": "در این مقاله به شما کمک می‌کنیم تا بر اساس شرایط آب‌وهوایی و سبک زندگی خود، کفش مناسبی برای روزهای پاییزی انتخاب کنید که هم کاربردی باشد و هم زیبا.",
      "content": "<article>\n    <p>فصل پاییز، زمان تغییر استایل و آماده شدن برای روزهای سردتر است. یکی از مهم‌ترین اجزای پوشش در این فصل، کفش مناسب است.</p>\n    <p>کفش‌های چرم، نیم‌بوت‌های کلاسیک و کفش‌های ضدآب بهترین انتخاب‌ها برای پاییز هستند.</p>\n    <ul>\n      <li>کفش چرم طبیعی: مقاوم و شیک</li>\n      <li>کفش جیر: سبک و مناسب هوای خنک</li>\n      <li>کفش ورزشی گرم: برای استایل روزمره</li>\n    </ul>\n    <p>ترکیب این کفش‌ها با پالتو بلند یا بارانی ساده، یک استایل پاییزی کامل به شما می‌دهد.</p>\n  </article>",
      "tags": [
        "کفش",
        "پاییز",
        "سبک زندگی"
      ],
      "published_date": "1404-03-05"
    },
    {
      "id": 14,
      "title": "لباس مجلسی یا رسمی؟ چه زمانی کدام را بپوشیم؟",
      "author": "مریم توسلی",
      "summary": "گاهی انتخاب بین لباس رسمی و مجلسی کار ساده‌ای نیست. در این مقاله به بررسی تفاوت‌ها و زمان مناسب برای پوشیدن هرکدام از این سبک‌ها پرداخته‌ایم.",
      "content": "<article>\n    <p>انتخاب بین لباس مجلسی و رسمی بسته به موقعیت اجتماعی و فرهنگی مراسم اهمیت دارد. لباس مجلسی معمولاً رنگارنگ‌تر و طراحی‌محورتر است، در حالی که لباس رسمی تمرکز بر سادگی و وقار دارد.</p>\n    <p>برای مجالس شب، پیراهن‌های بلند با پارچه‌های براق مانند ساتن و ابریشم انتخاب مناسبی هستند. در مقابل، کت‌وشلوار زنانه یا مانتوهای فرم‌دار برای محیط‌های رسمی کاربرد بیشتری دارند.</p>\n    <ul>\n      <li>لباس شب: طرح‌دار، دارای اکسسوری</li>\n      <li>لباس رسمی: ساده، رنگ‌های خنثی</li>\n    </ul>\n    <p>هماهنگی رنگ کیف، کفش و زیورآلات می‌تواند استایل شما را به سطح بالاتری ببرد.</p>\n  </article>",
      "tags": [
        "لباس مجلسی",
        "راهنما",
        "رسمی"
      ],
      "published_date": "1404-03-26"
    },
    {
      "id": 15,
      "title": "۵ ترند برتر لباس تابستانی در سال ۱۴۰۴",
      "author": "علی قاسمی",
      "summary": "در این مقاله نگاهی داریم به جدیدترین ترندهای لباس تابستانی که در سال ۱۴۰۴ محبوبیت زیادی پیدا کرده‌اند و مورد توجه طراحان داخلی و خارجی قرار گرفته‌اند.",
      "content": "<article>\n    <p>در دنیای امروز، <strong>صنعت مد و پوشاک</strong> یکی از پویاترین و پرتحول‌ترین صنایع به‌شمار می‌آید. انتخاب لباس مناسب نه‌تنها از نظر زیبایی بلکه از نظر فرهنگی نیز اهمیت دارد. این صنعت، بازتابی از ارزش‌های اجتماعی است.</p>\n    <p>لباس‌های تابستانی با تمرکز بر راحتی و سبکی طراحی می‌شوند. در سال‌های اخیر، استفاده از رنگ‌های پاستلی و پارچه‌های طبیعی مانند لینن و نخ افزایش یافته است.</p>\n    <ul>\n      <li>رنگ‌های محبوب: سفید، سبز نعنایی، صورتی کم‌رنگ</li>\n      <li>پارچه‌ها: نخ، لینن، پنبه سبک</li>\n    </ul>\n    <p>در نهایت، <strong>سادگی در طراحی</strong> و هماهنگی رنگ‌ها مهم‌ترین اصل در استایل تابستانی به شمار می‌روند.</p>\n  </article>",
      "tags": [
        "مد",
        "لباس",
        "تابستان"
      ],
      "published_date": "1404-03-05"
    },
    {
      "id": 16,
      "title": "چطور مانتو اورسایز را استایل کنیم؟",
      "author": "مریم توسلی",
      "summary": "در این راهنما بررسی می‌کنیم که چگونه می‌توان مانتوهای اورسایز را با آیتم‌های دیگر ترکیب کرد تا استایلی مدرن، راحت و هماهنگ به‌وجود آورد.",
      "content": "<article>\n    <p>مانتوهای اورسایز یکی از مهم‌ترین ترندهای سال‌های اخیر در دنیای مد ایران هستند. این سبک با راحتی بالا و قابلیت تطبیق با انواع استایل‌ها، توجه بسیاری را جلب کرده است.</p>\n    <p>می‌توانید مانتو اورسایز را با شلوار جذب، شال ساده و کفش اسپرت یا بوت ترکیب کنید. این ترکیب استایلی شیک و مدرن خلق می‌کند.</p>\n    <ul>\n      <li>جنس مانتو: کتان، کرپ، پنبه‌ای</li>\n      <li>رنگ‌های توصیه‌شده: خاکستری، کرم، آبی نفتی</li>\n    </ul>\n    <p>فراموش نکنید که اکسسوری‌های ساده مثل ساعت چرمی یا کیف رودوشی کوچک می‌توانند استایل شما را کامل کنند.</p>\n  </article>",
      "tags": [
        "مانتو",
        "استایل",
        "زنانه"
      ],
      "published_date": "1404-03-06"
    },
    {
      "id": 17,
      "title": "پارچه‌های پایدار؛ آینده صنعت پوشاک",
      "author": "علی قاسمی",
      "summary": "با افزایش توجه جهانی به محیط زیست، مفهوم مد پایدار بیش از گذشته اهمیت یافته است. در این مقاله به بررسی نقش پارچه‌های پایدار در آینده پوشاک می‌پردازیم.",
      "content": "<article>\n    <p>مد پایدار مفهومی جدید اما حیاتی در صنعت پوشاک است. این نوع مد بر پایه حفظ محیط زیست و کاهش آسیب‌های زیست‌محیطی ایجاد شده است.</p>\n    <p>برندهای مسئولیت‌پذیر با استفاده از پارچه‌های بازیافتی، رنگ‌های طبیعی و حذف بسته‌بندی‌های پلاستیکی به این مسیر قدم گذاشته‌اند.</p>\n    <blockquote>مصرف هوشمندانه پوشاک، اولین قدم برای حفاظت از آینده زمین است.</blockquote>\n    <p>با خرید آگاهانه و استفاده بلندمدت از لباس‌ها، می‌توان گامی مثبت در مسیر پایداری برداشت.</p>\n  </article>",
      "tags": [
        "پوشاک پایدار",
        "محیط زیست"
      ],
      "published_date": "1404-03-14"
    },
    {
      "id": 18,
      "title": "راهنمای انتخاب کفش مناسب برای فصل پاییز",
      "author": "نگار شریفی",
      "summary": "در این مقاله به شما کمک می‌کنیم تا بر اساس شرایط آب‌وهوایی و سبک زندگی خود، کفش مناسبی برای روزهای پاییزی انتخاب کنید که هم کاربردی باشد و هم زیبا.",
      "content": "<article>\n    <p>فصل پاییز، زمان تغییر استایل و آماده شدن برای روزهای سردتر است. یکی از مهم‌ترین اجزای پوشش در این فصل، کفش مناسب است.</p>\n    <p>کفش‌های چرم، نیم‌بوت‌های کلاسیک و کفش‌های ضدآب بهترین انتخاب‌ها برای پاییز هستند.</p>\n    <ul>\n      <li>کفش چرم طبیعی: مقاوم و شیک</li>\n      <li>کفش جیر: سبک و مناسب هوای خنک</li>\n      <li>کفش ورزشی گرم: برای استایل روزمره</li>\n    </ul>\n    <p>ترکیب این کفش‌ها با پالتو بلند یا بارانی ساده، یک استایل پاییزی کامل به شما می‌دهد.</p>\n  </article>",
      "tags": [
        "کفش",
        "پاییز",
        "سبک زندگی"
      ],
      "published_date": "1404-03-28"
    },
    {
      "id": 19,
      "title": "لباس مجلسی یا رسمی؟ چه زمانی کدام را بپوشیم؟",
      "author": "علی قاسمی",
      "summary": "گاهی انتخاب بین لباس رسمی و مجلسی کار ساده‌ای نیست. در این مقاله به بررسی تفاوت‌ها و زمان مناسب برای پوشیدن هرکدام از این سبک‌ها پرداخته‌ایم.",
      "content": "<article>\n    <p>انتخاب بین لباس مجلسی و رسمی بسته به موقعیت اجتماعی و فرهنگی مراسم اهمیت دارد. لباس مجلسی معمولاً رنگارنگ‌تر و طراحی‌محورتر است، در حالی که لباس رسمی تمرکز بر سادگی و وقار دارد.</p>\n    <p>برای مجالس شب، پیراهن‌های بلند با پارچه‌های براق مانند ساتن و ابریشم انتخاب مناسبی هستند. در مقابل، کت‌وشلوار زنانه یا مانتوهای فرم‌دار برای محیط‌های رسمی کاربرد بیشتری دارند.</p>\n    <ul>\n      <li>لباس شب: طرح‌دار، دارای اکسسوری</li>\n      <li>لباس رسمی: ساده، رنگ‌های خنثی</li>\n    </ul>\n    <p>هماهنگی رنگ کیف، کفش و زیورآلات می‌تواند استایل شما را به سطح بالاتری ببرد.</p>\n  </article>",
      "tags": [
        "لباس مجلسی",
        "راهنما",
        "رسمی"
      ],
      "published_date": "1404-03-06"
    },
    {
      "id": 20,
      "title": "۵ ترند برتر لباس تابستانی در سال ۱۴۰۴",
      "author": "حسین نادری",
      "summary": "در این مقاله نگاهی داریم به جدیدترین ترندهای لباس تابستانی که در سال ۱۴۰۴ محبوبیت زیادی پیدا کرده‌اند و مورد توجه طراحان داخلی و خارجی قرار گرفته‌اند.",
      "content": "<article>\n    <p>در دنیای امروز، <strong>صنعت مد و پوشاک</strong> یکی از پویاترین و پرتحول‌ترین صنایع به‌شمار می‌آید. انتخاب لباس مناسب نه‌تنها از نظر زیبایی بلکه از نظر فرهنگی نیز اهمیت دارد. این صنعت، بازتابی از ارزش‌های اجتماعی است.</p>\n    <p>لباس‌های تابستانی با تمرکز بر راحتی و سبکی طراحی می‌شوند. در سال‌های اخیر، استفاده از رنگ‌های پاستلی و پارچه‌های طبیعی مانند لینن و نخ افزایش یافته است.</p>\n    <ul>\n      <li>رنگ‌های محبوب: سفید، سبز نعنایی، صورتی کم‌رنگ</li>\n      <li>پارچه‌ها: نخ، لینن، پنبه سبک</li>\n    </ul>\n    <p>در نهایت، <strong>سادگی در طراحی</strong> و هماهنگی رنگ‌ها مهم‌ترین اصل در استایل تابستانی به شمار می‌روند.</p>\n  </article>",
      "tags": [
        "مد",
        "لباس",
        "تابستان"
      ],
      "published_date": "1404-03-11"
    }
  ]