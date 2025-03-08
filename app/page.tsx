import HomeController from '@/controllers/pages/home/HomeController'

function page() {
    return  new HomeController().index()
    
}

export default page