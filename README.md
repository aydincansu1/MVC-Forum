# MVC (Model - View - Controller)

- Model :

* Uygulamanin veri mantigiini ve yapisini temsil eder
* orn: Bilesende tutulacak state'in baslangic degeri
* Veriyi formatlamaya yarayan fonksiyon
* Api isteklerini tutabilir
* Genellikle class yapisi ile tanimlanir

- View:

* Son kullanicinin gordugu tasarimdir
* Bilesenin return satirina yazdigimiz jsx elementleri burada tanimlanir

- Controller:

* View ile model arasindaki baglantiyi saglar
* Kullanici etkilesimiyle tetiklenecek butun fonksiyonlar burada tanimlanir

# Kullanılan Teknolojiler

- Axios
- Json-Server
- React-Router-Dom
- React-Toastify
- Tailwind
- Uuid

# MVC Klasor yapisi

# # 1. yol

- puplic
- src
- - pages

- - - MainPage
- - - MainPageController
- - - MainPageView
- - - MainPageModel

- - - AuthPage
- - - AuthPageController
- - - AuthPageView
- - - AuthPageModel

# # 2. yol

- puplic
- src
- - - Controllers
- - - MainPageController
- - - AuthPageController

- - - Models
- - - MainPageModel
- - - AuthPageModel

- - - Views
- - - MainPageView
- - - AuthPageView
