export default function AuthService(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve({
                token: "jfldakfjldkjafdd1f3ad21f3da2f13dafda",
                user: {
                    name: "koji",
                    emai: "fake_email@gmail.com"
                }
            })
        },2000)
    })
}