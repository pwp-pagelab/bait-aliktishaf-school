const mapUrl = "https://maps.app.goo.gl/2XCM676ZpzkLY76K8";

// صور المدرسة المستخدمة في الموقع
const defaultImages = {
  classroom: '/school/primary-class.png',
  kindergarten: '/school/kindergarten-class.png',
  playground: '/school/playground.png',
};

const values = [
  ["✦", "المنهج السعودي", "تعليم راسخ يجمع المعرفة والمهارة."],
  ["⌁", "قيم أصيلة", "بيئة تربوية تعتز بالقيم الإسلامية والوطنية."],
  ["◌", "اكتشاف وإبداع", "ننمّي الفضول والتفكير النقدي في كل يوم."],
];

const goals = [
  "تعليم متميز وفق المنهج السعودي",
  "غرس القيم الإسلامية والوطنية",
  "تنمية التفكير النقدي والإبداعي",
  "التعليم بالتكنولوجيا الحديثة",
  "صقل المهارات الحياتية والاجتماعية",
  "دعم المواهب والأنشطة اللامنهجية",
];

const facilities = [
  ["فصول ملهمة", "بيئات صفية منظمة ومحفّزة للتعلم", defaultImages.classroom],
  ["تعلم باللعب", "مساحات خاصة لمرحلة الروضة والاكتشاف", defaultImages.kindergarten],
  ["مرافق آمنة", "ساحات لعب مجهزة تمنح الأطفال مساحة للنمو", defaultImages.playground],
];

