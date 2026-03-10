import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import Card from './components/Card'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col items-center">
      {/* Dark mode Buton (Sayfada kalsin, navigasyon disi bagimsiz eklenti) */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-20 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana Icerige Atla
      </a>

      {/* Header ve Navigasyon */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 w-full transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Yavuz Selim Karaağaç
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li><a href="#hakkimda"
                className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                Hakkımda</a></li>
              <li><a href="#projeler"
                className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                Projeler</a></li>
              <li><a href="#iletisim"
                className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="w-full">
        {/* Hakkımda Bölümü */}
        <section id="hakkimda" className="py-16 px-4 w-full">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img src="/profil.jpg"
                alt="Yavuz Selim Karaağaç vesikalık fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg" />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left transition-colors">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed transition-colors">
                Yazılım Mühendisliği bölümünde eğitim alıyorum.
                Full-stack geliştirici olarak modern web teknolojileriyle kullanıcı dostu arayüzler ve sağlam sistem mimarileri oluşturuyorum.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                  React</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                  TypeScript</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                  Tailwind</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">
                  .NET / C#</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler Bölümü */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 w-full transition-colors">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10 transition-colors">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="elevated" title="E-Ticaret Platformu"
                image="/projeler.png"
                imageAlt="E-Ticaret anasayfa gorunumu">
                React ve Node.js ile tam kapsamlı uygulama.
              </Card>

              <Card variant="elevated" title="MaddeNet Zurna Mimarisi"
                image="/projeler.png"
                imageAlt="MaddeNet anasayfa gorunumu">
                Algoritmik proje araştırması ve sunuş platformu. .NET ile.
              </Card>

              <Card variant="elevated" title="Web Laboratuvarı"
                image="/projeler.png"
                imageAlt="Web Lab anasayfa gorunumu">
                Frontend teknolojileri araştırma ve deneme alanı. Tailwind ve React.
              </Card>
            </div>
          </div>
        </section>

        {/* İletişim Formu */}
        <section id="iletisim" className="py-16 px-4 w-full">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 transition-colors">
              İletişim
            </h2>
            <form className="space-y-4">
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              <div className="space-y-1">
                <label htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea id="message" rows={5} required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 transition-colors">
                </textarea>
              </div>
              <Button variant="primary" size="lg" type="submit">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm w-full transition-colors mt-auto">
        <p>&copy; 2026 Yavuz Selim Karaağaç. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  )
}

export default App
