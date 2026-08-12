const services = [
  {
    number: "01",
    title: "暮らしを読み解く、設計",
    text: "今の住まい方と理想の過ごし方を丁寧にヒアリング。リビングと寝室をつなぐ動線、収納、素材、照明まで一体で設計します。",
  },
  {
    number: "02",
    title: "質感までつくり込む、施工",
    text: "設計意図を共有したチームが、内装から造作家具、照明まで一貫して施工。図面の美しさを、現場の品質へつなげます。",
  },
  {
    number: "03",
    title: "家具を、気分で着替える",
    text: "施工後の空間に合わせ、提携サービスの家具からソファやテーブル、チェアなどを選定。気分や暮らしの変化に合わせて、入れ替えることもできます。",
  },
  {
    number: "04",
    title: "ホテル仕様のリネンサービス",
    text: "完成後は、上質なシーツやピローケースを月1〜2回交換。使い終えたリネンは専用バッグで回収します。",
  },
  {
    number: "05",
    title: "香りとアメニティのサブスク",
    text: "国内外のホテルで親しまれるルームフレグランスやアメニティから、空間に合うものを選んで定期的にお届けします。",
  },
];

const faqs = [
  ["賃貸でも導入できますか？", "造作を伴うプランは、原則として戸建て・分譲マンション向けです。賃貸の場合は、原状回復が可能な範囲でご提案します。"],
  ["継続サービスだけ利用できますか？", "継続サービスは、当社でリノベーションいただいたお住まいに向けたプランです。単体でのご提供は行っておりません。"],
  ["途中で解約できますか？", "最低契約期間の終了後は解約可能です。契約期間はプランによって異なるため、お見積り時に詳しくご案内します。"],
  ["施工費はどれくらいですか？", "お部屋の広さや既存の状態、素材・造作の内容により異なるため、個別にお見積りします。初回相談とお見積りは無料です。"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CHECK-IN HOME(自宅ホテル化計画) トップ">
          <strong>CHECK-IN HOME</strong>
          <span>自宅ホテル化計画</span>
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#concept">コンセプト</a>
          <a href="#service">リノベーション</a>
          <a href="#faq">よくある質問</a>
          <a className="nav-cta" href="#contact">無料相談</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" role="img" aria-label="木の質感と暖かな照明を取り入れたホテルの寝室" />
        <div className="hero-copy">
          <p className="hero-kicker">HOME RENOVATION</p>
          <p className="eyebrow">DESIGN, BUILD & CONTINUING CARE.</p>
          <h1><span>自宅に、</span><span>チェックイン。</span></h1>
          <div className="hero-description">
            <p><small>01 / RENOVATION</small><strong>リビングから寝室まで。</strong><br />内装デザインと工事を、ひとつのチームで。</p>
            <p><small>02 / CONTINUING CARE</small><strong>完成後の心地よさまで。</strong><br />家具、ホテルの香り、アメニティまで整えます。</p>
          </div>
          <a className="button button-light" href="#contact">無料相談を予約する <span>↗</span></a>
        </div>
        <div className="scroll-note">SCROLL TO DISCOVER <span>↓</span></div>
      </section>

      <section className="intro section" id="concept">
        <div className="section-label"><span>01</span> OUR THOUGHT</div>
        <div className="intro-grid">
          <h2>美しくつくる。<br />そして、その先の<br /><em>心地よさまで</em><br />設計する。</h2>
          <div className="intro-text">
            <p>私たちの出発点は、内装デザインと施工です。リビングから寝室まで、色、素材、光、収納、動線を細部まで整え、住まいの中に静かな非日常をつくります。</p>
            <p>けれど、美しい空間だけでは感動は続きません。肌に触れるリネンや香り、日々の整い方まで含めてこそ、ホテルのような体験になります。</p>
            <p className="hand-note">工事をゴールにしない、<br />リノベーションへ。</p>
          </div>
        </div>
      </section>

      <section className="statement">
        <div className="statement-image" role="img" aria-label="白いリネンと間接照明のホテルベッド" />
        <div className="statement-copy">
          <p className="eyebrow">ONE VISION, FROM DESIGN TO BUILD</p>
          <h2>ホテル暮らしを、<br />あきらめない。</h2>
          <p className="statement-tagline">チェックアウトのない毎日を。</p>
          <p>プランを描く人と、現場で形にする人。その間にあるズレをなくし、内装デザインから工事まで一貫して請け負います。完成後のリネンやアメニティも、同じ世界観の中で選び抜きます。</p>
          <div className="formula" aria-label="デザイン、工事、継続サービスの流れ">
            <div><small>DESIGN</small><strong>内装設計</strong></div>
            <span>→</span>
            <div><small>BUILD</small><strong>施工</strong></div>
            <span>→</span>
            <div><small>CARE</small><strong>継続体験</strong></div>
          </div>
        </div>
      </section>

      <section className="service section" id="service">
        <div className="section-label"><span>02</span> WHAT WE DESIGN</div>
        <div className="section-heading">
          <h2>空間を創造し、<br />体験を育む。</h2>
          <p>ご相談、デザイン、施工を一貫して担い、その先に家具、リネン、アメニティの継続サービスをつなげます。</p>
        </div>
        <div className="service-list">
          {services.map((item) => (
            <article className="service-item" key={item.number}>
              <span className="service-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="morning">
        <div className="morning-copy">
          <p className="eyebrow">LIVING & SLEEPING</p>
          <h2>旅先より、<br />帰りたくなる家へ。</h2>
          <p>人が集うリビングと、心から休むための寝室。素材と光のつながりで住まい全体を整え、帰ることそのものが楽しみになる日常をつくります。</p>
        </div>
        <figure>
          <img src="/images/living-room-signature.png" alt="木の造作壁と間接照明、石のテーブルで整えたホテルライクなリビング" />
          <figcaption>YOUR HOME, YOUR RETREAT.</figcaption>
        </figure>
      </section>

      <section className="signature">
        <div className="signature-intro">
          <p className="eyebrow">SIGNATURE SCENT, DELIVERED.</p>
          <h2><span>ホテルの記憶を、</span><span>わが家の日常へ。</span></h2>
        </div>
        <div className="signature-content">
          <p className="signature-lead">扉を開けた瞬間に、その場所を思い出す香り。リノベーションの完成後は、国内外のホテルで親しまれるシグネチャーフレグランスやアメニティから、住まいの世界観に合うものを選び、定期的にお届けします。</p>
          <div className="signature-items" aria-label="お届けするアイテム">
            <div><span>01</span><strong>ROOM FRAGRANCE</strong><small>空間を印象づける香り</small></div>
            <div><span>02</span><strong>BATH AMENITY</strong><small>バスタイムを整えるアイテム</small></div>
            <div><span>03</span><strong>SEASONAL EDIT</strong><small>季節に合わせたセレクション</small></div>
          </div>
          <p className="signature-note">※取扱ブランド・商品は、ご契約時のラインナップから空間やお好みに合わせてご提案します。</p>
        </div>
      </section>

      <section className="plan section" id="plan">
        <div className="section-label"><span>03</span> AFTERCARE MEMBERSHIP</div>
        <div className="plan-grid">
          <div>
            <p className="eyebrow dark">HOTEL STAY ESSENTIAL</p>
            <h2>心地よさを、<br />月に一度更新する。</h2>
            <p className="plan-description">リビングと寝室のリノベーションで生まれた世界観を、いつまでも帰りたくなる状態に保つための完成後プランです。</p>
          </div>
          <div className="price-card">
            <p>月額</p>
            <div className="price"><strong>12,000</strong><span>円〜</span></div>
            <p className="price-range">25,000円／月まで　・　月1〜2回</p>
            <ul>
              <li>ホテル仕様リネンの交換・回収</li>
              <li>バスタオル・フェイスタオルの定期交換</li>
              <li>ホテルのルームフレグランス・アメニティ</li>
              <li>暮らしに合わせた継続相談</li>
            </ul>
            <small>※施工費は別途、空間の規模・仕様に応じた個別お見積りです。</small>
          </div>
        </div>
      </section>

      <section className="steps section">
        <div className="section-label"><span>04</span> HOW IT WORKS</div>
        <h2>デザインから工事、<br />その先の日常まで。</h2>
        <ol>
          <li><span>01</span><strong>無料相談</strong><p>図面がなくても大丈夫。お住まいの写真と、理想の過ごし方をお聞かせください。</p></li>
          <li><span>02</span><strong>内装デザイン</strong><p>素材、照明、収納、リネンまで、ひとつの世界観としてご提案します。</p></li>
          <li><span>03</span><strong>工事・お引渡し</strong><p>設計意図を共有したチームが施工し、細部の仕上がりまで確認します。</p></li>
          <li><span>04</span><strong>完成後サービス</strong><p>空間に合う家具を選び、リネンやアメニティもお届け。心地よさを更新します。</p></li>
        </ol>
      </section>

      <section className="faq section" id="faq">
        <div className="section-label"><span>05</span> FAQ</div>
        <div className="faq-grid">
          <h2><span>ご相談の前に、</span><span>よくいただくこと。</span></h2>
          <div className="faq-list">
            {faqs.map(([q, a], index) => (
              <details key={q} open={index === 0}>
                <summary><span>Q.</span>{q}<i>＋</i></summary>
                <p><span>A.</span>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <p className="eyebrow">BEGIN WITH A CONVERSATION</p>
          <h2>今夜から、帰る場所を<br />もっと好きになるために。</h2>
          <p>住まいのリノベーションに関する初回相談とお見積りは無料です。<br />まずは住まいの写真と、叶えたい過ごし方をお聞かせください。</p>
          <a className="button button-dark" href="mailto:info@idea-d.jp?subject=CHECK-IN HOME(自宅ホテル化計画)の無料相談">無料相談を予約する <span>↗</span></a>
          <small>無理な営業はいたしません。内容がまだ具体的でなくても、お気軽にどうぞ。</small>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand"><strong>CHECK-IN HOME</strong><span>自宅ホテル化計画</span></div>
        <p>住まいを、チェックインするたびに感動する部屋に。</p>
        <p className="copyright">© 2026 CHECK-IN HOME</p>
      </footer>
    </main>
  );
}