export default function Home() {
  return (
    <main dir="rtl">
      <header className="nav" id="top">
        <a className="brand" href="#top" aria-label="العودة إلى بداية الصفحة">
          <span className="brand-mark">ب</span>
          <span>بيت الاكتشاف<small>مدارس أهلية</small></span>
        </a>
        <nav aria-label="التنقل الرئيسي">
          <a href="#about">عن المدرسة</a>
          <a href="#vision">الرؤية والرسالة</a>
          <a href="#campus">مرافقنا</a>
          <a href="#contact">الموقع</a>
        </nav>
        <a className="nav-cta" href={mapUrl} target="_blank" rel="noreferrer">زورونا</a>
      </header>

      <section className="hero">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="hero-copy">
          <p className="eyebrow">في قلب حي النعيم · جدة</p>
          <h1>هنا تبدأ <em>رحلة الاكتشاف</em></h1>
          <p className="lead">مدارس بيت الاكتشاف الأهلية؛ تعليم متميز ينمّي المعرفة، يرسّخ القيم، ويصنع بداية واثقة لأطفالنا.</p>
          <div className="hero-actions">
            <a className="button primary" href="#about">اكتشف مدرستنا <span>←</span></a>
            <a className="button quiet" href={mapUrl} target="_blank" rel="noreferrer">⌖ موقعنا على الخريطة</a>
          </div>
          <div className="hero-badges" aria-label="مراحل المدرسة">
            <span><b>روضة</b><small>بداية مرحة</small></span>
            <span><b>ابتدائي</b><small>معرفة تنمو</small></span>
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-image">
            <img src={defaultImages.classroom} alt="أحد فصول مدارس بيت الاكتشاف" loading="lazy" />
          </div>
          <div className="hero-note"><span>✦</span><b>نكتشف اليوم<br />لنبدع غدًا</b></div>
          <div className="hero-orbit">تعليم · قيم · إبداع</div>
          <div className="hero-spark spark-one" aria-hidden="true">✦</div>
          <div className="hero-spark spark-two" aria-hidden="true">✦</div>
        </div>
        <div className="hero-footer"><span>للروضة والمرحلة الابتدائية</span><i /><span>منهج سعودي</span><i /><span>بنين وبنات</span></div>
      </section>

      <section className="intro section" id="about">
        <div className="intro-grid">
          <div>
            <span className="section-kicker">من نحن</span>
            <h2>نتعلّم بفرح،<br /><em>ونكبر بثقة.</em></h2>
          </div>
          <div>
            <p>تقع مدارس بيت الاكتشاف الأهلية في حي النعيم بمدينة جدة، وتقدّم تعليمًا متميزًا للطلاب والطالبات في مرحلتي الروضة والابتدائي.</p>
            <p>نعتمد المنهج السعودي، ونوازن بين التعليم الأكاديمي القوي وغرس القيم الإسلامية والوطنية بما ينسجم مع رؤية المملكة 2030.</p>
            <div className="stage-pills">
              <span>🏫 <b>روضة</b></span>
              <span>📚 <b>ابتدائي</b></span>
              <span>👫 <b>بنين وبنات</b></span>
            </div>
          </div>
        </div>
        <div className="value-grid">
          {values.map(([icon, title, text]) => (
            <article className="value" key={title}>
              <span className="value-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vision section" id="vision">
        <div className="vision-panel">
          <div className="vision-head">
            <span className="section-kicker">بوصلتنا</span>
            <h2>رؤية تصنع <em>الأثر</em></h2>
          </div>
          <div className="vision-cards">
            <article>
              <span>01</span>
              <h3>الرؤية</h3>
              <p>أن نكون المؤسسة التعليمية الرائدة في تقديم تعليم متميز يوازن بين المعرفة الأكاديمية الحديثة والقيم الإسلامية والوطنية، في بيئة محفزة للإبداع والاكتشاف.</p>
            </article>
            <article>
              <span>02</span>
              <h3>الرسالة</h3>
              <p>تقديم تعليم عالي الجودة يرتكز على المناهج السعودية بأحدث الوسائل والمرافق المتطورة، لبناء شخصية متكاملة للطلاب والطالبات.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="goals section">
        <div className="goals-copy">
          <p className="section-kicker">أهدافنا</p>
          <h2>كل يوم فرصة<br />لـ <em>اكتشاف جديد</em></h2>
          <p>نصنع تجربة تعليمية شاملة تفتح الأبواب أمام المعرفة، الشخصية، والموهبة.</p>
        </div>
        <div className="goals-list">
          {goals.map((goal, i) => (
            <div key={goal}>
              <span>0{i + 1}</span>
              <p>{goal}</p>
              <b>↙</b>
            </div>
          ))}
        </div>
      </section>

      <section className="campus section" id="campus">
        <div className="campus-title">
          <div>
            <p className="section-kicker">بيئتنا التعليمية</p>
            <h2>مساحات تدعو <em>للتعلّم</em></h2>
          </div>
          <p>مرافق متكاملة تمنح أبناءنا وبناتنا تجربة تعليمية غنية وآمنة.</p>
        </div>
        <div className="facility-grid">
          {facilities.map(([title, text, image], i) => (
            <article className={`facility f-${i + 1}`} key={title}>
              <img src={image} alt={title} loading="lazy" />
              <div>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-card">
          <div>
            <p className="section-kicker">تواصل وزيارة</p>
            <h2>أهلًا بكم في<br /><em>بيت الاكتشاف</em></h2>
            <p>يسرّنا استقبالكم في حي النعيم بمدينة جدة للتعرّف إلى مدرستنا عن قرب.</p>
            <a className="button primary" href={mapUrl} target="_blank" rel="noreferrer">
              افتح الموقع على الخريطة <span>↗</span>
            </a>
          </div>
          <div className="map-art">
            <span>⌖</span>
            <b>حي النعيم<br />جدة</b>
            <i>المملكة العربية السعودية</i>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">
          <span className="brand-mark">ب</span>
          <span>بيت الاكتشاف<small>مدارس أهلية</small></span>
        </a>
        <p>تعليم متميز يبدأ بالاكتشاف.</p>
        <a href="#top">العودة للأعلى ↑</a>
      </footer>
    </main>
  );
}
