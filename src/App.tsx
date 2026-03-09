import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>
      <header>
        <h1>Yavuz Selim Karaağaç - Web Laboratuvarı</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="/profil.jpg" alt="Yavuz Selim Karaağaç'ın vesikalık fotoğrafı (Lazio formasıyla portre resmi)" />
            <figcaption>Yavuz Selim Karaağaç</figcaption>
          </figure>
          <p>Merhaba, ben Yavuz Selim Karaağaç. Yazılım Mühendisliği bölümünde eğitim alıyorum. Web teknolojileri, yapay zeka ve yazılım mimarisi üzerine çalışıyorum.</p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>HTML5 / CSS3 / JavaScript</li>
            <li>React / TypeScript / Vite</li>
            <li>Python / C#</li>
            <li>Git & GitHub</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="projects-grid">
            <article>
              <h3>web_lab_uygulamalari</h3>
              <p>İleri Düzey Web Programlama dersi uygulamalarının toplandığı depo.</p>
              <p><strong>Teknolojiler:</strong> HTML, CSS, React</p>
              <figure>
                <img src="/projeler.png" alt="web_lab_uygulamalari GitHub repo ekran görüntüsü" />
              </figure>
            </article>

            <article>
              <h3>MaddeNet</h3>
              <p>Özel geliştirilen bir algoritmik proje araştırması ve sunuş platformu.</p>
              <p><strong>Teknolojiler:</strong> C#, .NET</p>
              <figure>
                {/* Fallback veya farklı görsel istenirse src güncellenebilir */}
                <img src="/projeler.png" alt="MaddeNet GitHub repo ekran görüntüsü" />
              </figure>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          {/* form buraya */}
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer style={{ marginTop: '20px', padding: '10px 0', borderTop: '1px solid #ccc' }}>
        <p>&copy; 2026 Yavuz Selim Karaağaç. Tüm hakları saklıdır.</p>
        <div className="social-links" style={{ marginTop: '10px' }}>
          <a href="https://github.com/yavuzskaraagac" target="_blank" rel="noopener noreferrer">GitHub Profilim</a>
        </div>
      </footer>
    </>
  )
}

export default App
